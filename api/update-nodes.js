// /api/update-nodes.js
// Vercel Serverless Function — actualiza nodes.js via GitHub API
// GITHUB_TOKEN se lee desde variable de entorno Vercel (nunca expuesto al frontend)

const REPO_OWNER = "xavipsta";
const REPO_NAME  = "uap-atlas";
const FILE_PATH  = "src/data/nodes.js";
const BRANCH     = "main";

// Credenciales tools.html (misma protección que el frontend)
const VALID_TOKEN = "VmFsaWFuVGhvcjpWaWoqbj82aQ=="; // ValianThor:Vij*n?6i

export default async function handler(req, res) {

  // ── CORS ────────────────────────────────────────────────────────────────
  res.setHeader("Access-Control-Allow-Origin", "https://atlas-uap.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.status(200).end();

  // ── Solo POST ────────────────────────────────────────────────────────────
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // ── Autenticación — mismo token que tools.html ───────────────────────────
  const authHeader = req.headers["authorization"] || "";
  const provided   = authHeader.replace("Basic ", "").trim();
  if (provided !== VALID_TOKEN) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // ── Leer token GitHub desde entorno ─────────────────────────────────────
  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) {
    return res.status(500).json({ error: "GITHUB_TOKEN not configured in Vercel" });
  }

  // ── Validar payload ──────────────────────────────────────────────────────
  const { node } = req.body || {};
  if (!node) {
    return res.status(400).json({ error: "Missing 'node' in request body" });
  }

  // Campos obligatorios
  const required = ["id", "label", "year", "cat", "sub", "credibility", "desc", "links"];
  for (const field of required) {
    if (!(field in node)) {
      return res.status(400).json({ error: `Missing required field: ${field}` });
    }
  }

  // Credibilidad válida
  if (!["high", "medium", "low"].includes(node.credibility)) {
    return res.status(400).json({ error: "credibility must be 'high', 'medium', or 'low'" });
  }

  // ID formato snake_case
  if (!/^[a-z0-9_]+$/.test(node.id)) {
    return res.status(400).json({ error: "id must be snake_case (lowercase, numbers, underscores only)" });
  }

  // ── Obtener archivo actual de GitHub ────────────────────────────────────
  const apiBase = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;
  const headers = {
    "Authorization": `token ${githubToken}`,
    "Accept":        "application/vnd.github.v3+json",
    "Content-Type":  "application/json"
  };

  let currentSha, currentContent;
  try {
    const getRes  = await fetch(`${apiBase}?ref=${BRANCH}`, { headers });
    const getData = await getRes.json();
    if (!getData.sha || !getData.content) {
      return res.status(500).json({ error: "Could not fetch nodes.js from GitHub", detail: getData.message });
    }
    currentSha     = getData.sha;
    currentContent = Buffer.from(getData.content, "base64").toString("utf8");
  } catch (err) {
    return res.status(500).json({ error: "GitHub fetch failed", detail: err.message });
  }

  // ── Verificar que el ID no existe ya ────────────────────────────────────
  if (currentContent.includes(`id:"${node.id}"`) || currentContent.includes(`id: "${node.id}"`)) {
    return res.status(409).json({ error: `Node id '${node.id}' already exists in nodes.js` });
  }

  // ── Verificar links apuntan a IDs existentes ─────────────────────────────
  const brokenLinks = [];
  for (const linkId of node.links) {
    if (
      !currentContent.includes(`id:"${linkId}"`) &&
      !currentContent.includes(`id: "${linkId}"`)
    ) {
      brokenLinks.push(linkId);
    }
  }
  if (brokenLinks.length > 0) {
    return res.status(400).json({
      error: "Broken links detected",
      broken: brokenLinks,
      hint: "These IDs do not exist in nodes.js"
    });
  }

  // ── Construir bloque del nuevo nodo ─────────────────────────────────────
  const today    = new Date().toISOString().split("T")[0];
  const newBlock = `
  // ── Nodo añadido ${today} via tools.html ──
  { id:"${node.id}", label:{es:"${node.label.es}",en:"${node.label.en}"}, year:${node.year}, cat:"${node.cat}", sub:{es:"${node.sub.es}",en:"${node.sub.en}"}, credibility:"${node.credibility}",
    desc:{es:"${node.desc.es.replace(/"/g, '\\"')}",
          en:"${node.desc.en.replace(/"/g, '\\"')}"},
    links:[${node.links.map(l => `"${l}"`).join(",")}] },`;

  // ── Insertar antes del cierre del array NODES ───────────────────────────
  // Buscar el último '}' antes de '];' que cierra NODES[]
  const closingPattern = /(\s*}\s*\n?\s*\];)/;
  if (!closingPattern.test(currentContent)) {
    return res.status(500).json({ error: "Could not find NODES array closing in nodes.js" });
  }
  const updatedContent = currentContent.replace(
    closingPattern,
    `${ newBlock }\n$1`
  );

  // ── Commit a GitHub ──────────────────────────────────────────────────────
  const commitMessage = `feat: nuevo nodo '${node.id}' añadido via tools.html [${today}]`;
  const encoded       = Buffer.from(updatedContent).toString("base64");

  try {
    const putRes  = await fetch(apiBase, {
      method:  "PUT",
      headers,
      body: JSON.stringify({
        message: commitMessage,
        content: encoded,
        sha:     currentSha,
        branch:  BRANCH
      })
    });
    const putData = await putRes.json();
    if (!putData.commit) {
      return res.status(500).json({ error: "GitHub commit failed", detail: putData.message });
    }
    return res.status(200).json({
      success:    true,
      node_id:    node.id,
      commit_sha: putData.commit.sha,
      commit_url: putData.commit.html_url,
      message:    `Node '${node.id}' committed. Vercel will deploy in ~60s.`
    });
  } catch (err) {
    return res.status(500).json({ error: "GitHub PUT failed", detail: err.message });
  }
}
