// ─── UAP ATLAS — SOURCES DATA ───────────────────────────────────────────────
// v4.1 · Fuentes documentales por nodo
// Estructura: { nodeId: [{ id, title{es,en}, url, type, authority, date, confidence, note?, quote? }] }

export const SOURCES = {
  grusch: [
    { id:"s1", title:{es:"Testimonio Grusch ante el Congreso",en:"Grusch Congressional Testimony"}, url:"https://oversight.house.gov/hearing/unidentified-anomalous-phenomena-implications-on-national-security-public-safety-and-government-transparency/", type:"congress", authority:"primary", date:"2023-07-26", confidence:"high", quote:{es:"'En 1933 se recuperó en Magenta una nave con forma de campana...'",en:"'In 1933 a bell-shaped craft was recovered in Magenta...'"} },
    { id:"s2", title:{es:"Declaración jurada — Grusch al Inspector General",en:"Sworn Declaration — Grusch to Inspector General"}, url:"https://www.aaro.mil/", type:"official", authority:"primary", date:"2023-04-20", confidence:"high", note:{es:"Declaración formal que detonó las audiencias del Congreso",en:"Formal declaration that triggered Congressional hearings"} },
  ],
  magenta1933: [
    { id:"s1", title:{es:"Testimonio Grusch — caso Magenta confirmado bajo juramento",en:"Grusch Testimony — Magenta case confirmed under oath"}, url:"https://oversight.house.gov/hearing/unidentified-anomalous-phenomena-implications-on-national-security-public-safety-and-government-transparency/", type:"congress", authority:"primary", date:"2023-07-26", confidence:"high" },
    { id:"s2", title:{es:"Kyiv Post — análisis del testimonio Grusch",en:"Kyiv Post — Grusch testimony analysis"}, url:"https://www.kyivpost.com/", type:"media", authority:"secondary", date:"2023-08-01", confidence:"medium" },
  ],
  malmstrom1967: [
    { id:"s1", title:{es:"National Press Club — UAP y Armas Nucleares 2021",en:"National Press Club — UAP and Nuclear Weapons 2021"}, url:"https://www.press.org/events/news-conferences/news-conference-unidentified-aerial-phenomenon-uap-and-nuclear-weapons", type:"official", authority:"primary", date:"2021-10-19", confidence:"high", note:{es:"Panel de oficiales USAF con declaraciones juradas sobre Malmstrom",en:"Panel of USAF officers with sworn statements about Malmstrom"} },
    { id:"s2", title:{es:"Declaración jurada del Capitán Robert Salas",en:"Captain Robert Salas sworn affidavit"}, url:"https://www.press.org/", type:"official", authority:"primary", date:"2010-09-27", confidence:"high" },
  ],
  wilson_memo: [
    { id:"s1", title:{es:"Memo Wilson-Davis — documento filtrado 2019",en:"Wilson-Davis Memo — leaked document 2019"}, url:"https://www.theblackvault.com/documentarchive/the-wilson-davis-memo/", type:"leaked", authority:"primary", date:"2002-10-16", confidence:"strong", note:{es:"15 páginas. No desmentido desde su filtración en 2019",en:"15 pages. Not refuted since its 2019 leak"} },
  ],
  pursue_r01: [
    { id:"s1", title:{es:"PURSUE Release 01 — war.gov/UFO",en:"PURSUE Release 01 — war.gov/UFO"}, url:"https://www.war.gov/UFO/", type:"official", authority:"primary", date:"2026-05-08", confidence:"high", note:{es:"162 archivos · 120 PDFs · 28 vídeos · 14 imágenes",en:"162 files · 120 PDFs · 28 videos · 14 images"} },
    { id:"s2", title:{es:"Análisis independiente — warufo.com",en:"Independent analysis — warufo.com"}, url:"https://warufo.com/", type:"explorer", authority:"secondary", date:"2026-05-09", confidence:"high" },
    { id:"s3", title:{es:"Índice semántico — ufo.gpt2077.com",en:"Semantic index — ufo.gpt2077.com"}, url:"https://ufo.gpt2077.com/", type:"explorer", authority:"secondary", date:"2026-05-10", confidence:"high" },
  ],
  rendlesham1980: [
    { id:"s1", title:{es:"Memorando Halt — Ministerio de Defensa UK 1981",en:"Halt Memo — UK Ministry of Defence 1981"}, url:"https://www.nationalarchives.gov.uk/", type:"foia", authority:"primary", date:"1981-01-13", confidence:"high", note:{es:"Documento oficial firmado por teniente coronel en activo. Obtenido via FOIA 1983",en:"Official document signed by active duty Lt. Colonel. Obtained via FOIA 1983"} },
    { id:"s2", title:{es:"Declaración jurada del Cnel. Halt — 2010",en:"Col. Halt sworn affidavit — 2010"}, url:"https://www.theblackvault.com/", type:"official", authority:"primary", date:"2010-09-20", confidence:"high" },
  ],
  nimitz2004: [
    { id:"s1", title:{es:"DoD autentica vídeos UAP — incluyendo Tic Tac",en:"DoD authenticates UAP videos — including Tic Tac"}, url:"https://www.defense.gov/News/Releases/Release/Article/2165713/statement-by-the-department-of-defense-on-the-release-of-historical-navy-videos/", type:"official", authority:"primary", date:"2020-04-27", confidence:"high" },
    { id:"s2", title:{es:"Testimonio Cmdr. Fravor ante el Congreso",en:"Cmdr. Fravor Congressional testimony"}, url:"https://oversight.house.gov/", type:"congress", authority:"primary", date:"2023-07-26", confidence:"high" },
  ],
  western_us_2025: [
    { id:"s1", title:{es:"PURSUE R01 — DOW-UAP-FBI · Evento Oeste EE.UU.",en:"PURSUE R01 — DOW-UAP-FBI · Western US Event"}, url:"https://www.war.gov/UFO/", type:"official", authority:"primary", date:"2026-05-08", confidence:"high", note:{es:"6 agentes federales con NVG · AARO midió el terreno",en:"6 federal agents with NVGs · AARO measured the terrain"} },
  ],
  congress2023: [
    { id:"s1", title:{es:"Audiencia oficial — Cámara de Representantes",en:"Official hearing — House of Representatives"}, url:"https://oversight.house.gov/hearing/unidentified-anomalous-phenomena-implications-on-national-security-public-safety-and-government-transparency/", type:"congress", authority:"primary", date:"2023-07-26", confidence:"high" },
  ],
  nyt2017: [
    { id:"s1", title:{es:"New York Times — Classified Pentagon Program",en:"New York Times — Classified Pentagon Program"}, url:"https://www.nytimes.com/2017/12/16/us/politics/pentagon-program-ufo-harry-reid.html", type:"media", authority:"primary", date:"2017-12-16", confidence:"high" },
  ],
  gallaudet: [
    { id:"s1", title:{es:"Testimonio Gallaudet ante el Congreso 2024",en:"Gallaudet Congressional testimony 2024"}, url:"https://oversight.house.gov/", type:"congress", authority:"primary", date:"2024-11-13", confidence:"high", note:{es:"Declaró haber sido objeto de 'operación de influencia de varias horas' por la AARO",en:"Declared having been subject to 'hours-long influence operation' by AARO"} },
  ],
  kirkpatrick: [
    { id:"s1", title:{es:"AARO Historical Record Report — Marzo 2024",en:"AARO Historical Record Report — March 2024"}, url:"https://www.aaro.mil/", type:"official", authority:"primary", date:"2024-03-08", confidence:"medium", note:{es:"Redactado sin entrevistar a los principales denunciantes. Fuente con sesgo institucional documentado",en:"Written without interviewing key whistleblowers. Source with documented institutional bias"} },
  ],
  disclosure2001: [
    { id:"s1", title:{es:"National Press Club — Disclosure Project Event",en:"National Press Club — Disclosure Project Event"}, url:"https://www.press.org/", type:"official", authority:"primary", date:"2001-05-09", confidence:"high", note:{es:"20+ testigos militares y gubernamentales bajo juramento",en:"20+ military and government witnesses under oath"} },
  ],
};

// ─── HELP CONTENT ─────────────────────────────────────────────────────────────

// SOURCES exported above
