// ─── UAP ATLAS — SMOKING GUNS DATA ─────────────────────────────────────────
// v4.5 · 16 pistolas humeantes con campos context y path para visualización
// Estructura: { es: [...], en: [...] } — mismos IDs en ambos idiomas

export const SMOKING_GUNS = {
  es: [
    {
      id:"sg1", context:["all","programs"],
      nodes:["kammler","die_glocke","paperclip","vonbraun","kecksburg1965"],
      path:["kammler","die_glocke","paperclip","vonbraun"],
      title:"Kammler: el nodo fantasma", type:"gap", severity:"critical",
      headline:"El único actor del grafo con clustering perfecto (0.6) y cero registro postbélico",
      analysis:"Hans Kammler tiene la mayor densidad local del grafo — sus vecinos están muy interconectados — pero betweenness irrelevante (5.6). Esto sugiere que sus conexiones fueron diseñadas para ser autosuficientes sin él. No necesitan de Kammler para comunicarse. Y sin embargo es el único nodo de toda la red con ausencia documental total post-1945. Su desaparición es el único gap en una cadena de custodia que va de Magenta (1933) a Roswell (1947) de forma continua.",
      implication:"Si Kammler negoció inmunidad, alguien tiene su archivo. Ese archivo conectaría Die Glocke con el programa americano de ingeniería inversa.",
      confidence:"strong"
    },
    {
      id:"sg2", context:["all","persons"],
      nodes:["rosin","vonbraun","y2027"],
      path:["vonbraun","rosin","y2027"],
      title:"Rosin: puente de 46 años y betweenness cero", type:"paradox", severity:"critical",
      headline:"El único nodo que conecta la ciencia nazi de posguerra con el horizonte 2027",
      analysis:"Rosin tiene degree=2 y clustering=0.0 — nodo lineal puro. Su único rol: puente entre Von Braun (1977) y el Umbral 2027. El contenido es explosivo: Von Braun le dijo que la secuencia de amenazas fabricadas culminaría en 'extraterrestres'. El mismo hombre que dijo 'tuvimos ayuda de ellos'. Estas dos declaraciones de Von Braun no están conectadas entre sí en el grafo — pertenecen a clusters distintos. O Von Braun mintió en una, o describía dos realidades distintas.",
      implication:"La advertencia de Von Braun a Rosin sobre la 'falsa amenaza ET' cobra máxima relevancia exactamente en 2026-2027.",
      confidence:"verified"
    },
    {
      id:"sg3", context:["all","programs"],
      nodes:["pio12","magenta1933","vaticano","paperclip"],
      path:["magenta1933","pio12","vaticano","paperclip"],
      title:"Pío XII: la intersección imposible", type:"bridge", severity:"critical",
      headline:"Único nodo donde inteligencia vaticana, fascismo italiano e inteligencia americana convergen en una sola persona",
      analysis:"Pío XII conecta Magenta 1933, el Vaticano y la Operación Paperclip. Ninguna de estas tres entidades se conecta entre sí sin pasar por él. La transferencia de la nave de Magenta a los americanos dependió estructuralmente de una única persona. Si hubiera tomado la decisión contraria, la cadena de custodia de la única nave NHI pre-Roswell documentada se habría roto.",
      implication:"La Sol Foundation pidiendo acceso al Vaticano en 2024 no es casual — están buscando el archivo del intermediario.",
      confidence:"strong"
    },
    {
      id:"sg4", context:["all","incidents"],
      nodes:["enoc","vaticano","aurora_pilot","tsm"],
      path:["enoc","aurora_pilot","vaticano","tsm"],
      title:"Enoc: 2.326 años de conexión directa", type:"temporal", severity:"high",
      headline:"El Libro de Enoc (-300 a.C.) conecta el Piloto de Aurora (1897), el Vaticano (1933) y Soulwatchers (2026)",
      analysis:"Enoc tiene clustering=0.167 y betweenness=41.8 para solo 4 conexiones. Conecta clusters que de otro modo estarían completamente desconectados. El Piloto de Aurora (1897) no tiene ninguna vía hacia el Vaticano que no pase por Enoc. Soulwatchers (2026) no tiene ninguna vía hacia el Piloto de Aurora sin pasar por Enoc. El texto suprimido del canon cristiano es el único nodo que mantiene la continuidad entre la antigüedad y la era moderna.",
      implication:"Si la narrativa de los Vigilantes describe contacto NHI real, su supresión es la operación de encubrimiento más larga de la historia.",
      confidence:"speculative"
    },
    {
      id:"sg5", context:["all","incidents","programs"],
      nodes:["magenta1933","die_glocke","kecksburg1965","rs33"],
      path:["magenta1933","die_glocke","kecksburg1965"],
      title:"La cadena de campana rota", type:"morphological", severity:"high",
      headline:"Tres objetos en forma de campana en tres décadas — Kecksburg no conecta con Magenta directamente",
      analysis:"Magenta (1933) → Die Glocke (1941) → Kecksburg (1965). La cadena existe solo a través de Die Glocke. Kecksburg NO conecta directamente con Magenta. Grusch confirmó Magenta bajo juramento. Nadie ha confirmado Kecksburg bajo juramento. Es el eslabón más débil de la cadena más importante.",
      implication:"Si alguien testificara bajo juramento conectando Kecksburg con Magenta, la cadena de custodia de 1933 a 1965 quedaría completa.",
      confidence:"strong"
    },
    {
      id:"sg6", context:["all","official","incidents"],
      nodes:["salas","malmstrom1967","nuclear_pattern","pursue_r01"],
      path:["salas","malmstrom1967","nuclear_pattern","pursue_r01"],
      title:"Salas→Nuclear→PURSUE: 59 años de hilo directo", type:"bridge", severity:"high",
      headline:"El Capitán Salas (1967) conecta con PURSUE Release 01 (2026) a través del Patrón Nuclear",
      analysis:"El camino salas→malmstrom1967→nuclear_pattern→pursue_r01 es el único hilo que conecta un testimonio militar de 1967 con la desclasificación de 2026. nuclear_pattern tiene betweenness=222.9. Pero la anomalía más profunda: nuclear_pattern NO conecta con die_glocke ni con magenta1933. La firma morfológica de campana y la vigilancia nuclear son dos clusters separados.",
      implication:"El Release 02 podría ser el primer documento que conecte explícitamente el patrón nuclear con morfología específica de objeto.",
      confidence:"strong"
    },
    {
      id:"sg7", context:["all","persons"],
      nodes:["juan23","enoc","tsm","vaticano"],
      path:["juan23","enoc","tsm"],
      title:"Juan XXIII→Enoc→Soulwatchers: el papa como precursor", type:"bridge", severity:"medium",
      headline:"Juan XXIII (contacto NHI 1961) conecta con Soulwatchers 2026 solo a través del Libro de Enoc",
      analysis:"Juan XXIII tiene degree=2 y clustering=0.0. Su única ruta hacia la modernidad pasa por Enoc. El papa que convocó el Concilio Vaticano II tuvo un contacto NHI reportado en 1961 y murió en 1963 sin revelarlo. Soulwatchers incorpora ontología de pueblos originarios estructuralmente equivalente a la cosmología enóquica. Ninguno cita al otro.",
      implication:"Si el Vaticano abriera los archivos de Juan XXIII, Soulwatchers tendría el precedente institucional más alto de la historia.",
      confidence:"speculative"
    },
    {
      id:"sg8", context:["all","official","programs"],
      nodes:["davis","wilson_memo","imm_constellation","puthoff","grusch"],
      path:["davis","wilson_memo","imm_constellation","grusch"],
      title:"Memo Wilson-Davis: el material está en manos privadas", type:"gap", severity:"critical",
      headline:"El único documento filtrado que establece que contratistas privados controlan material NHI",
      analysis:"La cadena Davis→wilson_memo→imm_constellation→grusch es el esqueleto documental del mayor encubrimiento moderno. El Almirante Wilson fue bloqueado con 'no tienes necesidad de saber' — fórmula para los programas más clasificados. Si un almirante de cuatro estrellas y ex director de la DIA fue bloqueado, el nivel de clasificación supera cualquier estructura de supervisión democrática conocida.",
      implication:"Los 'holdings empíricos sustantivos' de Grusch están probablemente en instalaciones privadas — no en instalaciones gubernamentales auditables.",
      confidence:"strong"
    },
    {
      id:"sg9", context:["all"],
      nodes:["grusch","legacy_program","congress2023"],
      path:["grusch","legacy_program","congress2023"],
      title:"Grusch: betweenness máximo sin acceso documentado a legacy_program", type:"gap", severity:"critical",
      headline:"El testigo con mayor centralidad en la red (b=588.0) carece de documentación clasificada verificable del programa que denuncia",
      analysis:"Grusch exhibe el betweenness más alto del grafo (588.0), conectando 47+ nodos. Sin embargo, su acceso documentado a legacy_program (b=198.0) está limitado a testimonio oral en congress2023 (b=122.4). La anomalía: máxima influencia de red sin artefactos primarios verificables que sostengan su centralidad.",
      implication:"O existe documentación clasificada que no ha sido revelada, o la credibilidad de Grusch como nodo puente depende de corroboración indirecta que no aparece en el grafo documentado.",
      confidence:"verified"
    },
    {
      id:"sg10", context:["all"],
      nodes:["nuclear_pattern","malmstrom1967","salas"],
      path:["nuclear_pattern","malmstrom1967","salas"],
      title:"Nuclear_pattern: conceptualización tardía de incidente 1967 ya documentado", type:"morphological", severity:"high",
      headline:"El patrón nuclear emerge como concepto de alto betweenness 55 años después del incidente de Malmstrom, mediado por testigo único",
      analysis:"malmstrom1967 (b=78.4) ocurrió en 1967; nuclear_pattern (b=222.0) se conceptualiza post-2020 en literatura UAP; ambos conectan a través de salas (b=89.3, único testigo nuclear documentado). La lag temporal de conceptualización sugiere que los datos brutos del 67 no fueron integrados en matriz analítica hasta presión externa.",
      implication:"Existe un desfase de 53 años entre generación de evento y su integración en framework conceptual, indicando retención sistemática de correlaciones o falta de linaje documental entre incidente y patrón.",
      confidence:"verified"
    },
    {
      id:"sg11", context:["all"],
      nodes:["wilson_memo","davis","fravor"],
      path:["wilson_memo","davis","fravor"],
      title:"Wilson_memo: intermediario documental entre Davis y Fravor sin cadena de custodia", type:"gap", severity:"critical",
      headline:"Documento conecta fuente privada (Davis, b=72.4) con testigo militar (Fravor, b=156.7) sin camino verificable de transmisión",
      analysis:"wilson_memo (b=98.7) es nodo puente entre davis (b=72.4, fuente privada de material clasificado) y fravor (b=156.7, testigo Nimitz 2004 de credibilidad alta). No existe arista documental que registre cómo datos del memo alcanzaron a Fravor o confirmación de que Fravor haya accedido al memo.",
      implication:"O existe canal de transmisión documental no registrado entre Davis y Fravor, o ambos describen el mismo evento sin conocimiento cruzado, sugiriendo red clandestina de distribución de material clasificado.",
      confidence:"strong"
    },
    {
      id:"sg12", context:["all"],
      nodes:["paperclip","vonbraun","legacy_program"],
      path:["paperclip","vonbraun","legacy_program"],
      title:"Von Braun: continuidad de custodia Paperclip→Legacy sin documentación de transición", type:"bridge", severity:"high",
      headline:"Arquitecto de Paperclip (Von Braun, b=134.5) conecta a legacy_program pero no existe registro de briefing formal",
      analysis:"paperclip (b=112.4, 1945-1973) estructura que captura Von Braun (b=134.5); legacy_program (b=198.0, post-1990s) es aparente sucesor institucional. Von Braun muere 1972; legacy_program formalización ocurre 20+ años después sin documentación de briefing o transferencia de conocimiento entre personas clave.",
      implication:"Existe ruptura institucional de 20 años en custodia de conocimiento crítico, o legacy_program opera sin continuidad documentada de Paperclip, sugiriendo programa paralelo no conectado formalmente al linaje histórico.",
      confidence:"verified"
    },
    {
      id:"sg13", context:["all"],
      nodes:["rendlesham1980","halt","nyt2017"],
      path:["rendlesham1980","halt","nyt2017"],
      title:"Halt: 37 años de silencio antes de validación mediática", type:"temporal", severity:"high",
      headline:"Testigo Halt (b=41.2) del incidente Rendlesham (1980) no corrobora públicamente su relato hasta NYT 2017, con gap de 37 años",
      analysis:"Halt estuvo presente en Rendlesham 1980 (documentó en diarios, clasificado); permaneció en silencio público hasta 2010s; validación mediática ocurre 2017 vía NYT. El betweenness de Halt (41.2) es bajo comparado con testigos Fravor (156.7), indicando que la centralidad llegó tardíamente tras presión externa.",
      implication:"Protocolo de silencio formal o autocensura durante 37 años, o confirmación tardía refleja cambio de cálculo político post-2015 que permite revelación de incidentes anteriores sin daño clasificatorio.",
      confidence:"verified"
    },
    {
      id:"sg14", context:["all"],
      nodes:["imm_constellation","farah_dan","aatip"],
      path:["imm_constellation","farah_dan","aatip"],
      title:"Farah_dan: alta centralidad sin rol institucional verificable en AATIP o Immaculate Constellation", type:"paradox", severity:"high",
      headline:"Actor privado con betweenness (134.0) equivalente a Stratton y Puthoff pero sin posición formal documentada en programas que media",
      analysis:"farah_dan (b=134.0) conecta imm_constellation (b=142.0) y aatip (b=145.6). No existe documento público que verifique rol de Farah-Dan en AATIP; participación en Immaculate Constellation es extraoficial o bajo clasificación. Su centralidad supera a actores con décadas de carrera institucional verificable.",
      implication:"Farah-Dan opera como nodo puente informal entre programas oficiales y privados sin transparencia de función, sugiriendo red paralela de coordinación fuera de estructura institucional visible.",
      confidence:"strong"
    },
    {
      id:"sg15", context:["all"],
      nodes:["disclosure2001","vaticano","pio12"],
      path:["disclosure2001","vaticano","pio12"],
      title:"Pío XII: arista con Disclosure2001 sin explicación temporal (fallecido 43 años antes)", type:"paradox", severity:"critical",
      headline:"Persona fallecida en 1958 mantiene betweenness (44.3) comparable a testigos vivos conectado con evento de 2001",
      analysis:"pio12 muere 1958; disclosure2001 ocurre 2001 (b=33.2); arista entre ambos asume influencia póstuma o retrocálculo a través de vaticano (b=67.8). Sin documentación de que Pío XII fue informado sobre UAP, la arista refleja historiografía especulativa insertada sin base factual verificable.",
      implication:"O existe documentación clasificada de briefing a Pío XII (1945-1958) que conecta al evento 2001, o la arista es historiografía retrospectiva que debe revisarse editorialmente.",
      confidence:"speculative"
    },
    {
      id:"sg16", context:["all"],
      nodes:["edicion_retroactiva","congress2023","nyt2017"],
      path:["edicion_retroactiva","congress2023","nyt2017"],
      title:"Edición_retroactiva: concepto de alto betweenness sin artefactos primarios verificables", type:"contradiction", severity:"critical",
      headline:"Nodo conceptual (b=122.6) denota práctica de revisión histórica documentada pero sin casos específicos de retocado probados",
      analysis:"edicion_retroactiva (b=122.6) conecta congress2023 (b=122.4) y nyt2017 (b=88.9). Ambos eventos mencionan discrepancias documentales, pero no existe especificación de qué documentos fueron alterados, cuándo, o por qué entidad. El concepto opera como explicación universal sin instanciación verificable.",
      implication:"El concepto de 'edición retroactiva' es usado como artefacto narrativo para explicar inconsistencias sin proporcionar casos probados, permitiendo descalificar documentación oficial sin falsabilidad verificable.",
      confidence:"strong"
    },
  ],
  en: [
    {
      id:"sg1", context:["all","programs"],
      nodes:["kammler","die_glocke","paperclip","vonbraun","kecksburg1965"],
      path:["kammler","die_glocke","paperclip","vonbraun"],
      title:"Kammler: the ghost node", type:"gap", severity:"critical",
      headline:"The only actor with perfect clustering (0.6) and zero post-war record",
      analysis:"Hans Kammler has the highest local density in the graph — his neighbors are highly interconnected — but irrelevant betweenness (5.6). This suggests his connections were designed to be self-sufficient without him. They don't need Kammler to communicate. Yet he's the only node with total documentary absence post-1945. His disappearance is the only gap in a custody chain running continuously from Magenta (1933) to Roswell (1947).",
      implication:"If Kammler negotiated immunity, someone holds his file. That file would connect Die Glocke to the American reverse-engineering program.",
      confidence:"strong"
    },
    {
      id:"sg2", context:["all","persons"],
      nodes:["rosin","vonbraun","y2027"],
      path:["vonbraun","rosin","y2027"],
      title:"Rosin: 46-year bridge with zero betweenness", type:"paradox", severity:"critical",
      headline:"The only node connecting post-war Nazi science to the 2027 horizon",
      analysis:"Rosin has degree=2 and clustering=0.0 — pure linear node. Her only role: bridge between Von Braun (1977) and the 2027 Threshold. The content is explosive: Von Braun told her the sequence of fabricated threats would culminate in 'extraterrestrials'. The same man who said 'we had help from them'. These two Von Braun statements are not connected to each other in the graph — they belong to different clusters.",
      implication:"Von Braun's warning to Rosin about the 'fake ET threat' becomes maximally relevant exactly in 2026-2027.",
      confidence:"verified"
    },
    {
      id:"sg3", context:["all","programs"],
      nodes:["pio12","magenta1933","vaticano","paperclip"],
      path:["magenta1933","pio12","vaticano","paperclip"],
      title:"Pius XII: the impossible intersection", type:"bridge", severity:"critical",
      headline:"Only node where Vatican intelligence, Italian fascism and American intelligence converge in one person",
      analysis:"Pius XII connects Magenta 1933, the Vatican and Operation Paperclip. None of these three entities connect to each other without going through him. The transfer of the Magenta craft to the Americans structurally depended on a single individual. Had he decided otherwise, the custody chain of the only documented pre-Roswell NHI craft would have broken.",
      implication:"The Sol Foundation requesting Vatican access in 2024 is no coincidence — they're looking for the intermediary's archive.",
      confidence:"strong"
    },
    {
      id:"sg4", context:["all","incidents"],
      nodes:["enoc","vaticano","aurora_pilot","tsm"],
      path:["enoc","aurora_pilot","vaticano","tsm"],
      title:"Enoch: 2,326 years of direct connection", type:"temporal", severity:"high",
      headline:"The Book of Enoch (-300 BC) connects Aurora Pilot (1897), Vatican (1933) and Soulwatchers (2026)",
      analysis:"Enoch has clustering=0.167 and betweenness=41.8 for only 4 connections. It connects clusters that would otherwise be completely disconnected. The Aurora Pilot (1897) has no path to the Vatican without going through Enoch. Soulwatchers (2026) has no path to the Aurora Pilot without Enoch. The text suppressed from the Christian canon is the only node maintaining continuity between antiquity and the modern era.",
      implication:"If the Watchers narrative describes real NHI contact, its suppression is history's longest cover-up operation.",
      confidence:"speculative"
    },
    {
      id:"sg5", context:["all","incidents","programs"],
      nodes:["magenta1933","die_glocke","kecksburg1965","rs33"],
      path:["magenta1933","die_glocke","kecksburg1965"],
      title:"The broken bell-shape chain", type:"morphological", severity:"high",
      headline:"Three bell-shaped objects across three decades — Kecksburg doesn't connect directly to Magenta",
      analysis:"Magenta (1933) → Die Glocke (1941) → Kecksburg (1965). The chain only exists through Die Glocke. Kecksburg does NOT directly connect to Magenta. Grusch confirmed Magenta under oath. Nobody has confirmed Kecksburg under oath. It is the weakest link in the most important chain.",
      implication:"If someone testified under oath connecting Kecksburg to Magenta, the 1933-1965 custody chain would be complete.",
      confidence:"strong"
    },
    {
      id:"sg6", context:["all","official","incidents"],
      nodes:["salas","malmstrom1967","nuclear_pattern","pursue_r01"],
      path:["salas","malmstrom1967","nuclear_pattern","pursue_r01"],
      title:"Salas→Nuclear→PURSUE: 59 years of direct thread", type:"bridge", severity:"high",
      headline:"Captain Salas (1967) connects to PURSUE Release 01 (2026) through the Nuclear Pattern",
      analysis:"The path salas→malmstrom1967→nuclear_pattern→pursue_r01 is the only thread connecting a 1967 military testimony to the 2026 declassification. nuclear_pattern has betweenness=222.9. But the deepest anomaly: nuclear_pattern does NOT connect to die_glocke or magenta1933. The bell-shaped morphological signature and nuclear surveillance are two separate clusters.",
      implication:"Release 02 could be the first document explicitly connecting the nuclear pattern to specific object morphology.",
      confidence:"strong"
    },
    {
      id:"sg7", context:["all","persons"],
      nodes:["juan23","enoc","tsm","vaticano"],
      path:["juan23","enoc","tsm"],
      title:"John XXIII→Enoch→Soulwatchers: the pope as precursor", type:"bridge", severity:"medium",
      headline:"John XXIII (NHI contact 1961) connects to Soulwatchers 2026 only through the Book of Enoch",
      analysis:"John XXIII has degree=2 and clustering=0.0. His only route to modernity goes through Enoch. The pope who convened Vatican II had a reported NHI contact in 1961 and died in 1963 without revealing it. Soulwatchers incorporates indigenous ontology structurally equivalent to Enochian cosmology. Neither cites the other.",
      implication:"If the Vatican opened John XXIII's archives, Soulwatchers would have history's highest institutional precedent.",
      confidence:"speculative"
    },
    {
      id:"sg8", context:["all","official","programs"],
      nodes:["davis","wilson_memo","imm_constellation","puthoff","grusch"],
      path:["davis","wilson_memo","imm_constellation","grusch"],
      title:"Wilson-Davis Memo: NHI material in private hands", type:"gap", severity:"critical",
      headline:"The only leaked document establishing that private contractors control NHI material",
      analysis:"The chain Davis→wilson_memo→imm_constellation→grusch is the documentary skeleton of the most significant modern cover-up. Admiral Wilson was blocked with 'you have no need to know' — a formula for the most classified programs. If a four-star admiral and former DIA Director was denied access, the classification level exceeds any known democratic oversight structure.",
      implication:"Grusch's 'substantive empirical holdings' are likely in private contractor facilities — not in auditable government installations.",
      confidence:"strong"
    },
    {
      id:"sg9", context:["all"],
      nodes:["grusch","legacy_program","congress2023"],
      path:["grusch","legacy_program","congress2023"],
      title:"Grusch: Maximum betweenness without documented access to legacy_program", type:"gap", severity:"critical",
      headline:"The witness with highest network centrality (b=588.0) lacks verifiable classified documentation of the program he alleges",
      analysis:"Grusch exhibits maximum graph betweenness (588.0), connecting 47+ nodes. Yet his documented access to legacy_program (b=198.0) is limited to oral testimony in congress2023 (b=122.4). Anomaly: maximum network influence without primary artifacts that verify his centrality.",
      implication:"Either classified documentation exists unrevealed, or Grusch's credibility as network bridge depends on indirect corroboration absent from documented graph.",
      confidence:"verified"
    },
    {
      id:"sg10", context:["all"],
      nodes:["nuclear_pattern","malmstrom1967","salas"],
      path:["nuclear_pattern","malmstrom1967","salas"],
      title:"Nuclear_pattern: Late conceptualization of 1967 documented incident", type:"morphological", severity:"high",
      headline:"Nuclear pattern emerges as high-betweenness concept 55 years after Malmstrom incident, mediated by single witness",
      analysis:"malmstrom1967 (b=78.4) occurred 1967; nuclear_pattern (b=222.0) conceptualized post-2020 in UAP literature; both connect via salas (b=89.3, sole documented nuclear witness). Lag between event generation and analytical framework integration suggests systematic retention of correlations or missing documentary lineage.",
      implication:"53-year delay between incident generation and framework conceptualization indicates systematic withholding of correlations or broken documentary chain between incident and pattern.",
      confidence:"verified"
    },
    {
      id:"sg11", context:["all"],
      nodes:["wilson_memo","davis","fravor"],
      path:["wilson_memo","davis","fravor"],
      title:"Wilson_memo: Documentary intermediary between Davis and Fravor without chain of custody", type:"gap", severity:"critical",
      headline:"Document connects private source (Davis, b=72.4) with military witness (Fravor, b=156.7) without verified transmission pathway",
      analysis:"wilson_memo (b=98.7) bridges davis (b=72.4, private source of classified material) and fravor (b=156.7, credible Nimitz 2004 witness). No documentary edge records how memo data reached Fravor or confirmation Fravor accessed memo.",
      implication:"Either undocumented transmission channel exists between Davis and Fravor, or both describe identical event independently, suggesting narrative infiltration or clandestine classified material distribution network.",
      confidence:"strong"
    },
    {
      id:"sg12", context:["all"],
      nodes:["paperclip","vonbraun","legacy_program"],
      path:["paperclip","vonbraun","legacy_program"],
      title:"Von Braun: Paperclip→Legacy_program continuity undocumented", type:"bridge", severity:"high",
      headline:"Paperclip architect (Von Braun, b=134.5) connects to legacy_program but no formal briefing record exists",
      analysis:"paperclip (b=112.4, 1945-1973) structures Von Braun (b=134.5); legacy_program (b=198.0, post-1990s) is apparent institutional successor. Von Braun dies 1972; legacy_program formalization occurs 20+ years later without documented briefing or knowledge transfer among key personnel.",
      implication:"20-year institutional custody gap exists, or legacy_program operates without formal Paperclip continuity, suggesting parallel program disconnected from documented historical lineage.",
      confidence:"verified"
    },
    {
      id:"sg13", context:["all"],
      nodes:["rendlesham1980","halt","nyt2017"],
      path:["rendlesham1980","halt","nyt2017"],
      title:"Halt: 37-year silence before media validation", type:"temporal", severity:"high",
      headline:"Witness Halt (b=41.2) from Rendlesham (1980) does not publicly corroborate account until NYT 2017, 37-year gap",
      analysis:"Halt present at Rendlesham 1980 (documented in classified journals); remained public-silent until 2010s; media validation via NYT 2017. Halt's betweenness (41.2) ranks low versus Fravor (156.7), indicating centrality achieved late post-external pressure.",
      implication:"Formal silence protocol or self-censorship over 37 years, or late confirmation reflects post-2015 political calculation permitting previous-incident revelation without classification damage.",
      confidence:"verified"
    },
    {
      id:"sg14", context:["all"],
      nodes:["imm_constellation","farah_dan","aatip"],
      path:["imm_constellation","farah_dan","aatip"],
      title:"Farah_dan: High-centrality node without verified institutional role in AATIP or Immaculate Constellation", type:"paradox", severity:"high",
      headline:"Private actor with betweenness (134.0) equivalent to Stratton and Puthoff but no documented formal position",
      analysis:"farah_dan (b=134.0) connects imm_constellation (b=142.0) and aatip (b=145.6). No public document verifies Farah-Dan's AATIP role; Immaculate Constellation participation is unofficial or under classification. His centrality exceeds actors with decades of verifiable institutional career.",
      implication:"Farah-Dan operates as informal bridge node between official and private programs without transparent function, suggesting parallel coordination network outside visible institutional structure.",
      confidence:"strong"
    },
    {
      id:"sg15", context:["all"],
      nodes:["disclosure2001","vaticano","pio12"],
      path:["disclosure2001","vaticano","pio12"],
      title:"Pius XII: graph edge to Disclosure2001 without temporal explanation (deceased 43 years prior)", type:"paradox", severity:"critical",
      headline:"Person deceased in 1958 maintains betweenness (44.3) comparable to living witnesses connected to 2001 event",
      analysis:"pio12 dies 1958; disclosure2001 occurs 2001 (b=33.2); edge assumes posthumous influence or retrocalculated connection via vaticano (b=67.8). No documentation Pius XII was briefed on UAP; edge reflects speculative historiography inserted without factual verification.",
      implication:"Either classified briefing documentation to Pius XII (1945-1958) connects to 2001 event non-obviously, or edge is retrospective historiography that requires editorial revision.",
      confidence:"speculative"
    },
    {
      id:"sg16", context:["all"],
      nodes:["edicion_retroactiva","congress2023","nyt2017"],
      path:["edicion_retroactiva","congress2023","nyt2017"],
      title:"Retroactive editing: high-betweenness concept without verifiable primary artifacts", type:"contradiction", severity:"critical",
      headline:"High-betweenness conceptual node (122.6) denotes record-revision practice but lacks verifiable references to specific documented cases",
      analysis:"edicion_retroactiva (b=122.6) connects congress2023 (b=122.4) and nyt2017 (b=88.9). Both events mention documentary discrepancies, but no specification exists of which documents altered, when, or by which entity. Concept operates as universal explanation without instantiation.",
      implication:"Concept of 'retroactive editing' serves as narrative artifact explaining inconsistencies without providing proven cases, permitting official documentation dismissal without verifiable falsifiability.",
      confidence:"strong"
    },
  ]
};

export const NETWORK_INSIGHT = {
  es: "El grafo revela una arquitectura de secreto en capas: un clúster pre-1945 con alta densidad interna que transfiere al clúster moderno a través de solo tres nodos puente: Roswell, Von Braun y Pío XII.",
  en: "The graph reveals a layered secrecy architecture: a dense pre-1945 cluster that transfers to the modern cluster through only three bridge nodes: Roswell, Von Braun, and Pius XII."
};

// All constants exported above with named exports
