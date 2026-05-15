import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import * as d3 from "d3";
import { NODES, LINKS_DATA, CAT_COLORS, CRED_COLORS, BETWEENNESS, CLUSTERING } from "./data/nodes.js";
import { SOURCES } from "./data/sources.js";
import { SMOKING_GUNS, NETWORK_INSIGHT } from "./data/smokingGuns.js";
import { HELP } from "./data/help.js";
import { PURSUE_RELEASES } from "./data/releases.js";

// ─── CSS VARIABLES & GLOBAL STYLES ───────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --bg: #080b0f;
      --bg-2: #0d1117;
      --bg-3: #111820;
      --bg-glass: rgba(13,17,23,0.85);
      --border: rgba(255,255,255,0.07);
      --border-accent: rgba(56,189,248,0.3);
      --text-primary: #f0f4f8;
      --text-secondary: #a8b8cc;
      --text-muted: #5a7088;
      --accent: #38bdf8;
      --accent-dim: rgba(56,189,248,0.15);
      --accent-glow: rgba(56,189,248,0.4);
      --danger: #f43f5e;
      --warning: #fb923c;
      --success: #34d399;
      --purple: #a78bfa;
      --font-ui: 'Syne', sans-serif;
      --font-mono: 'JetBrains Mono', monospace;
      --radius: 10px;
      --radius-sm: 6px;
      --sidebar-w: 300px;
      --header-h: 52px;
      --transition: 0.2s cubic-bezier(0.4,0,0.2,1);
    }

    html, body, #root { 
      height: 100vh !important; 
      width: 100vw !important;
      max-width: 100vw !important;
      overflow: hidden; 
      background: var(--bg); 
      color: var(--text-primary);
      position: fixed;
      top: 0;
      left: 0;
    }
    
    /* Override any Next.js or framework wrappers */
    body > div, #__next, #root > div {
      width: 100vw !important;
      max-width: 100vw !important;
      height: 100vh !important;
    }

    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
    ::-webkit-scrollbar-thumb:hover { background: var(--text-muted); }

    .btn {
      display: inline-flex; align-items: center; justify-content: center; gap: 6px;
      font-family: var(--font-ui); font-size: 14px; font-weight: 500;
      border: 1px solid var(--border); border-radius: var(--radius-sm);
      background: var(--bg-3); color: var(--text-secondary);
      cursor: pointer; transition: var(--transition); padding: 0 16px; height: 40px;
      white-space: nowrap; user-select: none;
    }
    .btn:hover { border-color: var(--border-accent); color: var(--accent); background: var(--accent-dim); }
    .btn.active { border-color: var(--accent); color: var(--accent); background: var(--accent-dim); }
    .btn.danger { border-color: rgba(244,63,94,0.4); color: var(--danger); }
    .btn.danger:hover { background: rgba(244,63,94,0.1); }
    .btn-icon { padding: 0; width: 34px; }
    .btn-lg { height: 48px; padding: 0 24px; font-size: 15px; }

    .tag {
      display: inline-flex; align-items: center; gap: 4px;
      font-family: var(--font-mono); font-size: 10px; font-weight: 500;
      padding: 2px 8px; border-radius: 4px; letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    .panel-section { padding: 16px; border-bottom: 1px solid var(--border); }
    .panel-label {
      font-family: var(--font-mono); font-size: 11px; font-weight: 600;
      color: var(--text-secondary); letter-spacing: 0.1em; text-transform: uppercase;
      margin-bottom: 12px;
    }

    .node-card {
      padding: 12px 14px; border-radius: var(--radius-sm);
      border: 1px solid var(--border); background: var(--bg-3);
      cursor: pointer; transition: var(--transition);
      display: flex; align-items: center; justify-content: space-between; gap: 8px;
    }
    .node-card:hover { border-color: var(--border-accent); background: var(--accent-dim); }

    .source-card {
      padding: 12px; border-radius: var(--radius-sm);
      border: 1px solid var(--border); background: var(--bg-3);
      transition: var(--transition); margin-bottom: 8px;
    }
    .source-card:hover { border-color: var(--border-accent); }

    .sg-card {
      padding: 14px; border-radius: var(--radius);
      border: 1px solid; cursor: pointer; transition: var(--transition);
      margin-bottom: 10px;
    }
    .sg-card:hover { filter: brightness(1.05); }

    input[type="text"] {
      width: 100%; height: 42px; padding: 0 14px;
      background: var(--bg-3); border: 1px solid var(--border);
      border-radius: var(--radius-sm); color: var(--text-primary);
      font-family: var(--font-ui); font-size: 14px;
      outline: none; transition: var(--transition);
    }
    input[type="text"]::placeholder { color: var(--text-muted); }
    input[type="text"]:focus { border-color: var(--border-accent); background: var(--bg-2); }

    .fade-in { animation: fadeIn 0.25s ease forwards; }
    @keyframes fadeIn { from { opacity:0; transform:translateY(4px); } to { opacity:1; transform:translateY(0); } }

    .slide-in { animation: slideIn 0.25s ease forwards; }
    @keyframes slideIn { from { opacity:0; transform:translateX(-8px); } to { opacity:1; transform:translateX(0); } }

    @keyframes pulse-border {
      0%, 100% { box-shadow: 0 0 0 0 rgba(244,63,94,0); }
      50% { box-shadow: 0 0 0 3px rgba(244,63,94,0.2); }
    }
    @keyframes pulse-dot {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.8); }
    }

    /* Mobile */
    @media (max-width: 768px) {
      :root { --sidebar-w: 100vw; }
    }
  `}</style>
);

// ─── LANGUAGE DETECTION ───────────────────────────────────────────────────────
const detectLang = () => (navigator.language||"en").toLowerCase().startsWith("es") ? "es" : "en";

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const T = {
  es: {
    title: "UAP Atlas", subtitle: "Atlas de Inteligencia Relacional",
    search: "Buscar nodos...", allCats: "Todos",
    catLabels: { incident:"Incidente", program:"Programa", person:"Actor", institution:"Institución", concept:"Concepto", event:"Evento" },
    officialOnly: "Solo fuentes oficiales",
    tabNode: "Nodo", tabSources: "Fuentes", tabGuns: "Pistolas",
    noNodeTitle: "Selecciona un nodo", noNodeDesc: "Haz click en cualquier nodo del grafo para ver su información detallada.",
    connections: "Conexiones", sourceCount: "fuentes", noSources: "Sin fuentes asignadas",
    noSourcesHint: "Este nodo está pendiente de asignación documental.",
    openSource: "Abrir →", guns: "Pistolas humeantes",
    density: "Densidad", avgDeg: "Grado medio", nodes: "nodos", centralNode: "Nodo central",
    clearHL: "Limpiar selección", helpTitle: "Manual",
    filterLabel: "Filtros", collapseFilters: "Ocultar", expandFilters: "Filtros",
    sev: { critical:"Crítico", high:"Alto", medium:"Medio" },
    conf: { verified:"Verificado", strong:"Sólido", speculative:"Especulativo" },
    srcType: { official:"Oficial", congress:"Congreso", foia:"FOIA", leaked:"Filtrado", media:"Medios", explorer:"Explorador", pending:"Pendiente" },
    welcomeStats: "{n} nodos · {l} conexiones · {s} pistolas humeantes",
    openHelp: "Abrir manual",
    latestRelease: "Última release",
    links: "links",
    patternBtn: "◈ Patrones",
    patternActive: "patrones activos",
    patternExit: "← Salir de patrones",
    patternNarrPath: "Trazo narrativo",
    patternViewNode: "← Ver ficha",
    // ── IntroScreen ──
    introSubtitle: "Atlas de Inteligencia Relacional",
    introTagline1: "El mundo ya se está haciendo preguntas.",
    introTagline2: "Aquí intentaremos conectar cada día todas las piezas.",
    introStatNodes: "nodos",
    introStatLinks: "conexiones",
    introStatUpdated: "actualizado",
    introCTA: "Explorar el atlas",
    introBadge: "PURSUE R01 · war.gov/UFO · datos actualizados",
    introResetDemo: "↩ ver intro",
    // ── Hint de primer uso ──
    hintText: "Haz clic en cualquier nodo para explorar",
    hintLang: "Cambia idioma arriba a la derecha · ES / EN",
  },
  en: {
    title: "UAP Atlas", subtitle: "Relational Intelligence Atlas",
    search: "Search nodes...", allCats: "All",
    catLabels: { incident:"Incident", program:"Program", person:"Actor", institution:"Institution", concept:"Concept", event:"Event" },
    officialOnly: "Official sources only",
    tabNode: "Node", tabSources: "Sources", tabGuns: "Guns",
    noNodeTitle: "Select a node", noNodeDesc: "Click any node in the graph to view its detailed information.",
    connections: "Connections", sourceCount: "sources", noSources: "No sources assigned",
    noSourcesHint: "This node is pending documentary assignment.",
    openSource: "Open →", guns: "Smoking guns",
    density: "Density", avgDeg: "Avg degree", nodes: "nodes", centralNode: "Central node",
    clearHL: "Clear selection", helpTitle: "Manual",
    filterLabel: "Filters", collapseFilters: "Hide", expandFilters: "Filters",
    sev: { critical:"Critical", high:"High", medium:"Medium" },
    conf: { verified:"Verified", strong:"Strong", speculative:"Speculative" },
    srcType: { official:"Official", congress:"Congress", foia:"FOIA", leaked:"Leaked", media:"Media", explorer:"Explorer", pending:"Pending" },
    welcomeStats: "{n} nodes · {l} connections · {s} smoking guns",
    openHelp: "Open manual",
    latestRelease: "Latest release",
    links: "links",
    patternBtn: "◈ Patterns",
    patternActive: "active patterns",
    patternExit: "← Exit patterns",
    patternNarrPath: "Narrative trace",
    patternViewNode: "← View node",
    // ── IntroScreen ──
    introSubtitle: "Relational Intelligence Atlas",
    introTagline1: "The world is already asking questions.",
    introTagline2: "Here we will try to connect all the pieces, every day.",
    introStatNodes: "nodes",
    introStatLinks: "connections",
    introStatUpdated: "updated",
    introCTA: "Explore the atlas",
    introBadge: "PURSUE R01 · war.gov/UFO · data up to date",
    introResetDemo: "↩ show intro",
    // ── Hint de primer uso ──
    hintText: "Click any node to explore",
    hintLang: "Switch language top right · ES / EN",
  }
};

const SEVERITY_CFG = {
  critical: { color: "#f43f5e", bg: "rgba(244,63,94,0.08)", border: "rgba(244,63,94,0.3)" },
  high:     { color: "#fb923c", bg: "rgba(251,146,60,0.08)", border: "rgba(251,146,60,0.3)" },
  medium:   { color: "#a78bfa", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.3)" },
};
const CONF_CFG = {
  verified:    { color: "#34d399" },
  strong:      { color: "#38bdf8" },
  speculative: { color: "#fb923c" },
};

// ─── GRAPH HINT ───────────────────────────────────────────────────────────────
// Tooltip de primer uso. Aparece al entrar desde el IntroScreen.
// Se muestra en los DOS idiomas simultáneamente — idioma activo arriba, contrario abajo.
// Auto-desaparece a los 5.5s. Click en cualquier parte lo cierra antes.
function GraphHint({ lang, onDismiss }) {
  const t = T[lang];
  const tOther = T[lang === "es" ? "en" : "es"];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const tin = setTimeout(() => setVisible(true), 100);
    const tout = setTimeout(() => {
      setVisible(false);
      setTimeout(onDismiss, 400);
    }, 5500);
    return () => { clearTimeout(tin); clearTimeout(tout); };
  }, [onDismiss]);

  const handleClick = () => {
    setVisible(false);
    setTimeout(onDismiss, 400);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "fixed", inset: 0, zIndex: 1500,
        pointerEvents: visible ? "auto" : "none",
        display: "flex", alignItems: "flex-end", justifyContent: "center",
        paddingBottom: 36,
      }}
    >
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.35s ease, transform 0.35s ease",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        pointerEvents: "none",
      }}>
        {/* Línea principal — idioma activo */}
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: 13, fontWeight: 500,
          color: "var(--text-primary)",
          background: "var(--bg-glass)", backdropFilter: "blur(16px)",
          border: "1px solid var(--border-accent)",
          borderRadius: "var(--radius-sm)",
          padding: "10px 20px",
          letterSpacing: "0.04em",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(56,189,248,0.08)",
          whiteSpace: "nowrap",
        }}>
          <span style={{ color: "var(--accent)", marginRight: 8 }}>◈</span>
          {t.hintText}
        </div>
        {/* Línea secundaria — idioma contrario, más tenue */}
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: 11,
          color: "var(--text-muted)",
          background: "rgba(13,17,23,0.7)", backdropFilter: "blur(12px)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-sm)",
          padding: "6px 16px",
          letterSpacing: "0.04em",
          whiteSpace: "nowrap",
        }}>
          {tOther.hintText}
        </div>
        {/* Indicación de toggle de idioma */}
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: 10,
          color: "var(--text-muted)", letterSpacing: "0.06em",
          marginTop: 2,
        }}>
          {t.hintLang}
        </div>
        {/* Barra de progreso temporal */}
        <div style={{
          width: 120, height: 2, borderRadius: 1,
          background: "var(--border)", overflow: "hidden", marginTop: 4,
        }}>
          <div style={{
            height: "100%", borderRadius: 1,
            background: "var(--accent)",
            animation: "hintProgress 5.5s linear forwards",
          }}/>
        </div>
      </div>
      <style>{`@keyframes hintProgress { from { width: 100%; } to { width: 0%; } }`}</style>
    </div>
  );
}

// ─── INTRO SCREEN ─────────────────────────────────────────────────────────────
// Onboarding de primera visita. Se guarda en localStorage para no repetirse.
// 100% bilingüe via objeto T. Toggle ES/EN visible en la pantalla.
function IntroScreen({ lang, onEnter, onLangChange, nodeCount, linkCount }) {
  const t = T[lang];
  const [visible, setVisible] = useState(false);
  const [scanLine, setScanLine] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let raf;
    let start = null;
    const duration = 2200;
    const animate = (ts) => {
      if (!start) start = ts;
      const progress = ((ts - start) % duration) / duration;
      setScanLine(progress * 100);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleEnter = () => {
    try { localStorage.setItem("uap_atlas_visited", "1"); } catch {}
    onEnter();
  };

  const updated = new Date().toLocaleDateString(lang === "es" ? "es-ES" : "en-GB", {
    day: "2-digit", month: "short", year: "numeric"
  });

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 2000,
      background: "var(--bg)",
      display: "flex", alignItems: "center", justifyContent: "center",
      opacity: visible ? 1 : 0,
      transition: "opacity 0.5s ease",
      overflow: "hidden",
    }}>
      {/* Grid atmosférico */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
      }}/>
      {/* Línea de escáner */}
      <div style={{
        position: "absolute", left: 0, right: 0,
        top: `${scanLine}%`, height: "1px",
        background: "linear-gradient(90deg, transparent 0%, rgba(56,189,248,0.15) 20%, rgba(56,189,248,0.4) 50%, rgba(56,189,248,0.15) 80%, transparent 100%)",
        pointerEvents: "none",
      }}/>
      {/* Esquinas HUD */}
      {[
        { top:24, left:24, borderTop:"1px solid", borderLeft:"1px solid" },
        { top:24, right:24, borderTop:"1px solid", borderRight:"1px solid" },
        { bottom:24, left:24, borderBottom:"1px solid", borderLeft:"1px solid" },
        { bottom:24, right:24, borderBottom:"1px solid", borderRight:"1px solid" },
      ].map((s, i) => (
        <div key={i} style={{ position:"absolute", width:32, height:32, borderColor:"rgba(56,189,248,0.2)", ...s }}/>
      ))}
      {/* Toggle ES/EN — esquina superior derecha */}
      <div style={{
        position: "absolute", top: 20, right: 20,
        display: "flex", border: "1px solid var(--border)", borderRadius: 6, overflow: "hidden",
        zIndex: 10,
      }}>
        {["es","en"].map(l => (
          <button key={l} onClick={() => onLangChange(l)} style={{
            background: lang === l ? "var(--accent-dim)" : "transparent",
            border: "none",
            borderRight: l === "es" ? "1px solid var(--border)" : "none",
            padding: "0 14px", height: 32,
            color: lang === l ? "var(--accent)" : "var(--text-muted)",
            fontFamily: "var(--font-mono)", fontSize: 11, cursor: "pointer",
            fontWeight: lang === l ? 600 : 400, transition: "var(--transition)",
          }}>{l.toUpperCase()}</button>
        ))}
      </div>
      {/* Contenido central */}
      <div style={{
        display: "flex", flexDirection: "column", alignItems: "center",
        maxWidth: 560, padding: "0 32px", textAlign: "center", position: "relative",
      }}>
        <div style={{
          fontSize: 40, color: "var(--accent)", marginBottom: 28, opacity: 0.7,
          animation: "introPulse 3s ease-in-out infinite",
        }}>◈</div>
        <div style={{
          fontFamily: "var(--font-ui)", fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: 800, color: "var(--text-primary)",
          letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 8,
        }}>
          UAP <span style={{ color: "var(--accent)" }}>Atlas</span>
        </div>
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)",
          letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 36,
        }}>
          {t.introSubtitle}
        </div>
        <div style={{
          fontFamily: "var(--font-ui)", fontSize: "clamp(15px, 2.2vw, 18px)",
          color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 44, maxWidth: 440,
        }}>
          {t.introTagline1}<br/>
          <span style={{ color: "var(--accent)", fontWeight: 600 }}>{t.introTagline2}</span>
        </div>
        <div style={{
          display: "flex", marginBottom: 40,
          border: "1px solid var(--border)", borderRadius: "var(--radius)",
          overflow: "hidden", background: "var(--bg-2)",
        }}>
          {[
            { value: nodeCount, label: t.introStatNodes },
            { value: linkCount, label: t.introStatLinks },
            { value: updated,   label: t.introStatUpdated },
          ].map((stat, i) => (
            <div key={i} style={{
              padding: "14px 24px", textAlign: "center",
              borderRight: i < 2 ? "1px solid var(--border)" : "none",
            }}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 18, fontWeight: 600,
                color: "var(--accent)", marginBottom: 4, lineHeight: 1,
              }}>{stat.value}</div>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 10,
                color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em",
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
        <button onClick={handleEnter} style={{
          fontFamily: "var(--font-ui)", fontSize: 15, fontWeight: 600,
          color: "var(--bg)", background: "var(--accent)",
          border: "none", borderRadius: "var(--radius-sm)",
          padding: "14px 48px", cursor: "pointer",
          letterSpacing: "0.04em",
          transition: "all 0.2s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: "0 0 24px rgba(56,189,248,0.25)",
          marginBottom: 20,
        }}
          onMouseEnter={e => { e.currentTarget.style.background="#7dd3fc"; e.currentTarget.style.boxShadow="0 0 36px rgba(56,189,248,0.45)"; e.currentTarget.style.transform="translateY(-1px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background="var(--accent)"; e.currentTarget.style.boxShadow="0 0 24px rgba(56,189,248,0.25)"; e.currentTarget.style.transform="translateY(0)"; }}
        >
          {t.introCTA}
        </button>
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: 10,
          color: "var(--text-muted)", letterSpacing: "0.06em",
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <span style={{ width:6, height:6, borderRadius:"50%", background:"#34d399", display:"inline-block", flexShrink:0 }}/>
          {t.introBadge}
        </div>
      </div>
      <style>{`
        @keyframes introPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}

function HelpModal({ lang, onClose, onLangChange }) {
  const [internalLang, setInternalLang] = useState(lang);
  const [activeIdx, setActiveIdx] = useState(0);
  const [search, setSearch] = useState("");
  const h = HELP[internalLang];

  const changeLang = l => { setInternalLang(l); setSearch(""); onLangChange?.(l); };

  useEffect(() => {
    const fn = e => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  const filtered = h.sections.filter(s =>
    !search || s.title.toLowerCase().includes(search.toLowerCase()) ||
    s.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div onClick={e => e.target === e.currentTarget && onClose()} style={{
      position:"fixed", inset:0, zIndex:1000,
      background:"rgba(8,11,15,0.92)", backdropFilter:"blur(12px)",
      display:"flex", alignItems:"center", justifyContent:"center", padding:16,
    }}>
      <div className="fade-in" style={{
        width:"100%", maxWidth:960, height:"88vh",
        background:"var(--bg-2)", border:"1px solid var(--border)",
        borderRadius:16, display:"flex", flexDirection:"column", overflow:"hidden",
        boxShadow:"0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(56,189,248,0.1)",
      }}>
        {/* Header */}
        <div style={{
          padding:"0 20px", height:52, borderBottom:"1px solid var(--border)",
          display:"flex", alignItems:"center", gap:12, flexShrink:0,
          background:"var(--bg-3)",
        }}>
          <span style={{ fontSize:18, color:"var(--accent)" }}>◈</span>
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:"var(--font-ui)", fontSize:14, fontWeight:700, color:"var(--text-primary)" }}>{h.title}</div>
            <div style={{ fontFamily:"var(--font-mono)", fontSize:10, color:"var(--text-muted)" }}>{h.subtitle}</div>
          </div>
          <div style={{ display:"flex", gap:4 }}>
            {["es","en"].map(l => (
              <button key={l} onClick={() => changeLang(l)} className={`btn btn-icon ${internalLang===l?"active":""}`}
                style={{ width:"auto", padding:"0 10px", fontSize:12, fontFamily:"var(--font-mono)" }}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button onClick={onClose} className="btn btn-icon" style={{ fontSize:16 }}>✕</button>
        </div>
        {/* Search */}
        <div style={{ padding:"12px 20px", borderBottom:"1px solid var(--border)", flexShrink:0 }}>
          <input type="text" value={search} onChange={e=>setSearch(e.target.value)}
            placeholder={internalLang==="es"?"Buscar en el manual...":"Search the manual..."} autoFocus />
        </div>
        {/* Body */}
        <div style={{ flex:1, display:"flex", overflow:"hidden" }}>
          <div style={{ width:200, borderRight:"1px solid var(--border)", overflowY:"auto", flexShrink:0, padding:"8px 0" }}>
            {filtered.map((s,i) => (
              <div key={i} onClick={() => setActiveIdx(i)} style={{
                padding:"9px 16px", cursor:"pointer", display:"flex", gap:10, alignItems:"center",
                background: activeIdx===i ? "var(--accent-dim)" : "transparent",
                borderLeft: `2px solid ${activeIdx===i ? "var(--accent)" : "transparent"}`,
                transition:"var(--transition)",
              }}>
                <span style={{ fontSize:14, color: activeIdx===i ? "var(--accent)" : "var(--text-muted)" }}>{s.icon}</span>
                <span style={{ fontFamily:"var(--font-ui)", fontSize:12, fontWeight:500, color: activeIdx===i ? "var(--accent)" : "var(--text-secondary)" }}>{s.title}</span>
              </div>
            ))}
          </div>
          <div style={{ flex:1, overflowY:"auto", padding:"24px" }}>
            {filtered.map((s,i) => (
              <div key={i} style={{ marginBottom:32, opacity: activeIdx===i ? 1 : 0.5, transition:"opacity 0.2s" }}>
                <div onClick={() => setActiveIdx(i)} style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14, cursor:"pointer" }}>
                  <div style={{
                    width:32, height:32, borderRadius:8,
                    background: activeIdx===i ? "var(--accent-dim)" : "var(--bg-3)",
                    border:`1px solid ${activeIdx===i ? "var(--accent)" : "var(--border)"}`,
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:14, color: activeIdx===i ? "var(--accent)" : "var(--text-muted)", flexShrink:0,
                  }}>{s.icon}</div>
                  <div style={{ fontFamily:"var(--font-ui)", fontSize:14, fontWeight:600, color: activeIdx===i ? "var(--text-primary)" : "var(--text-secondary)" }}>{s.title}</div>
                </div>
                <div style={{ height:1, background:`linear-gradient(90deg,${activeIdx===i?"rgba(56,189,248,0.3)":"var(--border)"},transparent)`, marginBottom:16 }}/>
                <div style={{ fontFamily:"var(--font-ui)", fontSize:13, lineHeight:1.85, color:"var(--text-secondary)" }}>
                  {s.content.split("\n").map((line,li) => {
                    if (line.startsWith("→")) return <div key={li} style={{ padding:"6px 12px", borderLeft:"2px solid var(--accent)", color:"var(--accent)", marginBottom:8, background:"var(--accent-dim)", borderRadius:"0 6px 6px 0" }}>{line}</div>;
                    if (line.match(/^[A-ZÁÉÍÓÚ\s]{4,}$/) && line.trim().length > 3) return <div key={li} style={{ fontSize:10, fontFamily:"var(--font-mono)", color:"var(--accent)", letterSpacing:"0.12em", marginTop:16, marginBottom:6, textTransform:"uppercase" }}>{line}</div>;
                    if (line.startsWith("·")) return <div key={li} style={{ display:"flex", gap:8, marginBottom:4, paddingLeft:4 }}><span style={{color:"var(--accent)", flexShrink:0}}>·</span><span>{line.slice(1).trim()}</span></div>;
                    return <div key={li} style={{ marginBottom: line==="" ? 12 : 2 }}>{line}</div>;
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Footer */}
        <div style={{ padding:"10px 20px", borderTop:"1px solid var(--border)", background:"var(--bg-3)", display:"flex", justifyContent:"space-between", alignItems:"center", flexShrink:0 }}>
          <span style={{ fontFamily:"var(--font-mono)", fontSize:10, color:"var(--text-muted)" }}>UAP Intelligence Atlas · v4.1 · CC0</span>
          <span style={{ fontFamily:"var(--font-mono)", fontSize:10, color:"var(--text-muted)" }}>{internalLang==="es"?"Pulsa ESC para cerrar":"Press ESC to close"}</span>
        </div>
      </div>
    </div>
  );
}

// ─── SOURCES PANEL ────────────────────────────────────────────────────────────
function SourcesPanel({ nodeId, lang }) {
  const t = T[lang];
  const sources = SOURCES[nodeId] || [];
  if (!sources.length) return (
    <div style={{ padding:24, textAlign:"center" }}>
      <div style={{ fontSize:32, marginBottom:12, color:"var(--text-muted)" }}>◫</div>
      <div style={{ fontFamily:"var(--font-ui)", fontSize:14, fontWeight:600, color:"var(--text-secondary)", marginBottom:8 }}>{t.noSources}</div>
      <div style={{ fontFamily:"var(--font-ui)", fontSize:13, color:"var(--text-muted)", lineHeight:1.7, marginBottom:16 }}>{t.noSourcesHint}</div>
      <a href="https://www.war.gov/UFO/" target="_blank" rel="noreferrer" className="btn" style={{ display:"inline-flex" }}>
        war.gov/UFO ↗
      </a>
    </div>
  );

  const typeColor = { official:"var(--success)", congress:"var(--accent)", foia:"#34d399", leaked:"var(--warning)", media:"var(--purple)", explorer:"var(--text-secondary)", pending:"var(--text-muted)" };
  const confColor = { high:"var(--success)", medium:"var(--warning)", low:"var(--danger)", pending:"var(--text-muted)" };

  return (
    <div style={{ padding:16 }}>
      <div className="panel-label">{sources.length} {t.sourceCount}</div>
      {sources.map((s,i) => (
        <div key={i} className="source-card">
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:8, marginBottom:8 }}>
            <div style={{ fontFamily:"var(--font-ui)", fontSize:13, fontWeight:500, color:"var(--text-primary)", lineHeight:1.4, flex:1 }}>
              {s.title?.[lang] || s.title}
            </div>
            <div style={{ display:"flex", gap:4, flexShrink:0 }}>
              <span className="tag" style={{ background:`${typeColor[s.type]||"#666"}18`, color:typeColor[s.type]||"#666", border:`1px solid ${typeColor[s.type]||"#666"}33` }}>
                {t.srcType[s.type]||s.type}
              </span>
            </div>
          </div>
          {s.date && <div style={{ fontFamily:"var(--font-mono)", fontSize:11, color:"var(--text-muted)", marginBottom:6 }}>{s.date}</div>}
          {(s.note?.[lang]||s.note) && <div style={{ fontFamily:"var(--font-ui)", fontSize:12, color:"var(--text-secondary)", lineHeight:1.65, marginBottom:8 }}>{s.note?.[lang]||s.note}</div>}
          {(s.quote?.[lang]||s.quote) && (
            <div style={{ borderLeft:"2px solid var(--accent)", paddingLeft:10, marginBottom:8, fontFamily:"var(--font-ui)", fontSize:12, color:"var(--accent)", fontStyle:"italic", lineHeight:1.6 }}>
              {s.quote?.[lang]||s.quote}
            </div>
          )}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <span className="tag" style={{ background:`${confColor[s.confidence]}18`, color:confColor[s.confidence], border:`1px solid ${confColor[s.confidence]}33` }}>
              {t.conf?.[s.confidence]||s.confidence}
            </span>
            <a href={s.url} target="_blank" rel="noreferrer" style={{ fontFamily:"var(--font-mono)", fontSize:11, color:"var(--accent)", textDecoration:"none" }}>
              {t.openSource}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function UAPAtlas() {
  const svgRef = useRef(null);
  const [lang, setLang] = useState(detectLang);
  const t = T[lang];
  const sgs = SMOKING_GUNS[lang];

  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [officialOnly, setOfficialOnly] = useState(false);
  const [patternMode, setPatternMode] = useState(false);
  const [activeSG, setActiveSG] = useState(null);        // pistola activa en modo patrón
  const [patternStep, setPatternStep] = useState(-1);    // paso del trazo narrativo (-1 = todos)
  const [panel, setPanel] = useState("node");
  const [selectedSG, setSelectedSG] = useState(null);
  const [highlightNodes, setHighlightNodes] = useState(null);
  const [showHelp, setShowHelp] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [dimensions, setDimensions] = useState({ w: 800, h: 600 });

  // Intro screen — solo en primera visita
  const [showIntro, setShowIntro] = useState(() => {
    try { return !localStorage.getItem("uap_atlas_visited"); }
    catch { return true; }
  });

  // Hint de primer uso — aparece al entrar al grafo, desaparece solo
  const [showHint, setShowHint] = useState(false);

  // Keyboard shortcuts
  useEffect(() => {
    const fn = e => {
      if (e.target.matches("input")) return;
      if (e.key === "?") setShowHelp(v => !v);
      if (e.key === "Escape") { setSelected(null); setHighlightNodes(null); setSelectedSG(null); }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  const filteredNodes = NODES.filter(n => {
    const matchCat = activeCat === "all" || n.cat === activeCat;
    const q = search.toLowerCase();
    const matchSearch = !search || n.label[lang].toLowerCase().includes(q) || n.desc[lang].toLowerCase().includes(q);
    const matchOfficial = !officialOnly || (SOURCES[n.id]?.some(s => ["official","congress","foia"].includes(s.type)));
    return matchCat && matchSearch && matchOfficial;
  });
  const filteredIds = new Set(filteredNodes.map(n => n.id));
  const filteredLinks = LINKS_DATA.filter(l => filteredIds.has(l.source) && filteredIds.has(l.target));

  // Resize observer — window-based for reliable full-screen rendering
  useEffect(() => {
    const updateDims = () => {
      const sideW = sidebarOpen ? 300 : 0;
      const headerH = 52;
      setDimensions({
        w: Math.max(200, window.innerWidth - sideW),
        h: Math.max(200, window.innerHeight - headerH)
      });
    };
    // Small delay to ensure DOM layout is complete
    const t = setTimeout(updateDims, 50);
    updateDims();
    window.addEventListener('resize', updateDims);
    return () => { clearTimeout(t); window.removeEventListener('resize', updateDims); };
  }, [sidebarOpen]);

  // Adaptive graph parameters — scales with node count
  const getGraphParams = useCallback((count) => {
    if (count <= 8)  return { linkDist: 240, charge: -900, collision: 70, labelSize: 15, truncate: 32, nodeScale: 1.6, yearSize: 11 };
    if (count <= 15) return { linkDist: 190, charge: -650, collision: 58, labelSize: 14, truncate: 26, nodeScale: 1.35, yearSize: 10 };
    if (count <= 25) return { linkDist: 155, charge: -480, collision: 48, labelSize: 13, truncate: 22, nodeScale: 1.15, yearSize: 9 };
    if (count <= 40) return { linkDist: 125, charge: -360, collision: 40, labelSize: 12, truncate: 18, nodeScale: 1.0, yearSize: 8 };
    if (count <= 60) return { linkDist: 105, charge: -290, collision: 33, labelSize: 11, truncate: 15, nodeScale: 0.88, yearSize: 7 };
    return             { linkDist: 88,  charge: -240, collision: 28, labelSize: 10, truncate: 12, nodeScale: 0.78, yearSize: 7 };
  }, []);

  // Build graph
  useEffect(() => {
    if (!svgRef.current) return;
    const { w, h } = dimensions;
    if (w < 10 || h < 10) return;
    const params = getGraphParams(filteredNodes.length);
    const maxB = Math.max(1, ...filteredNodes.map(n => BETWEENNESS[n.id] || 0));

    const hasOfficial = n => SOURCES[n.id]?.some(s => ["official","congress","foia"].includes(s.type));
    const hasSrc = n => SOURCES[n.id]?.length > 0;
    const srcCount = n => (SOURCES[n.id] || []).length;
    const nodeR = n => {
      const base = n.cat === "concept" ? 14 : n.cat === "institution" ? 12 : 10;
      return (base + Math.sqrt((BETWEENNESS[n.id] || 0) / maxB) * 10) * params.nodeScale;
    };

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    svg.attr("width", w).attr("height", h);

    // Subtle noise background
    const defs = svg.append("defs");
    const filter = defs.append("filter").attr("id", "glow");
    filter.append("feGaussianBlur").attr("stdDeviation", "3").attr("result", "coloredBlur");
    const merge = filter.append("feMerge");
    merge.append("feMergeNode").attr("in", "coloredBlur");
    merge.append("feMergeNode").attr("in", "SourceGraphic");

    svg.append("rect").attr("width", w).attr("height", h).attr("fill", "#080b0f");

    // Subtle grid
    const grid = svg.append("g").attr("opacity", 0.025);
    for (let x = 0; x < w; x += 60) grid.append("line").attr("x1",x).attr("y1",0).attr("x2",x).attr("y2",h).attr("stroke","#38bdf8");
    for (let y = 0; y < h; y += 60) grid.append("line").attr("x1",0).attr("y1",y).attr("x2",w).attr("y2",y).attr("stroke","#38bdf8");

    const g = svg.append("g");
const zoom = d3.zoom().scaleExtent([0.1, 5]).on("zoom", e => {
  g.attr("transform", e.transform);
  const k = e.transform.k;

  // Labels: visibilidad por umbral, tamaño natural con tope
  const labelSize = Math.min(params.labelSize, params.labelSize / k * 1.4);
  g.selectAll("g.nd text:not(.yr):not(.badge-txt)")
    .style("display", function(d) {
      return d && nodeR(d) * k > 6 ? null : "none";
    })
    .attr("font-size", `${labelSize}px`);

  // Año: mismo principio
  const yearSize = Math.min(params.yearSize, params.yearSize / k * 1.4);
  g.selectAll("g.nd text.yr")
    .style("display", function(d) {
      return d && nodeR(d) * k > 10 ? null : "none";
    })
    .attr("font-size", `${yearSize}px`)
    .attr("dy", "0.35em");

  // Badge: escala con el nodo pero acotado
  const badgeR = Math.min(6, Math.max(3.5, 5.5));
  const badgeFontPx = Math.min(8, Math.max(5, 7));
  g.selectAll("g.nd circle.badge")
    .attr("r", badgeR)
    .attr("transform", function(d) {
      if (!d) return "";
      const r = nodeR(d);
      return `translate(${r + badgeR + 2}, ${-(r + badgeR + 2)})`;
    });
  g.selectAll("g.nd text.badge-txt")
    .attr("font-size", `${badgeFontPx}px`)
    .attr("y", badgeR * 0.4)
    .attr("transform", function(d) {
      if (!d) return "";
      const r = nodeR(d);
      return `translate(${r + badgeR + 2}, ${-(r + badgeR + 2)})`;
    });
});
    svg.call(zoom);

    const nc = filteredNodes.map(n => ({ ...n, x: w/2 + (Math.random()-.5)*w*.5, y: h/2 + (Math.random()-.5)*h*.5 }));
    const lc = filteredLinks.map(l => ({ ...l }));

    const sim = d3.forceSimulation(nc)
      .force("link", d3.forceLink(lc).id(d => d.id)
        .distance(d => {
          const s = nc.find(n => n.id === (typeof d.source==="object" ? d.source.id : d.source));
          const t = nc.find(n => n.id === (typeof d.target==="object" ? d.target.id : d.target));
          return s && t && s.cat === t.cat ? params.linkDist * 0.7 : params.linkDist;
        }).strength(0.4))
      .force("charge", d3.forceManyBody().strength(params.charge))
      .force("center", d3.forceCenter(w/2, h/2))
      .force("collision", d3.forceCollide(d => nodeR(d) + params.collision * 0.4));

    // Links
    const link = g.append("g").selectAll("line").data(lc).enter().append("line")
      .attr("class", "ll")
      .attr("stroke", "rgba(56,189,248,0.12)")
      .attr("stroke-width", 1);

    // Node groups
    const ng = g.append("g").selectAll("g.nd").data(nc).enter().append("g")
      .attr("class", "nd").attr("cursor", "pointer")
      .call(d3.drag()
        .on("start", (e,d) => { if(!e.active) sim.alphaTarget(0.3).restart(); d.fx=d.x; d.fy=d.y; })
        .on("drag", (e,d) => { d.fx=e.x; d.fy=e.y; })
        .on("end", (e,d) => { if(!e.active) sim.alphaTarget(0); d.fx=null; d.fy=null; })
      )
      .on("click", (e,d) => {
        e.stopPropagation();
        setSelected(d);
        setPanel("node");
        setSelectedSG(null);
        setHighlightNodes(null);
        if (!sidebarOpen) setSidebarOpen(true);
      });

    // Evidence ring — source quality indicator
    ng.append("circle")
      .attr("r", d => nodeR(d) + 5)
      .attr("fill", "none")
      .attr("stroke", d => hasOfficial(d) ? CAT_COLORS[d.cat] : hasSrc(d) ? "rgba(56,189,248,0.2)" : "rgba(255,255,255,0.05)")
      .attr("stroke-width", d => hasOfficial(d) ? 1.5 : 0.8)
      .attr("stroke-dasharray", d => hasOfficial(d) ? "none" : hasSrc(d) ? "none" : "3,3")
      .attr("class", "ev-ring");

    // Gradiente radial por categoría — uno por nodo
ng.each(function(d) {
  const gradId = `rg-${d.id}`;
  const grad = defs.append("radialGradient")
    .attr("id", gradId)
    .attr("cx", "35%").attr("cy", "35%")
    .attr("r", "65%");
  grad.append("stop").attr("offset", "0%")
    .attr("stop-color", CAT_COLORS[d.cat]).attr("stop-opacity", 0.18);
  grad.append("stop").attr("offset", "100%")
    .attr("stop-color", CAT_COLORS[d.cat]).attr("stop-opacity", 0.04);
  d3.select(this).append("circle")
    .attr("r", nodeR(d))
    .attr("fill", `url(#${gradId})`)
    .attr("stroke", CAT_COLORS[d.cat])
    .attr("stroke-width", 1.5)
    .style("filter", "url(#glow)")
    .attr("class", "ic");
});

    // Source badge — FUERA del anillo exterior
ng.filter(d => srcCount(d) > 0).append("circle")
  .attr("r", 5.5).attr("fill", "#0d1117")
  .attr("stroke", d => hasOfficial(d) ? "#34d399" : "#fb923c")
  .attr("stroke-width", 1.2)
  .attr("cx", 0).attr("cy", 0)
  .attr("class", "badge")
  .attr("transform", d => `translate(${nodeR(d) + 5}, ${-(nodeR(d) + 5)})`);
ng.filter(d => srcCount(d) > 0).append("text")
  .text(d => srcCount(d))
  .attr("text-anchor", "middle")
  .attr("x", 0).attr("y", 3.5)
  .attr("fill", "#e8edf3").attr("font-size", "7px")
  .attr("font-family", "JetBrains Mono, monospace").attr("pointer-events", "none")
  .attr("class", "badge-txt")
  .attr("transform", d => `translate(${nodeR(d) + 5}, ${-(nodeR(d) + 5)})`);
    
    // Label — two lines when density is low enough
    if (params.nodeScale >= 1.35) {
      // Low density: try to show full label, wrap if needed
      ng.each(function(d) {
        const lbl = d.label[lang];
        const el = d3.select(this);
        const r = nodeR(d);
        const words = lbl.split(' ');
        if (words.length > 1 && lbl.length > 12) {
          const mid = Math.ceil(words.length / 2);
          const line1 = words.slice(0, mid).join(' ');
          const line2 = words.slice(mid).join(' ');
          el.append("text").text(line1).attr("text-anchor","middle")
            .attr("dy", r + params.labelSize + 2)
            .attr("fill","rgba(232,237,243,0.9)")
            .attr("font-size",`${params.labelSize}px`)
            .attr("font-family","Syne, sans-serif")
            .attr("font-weight","600").attr("pointer-events","none");
          el.append("text").text(line2).attr("text-anchor","middle")
            .attr("dy", r + params.labelSize * 2 + 4)
            .attr("fill","rgba(232,237,243,0.75)")
            .attr("font-size",`${params.labelSize - 1}px`)
            .attr("font-family","Syne, sans-serif")
            .attr("font-weight","500").attr("pointer-events","none");
        } else {
          el.append("text").text(lbl).attr("text-anchor","middle")
            .attr("dy", r + params.labelSize + 4)
            .attr("fill","rgba(232,237,243,0.9)")
            .attr("font-size",`${params.labelSize}px`)
            .attr("font-family","Syne, sans-serif")
            .attr("font-weight","600").attr("pointer-events","none");
        }
      });
    } else {
      ng.append("text")
        .text(d => {
          const lbl = d.label[lang];
          return lbl.length > params.truncate ? lbl.slice(0, params.truncate - 1) + "…" : lbl;
        })
        .attr("text-anchor", "middle")
        .attr("dy", d => nodeR(d) + params.labelSize + 4)
        .attr("fill", "rgba(232,237,243,0.8)")
        .attr("font-size", `${params.labelSize}px`)
        .attr("font-family", "Syne, sans-serif")
        .attr("font-weight", "500")
        .attr("pointer-events", "none");
    }

    // Year — solo si el nodo tiene espacio suficiente
ng.filter(d => nodeR(d) >= 9).append("text").attr("class", "yr")
  .text(d => d.year < 0 ? `~${Math.abs(d.year)}${lang==="es"?"aC":"BC"}` : d.year)
  .attr("text-anchor", "middle").attr("dy", d => `${nodeR(d) * 0.35}`)
  .attr("fill", d => CAT_COLORS[d.cat] + "bb")
  .attr("font-size", `${params.yearSize}px`)
  .attr("font-family", "JetBrains Mono, monospace")
  .attr("pointer-events", "none");

    // Tooltip
    ng.append("title").text(d => {
      const sc = srcCount(d);
      const off = hasOfficial(d);
      return `${d.label[lang]} (${d.year < 0 ? Math.abs(d.year)+"aC" : d.year})\n${sc} ${lang==="es"?"fuentes":"sources"} · ${off ? (lang==="es"?"fuente oficial":"official source") : (lang==="es"?"sin oficial":"no official")}`;
    });

    sim.on("tick", () => {
      link.attr("x1", d=>d.source.x).attr("y1", d=>d.source.y).attr("x2", d=>d.target.x).attr("y2", d=>d.target.y);
      ng.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    // Auto zoom-to-fit after simulation stabilizes (UX-03)
    sim.on("end", () => {
      if (filteredNodes.length < 60) {
        const xs = nc.map(n => n.x);
        const ys = nc.map(n => n.y);
        const xMin = Math.min(...xs), xMax = Math.max(...xs);
        const yMin = Math.min(...ys), yMax = Math.max(...ys);
        const padding = 60;
        const scaleX = (w - padding*2) / (xMax - xMin || 1);
        const scaleY = (h - padding*2) / (yMax - yMin || 1);
        const scale = Math.min(scaleX, scaleY, 2.5);
        const tx = w/2 - scale * (xMin + xMax) / 2;
        const ty = h/2 - scale * (yMin + yMax) / 2;
        svg.transition().duration(600).call(
          zoom.transform,
          d3.zoomIdentity.translate(tx, ty).scale(scale)
        );
      }
    });

    svg.on("click", () => { setSelected(null); setHighlightNodes(null); setSelectedSG(null); });
    return () => sim.stop();
  }, [filteredNodes.length, activeCat, dimensions, lang, officialOnly]);

  // ── PATTERN MODE: color nodos por severidad de todas las pistolas activas ──
  // Mapeo nodo → severidad máxima entre todas las pistolas que lo contienen
  const patternNodeSeverity = useMemo(() => {
    if (!patternMode) return null;
    const SEV_ORDER = { critical: 3, high: 2, medium: 1 };
    const map = {};
    sgs.forEach(sg => {
      (sg.nodes || []).forEach(nid => {
        const cur = SEV_ORDER[map[nid]] || 0;
        if ((SEV_ORDER[sg.severity] || 0) > cur) map[nid] = sg.severity;
      });
    });
    return map;
  }, [patternMode, sgs]);

  const SEV_COLORS = { critical: "#f43f5e", high: "#fb923c", medium: "#facc15" };

  // Highlight effect — normal highlight OR pattern mode highlight
  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);

    if (patternMode && patternNodeSeverity) {
      const pathSet = activeSG ? new Set(activeSG.path || activeSG.nodes) : null;
      const activeNodes = activeSG ? new Set(activeSG.nodes) : null;

      // Opacity: nodos en patrón → 1; resto → 0.07
      svg.selectAll(".nd")
        .transition().duration(400)
        .attr("opacity", d => {
          if (activeSG) return activeNodes.has(d.id) ? 1 : 0.05;
          return patternNodeSeverity[d.id] ? 1 : 0.15;
        });

      // Stroke de nodos: color por severidad
      svg.selectAll(".ic")
        .transition().duration(400)
        .attr("stroke", d => {
          if (activeSG) {
            if (pathSet && pathSet.has(d.id)) return SEV_COLORS[activeSG.severity] || "#f43f5e";
            if (activeNodes && activeNodes.has(d.id)) return SEV_COLORS[activeSG.severity] + "99";
          }
          return patternNodeSeverity[d.id] ? SEV_COLORS[patternNodeSeverity[d.id]] : "rgba(56,189,248,0.2)";
        })
        .attr("stroke-width", d => {
          if (activeSG && pathSet && pathSet.has(d.id)) return 3;
          if (activeSG && activeNodes && activeNodes.has(d.id)) return 2;
          return patternNodeSeverity[d.id] ? 2 : 1;
        });

      // Links: resaltar conexiones de la pistola activa; o todas las pistolas
      svg.selectAll(".ll")
        .transition().duration(400)
        .attr("stroke", l => {
          const s = typeof l.source==="object" ? l.source.id : l.source;
          const t = typeof l.target==="object" ? l.target.id : l.target;
          if (activeSG) {
            const p = activeSG.path || activeSG.nodes;
            const si = p.indexOf(s), ti = p.indexOf(t);
            if (si !== -1 && ti !== -1 && Math.abs(si - ti) === 1) return SEV_COLORS[activeSG.severity] || "#f43f5e";
            if (activeNodes && activeNodes.has(s) && activeNodes.has(t)) return SEV_COLORS[activeSG.severity] + "55";
            return "rgba(56,189,248,0.02)";
          }
          const sInPat = !!patternNodeSeverity[s], tInPat = !!patternNodeSeverity[t];
          return sInPat && tInPat ? "rgba(244,63,94,0.35)" : "rgba(56,189,248,0.04)";
        })
        .attr("stroke-width", l => {
          const s = typeof l.source==="object" ? l.source.id : l.source;
          const t = typeof l.target==="object" ? l.target.id : l.target;
          if (activeSG) {
            const p = activeSG.path || activeSG.nodes;
            const si = p.indexOf(s), ti = p.indexOf(t);
            if (si !== -1 && ti !== -1 && Math.abs(si - ti) === 1) return 2.5;
          }
          return 0.5;
        })
        .attr("stroke-dasharray", l => {
          if (!activeSG) return "none";
          const s = typeof l.source==="object" ? l.source.id : l.source;
          const t = typeof l.target==="object" ? l.target.id : l.target;
          const p = activeSG.path || activeSG.nodes;
          const si = p.indexOf(s), ti = p.indexOf(t);
          return (si !== -1 && ti !== -1 && Math.abs(si - ti) === 1) ? "none" : "none";
        });

    } else if (!highlightNodes) {
      svg.selectAll(".nd").transition().duration(400).attr("opacity", 1);
      svg.selectAll(".ic").transition().duration(400).attr("stroke", d => CAT_COLORS[d.cat]).attr("stroke-width", 1.5);
      svg.selectAll(".ll").transition().duration(400).attr("stroke", "rgba(56,189,248,0.12)").attr("stroke-width", 1).attr("stroke-dasharray", "none");
    } else {
      svg.selectAll(".nd").attr("opacity", d => highlightNodes.has(d.id) ? 1 : 0.06);
      svg.selectAll(".ic").attr("stroke-width", d => highlightNodes.has(d.id) ? 2.5 : 1);
      svg.selectAll(".ll").attr("stroke", l => {
        const s = typeof l.source==="object" ? l.source.id : l.source;
        const t = typeof l.target==="object" ? l.target.id : l.target;
        return highlightNodes.has(s) && highlightNodes.has(t) ? "rgba(244,63,94,0.5)" : "rgba(56,189,248,0.04)";
      }).attr("stroke-width", l => {
        const s = typeof l.source==="object" ? l.source.id : l.source;
        const t = typeof l.target==="object" ? l.target.id : l.target;
        return highlightNodes.has(s) && highlightNodes.has(t) ? 2 : 0.5;
      });
    }
  }, [highlightNodes, patternMode, patternNodeSeverity, activeSG]);

  // Stats
  const density = filteredNodes.length > 1
    ? (filteredLinks.length / (filteredNodes.length * (filteredNodes.length - 1) / 2) * 100).toFixed(1)
    : "0";
  const avgDeg = filteredNodes.length ? (filteredLinks.length * 2 / filteredNodes.length).toFixed(1) : "0";
  const topNode = filteredNodes.reduce((a, b) => (BETWEENNESS[b.id]||0) > (BETWEENNESS[a.id]||0) ? b : a, filteredNodes[0]);
  const latestRelease = PURSUE_RELEASES?.find(r => r.status === "indexed");
  const isFiltered = activeCat !== "all" || search || officialOnly;
  const cats = Object.keys(CAT_COLORS);

  return (
    <>
      <GlobalStyles />

      {/* ── INTRO SCREEN — primera visita ────────────────────────────────── */}
      {showIntro && (
        <IntroScreen
          lang={lang}
          nodeCount={NODES.length}
          linkCount={LINKS_DATA.length}
          onEnter={() => { setShowIntro(false); setShowHint(true); }}
          onLangChange={setLang}
        />
      )}

      <div style={{ display:"flex", flexDirection:"column", height:"100vh", width:"100vw", overflow:"hidden", fontFamily:"var(--font-ui)" }}>

        {/* ── HEADER ──────────────────────────────────────────────────────── */}
        <header style={{
          height:"var(--header-h)", flexShrink:0,
          background:"var(--bg-glass)", backdropFilter:"blur(20px)",
          borderBottom:"1px solid var(--border)",
          display:"flex", alignItems:"center", padding:"0 16px", gap:12,
          zIndex:100,
        }}>
          {/* Sidebar toggle */}
          <button className="btn btn-icon" onClick={() => setSidebarOpen(v => !v)} title={sidebarOpen ? "Hide sidebar" : "Show sidebar"}>
            {sidebarOpen ? "◁" : "▷"}
          </button>

          {/* Logo */}
          <div style={{ display:"flex", alignItems:"center", gap:8 }}>
            <span style={{ fontSize:18, color:"var(--accent)" }}>◈</span>
            <div>
              <div style={{ fontSize:14, fontWeight:700, color:"var(--text-primary)", lineHeight:1.2 }}>{t.title}</div>
              <div style={{ fontSize:11, fontFamily:"var(--font-mono)", color:"var(--text-secondary)", lineHeight:1 }}>{t.subtitle}</div>
            </div>
          </div>

          {/* PURSUE badge */}
          {latestRelease && (
            <a href={latestRelease.url} target="_blank" rel="noreferrer" style={{
              display:"flex", alignItems:"center", gap:6, padding:"4px 10px",
              background:"rgba(52,211,153,0.08)", border:"1px solid rgba(52,211,153,0.2)",
              borderRadius:6, textDecoration:"none", cursor:"pointer",
            }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:"#34d399", flexShrink:0 }}/>
              <span style={{ fontFamily:"var(--font-mono)", fontSize:10, color:"#34d399" }}>
                PURSUE {latestRelease.label}
              </span>
              <span style={{ fontFamily:"var(--font-mono)", fontSize:10, color:"var(--text-muted)" }}>{latestRelease.date}</span>
            </a>
          )}

          {/* Stats — contador vivo */}
          <div style={{ display:"flex", gap:12, marginLeft:4, alignItems:"center" }}>
            <span style={{ fontFamily:"var(--font-mono)", fontSize:12, color:"var(--text-secondary)" }}>
              <span style={{ color: isFiltered ? "var(--warning)" : "var(--accent)", fontWeight:600 }}>
                {filteredNodes.length}
              </span>
              {isFiltered && <span style={{ color:"var(--text-muted)" }}> / {NODES.length}</span>}
              <span style={{ color:"var(--text-muted)" }}> {t.nodes}</span>
            </span>
            <span style={{ color:"var(--border)", fontSize:10 }}>·</span>
            <span style={{ fontFamily:"var(--font-mono)", fontSize:11, color:"var(--text-muted)" }}>
              <span style={{ color:"var(--text-secondary)" }}>{filteredLinks.length}</span>
              {" "}{lang==="es" ? "links" : "links"}
            </span>
            <span style={{ color:"var(--border)", fontSize:10, display:"none" }} className="density-sep">·</span>
            <span style={{ fontFamily:"var(--font-mono)", fontSize:11, color:"var(--text-muted)", display:"flex", gap:4 }}>
              <span style={{ color:"var(--text-secondary)" }}>{t.density}:</span>
              <span style={{ color:"var(--text-primary)" }}>{density}%</span>
            </span>
          </div>

          {/* ── BOTÓN PATRONES ── */}
          <button
            onClick={() => {
              const next = !patternMode;
              setPatternMode(next);
              if (!next) { setActiveSG(null); setPatternStep(-1); }
              else { setPanel("guns"); }
            }}
            style={{
              display:"flex", alignItems:"center", gap:6,
              padding:"0 12px", height:32, borderRadius:6,
              background: patternMode ? "rgba(244,63,94,0.15)" : "var(--bg-3)",
              border: patternMode ? "1px solid rgba(244,63,94,0.5)" : "1px solid var(--border)",
              color: patternMode ? "#f43f5e" : "var(--text-secondary)",
              fontFamily:"var(--font-mono)", fontSize:11, cursor:"pointer",
              fontWeight: patternMode ? 700 : 400,
              transition:"all 0.25s",
              animation: patternMode ? "pulse-border 2s infinite" : "none",
            }}
          >
            <span style={{ fontSize:13 }}>◈</span>
            <span>{patternMode ? `${sgs.length} ${t.patternActive}` : t.patternBtn.replace("◈ ","")}</span>
          </button>

          <div style={{ flex:1 }}/>

          {/* Lang toggle */}
          <div style={{ display:"flex", border:"1px solid var(--border)", borderRadius:6, overflow:"hidden" }}>
            {["es","en"].map(l => (
              <button key={l} onClick={() => setLang(l)} style={{
                background: lang===l ? "var(--accent-dim)" : "transparent",
                border:"none",
                borderRight: l==="es" ? "1px solid var(--border)" : "none",
                padding:"0 12px", height:32,
                color: lang===l ? "var(--accent)" : "var(--text-muted)",
                fontFamily:"var(--font-mono)", fontSize:11, cursor:"pointer",
                fontWeight: lang===l ? 600 : 400, transition:"var(--transition)",
              }}>{l.toUpperCase()}</button>
            ))}
          </div>

          {/* Help */}
          <button className="btn btn-icon" onClick={() => setShowHelp(true)} title="Manual (?)">
            <span style={{ fontSize:15, fontWeight:600 }}>?</span>
          </button>
        </header>

        {/* ── BODY ────────────────────────────────────────────────────────── */}
        <div style={{ flex:1, display:"flex", overflow:"hidden", position:"relative", minWidth:0, minHeight:0 }}>

          {/* ── SIDEBAR ─────────────────────────────────────────────────── */}
          <aside style={{
            width: sidebarOpen ? "var(--sidebar-w)" : 0,
            flexShrink:0, overflow:"hidden",
            background:"var(--bg-2)", borderRight:"1px solid var(--border)",
            display:"flex", flexDirection:"column",
            transition:"width 0.25s cubic-bezier(0.4,0,0.2,1)",
          }}>
            <div style={{ width:"var(--sidebar-w)", display:"flex", flexDirection:"column", height:"100%", overflow:"hidden" }}>

              {/* Search */}
              <div style={{ padding:"14px", borderBottom:"1px solid var(--border)", flexShrink:0 }}>
                <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder={t.search} />
              </div>

              {/* Filters */}
              <div style={{ borderBottom:"1px solid var(--border)", flexShrink:0 }}>
                <div style={{
                  padding:"10px 12px", display:"flex", alignItems:"center", justifyContent:"space-between",
                  cursor:"pointer", userSelect:"none",
                }} onClick={() => setFiltersOpen(v => !v)}>
                  <span style={{ fontFamily:"var(--font-mono)", fontSize:12, color:"var(--text-secondary)", letterSpacing:"0.08em", textTransform:"uppercase" }}>
                    {t.filterLabel}
                  </span>
                  <span style={{ fontSize:10, color:"var(--text-muted)", transition:"transform 0.2s", transform: filtersOpen ? "rotate(180deg)" : "rotate(0deg)" }}>▼</span>
                </div>
                {filtersOpen && (
                  <div style={{ padding:"0 12px 12px", display:"flex", flexDirection:"column", gap:4 }} className="slide-in">
                    {/* All */}
                    <button
                      onClick={() => setActiveCat("all")}
                      className={`btn ${activeCat==="all" ? "active" : ""}`}
                      style={{ justifyContent:"flex-start", height:42, fontSize:14 }}>
                      <span style={{ width:8, height:8, borderRadius:"50%", background:"var(--text-muted)", flexShrink:0 }}/>
                      {t.allCats}
                      <span style={{ marginLeft:"auto", fontFamily:"var(--font-mono)", fontSize:10, color:"var(--text-muted)" }}>{NODES.length}</span>
                    </button>
                    {/* Categories */}
                    {cats.map(cat => {
                      const count = NODES.filter(n => n.cat === cat).length;
                      return (
                        <button key={cat}
                          onClick={() => setActiveCat(activeCat === cat ? "all" : cat)}
                          className={`btn ${activeCat===cat ? "active" : ""}`}
                          style={{ justifyContent:"flex-start", height:42, fontSize:14, borderColor: activeCat===cat ? CAT_COLORS[cat] : "var(--border)", color: activeCat===cat ? CAT_COLORS[cat] : "var(--text-secondary)", background: activeCat===cat ? CAT_COLORS[cat]+"18" : "var(--bg-3)" }}>
                          <span style={{ width:8, height:8, borderRadius:"50%", background:CAT_COLORS[cat], flexShrink:0 }}/>
                          {t.catLabels[cat]}
                          <span style={{ marginLeft:"auto", fontFamily:"var(--font-mono)", fontSize:10, color:"var(--text-muted)" }}>{count}</span>
                        </button>
                      );
                    })}
                    {/* Official only toggle */}
                    <button
                      onClick={() => setOfficialOnly(v => !v)}
                      className={`btn ${officialOnly ? "active" : ""}`}
                      style={{ justifyContent:"flex-start", height:36, fontSize:12, marginTop:4 }}>
                      <span style={{ width:8, height:8, borderRadius:"50%", background: officialOnly ? "#34d399" : "var(--text-muted)", flexShrink:0, transition:"var(--transition)" }}/>
                      {t.officialOnly}
                    </button>
                  </div>
                )}
              </div>

              {/* Panel tabs */}
              <div style={{ display:"flex", borderBottom:"1px solid var(--border)", flexShrink:0 }}>
                {["node","sources","guns"].map(tab => {
                  const labels = { node:t.tabNode, sources:t.tabSources, guns:t.tabGuns };
                  return (
                    <button key={tab} onClick={() => setPanel(tab)} style={{
                      flex:1, height:44, background: panel===tab ? "var(--accent-dim)" : "transparent",
                      border:"none", borderBottom: panel===tab ? `2px solid var(--accent)` : "2px solid transparent",
                      color: panel===tab ? "var(--accent)" : "var(--text-secondary)",
                      fontFamily:"var(--font-ui)", fontSize:13, fontWeight:600,
                      cursor:"pointer", transition:"var(--transition)",
                    }}>{labels[tab]}</button>
                  );
                })}
              </div>

              {/* Panel content */}
              <div style={{ flex:1, overflowY:"auto" }}>

                {/* ── NODE PANEL ── */}
                {panel === "node" && (
                  selected ? (
                    <div className="fade-in">
                      {/* Node header */}
                      <div style={{ padding:"16px", borderBottom:"1px solid var(--border)" }}>
                        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:12 }}>
                          <span className="tag" style={{ background:CAT_COLORS[selected.cat]+"18", color:CAT_COLORS[selected.cat], border:`1px solid ${CAT_COLORS[selected.cat]}33` }}>
                            {t.catLabels[selected.cat]}
                          </span>
                          <span style={{ fontFamily:"var(--font-mono)", fontSize:11, color:"var(--text-muted)" }}>
                            {selected.year < 0 ? `~${Math.abs(selected.year)} ${lang==="es"?"a.C.":"BC"}` : selected.year}
                          </span>
                          {(SOURCES[selected.id]||[]).length > 0 && (
                            <span onClick={() => setPanel("sources")} className="tag" style={{ background:"rgba(52,211,153,0.1)", color:"#34d399", border:"1px solid rgba(52,211,153,0.2)", cursor:"pointer", marginLeft:"auto" }}>
                              ◫ {(SOURCES[selected.id]||[]).length}
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize:19, fontWeight:700, color:"var(--text-primary)", marginBottom:6, lineHeight:1.3 }}>
                          {selected.label[lang]}
                        </div>
                        <div style={{ fontFamily:"var(--font-mono)", fontSize:10, color:"var(--text-muted)", display:"flex", gap:12 }}>
                          <span>{t.avgDeg.split(" ")[0]}: {(selected.links||[]).filter(id=>filteredIds.has(id)).length}</span>
                          <span>CC: {(CLUSTERING[selected.id]||0).toFixed(2)}</span>
                          <span>B: {Math.round(BETWEENNESS[selected.id]||0)}</span>
                        </div>
                      </div>
                      {/* Description */}
                      <div style={{ padding:"14px 16px", borderBottom:"1px solid var(--border)" }}>
                        <div style={{ fontSize:14, lineHeight:1.85, color:"var(--text-secondary)" }}>
                          {selected.desc[lang]}
                        </div>
                      </div>
                      {/* Connections */}
                      {(selected.links||[]).filter(id => filteredIds.has(id)).length > 0 && (
                        <div style={{ padding:"14px 16px" }}>
                          <div className="panel-label">{t.connections} ({(selected.links||[]).filter(id=>filteredIds.has(id)).length})</div>
                          <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                            {(selected.links||[]).filter(id => filteredIds.has(id)).map(id => {
                              const n = NODES.find(x => x.id === id);
                              if (!n) return null;
                              return (
                                <div key={id} className="node-card" onClick={() => setSelected(n)}>
                                  <div style={{ display:"flex", alignItems:"center", gap:8, flex:1, minWidth:0 }}>
                                    <span style={{ width:8, height:8, borderRadius:"50%", background:CAT_COLORS[n.cat], flexShrink:0 }}/>
                                    <span style={{ fontSize:13, color:"var(--text-primary)", fontWeight:500, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{n.label[lang]}</span>
                                  </div>
                                  <span style={{ fontFamily:"var(--font-mono)", fontSize:10, color:"var(--text-muted)", flexShrink:0 }}>
                                    {n.year < 0 ? `${Math.abs(n.year)}${lang==="es"?"aC":"BC"}` : n.year}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Welcome */
                    <div style={{ padding:24, textAlign:"center" }} className="fade-in">
                      <div style={{ fontSize:36, marginBottom:12, color:"var(--accent)", opacity:0.4 }}>◈</div>
                      <div style={{ fontSize:17, fontWeight:700, color:"var(--text-primary)", marginBottom:8 }}>{t.noNodeTitle}</div>
                      <div style={{ fontSize:14, color:"var(--text-secondary)", lineHeight:1.8, marginBottom:20 }}>{t.noNodeDesc}</div>
                      <div style={{
                        padding:"12px 16px", background:"var(--bg-3)", borderRadius:8,
                        border:"1px solid var(--border)", marginBottom:12,
                        fontFamily:"var(--font-mono)", fontSize:11, color:"var(--text-muted)", lineHeight:1.9,
                        textAlign:"left",
                      }}>
                        {t.welcomeStats.replace("{n}",NODES.length).replace("{l}",LINKS_DATA.length).replace("{s}",sgs.length)}
                      </div>
                      <button className="btn btn-lg" onClick={() => setShowHelp(true)} style={{ width:"100%", justifyContent:"center", marginBottom:8 }}>
                        <span>?</span> {t.openHelp}
                      </button>
                      {/* Reset intro — para demos y tests */}
                      <button
                        onClick={() => { try { localStorage.removeItem("uap_atlas_visited"); } catch {} setShowIntro(true); }}
                        style={{
                          background:"transparent", border:"none", cursor:"pointer",
                          fontFamily:"var(--font-mono)", fontSize:10, color:"var(--text-muted)",
                          padding:"6px 0", width:"100%", textAlign:"center",
                          transition:"color 0.15s",
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = "var(--text-secondary)"}
                        onMouseLeave={e => e.currentTarget.style.color = "var(--text-muted)"}
                      >
                        {t.introResetDemo}
                      </button>
                    </div>
                  )
                )}

                {/* ── SOURCES PANEL ── */}
                {panel === "sources" && (
                  selected ? <SourcesPanel nodeId={selected.id} lang={lang}/> : (
                    <div style={{ padding:24, textAlign:"center", color:"var(--text-muted)", fontSize:13 }} className="fade-in">
                      {lang==="es" ? "Selecciona un nodo para ver sus fuentes" : "Select a node to see its sources"}
                    </div>
                  )
                )}

                {/* ── SMOKING GUNS PANEL ── */}
                {panel === "guns" && (
                  <div style={{ padding:"14px" }} className="fade-in">
                    {/* Network insight */}
                    <div style={{
                      padding:"12px", borderRadius:8,
                      background:"rgba(56,189,248,0.06)", border:"1px solid rgba(56,189,248,0.15)",
                      marginBottom:14,
                    }}>
                      <div className="panel-label" style={{ marginBottom:6 }}>{lang==="es"?"Diagnóstico":"Diagnosis"}</div>
                      <div style={{ fontSize:12, lineHeight:1.75, color:"var(--text-secondary)" }}>{NETWORK_INSIGHT[lang]}</div>
                      {topNode && (
                        <div style={{ marginTop:8, fontSize:11, fontFamily:"var(--font-mono)", color:"var(--text-muted)" }}>
                          {t.centralNode}: <span style={{ color:"var(--warning)", cursor:"pointer" }} onClick={() => { setSelected(topNode); setPanel("node"); }}>{topNode.label[lang]}</span>
                        </div>
                      )}
                    </div>

                    <div className="panel-label">{t.guns} ({sgs.length})</div>

                    {sgs.map((sg,i) => {
                      const sev = SEVERITY_CFG[sg.severity];
                      const conf = CONF_CFG[sg.confidence];
                      const isActive = selectedSG?.id === sg.id;
                      return (
                        <div key={sg.id||i} className="sg-card"
                          onClick={() => { setSelectedSG(sg); setActiveSG(sg); setPatternMode(true); setHighlightNodes(new Set(sg.nodes)); setPatternStep(-1); }}
                          style={{ background: isActive ? sev.bg : "var(--bg-3)", borderColor: isActive ? sev.color : sev.border }}>
                          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:8 }}>
                            <div style={{ display:"flex", gap:6 }}>
                              <span className="tag" style={{ background:sev.bg, color:sev.color, border:`1px solid ${sev.border}` }}>
                                {t.sev[sg.severity]}
                              </span>
                              <span className="tag" style={{ background:`${conf.color}18`, color:conf.color, border:`1px solid ${conf.color}33` }}>
                                {t.conf[sg.confidence]}
                              </span>
                            </div>
                            <span style={{ fontFamily:"var(--font-mono)", fontSize:9, color:"var(--text-muted)", textTransform:"uppercase" }}>{sg.type}</span>
                          </div>
                          <div style={{ fontSize:14, fontWeight:700, color:sev.color, marginBottom:6, lineHeight:1.3 }}>{sg.title}</div>
                          <div style={{ fontSize:13, color:"var(--text-secondary)", lineHeight:1.75, marginBottom:8 }}>{sg.headline}</div>
                          <div style={{ fontSize:11.5, color:"var(--text-muted)", lineHeight:1.75, marginBottom:8 }}>{sg.analysis}</div>
                          <div style={{ borderTop:`1px solid ${sev.color}22`, paddingTop:8, fontSize:11, color:sev.color, fontStyle:"italic", lineHeight:1.6 }}>
                            → {sg.implication}
                          </div>
                          {sg.nodes?.length > 0 && (
                            <div style={{ marginTop:8, display:"flex", gap:4, flexWrap:"wrap" }}>
                              {sg.nodes.map(nid => {
                                const n = NODES.find(x => x.id === nid);
                                return n ? (
                                  <span key={nid} className="tag" style={{ background:CAT_COLORS[n.cat]+"18", color:CAT_COLORS[n.cat], border:`1px solid ${CAT_COLORS[n.cat]}33` }}>
                                    {n.label[lang]}
                                  </span>
                                ) : null;
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Sidebar footer stats */}
              <div style={{
                padding:"10px 12px", borderTop:"1px solid var(--border)",
                background:"var(--bg-3)", flexShrink:0,
                display:"flex", gap:16, flexWrap:"wrap",
              }}>
                {[
                  [t.density, `${density}%`],
                  [t.avgDeg, avgDeg],
                ].map(([label, val]) => (
                  <div key={label}>
                    <div style={{ fontFamily:"var(--font-mono)", fontSize:10, color:"var(--text-secondary)", textTransform:"uppercase", letterSpacing:"0.08em" }}>{label}</div>
                    <div style={{ fontFamily:"var(--font-mono)", fontSize:15, color:"var(--text-primary)", fontWeight:700 }}>{val}</div>
                  </div>
                ))}
                <div style={{ marginLeft:"auto", fontFamily:"var(--font-mono)", fontSize:9, color:"var(--text-muted)", alignSelf:"flex-end" }}>v4.1 · CC0</div>
              </div>
            </div>
          </aside>

          {/* ── GRAPH AREA ──────────────────────────────────────────────── */}
          <div style={{ flex:1, position:"relative", overflow:"hidden", minWidth:0, minHeight:0, width:"100%", height:"100%" }}>
            <svg ref={svgRef} style={{ position:"absolute", top:0, left:0, width:"100%", height:"100%", display:"block" }}/>

            {/* Clear highlight button */}
            {highlightNodes && !patternMode && (
              <button className="btn" onClick={() => { setHighlightNodes(null); setSelectedSG(null); }}
                style={{ position:"absolute", top:12, left:12, background:"var(--bg-glass)", backdropFilter:"blur(8px)" }}>
                ✕ {t.clearHL}
              </button>
            )}

            {/* ── PATTERN MODE OVERLAY ── */}
            {patternMode && (
              <>
                {/* Contador de patrones activos */}
                <div style={{
                  position:"absolute", top:12, left:12,
                  background:"rgba(244,63,94,0.12)", backdropFilter:"blur(8px)",
                  border:"1px solid rgba(244,63,94,0.35)", borderRadius:8,
                  padding:"6px 12px", display:"flex", alignItems:"center", gap:8,
                }}>
                  <span style={{ width:7, height:7, borderRadius:"50%", background:"#f43f5e", animation:"pulse-dot 1.5s infinite" }}/>
                  <span style={{ fontFamily:"var(--font-mono)", fontSize:11, color:"#f43f5e", fontWeight:600 }}>
                    {activeSG ? activeSG.title : `${sgs.length} ${t.patternActive}`}
                  </span>
                  {activeSG && (
                    <button onClick={() => { setActiveSG(null); setPatternStep(-1); }}
                      style={{ background:"transparent", border:"none", color:"rgba(244,63,94,0.6)", cursor:"pointer", fontSize:12, padding:0, marginLeft:4 }}>
                      ✕
                    </button>
                  )}
                </div>

                {/* Leyenda de severidad en modo patrón */}
                {!activeSG && (
                  <div style={{
                    position:"absolute", top:12, right:16,
                    background:"var(--bg-glass)", backdropFilter:"blur(12px)",
                    border:"1px solid var(--border)", borderRadius:8, padding:"10px 14px",
                    display:"flex", flexDirection:"column", gap:6,
                  }}>
                    {[["critical","#f43f5e"], ["high","#fb923c"], ["medium","#facc15"]].map(([sev, col]) => (
                      <div key={sev} style={{ display:"flex", alignItems:"center", gap:8 }}>
                        <span style={{ width:8, height:8, borderRadius:"50%", background:col, flexShrink:0 }}/>
                        <span style={{ fontFamily:"var(--font-mono)", fontSize:11, color:col, fontWeight:600 }}>
                          {t.sev[sev]}
                        </span>
                      </div>
                    ))}
                    <div style={{ borderTop:"1px solid var(--border)", marginTop:2, paddingTop:6 }}>
                      <button onClick={() => { setPatternMode(false); setActiveSG(null); setPatternStep(-1); }}
                        style={{ background:"transparent", border:"none", cursor:"pointer", fontFamily:"var(--font-mono)", fontSize:10, color:"var(--text-muted)", padding:0, textAlign:"left" }}>
                        {t.patternExit}
                      </button>
                    </div>
                  </div>
                )}

                {/* Panel de pistola activa — lateral sobre el grafo */}
                {activeSG && (
                  <div className="fade-in" style={{
                    position:"absolute", top:52, right:16, width:320,
                    background:"rgba(8,11,15,0.92)", backdropFilter:"blur(16px)",
                    border:`1px solid ${SEV_COLORS[activeSG.severity]}44`,
                    borderRadius:10, padding:16, maxHeight:"calc(100vh - 140px)", overflowY:"auto",
                    zIndex:10,
                  }}>
                    {/* Header pistola */}
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
                      <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                        <span className="tag" style={{ background:SEVERITY_CFG[activeSG.severity]?.bg, color:SEVERITY_CFG[activeSG.severity]?.color, border:`1px solid ${SEVERITY_CFG[activeSG.severity]?.border}` }}>
                          {t.sev[activeSG.severity]}
                        </span>
                        <span className="tag" style={{ background:`${CONF_CFG[activeSG.confidence]?.color}18`, color:CONF_CFG[activeSG.confidence]?.color, border:`1px solid ${CONF_CFG[activeSG.confidence]?.color}33` }}>
                          {t.conf[activeSG.confidence]}
                        </span>
                        <span style={{ fontFamily:"var(--font-mono)", fontSize:9, color:"var(--text-muted)", textTransform:"uppercase", alignSelf:"center" }}>{activeSG.type}</span>
                      </div>
                      <button onClick={() => { setActiveSG(null); setPatternStep(-1); }}
                        style={{ background:"transparent", border:"none", color:"var(--text-muted)", cursor:"pointer", fontSize:14, padding:0, flexShrink:0, marginLeft:8 }}>
                        ✕
                      </button>
                    </div>

                    <div style={{ fontSize:15, fontWeight:700, color:SEV_COLORS[activeSG.severity], marginBottom:6, lineHeight:1.3 }}>
                      {activeSG.title}
                    </div>
                    <div style={{ fontSize:13, color:"var(--text-secondary)", lineHeight:1.75, marginBottom:10 }}>
                      {activeSG.headline}
                    </div>
                    <div style={{ fontSize:12, color:"var(--text-muted)", lineHeight:1.8, marginBottom:10 }}>
                      {activeSG.analysis}
                    </div>
                    <div style={{ borderTop:`1px solid ${SEV_COLORS[activeSG.severity]}22`, paddingTop:8, fontSize:11.5, color:SEV_COLORS[activeSG.severity], fontStyle:"italic", lineHeight:1.6, marginBottom:12 }}>
                      → {activeSG.implication}
                    </div>

                    {/* Trazo narrativo */}
                    {activeSG.path?.length > 0 && (
                      <div style={{ marginBottom:12 }}>
                        <div className="panel-label" style={{ marginBottom:8 }}>{t.patternNarrPath}</div>
                        <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
                          {activeSG.path.map((nid, idx) => {
                            const n = NODES.find(x => x.id === nid);
                            if (!n) return null;
                            return (
                              <div key={nid} style={{ display:"flex", alignItems:"center", gap:8 }}>
                                <div style={{ display:"flex", flexDirection:"column", alignItems:"center", flexShrink:0 }}>
                                  <div style={{ width:8, height:8, borderRadius:"50%", background:SEV_COLORS[activeSG.severity], flexShrink:0 }}/>
                                  {idx < activeSG.path.length - 1 && <div style={{ width:1, height:16, background:`${SEV_COLORS[activeSG.severity]}44`, marginTop:2 }}/>}
                                </div>
                                <span
                                  style={{ fontSize:12, color:"var(--text-primary)", cursor:"pointer", fontWeight:500 }}
                                  onClick={() => { setSelected(n); setPanel("node"); if (!sidebarOpen) setSidebarOpen(true); }}
                                >{n.label[lang]}</span>
                                <span style={{ fontFamily:"var(--font-mono)", fontSize:10, color:"var(--text-muted)", marginLeft:"auto", flexShrink:0 }}>{n.year < 0 ? `${Math.abs(n.year)}BC` : n.year}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Nodos involucrados */}
                    <div style={{ display:"flex", gap:4, flexWrap:"wrap", marginBottom:12 }}>
                      {activeSG.nodes?.map(nid => {
                        const n = NODES.find(x => x.id === nid);
                        return n ? (
                          <span key={nid} className="tag"
                            style={{ background:CAT_COLORS[n.cat]+"18", color:CAT_COLORS[n.cat], border:`1px solid ${CAT_COLORS[n.cat]}33`, cursor:"pointer" }}
                            onClick={() => { setSelected(n); setPanel("node"); if (!sidebarOpen) setSidebarOpen(true); }}>
                            {n.label[lang]}
                          </span>
                        ) : null;
                      })}
                    </div>

                    <button className="btn" onClick={() => { setActiveSG(null); setPatternStep(-1); setSelected(null); }}
                      style={{ width:"100%", justifyContent:"center", fontSize:12 }}>
                      {t.patternViewNode}
                    </button>
                  </div>
                )}
              </>
            )}

            {/* Category legend — bottom right (hidden in pattern mode when activeSG is open) */}
            {!(patternMode && activeSG) && (
              <div style={{
                position:"absolute", bottom:16, right:16,
                background:"var(--bg-glass)", backdropFilter:"blur(12px)",
                border:"1px solid var(--border)", borderRadius:8, padding:"10px 14px",
                display:"flex", flexDirection:"column", gap:6,
              }}>
                {cats.map(cat => (
                  <div key={cat} style={{ display:"flex", alignItems:"center", gap:8, cursor:"pointer" }}
                    onClick={() => setActiveCat(activeCat===cat ? "all" : cat)}>
                    <span style={{ width:8, height:8, borderRadius:"50%", background:CAT_COLORS[cat], flexShrink:0 }}/>
                    <span style={{ fontFamily:"var(--font-ui)", fontSize:12, color: activeCat===cat ? CAT_COLORS[cat] : "var(--text-secondary)", fontWeight: activeCat===cat ? 600 : 400 }}>
                      {t.catLabels[cat]}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── HELP MODAL ── */}
      {showHelp && <HelpModal lang={lang} onClose={() => setShowHelp(false)} onLangChange={setLang}/>}

      {/* ── HINT DE PRIMER USO ─────────────────────────────────────────── */}
      {showHint && (
        <GraphHint
          lang={lang}
          onDismiss={() => setShowHint(false)}
        />
      )}
    </>
  );
}






