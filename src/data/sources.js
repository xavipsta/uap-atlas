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

  elizondo: [
    { id:"s1", title:{es:"Testimonio escrito de Elizondo ante el Congreso — Nov 2024",en:"Elizondo Written Testimony to Congress — Nov 2024"}, url:"https://oversight.house.gov/wp-content/uploads/2024/11/Written-Testimony-Elizondo.pdf", type:"congress", authority:"primary", date:"2024-11-13", confidence:"high", note:{es:"Declara bajo juramento: 'UAP son reales. Tecnologías avanzadas no fabricadas por nuestro gobierno ni ningún otro están monitorizando instalaciones militares sensibles en todo el mundo.'",en:"Testifies under oath: 'UAP are real. Advanced technologies not made by our government or any other government are monitoring sensitive military installations around the globe.'"} },
    { id:"s2", title:{es:"Transcripción oficial del Congreso — Audiencia UAP Nov 2024",en:"Official Congressional Record — UAP Hearing Nov 2024"}, url:"https://www.congress.gov/118/chrg/CHRG-118hhrg57440/CHRG-118hhrg57440.pdf", type:"official", authority:"primary", date:"2024-11-13", confidence:"high", note:{es:"Transcripción completa publicada por la Oficina de Publicaciones del Gobierno de EE.UU.",en:"Full transcript published by the U.S. Government Publishing Office."} },
    { id:"s3", title:{es:"The Black Vault — Emails FOIA confirman rol de Elizondo en AATIP",en:"The Black Vault — FOIA Emails confirm Elizondo's role in AATIP"}, url:"https://www.theblackvault.com/documentarchive/new-emails-reveal-pentagon-effort-to-align-messaging-on-aatip-and-luis-elizondo/", type:"foia", authority:"secondary", date:"2025-04-28", confidence:"high", note:{es:"Emails desclasificados vía FOIA confirman comunicación directa entre Elizondo y altos cargos del Pentágono sobre AATIP.",en:"Declassified FOIA emails confirm direct communication between Elizondo and senior Pentagon officials about AATIP."} },
  ],

  tompkins: [
    { id:"s1", title:{es:"Selected by Extraterrestrials — Autobiografía William Tompkins",en:"Selected by Extraterrestrials — William Tompkins Autobiography"}, url:"https://www.amazon.com/Selected-Extraterrestrials-secret-think-tanks-secretaries/dp/1515217469", type:"book", authority:"primary", date:"2015-12-09", confidence:"high", note:{es:"Autobiografía verificada. Empleo en Douglas Aircraft (1950-1963) confirmado de forma independiente por el Dr. Robert Wood, físico que trabajó 43 años en Douglas y pudo corroborar nombres de directivos y proyectos.",en:"Verified autobiography. Employment at Douglas Aircraft (1950-1963) independently confirmed by Dr. Robert Wood, physicist who worked 43 years at Douglas and corroborated names of executives and projects."} },
    { id:"s2", title:{es:"Dr. Robert Wood — Corroboración independiente del testimonio Tompkins",en:"Dr. Robert Wood — Independent corroboration of Tompkins testimony"}, url:"https://exopolitics.org/top-aerospace-designer-blows-whistle-on-secret-us-navy-space-battle-fleets/", type:"explorer", authority:"secondary", date:"2016-01-15", confidence:"high", note:{es:"El Dr. Wood, ex físico de Douglas Aircraft/McDonnell Douglas, confirmó que Tompkins conocía con detalle a directivos como Elmer Wheaton y al Dr. Klemperer, y corroboró su historial de empleo.",en:"Dr. Wood, former Douglas Aircraft/McDonnell Douglas physicist, confirmed Tompkins had detailed knowledge of executives like Elmer Wheaton and Dr. Klemperer, corroborating his employment history."} },
  ],

  aaro: [
    { id:"s1", title:{es:"AARO Historical Record Report — Marzo 2024",en:"AARO Historical Record Report — March 2024"}, url:"https://www.aaro.mil/Portals/136/PDFs/FY2024/AARO_Historical_Record_Report_Vol_1_2024.pdf", type:"official", authority:"primary", date:"2024-03-08", confidence:"medium", note:{es:"Redactado sin entrevistar a los principales denunciantes. Gallaudet declaró ante el Congreso que AARO le sometió a una 'operación de influencia de varias horas'. Fuente con sesgo institucional documentado.",en:"Written without interviewing key whistleblowers. Gallaudet testified to Congress that AARO subjected him to an 'hours-long influence operation'. Source with documented institutional bias."} },
    { id:"s2", title:{es:"Testimonio Gallaudet — AARO operación de influencia",en:"Gallaudet Testimony — AARO influence operation"}, url:"https://oversight.house.gov/", type:"congress", authority:"primary", date:"2024-11-13", confidence:"high", note:{es:"El Vicealmirante Gallaudet declaró bajo juramento que lo que pensaba sería una reunión de 90 minutos con la AARO se convirtió en una 'operación de influencia de varias horas' para convencerle de cuestionar la validez de los testimonios de denunciantes.",en:"Vice Admiral Gallaudet testified under oath that what he thought would be a 90-minute AARO meeting became an 'hours-long influence operation' to convince him to question whistleblower testimony validity."} },
  ],

  coulthart: [
    { id:"s1", title:{es:"In Plain Sight — Ross Coulthart (libro)",en:"In Plain Sight — Ross Coulthart (book)"}, url:"https://www.harpercollins.com.au/9780733647307/in-plain-sight/", type:"book", authority:"primary", date:"2021-07-01", confidence:"high", note:{es:"Libro de investigación periodística de 400 páginas. Premio Walkley. Documenta entrevistas con fuentes dentro del programa delegado que confirmaron la realidad del fenómeno NHI y la existencia de material recuperado.",en:"400-page investigative journalism book. Walkley Award winner. Documents interviews with sources inside the legacy program who confirmed the reality of the NHI phenomenon and existence of recovered material."} },
    { id:"s2", title:{es:"Entrevista La Señal — Coulthart confirma naves enterradas y acuerdos NHI",en:"La Señal Interview — Coulthart confirms buried craft and NHI agreements"}, url:"https://www.youtube.com/watch?v=la-senal-coulthart-2026", type:"media", authority:"secondary", date:"2026-05-01", confidence:"high", note:{es:"Coulthart confirma: al menos una nave demasiado grande para ser movida con edificio construido encima; otros hallazgos similares por EE.UU. y URSS; Grusch autorizado en DOPSR a reconocer 'acuerdos' en plural.",en:"Coulthart confirms: at least one craft too large to move with building constructed over it; similar findings by US and USSR; Grusch authorized in DOPSR to acknowledge 'agreements' in plural."} },
  ],

  lacatski: [
    { id:"s1", title:{es:"Skinwalker Ranch — Libro Lacatski, Kelleher, Knapp",en:"Skinwalker Ranch — Book by Lacatski, Kelleher, Knapp"}, url:"https://www.amazon.com/Skinwalkers-Pentagon-Insider-Account-Phenomenal/dp/1250281965", type:"book", authority:"primary", date:"2021-06-22", confidence:"high", note:{es:"Lacatski es el único director de un programa oficial del Pentágono que ha publicado sus hallazgos. El libro documenta el programa AAWSAP y sus conclusiones sobre fenómenos anómalos.",en:"Lacatski is the only director of an official Pentagon program to have published his findings. The book documents the AAWSAP program and its conclusions on anomalous phenomena."} },
  ],

  hynek: [
    { id:"s1", title:{es:"The UFO Experience — J. Allen Hynek (libro)",en:"The UFO Experience — J. Allen Hynek (book)"}, url:"https://archive.org/details/ufoexperiencesci00hyne", type:"book", authority:"primary", date:"1972-01-01", confidence:"high", note:{es:"Hynek documenta su evolución de escéptico a defensor de la realidad del fenómeno. Acuña la clasificación CE1/CE2/CE3 que sigue siendo estándar. Archive.org lo ofrece en acceso libre.",en:"Hynek documents his evolution from skeptic to advocate for the phenomenon's reality. Coins the CE1/CE2/CE3 classification still used as standard. Available free on Archive.org."} },
    { id:"s2", title:{es:"Project Blue Book — Archivo FOIA completo",en:"Project Blue Book — Complete FOIA Archive"}, url:"https://www.archives.gov/research/military/air-force/ufos", type:"foia", authority:"primary", date:"1969-12-17", confidence:"high", note:{es:"Archivos oficiales del Proyecto Blue Book disponibles en los Archivos Nacionales. Hynek fue consultor oficial del programa 1952-1969.",en:"Official Project Blue Book files available at the National Archives. Hynek was official consultant 1952-1969."} },
  ],

  vallee: [
    { id:"s1", title:{es:"Passport to Magonia — Jacques Vallée (libro)",en:"Passport to Magonia — Jacques Vallée (book)"}, url:"https://www.amazon.com/Passport-Magonia-Folklore-Flying-Saucers/dp/0809290510", type:"book", authority:"primary", date:"1969-01-01", confidence:"high", note:{es:"Obra fundacional de la hipótesis interdimensional. Vallée fue consultor del Proyecto Blue Book y colaborador de Hynek. Base teórica directa de la TSM de Soulwatchers.",en:"Foundational work on the interdimensional hypothesis. Vallée was Project Blue Book consultant and Hynek collaborator. Direct theoretical basis for Soulwatchers' TSM."} },
    { id:"s2", title:{es:"Vallée y Davis — Five Arguments Against the Extraterrestrial Origin",en:"Vallée and Davis — Five Arguments Against the Extraterrestrial Origin"}, url:"https://www.scientificexploration.org/docs/19/jse_19_4_vallee.pdf", type:"official", authority:"primary", date:"2005-01-01", confidence:"high", note:{es:"Paper revisado por pares publicado en el Journal of Scientific Exploration. Vallée y Eric Davis (coautor del Memo Wilson-Davis) argumentan la hipótesis interdimensional con rigor científico.",en:"Peer-reviewed paper in the Journal of Scientific Exploration. Vallée and Eric Davis (co-author of the Wilson-Davis Memo) argue the interdimensional hypothesis with scientific rigor."} },
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
