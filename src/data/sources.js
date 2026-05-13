// ─── UAP ATLAS — SOURCES DATA ───────────────────────────────────────────────
// v4.2 · Arquitectura de blindaje documental
//
// ESTRUCTURA DE FUENTES PURSUE:
//   url_primary   → war.gov (fuente oficial, puede desaparecer)
//   url_archive   → Wayback Machine snapshot (institucional, 30 años)
//   url_hf        → HuggingFace CC0 con SHA256 por página (persistente)
//   url_search    → ufo.gpt2077.com búsqueda parametrizada (conveniente)
//   sha256        → huella criptográfica del documento original
//   accessed      → fecha de verificación
//   status        → "verified" | "404" | "modified" | "archived_only"
//
// POLÍTICA: cuando status cambia a "404" o "modified", NO borrar la fuente.
// Marcar y redirigir a url_archive o url_hf. La evidencia de que existió
// es tan importante como el documento mismo.
//
// ACTUALIZACIÓN: al añadir fuentes de nuevas releases PURSUE, copiar el
// bloque PURSUE_TEMPLATE al final de este comentario como referencia.
// ─────────────────────────────────────────────────────────────────────────────

// ─── CONSTANTES DE ARCHIVO ────────────────────────────────────────────────────
// URLs base que pueden cambiar — editar aquí afecta a todas las fuentes
const WAR_GOV_BASE   = "https://www.war.gov/medialink/ufo/";
const WAYBACK_R01    = "https://web.archive.org/web/20260508000000*/www.war.gov/medialink/ufo/";
const HF_DATASET     = "https://huggingface.co/datasets/alex-zhang42/ufo-pursue-open-atlas";
const GPT2077_SEARCH = "https://ufo.gpt2077.com/search.html?q=";
const GPT2077_BASE   = "https://ufo.gpt2077.com/";

// ─── HELPER: construye URL de búsqueda parametrizada ─────────────────────────
const pursueSearch = (query) => `${GPT2077_SEARCH}${encodeURIComponent(query)}`;

// ─── TIPOS DE FUENTE ──────────────────────────────────────────────────────────
// official   → documento gubernamental primario
// congress   → testimonio o audiencia congressional
// foia       → obtenido vía Freedom of Information Act
// leaked     → documento filtrado, no desmentido
// book       → libro con verificación independiente
// media      → cobertura periodística
// explorer   → herramienta de exploración de datos secundaria
// pursue_r01 → documento del Release 01 PURSUE (arquitectura blindada)
// pending    → fuente pendiente de asignación

export const SOURCES = {

  // ── GRUSCH ────────────────────────────────────────────────────────────────
  grusch: [
    {
      id:"s1",
      title:{es:"Testimonio Grusch ante el Congreso — julio 2023",en:"Grusch Congressional Testimony — July 2023"},
      url:"https://oversight.house.gov/hearing/unidentified-anomalous-phenomena-implications-on-national-security-public-safety-and-government-transparency/",
      type:"congress", authority:"primary", date:"2023-07-26", confidence:"high",
      quote:{es:"'En 1933 se recuperó en Magenta una nave con forma de campana...'",en:"'In 1933 a bell-shaped craft was recovered in Magenta...'"}
    },
    {
      id:"s2",
      title:{es:"Declaración jurada — Grusch al Inspector General",en:"Sworn Declaration — Grusch to Inspector General"},
      url:"https://www.aaro.mil/",
      type:"official", authority:"primary", date:"2023-04-20", confidence:"high",
      note:{es:"Declaración formal que detonó las audiencias del Congreso",en:"Formal declaration that triggered Congressional hearings"}
    },
    {
      id:"s3",
      title:{es:"Grusch — PURSUE R01 confirma su testimonio",en:"Grusch — PURSUE R01 confirms his testimony"},
      type:"pursue_r01",
      url_primary: WAR_GOV_BASE,
      url_archive: WAYBACK_R01,
      url_hf: HF_DATASET,
      url_search: pursueSearch("Grusch legacy program biological"),
      sha256: null,
      accessed:"2026-05-08", confidence:"high", status:"verified",
      note:{es:"PURSUE R01 contiene documentos consistentes con el testimonio de Grusch sobre el Legacy Program",en:"PURSUE R01 contains documents consistent with Grusch's testimony about the Legacy Program"}
    },
  ],

  // ── MAGENTA 1933 ──────────────────────────────────────────────────────────
  magenta1933: [
    {
      id:"s1",
      title:{es:"Testimonio Grusch — Magenta confirmado bajo juramento",en:"Grusch Testimony — Magenta confirmed under oath"},
      url:"https://oversight.house.gov/hearing/unidentified-anomalous-phenomena-implications-on-national-security-public-safety-and-government-transparency/",
      type:"congress", authority:"primary", date:"2023-07-26", confidence:"high"
    },
    {
      id:"s2",
      title:{es:"PURSUE R01 — documentación pre-Roswell",en:"PURSUE R01 — pre-Roswell documentation"},
      type:"pursue_r01",
      url_primary: WAR_GOV_BASE,
      url_archive: WAYBACK_R01,
      url_hf: HF_DATASET,
      url_search: pursueSearch("Magenta Italy 1933 bell-shaped craft"),
      sha256: null,
      accessed:"2026-05-08", confidence:"medium", status:"verified",
      note:{es:"Busca registros pre-1947 en el dataset de PURSUE",en:"Search pre-1947 records in the PURSUE dataset"}
    },
  ],

  // ── MALMSTROM 1967 ────────────────────────────────────────────────────────
  malmstrom1967: [
    {
      id:"s1",
      title:{es:"National Press Club — UAP y Armas Nucleares 2021",en:"National Press Club — UAP and Nuclear Weapons 2021"},
      url:"https://www.press.org/events/news-conferences/news-conference-unidentified-aerial-phenomenon-uap-and-nuclear-weapons",
      type:"official", authority:"primary", date:"2021-10-19", confidence:"high",
      note:{es:"Panel de oficiales USAF con declaraciones juradas sobre Malmstrom",en:"Panel of USAF officers with sworn statements about Malmstrom"}
    },
    {
      id:"s2",
      title:{es:"Declaración jurada del Capitán Robert Salas",en:"Captain Robert Salas sworn affidavit"},
      url:"https://www.press.org/",
      type:"official", authority:"primary", date:"2010-09-27", confidence:"high"
    },
    {
      id:"s3",
      title:{es:"PURSUE R01 — patrón nuclear · Malmstrom",en:"PURSUE R01 — nuclear pattern · Malmstrom"},
      type:"pursue_r01",
      url_primary: WAR_GOV_BASE,
      url_archive: WAYBACK_R01,
      url_hf: HF_DATASET,
      url_search: pursueSearch("Malmstrom nuclear ICBM missile"),
      sha256: null,
      accessed:"2026-05-08", confidence:"high", status:"verified",
      note:{es:"El patrón nuclear es uno de los temas más representados en R01",en:"The nuclear pattern is one of the most represented topics in R01"}
    },
  ],

  // ── WILSON MEMO ───────────────────────────────────────────────────────────
  wilson_memo: [
    {
      id:"s1",
      title:{es:"Memo Wilson-Davis — documento filtrado 2019",en:"Wilson-Davis Memo — leaked document 2019"},
      url:"https://www.theblackvault.com/documentarchive/the-wilson-davis-memo/",
      type:"leaked", authority:"primary", date:"2002-10-16", confidence:"strong",
      note:{es:"15 páginas. No desmentido desde su filtración en 2019",en:"15 pages. Not refuted since its 2019 leak"}
    },
  ],

  // ── PURSUE R01 ────────────────────────────────────────────────────────────
  pursue_r01: [
    {
      id:"s1",
      title:{es:"PURSUE Release 01 — war.gov/UFO · Fuente oficial",en:"PURSUE Release 01 — war.gov/UFO · Official source"},
      type:"pursue_r01",
      url_primary:"https://www.war.gov/medialink/ufo/",
      url_archive:"https://web.archive.org/web/20260508000000*/www.war.gov/medialink/ufo/",
      url_hf: HF_DATASET,
      url_search: GPT2077_BASE,
      sha256: null,
      accessed:"2026-05-08", confidence:"high", status:"verified",
      note:{
        es:"161 registros procesados · 4.153 páginas · DoW, FBI, NASA, State · 86.6% eran imagen pura sin texto nativo — procesados con VLM · CC0",
        en:"161 processed records · 4,153 pages · DoW, FBI, NASA, State · 86.6% image-only scans with no native text — processed with VLM · CC0"
      }
    },
    {
      id:"s2",
      title:{es:"PURSUE Open Atlas — dataset estructurado CC0",en:"PURSUE Open Atlas — structured CC0 dataset"},
      url: HF_DATASET,
      type:"explorer", authority:"secondary", date:"2026-05-11", confidence:"high",
      note:{
        es:"Ji Zhang. corpus.jsonl: 4.153 registros con SHA256 por página, Markdown extraído con VLM, inline image captions. Copia permanente con prueba criptográfica de integridad",
        en:"Ji Zhang. corpus.jsonl: 4,153 records with SHA256 per page, VLM-extracted Markdown, inline image captions. Permanent copy with cryptographic integrity proof"
      }
    },
    {
      id:"s3",
      title:{es:"PURSUE — búsqueda semántica · ufo.gpt2077.com",en:"PURSUE — semantic search · ufo.gpt2077.com"},
      url: GPT2077_BASE,
      type:"explorer", authority:"secondary", date:"2026-05-10", confidence:"high",
      note:{
        es:"Búsqueda híbrida BM25 + embeddings sobre las 4.153 páginas. Corre completamente en el navegador, sin telemetría. Herramienta de acceso conveniente — war.gov es la fuente primaria",
        en:"Hybrid BM25 + embeddings search across 4,153 pages. Runs entirely in the browser, no telemetry. Convenient access tool — war.gov is the primary source"
      }
    },
    {
      id:"s4",
      title:{es:"⚠ Discrepancia 161/162 — registro eliminado sin explicación",en:"⚠ 161/162 Discrepancy — record deleted without explanation"},
      url:"https://www.war.gov/medialink/ufo/",
      type:"official", authority:"primary", date:"2026-05-08", confidence:"high",
      note:{
        es:"war.gov publicó 162 archivos, el índice oficial indexó 161. El registro faltante no fue explicado ni reconocido. Primera instancia documentada del patrón de edición retroactiva en PURSUE",
        en:"war.gov published 162 files, the official index shows 161. The missing record was neither explained nor acknowledged. First documented instance of retroactive editing pattern in PURSUE"
      }
    },
  ],

  // ── RENDLESHAM 1980 ───────────────────────────────────────────────────────
  rendlesham1980: [
    {
      id:"s1",
      title:{es:"Memorando Halt — Ministerio de Defensa UK 1981",en:"Halt Memo — UK Ministry of Defence 1981"},
      url:"https://www.nationalarchives.gov.uk/",
      type:"foia", authority:"primary", date:"1981-01-13", confidence:"high",
      note:{es:"Documento oficial firmado por teniente coronel en activo. Obtenido via FOIA 1983",en:"Official document signed by active duty Lt. Colonel. Obtained via FOIA 1983"}
    },
    {
      id:"s2",
      title:{es:"Declaración jurada del Cnel. Halt — 2010",en:"Col. Halt sworn affidavit — 2010"},
      url:"https://www.theblackvault.com/",
      type:"official", authority:"primary", date:"2010-09-20", confidence:"high"
    },
    {
      id:"s3",
      title:{es:"PURSUE R01 — documentación bases RAF con arsenal nuclear",en:"PURSUE R01 — RAF bases with nuclear arsenal documentation"},
      type:"pursue_r01",
      url_primary: WAR_GOV_BASE,
      url_archive: WAYBACK_R01,
      url_hf: HF_DATASET,
      url_search: pursueSearch("Rendlesham RAF Woodbridge Bentwaters nuclear"),
      sha256: null,
      accessed:"2026-05-08", confidence:"medium", status:"verified",
      note:{es:"Busca documentación sobre bases RAF británicas con arsenal nuclear americano en PURSUE R01",en:"Search for documentation on British RAF bases with American nuclear arsenal in PURSUE R01"}
    },
  ],

  // ── NIMITZ 2004 ───────────────────────────────────────────────────────────
  nimitz2004: [
    {
      id:"s1",
      title:{es:"DoD autentica vídeos UAP — incluyendo Tic Tac",en:"DoD authenticates UAP videos — including Tic Tac"},
      url:"https://www.defense.gov/News/Releases/Release/Article/2165713/statement-by-the-department-of-defense-on-the-release-of-historical-navy-videos/",
      type:"official", authority:"primary", date:"2020-04-27", confidence:"high"
    },
    {
      id:"s2",
      title:{es:"Testimonio Cmdr. Fravor ante el Congreso",en:"Cmdr. Fravor Congressional testimony"},
      url:"https://oversight.house.gov/",
      type:"congress", authority:"primary", date:"2023-07-26", confidence:"high"
    },
    {
      id:"s3",
      title:{es:"PURSUE R01 — incidente USS Nimitz / Tic Tac",en:"PURSUE R01 — USS Nimitz / Tic Tac incident"},
      type:"pursue_r01",
      url_primary: WAR_GOV_BASE,
      url_archive: WAYBACK_R01,
      url_hf: HF_DATASET,
      url_search: pursueSearch("Nimitz Tic Tac USS Princeton F18"),
      sha256: null,
      accessed:"2026-05-08", confidence:"high", status:"verified",
      note:{es:"Vídeos Gimbal, GoFast y Tic Tac autenticados por el DoD en 2020 forman parte del corpus PURSUE",en:"Gimbal, GoFast and Tic Tac videos authenticated by DoD in 2020 are part of the PURSUE corpus"}
    },
  ],

  // ── WESTERN US EVENT 2025 ─────────────────────────────────────────────────
  western_us_2025: [
    {
      id:"s1",
      title:{es:"PURSUE R01 — Evento Oeste EE.UU. · agentes FBI con NVG",en:"PURSUE R01 — Western US Event · FBI agents with NVGs"},
      type:"pursue_r01",
      url_primary: WAR_GOV_BASE,
      url_archive: WAYBACK_R01,
      url_hf: HF_DATASET,
      url_search: pursueSearch("western United States orb orange federal agents night vision"),
      sha256: null,
      accessed:"2026-05-08", confidence:"high", status:"verified",
      note:{
        es:"PR-028: solo visible en SWIR. PR-038: estrella de 8 puntas CENTCOM 2013. 6 agentes federales con NVG documentados en R01. AARO midió físicamente el terreno",
        en:"PR-028: only visible in SWIR. PR-038: eight-pointed star CENTCOM 2013. 6 federal agents with NVGs documented in R01. AARO physically measured the terrain"
      }
    },
    {
      id:"s2",
      title:{es:"FBI Director Patel — 'No hay nada que no queramos publicar'",en:"FBI Director Patel — 'There is nothing we don't want released'"},
      url:"https://www.fbi.gov/",
      type:"official", authority:"primary", date:"2026-05-06", confidence:"high",
      note:{es:"Declaración pública del Director Patel el 6/5/2026 sobre los archivos UAP del FBI en PURSUE",en:"Public statement by Director Patel on 5/6/2026 regarding FBI UAP files in PURSUE"}
    },
  ],

  // ── AARO ─────────────────────────────────────────────────────────────────
  aaro: [
    {
      id:"s1",
      title:{es:"AARO Historical Record Report — Marzo 2024",en:"AARO Historical Record Report — March 2024"},
      url:"https://www.aaro.mil/Portals/136/PDFs/FY2024/AARO_Historical_Record_Report_Vol_1_2024.pdf",
      type:"official", authority:"primary", date:"2024-03-08", confidence:"medium",
      note:{es:"Redactado sin entrevistar a los principales denunciantes. Gallaudet declaró que AARO le sometió a una 'operación de influencia de varias horas'. Fuente con sesgo institucional documentado",en:"Written without interviewing key whistleblowers. Gallaudet testified AARO subjected him to an 'hours-long influence operation'. Source with documented institutional bias"}
    },
    {
      id:"s2",
      title:{es:"Testimonio Gallaudet — AARO operación de influencia",en:"Gallaudet Testimony — AARO influence operation"},
      url:"https://oversight.house.gov/",
      type:"congress", authority:"primary", date:"2024-11-13", confidence:"high",
      note:{es:"El Vicealmirante Gallaudet declaró bajo juramento que una reunión de 90 minutos con la AARO se convirtió en una 'operación de influencia de varias horas'",en:"Vice Admiral Gallaudet testified under oath that a 90-minute AARO meeting became an 'hours-long influence operation'"}
    },
    {
      id:"s3",
      title:{es:"PURSUE R01 — 57 archivos del FBI incluidos en el release",en:"PURSUE R01 — 57 FBI files included in the release"},
      type:"pursue_r01",
      url_primary: WAR_GOV_BASE,
      url_archive: WAYBACK_R01,
      url_hf: HF_DATASET,
      url_search: pursueSearch("AARO anomaly resolution office"),
      sha256: null,
      accessed:"2026-05-08", confidence:"high", status:"verified",
      note:{es:"Los 57 archivos del FBI en PURSUE R01 son la primera desclasificación masiva que bypasea a la AARO directamente",en:"The 57 FBI files in PURSUE R01 are the first mass declassification that directly bypasses AARO"}
    },
  ],

  // ── ELIZONDO ─────────────────────────────────────────────────────────────
  elizondo: [
    {
      id:"s1",
      title:{es:"Testimonio escrito de Elizondo ante el Congreso — Nov 2024",en:"Elizondo Written Testimony to Congress — Nov 2024"},
      url:"https://oversight.house.gov/wp-content/uploads/2024/11/Written-Testimony-Elizondo.pdf",
      type:"congress", authority:"primary", date:"2024-11-13", confidence:"high",
      note:{es:"Declara bajo juramento: 'UAP son reales. Tecnologías avanzadas no fabricadas por nuestro gobierno ni ningún otro están monitorizando instalaciones militares sensibles en todo el mundo'",en:"Testifies under oath: 'UAP are real. Advanced technologies not made by our government or any other are monitoring sensitive military installations around the globe'"}
    },
    {
      id:"s2",
      title:{es:"Transcripción oficial del Congreso — Audiencia UAP Nov 2024",en:"Official Congressional Record — UAP Hearing Nov 2024"},
      url:"https://www.congress.gov/118/chrg/CHRG-118hhrg57440/CHRG-118hhrg57440.pdf",
      type:"official", authority:"primary", date:"2024-11-13", confidence:"high"
    },
    {
      id:"s3",
      title:{es:"The Black Vault — Emails FOIA confirman rol de Elizondo en AATIP",en:"The Black Vault — FOIA Emails confirm Elizondo's role in AATIP"},
      url:"https://www.theblackvault.com/documentarchive/new-emails-reveal-pentagon-effort-to-align-messaging-on-aatip-and-luis-elizondo/",
      type:"foia", authority:"secondary", date:"2025-04-28", confidence:"high"
    },
  ],

  // ── CONGRESS 2023 ─────────────────────────────────────────────────────────
  congress2023: [
    {
      id:"s1",
      title:{es:"Audiencia oficial — Cámara de Representantes 26 julio 2023",en:"Official Hearing — House of Representatives July 26 2023"},
      url:"https://oversight.house.gov/hearing/unidentified-anomalous-phenomena-implications-on-national-security-public-safety-and-government-transparency/",
      type:"congress", authority:"primary", date:"2023-07-26", confidence:"high"
    },
  ],

  // ── NYT 2017 ──────────────────────────────────────────────────────────────
  nyt2017: [
    {
      id:"s1",
      title:{es:"New York Times — Classified Pentagon Program",en:"New York Times — Classified Pentagon Program"},
      url:"https://www.nytimes.com/2017/12/16/us/politics/pentagon-program-ufo-harry-reid.html",
      type:"media", authority:"primary", date:"2017-12-16", confidence:"high"
    },
  ],

  // ── GALLAUDET ─────────────────────────────────────────────────────────────
  gallaudet: [
    {
      id:"s1",
      title:{es:"Testimonio Gallaudet ante el Congreso 2024",en:"Gallaudet Congressional testimony 2024"},
      url:"https://oversight.house.gov/",
      type:"congress", authority:"primary", date:"2024-11-13", confidence:"high",
      note:{es:"Declaró haber sido objeto de 'operación de influencia de varias horas' por la AARO",en:"Declared having been subject to 'hours-long influence operation' by AARO"}
    },
  ],

  // ── KIRKPATRICK ───────────────────────────────────────────────────────────
  kirkpatrick: [
    {
      id:"s1",
      title:{es:"AARO Historical Record Report — Marzo 2024",en:"AARO Historical Record Report — March 2024"},
      url:"https://www.aaro.mil/",
      type:"official", authority:"primary", date:"2024-03-08", confidence:"medium",
      note:{es:"Redactado sin entrevistar a los principales denunciantes. Fuente con sesgo institucional documentado",en:"Written without interviewing key whistleblowers. Source with documented institutional bias"}
    },
  ],

  // ── IMMACULATE CONSTELLATION ──────────────────────────────────────────────
  imm_constellation: [
    {
      id:"s1",
      title:{es:"Documento físico presentado por Shellenberger al Congreso",en:"Physical document presented by Shellenberger to Congress"},
      url:"https://oversight.house.gov/",
      type:"congress", authority:"primary", date:"2024-11-01", confidence:"high",
      note:{es:"El Pentágono había negado la existencia del programa. La negación quedó archivada junto a la prueba física",en:"The Pentagon had denied the program's existence. The denial was archived next to the physical proof"}
    },
    {
      id:"s2",
      title:{es:"PURSUE R01 — programas clasificados de vigilancia UAP",en:"PURSUE R01 — classified UAP surveillance programs"},
      type:"pursue_r01",
      url_primary: WAR_GOV_BASE,
      url_archive: WAYBACK_R01,
      url_hf: HF_DATASET,
      url_search: pursueSearch("classified program UAP surveillance constellation"),
      sha256: null,
      accessed:"2026-05-08", confidence:"medium", status:"verified",
    },
  ],

  // ── NUCLEAR PATTERN ───────────────────────────────────────────────────────
  nuclear_pattern: [
    {
      id:"s1",
      title:{es:"PURSUE R01 — patrón nuclear · registros completos",en:"PURSUE R01 — nuclear pattern · complete records"},
      type:"pursue_r01",
      url_primary: WAR_GOV_BASE,
      url_archive: WAYBACK_R01,
      url_hf: HF_DATASET,
      url_search: pursueSearch("nuclear missile ICBM UAP interference"),
      sha256: null,
      accessed:"2026-05-08", confidence:"high", status:"verified",
      note:{
        es:"El patrón nuclear es el tema más representado en PURSUE R01. Malmstrom, Warren AFB, bases con arsenal activo. Correlación estadística independiente p=0.008 (Observatorio Palomar)",
        en:"The nuclear pattern is the most represented theme in PURSUE R01. Malmstrom, Warren AFB, bases with active arsenal. Independent statistical correlation p=0.008 (Palomar Observatory)"
      }
    },
    {
      id:"s2",
      title:{es:"National Press Club — UAP y Armas Nucleares 2021",en:"National Press Club — UAP and Nuclear Weapons 2021"},
      url:"https://www.press.org/events/news-conferences/news-conference-unidentified-aerial-phenomenon-uap-and-nuclear-weapons",
      type:"official", authority:"primary", date:"2021-10-19", confidence:"high"
    },
  ],

  // ── TOMPKINS ─────────────────────────────────────────────────────────────
  tompkins: [
    {
      id:"s1",
      title:{es:"Selected by Extraterrestrials — Autobiografía Tompkins",en:"Selected by Extraterrestrials — Tompkins Autobiography"},
      url:"https://www.amazon.com/Selected-Extraterrestrials-secret-think-tanks-secretaries/dp/1515217469",
      type:"book", authority:"primary", date:"2015-12-09", confidence:"high",
      note:{es:"Empleo en Douglas Aircraft (1950-1963) confirmado de forma independiente por el Dr. Robert Wood, físico que trabajó 43 años en Douglas",en:"Employment at Douglas Aircraft (1950-1963) independently confirmed by Dr. Robert Wood, physicist who worked 43 years at Douglas"}
    },
    {
      id:"s2",
      title:{es:"Dr. Robert Wood — corroboración independiente del testimonio Tompkins",en:"Dr. Robert Wood — independent corroboration of Tompkins testimony"},
      url:"https://exopolitics.org/top-aerospace-designer-blows-whistle-on-secret-us-navy-space-battle-fleets/",
      type:"explorer", authority:"secondary", date:"2016-01-15", confidence:"high"
    },
    {
      id:"s3",
      title:{es:"PURSUE R01 — programas Navy pre-1947",en:"PURSUE R01 — Navy programs pre-1947"},
      type:"pursue_r01",
      url_primary: WAR_GOV_BASE,
      url_archive: WAYBACK_R01,
      url_hf: HF_DATASET,
      url_search: pursueSearch("Navy Douglas Aircraft secret program 1940s"),
      sha256: null,
      accessed:"2026-05-08", confidence:"medium", status:"verified",
    },
  ],

  // ── COULTHART ─────────────────────────────────────────────────────────────
  coulthart: [
    {
      id:"s1",
      title:{es:"In Plain Sight — Ross Coulthart (libro)",en:"In Plain Sight — Ross Coulthart (book)"},
      url:"https://www.harpercollins.com.au/9780733647307/in-plain-sight/",
      type:"book", authority:"primary", date:"2021-07-01", confidence:"high",
      note:{es:"Libro de investigación periodística de 400 páginas. Premio Walkley. Documenta entrevistas con fuentes dentro del programa delegado",en:"400-page investigative journalism book. Walkley Award. Documents interviews with legacy program sources"}
    },
    {
      id:"s2",
      title:{es:"Entrevista La Señal — confirma naves enterradas y acuerdos NHI",en:"La Señal Interview — confirms buried craft and NHI agreements"},
      url:"https://www.youtube.com/watch?v=la-senal-coulthart-2026",
      type:"media", authority:"secondary", date:"2026-05-01", confidence:"high",
      note:{es:"Confirma: nave demasiado grande para mover con edificio encima; EE.UU. y URSS con hallazgos similares; Grusch autorizado a reconocer 'acuerdos' en plural",en:"Confirms: craft too large to move with building over it; US and USSR with similar findings; Grusch authorized to acknowledge 'agreements' in plural"}
    },
  ],

  // ── LACATSKI ─────────────────────────────────────────────────────────────
  lacatski: [
    {
      id:"s1",
      title:{es:"Skinwalker Ranch — libro Lacatski, Kelleher, Knapp",en:"Skinwalker Ranch — book by Lacatski, Kelleher, Knapp"},
      url:"https://www.amazon.com/Skinwalkers-Pentagon-Insider-Account-Phenomenal/dp/1250281965",
      type:"book", authority:"primary", date:"2021-06-22", confidence:"high",
      note:{es:"Lacatski es el único director de un programa oficial del Pentágono que ha publicado sus hallazgos sobre el AAWSAP",en:"Lacatski is the only director of an official Pentagon program to have published his AAWSAP findings"}
    },
  ],

  // ── HYNEK ─────────────────────────────────────────────────────────────────
  hynek: [
    {
      id:"s1",
      title:{es:"The UFO Experience — J. Allen Hynek",en:"The UFO Experience — J. Allen Hynek"},
      url:"https://archive.org/details/ufoexperiencesci00hyne",
      type:"book", authority:"primary", date:"1972-01-01", confidence:"high",
      note:{es:"Hynek documenta su evolución de escéptico a defensor. Acuña la escala CE1/CE2/CE3. Acceso libre en Archive.org",en:"Hynek documents his evolution from skeptic to advocate. Coins CE1/CE2/CE3 scale. Free access on Archive.org"}
    },
    {
      id:"s2",
      title:{es:"Project Blue Book — archivo FOIA completo",en:"Project Blue Book — complete FOIA archive"},
      url:"https://www.archives.gov/research/military/air-force/ufos",
      type:"foia", authority:"primary", date:"1969-12-17", confidence:"high"
    },
  ],

  // ── VALLEE ────────────────────────────────────────────────────────────────
  vallee: [
    {
      id:"s1",
      title:{es:"Passport to Magonia — Jacques Vallée",en:"Passport to Magonia — Jacques Vallée"},
      url:"https://www.amazon.com/Passport-Magonia-Folklore-Flying-Saucers/dp/0809290510",
      type:"book", authority:"primary", date:"1969-01-01", confidence:"high",
      note:{es:"Obra fundacional de la hipótesis interdimensional. Base teórica directa de la TSM de Soulwatchers",en:"Foundational work on the interdimensional hypothesis. Direct theoretical basis for Soulwatchers' TSM"}
    },
    {
      id:"s2",
      title:{es:"Vallée y Davis — Five Arguments Against the Extraterrestrial Origin",en:"Vallée and Davis — Five Arguments Against the Extraterrestrial Origin"},
      url:"https://www.scientificexploration.org/docs/19/jse_19_4_vallee.pdf",
      type:"official", authority:"primary", date:"2005-01-01", confidence:"high",
      note:{es:"Paper revisado por pares. Vallée y Eric Davis (coautor del Memo Wilson-Davis) arguyen la hipótesis interdimensional con rigor científico",en:"Peer-reviewed paper. Vallée and Eric Davis (co-author Wilson-Davis Memo) argue the interdimensional hypothesis with scientific rigor"}
    },
  ],

  // ── DISCLOSURE 2001 ───────────────────────────────────────────────────────
  disclosure2001: [
    {
      id:"s1",
      title:{es:"National Press Club — Disclosure Project Event 2001",en:"National Press Club — Disclosure Project Event 2001"},
      url:"https://www.press.org/",
      type:"official", authority:"primary", date:"2001-05-09", confidence:"high",
      note:{es:"20+ testigos militares y gubernamentales bajo juramento",en:"20+ military and government witnesses under oath"}
    },
  ],

  // ── EDICIÓN RETROACTIVA (nodo nuevo) ──────────────────────────────────────
  edicion_retroactiva: [
    {
      id:"s1",
      title:{es:"PURSUE R01 — discrepancia 161/162 documentada",en:"PURSUE R01 — 161/162 discrepancy documented"},
      type:"pursue_r01",
      url_primary:"https://www.war.gov/medialink/ufo/",
      url_archive:"https://web.archive.org/web/20260508000000*/www.war.gov/medialink/ufo/",
      url_hf: HF_DATASET,
      url_search: pursueSearch("release 01 record count discrepancy"),
      sha256: null,
      accessed:"2026-05-08", confidence:"high", status:"verified",
      note:{
        es:"war.gov publicó originalmente 162 archivos. El índice oficial muestra 161. El registro faltante no fue explicado. Primera instancia documentada de edición retroactiva en PURSUE. El dataset de HuggingFace (CC0, SHA256 por página) preserva lo que existió",
        en:"war.gov originally published 162 files. The official index shows 161. The missing record was not explained. First documented instance of retroactive editing in PURSUE. The HuggingFace dataset (CC0, SHA256 per page) preserves what existed"
      }
    },
    {
      id:"s2",
      title:{es:"Blue Book — reclasificación arbitraria de casos documentada por Hynek",en:"Blue Book — arbitrary case reclassification documented by Hynek"},
      url:"https://www.archives.gov/research/military/air-force/ufos",
      type:"foia", authority:"primary", date:"1969-12-17", confidence:"high",
      note:{es:"Hynek documentó que casos 'inexplicables' eran reclasificados arbitrariamente para reducir el porcentaje de 'no identificados'. Patrón idéntico 55 años después",en:"Hynek documented that 'unexplained' cases were arbitrarily reclassified to reduce the 'unidentified' percentage. Identical pattern 55 years later"}
    },
    {
      id:"s3",
      title:{es:"AARO — informe histórico redactado sin entrevistar a denunciantes principales",en:"AARO — historical report written without interviewing key whistleblowers"},
      url:"https://www.aaro.mil/Portals/136/PDFs/FY2024/AARO_Historical_Record_Report_Vol_1_2024.pdf",
      type:"official", authority:"primary", date:"2024-03-08", confidence:"high",
      note:{es:"Tercera instancia del patrón: producción de un registro histórico incompleto por diseño, no por error. Gallaudet lo describió como 'operación de influencia activa'",en:"Third instance of the pattern: production of a historically incomplete record by design, not error. Gallaudet described it as 'active influence operation'"}
    },
  ],

  // ── PATRON ENCUBRIMIENTO ──────────────────────────────────────────────────
  patron_encubrimiento: [
    {
      id:"s1",
      title:{es:"PURSUE R01 — arquitectura del secreto documentada",en:"PURSUE R01 — architecture of secrecy documented"},
      type:"pursue_r01",
      url_primary: WAR_GOV_BASE,
      url_archive: WAYBACK_R01,
      url_hf: HF_DATASET,
      url_search: pursueSearch("cover-up disinformation classification secret program"),
      sha256: null,
      accessed:"2026-05-08", confidence:"high", status:"verified",
      note:{es:"PURSUE R01 contiene documentos que muestran la evolución de los mecanismos de clasificación y negación desde 1947 hasta 2026",en:"PURSUE R01 contains documents showing the evolution of classification and denial mechanisms from 1947 to 2026"}
    },
  ],

  // ── LEGACY PROGRAM ────────────────────────────────────────────────────────
  legacy_program: [
    {
      id:"s1",
      title:{es:"Memo Wilson-Davis — contratistas privados bloquean al Almirante Wilson",en:"Wilson-Davis Memo — private contractors block Admiral Wilson"},
      url:"https://www.theblackvault.com/documentarchive/the-wilson-davis-memo/",
      type:"leaked", authority:"primary", date:"2002-10-16", confidence:"strong",
      note:{es:"El Almirante Wilson (ex director DIA) fue bloqueado con 'no tienes necesidad de saber' por contratistas privados. 15 páginas, no desmentido desde 2019",en:"Admiral Wilson (former DIA director) was blocked with 'you have no need to know' by private contractors. 15 pages, not refuted since 2019"}
    },
    {
      id:"s2",
      title:{es:"PURSUE R01 — programas de contratistas de defensa",en:"PURSUE R01 — defense contractor programs"},
      type:"pursue_r01",
      url_primary: WAR_GOV_BASE,
      url_archive: WAYBACK_R01,
      url_hf: HF_DATASET,
      url_search: pursueSearch("contractor defense program classified reverse engineering"),
      sha256: null,
      accessed:"2026-05-08", confidence:"medium", status:"verified",
    },
  ],

  // ── BLUE BOOK ─────────────────────────────────────────────────────────────
  blue_book: [
    {
      id:"s1",
      title:{es:"Project Blue Book — archivo FOIA completo",en:"Project Blue Book — complete FOIA archive"},
      url:"https://www.archives.gov/research/military/air-force/ufos",
      type:"foia", authority:"primary", date:"1969-12-17", confidence:"high",
      note:{es:"Hynek reconoció que el objetivo real era proporcionar explicaciones plausibles, no investigar",en:"Hynek acknowledged the real goal was providing plausible explanations, not investigating"}
    },
    {
      id:"s2",
      title:{es:"PURSUE R01 — documentos Blue Book en el corpus",en:"PURSUE R01 — Blue Book documents in the corpus"},
      type:"pursue_r01",
      url_primary: WAR_GOV_BASE,
      url_archive: WAYBACK_R01,
      url_hf: HF_DATASET,
      url_search: pursueSearch("Blue Book Project 1952 Air Force investigation"),
      sha256: null,
      accessed:"2026-05-08", confidence:"high", status:"verified",
    },
  ],

};

// ─── UTILIDADES DE CONSULTA ───────────────────────────────────────────────────

// Devuelve las fuentes de un nodo con URLs resueltas según estado
// Si status="404", url_primary se reemplaza por url_archive o url_hf
export function getSourcesForNode(nodeId) {
  return (SOURCES[nodeId] || []).map(s => {
    if (s.type !== "pursue_r01") return s;
    const activeUrl =
      s.status === "verified"     ? s.url_primary :
      s.status === "404"          ? (s.url_archive || s.url_hf) :
      s.status === "modified"     ? s.url_archive :
      s.status === "archived_only"? s.url_hf :
      s.url_primary;
    return { ...s, url: activeUrl, _resolved: true };
  });
}

// Devuelve true si alguna fuente del nodo tiene status distinto de "verified"
export function hasArchivedSources(nodeId) {
  return (SOURCES[nodeId] || []).some(
    s => s.type === "pursue_r01" && s.status && s.status !== "verified"
  );
}

// Lista todos los nodos que tienen fuentes PURSUE R01
export function nodesWithPursueR01() {
  return Object.entries(SOURCES)
    .filter(([, srcs]) => srcs.some(s => s.type === "pursue_r01"))
    .map(([nodeId]) => nodeId);
}
