// ─── UAP ATLAS — SMOKING GUNS DATA ─────────────────────────────────────────
// v4.5 · 27 pistolas humeantes con campos context y path para visualización
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
    },,
    {
      id:"sg17", context:["structural","temporal","bridge"],
      nodes:["legacy_program","paperclip","vonbraun","imm_constellation","pursue_r01"],
      path:["paperclip→vonbraun→legacy_program","legacy_program→imm_constellation→pursue_r01"],
      title:"Von Braun: custodia fragmentada sin arista documental explícita", type:"gap", severity:"critical",
      headline:"Von Braun (b=134.5) conecta Paperclip→Legacy pero IMM_Constellation y PURSUE_R01 carecen de vínculo documentado directo a su rol supervisorio",
      analysis:"Von Braun posee alta centralidad de intermediación pero su betweenness no distribuye equitativamente hacia los dos grandes programas post-1960. Legacy_program (b=198.0) y PURSUE_R01 (b=98.3) comparten época (1950s-2010s) pero no existe arista cruzada verificada en actas públicas. La transición de custodia PAPERCLIP→LEGACY tiene timestamp, pero IMM_Constellation (b=142.0) aparece huérfana de paternidad administrativa. Esto sugiere: (a) custodia paralela no documentada, (b) bifurcación deliberada de cadena de mando, o (c) retención de Von Braun en rol fantasma post-jubilación oficial (1970).",
      implication:"Si Von Braun supervisó ambos tracks en paralelo sin registro cruzado, el modelo de 'compartimentalización por persona' (no por institución) explica gap documental de 40 años. Verificable mediante: actas de ABMA/Marshall Space Flight Center (1960-1972), testigos de Legacy_program sobre presencia de personal Paperclip, cronología de muerte Von Braun (1972) vs. activación formal PURSUE_R01 (2008).",
      confidence:"strong"
    },
    {
      id:"sg18", context:["paradox","institutional","temporal"],
      nodes:["grusch","farah_dan","marco_rubio","congress2023","nuclear_pattern"],
      path:["grusch→congress2023","farah_dan→congress2023","marco_rubio→congress2023","nuclear_pattern→wilson_memo"],
      title:"Farah_dan: centralidad política sin genealogía institucional previa", type:"paradox", severity:"critical",
      headline:"Farah_dan (b=134.0) converge con Grusch (b=588.0) en congress2023 pero carece de conexión documentada a programas de inteligencia pre-2023",
      analysis:"Farah_dan aparece en subgrafo con betweenness equivalente a vonbraun pero sin trayectoria institucional visible (AARO, NASA, Defense Intel). Su nodo en congress2023 sugiere rol de intermediario político, pero la arista hacia nuclear_pattern es indirecta. Grusch y marco_rubio tienen historiales documentados (Grusch: AARO; Rubio: Senate Intelligence). Farah_dan carece de ambos. La paradoja: ¿cómo alcanza b=134.0 sin aristas a legacy_program, aatip, o pursue_r01? Esto implica: (a) emergencia tardía de figura con acceso retro-activado, (b) alias de figura documentada bajo pseudónimo, o (c) rol de coordinador político sin historial profesional visible.",
      implication:"Si Farah_dan representa mediador político designado post-2022 (orden ejecutiva o congressional briefing), su alta centralidad sería artefacto de compresión temporal (concentración de betweenness en 1 año). Verificable mediante: registros de asistencia congress2023, antecedentes FOIA de agencias de seguridad (1990-2023), correlación temporal entre nombramiento y aparición en redes de toma de decisiones (testigos de Grusch).",
      confidence:"strong"
    },
    {
      id:"sg19", context:["morphological","temporal","contradiction"],
      nodes:["nuclear_pattern","wilson_memo","rendlesham_memo","nyt2017","disclosure2001"],
      path:["wilson_memo→nuclear_pattern","rendlesham_memo→disclosure2001","nyt2017→nuclear_pattern"],
      title:"Nuclear_pattern: conceptualización acelerada sin antecedentes analíticos", type:"morphological", severity:"high",
      headline:"Nuclear_pattern (b=222.0) emerge en 2017 pero no hereda aristas documentales de rendlesham_memo (1980) o disclosure2001 (1999) que contienen datos nucleares",
      analysis:"Wilson_memo (1961, b=98.7) documenta material no-convencional sin marco energético explícito. Rendlesham_memo (1980, b=44.3) reporta fenómeno de energía pero se archiva aisladamente. NyT2017 reaviva interés sin citar análisis nuclear previos. Nuclear_pattern emerge como 'concepto' en 2017 con b=222.0 —mayor que los eventos que lo precedieron— sugiriendo: (a) síntesis retrospectiva sin cadena causal documentada, (b) activación de análisis compartimentalizado post-2016, o (c) importación de framework de programa clasificado externo.",
      implication:"Si nuclear_pattern es reconstrucción analítica de datos pre-existentes, debería mostrar aristas a AATIP (b=145.6) y puthoff (b=88.1, físico teórico). La ausencia sugiere: o bien el concepto fue desarrollado en paralelo (Legacy_program, PURSUE_R01) sin integración documentada, o bien fue importado de fuente exterior (programa ruso, chino, privado). Verificable mediante: cronología de reportes energéticos clasificados (FOIA), historial analítico de AATIP, publicaciones de Puthoff previas a 2017.",
      confidence:"strong"
    },
    {
      id:"sg20", context:["gap","institutional","bridge"],
      nodes:["aaro","imm_constellation","legacy_program","pursue_r01","grusch"],
      path:["grusch→aaro","aaro→(gap)→imm_constellation","imm_constellation→legacy_program→pursue_r01"],
      title:"AARO: institución nexo sin autoridad fundacional explícita", type:"gap", severity:"critical",
      headline:"AARO (b=78.3) aparece en 2023 como contenedor de Grusch pero carece de arista documental a IMM_Constellation (b=142.0) que operó 1990-2022",
      analysis:"AARO es designado en 2023 por orden ejecutiva para unificar programas dispersos. Sin embargo, no existe arista pública documentada entre AARO y IMM_Constellation (programa black budget con b=142.0). IMM_Constellation→Legacy_program→PURSUE_R01 forma cadena de custodia de 60 años sin incorporación formal a AARO. Gap: ¿AARO hereda jurisdicción sobre IMM_Constellation o ambas operan en paralelo? Grusch (b=588.0, máxima centralidad) reporta como oficial AARO pero su testificación congress2023 sugiere autoridad de facto sobre programas pre-AARO. Esto indica: (a) AARO fue creada para documentar lo ya documentado en paralelo, (b) Grusch retiene autoridad sobre cadena legacy sin formalización a AARO, o (c) existe estructura de doble autoridad.",
      implication:"Si AARO fue diseñada para consolidar pero no desclasificar legado compartimentalizado, su b=78.3 es artefacto de compresión (todas aristas post-2023). La verdadera betweenness histórica pertenece a Legacy_program. Esto sugiere crisis institucional: reorganización administrativa sin acceso material a acervos clasificados. Verificable mediante: acta constitutiva AARO (ejecutiva), mandato de revisión de legado, autoridad de Grusch en IMM_Constellation pre-2023, presupuesto y personal asignado vs. scope de jurisdicción reclamado.",
      confidence:"verified"
    },
    {
      id:"sg17", context:["structural","temporal"],
      nodes:["nuclear_pattern","legacy_program","pursue_r01","aatip","grusch"],
      path:["legacy_program(b=198.0) → nuclear_pattern(b=222.0) → pursue_r01(b=98.3) → grusch(b=588.0)"],
      title:"nuclear_pattern: concepto de 1961 con betweenness máximo pero documentación anterior a 1999", type:"temporal", severity:"critical",
      headline:"¿Quién nombró 'nuclear_pattern' y cuándo? Grusch (2023) accede a datos de Legacy (post-1995) que supuestamente conceptualizan propiedades observadas en incidents de 1897-1980, pero el patrón no aparece en registros Blue Book, Paperclip o Project files hasta AATIP (2007+).",
      analysis:"nuclear_pattern posee betweenness de 222.0, el más alto del subgrafo excepto Grusch (588.0). Conecta incidents pre-1950, programas de los 60s-90s, y testimonios 2004+. Sin embargo, no existe artefacto primario datado pre-1999 que nombre o describa este patrón. Legacy_program (betweenness 198.0) es intermediario clave entre Paperclip y AATIP, sugiriendo construcción retroactiva de coherencia narrativa. Grusch tiene acceso sin custodia verificable a estos conceptos.",
      implication:"Si nuclear_pattern fue conceptualizado post-1999 (AATIP/Elizondo era), su uso para interpretar Roswell(1947), Malmstrom(1967) e incidents anteriores sería arqueología selectiva, no descubrimiento. Falsificable: búsqueda de documentos pre-1995 usando término específico 'nuclear' + 'pattern' en archivos desclasificados.",
      confidence:"strong"
    },
    {
      id:"sg18", context:["morphological","institutional"],
      nodes:["vaticano","pio12","juan23","disclosure2001","enoc"],
      path:["vaticano(b=67.8) ← pio12(b=44.3) → disclosure2001(b=33.2); vaticano ← juan23(b=11.2) → enoc(b=41.8)"],
      title:"Vaticano: hub institucional de betweenness medio pero sin aristas documentadas a incidents o programs", type:"gap", severity:"critical",
      headline:"¿Por qué Vaticano(b=67.8) conecta a Pio XII y Juan XXIII pero no a ningún incident (Roswell, Malmstrom, Nimitz)? Enoc (concepto, b=41.8) aparece en la órbita papal pero sin cadena causal.",
      analysis:"Vaticano es nodo institucional con betweenness significativo (67.8), implicando múltiples caminos cortos a través de él. Sin embargo, sus aristas documentadas son exclusivamente personales (Pio XII, Juan XXIII, Capovilla) y conceptuales (Disclosure2001, Enoc). No existe arista verificada entre Vaticano y ningún incident, programa o testimoniante clave (Grusch, Elizondo, Fravor). Disclosure2001 (betweenness 33.2) aparece sin explicación temporal: ¿por qué evento papal de 2001 conectaría a red de incidents de 1947-2004?",
      implication:"Vaticano puede ser nodo ficticio-conectante insertado para generar legitimidad institucional, o punto de acceso documental censurado. Si real: existiría memorando diplomático/eclesiástico pre-2001 mencionando incidents. Falsificable: solicitud FOIA para comunicaciones Vaticano-AARO/NASA 1995-2005; búsqueda en archivos vaticanos (acceso restringido) para referencias a 'UAPs' o 'celestial phenomena' pre-1998.",
      confidence:"speculative"
    },
    {
      id:"sg19", context:["gap","temporal"],
      nodes:["salas","malmstrom1967","pursue_r01","nuclear_weapons"],
      path:["salas(b=89.3, incident_malmstrom_1967) → malmstrom1967(b=78.4) → pursue_r01(b=98.3)"],
      title:"Salas: 46 años de silencio entre incident (1967) y publi-PURSUIT conexión tardía (2013+)", type:"temporal", severity:"high",
      headline:"Salas accede a Malmstrom(1967) en vivo pero no aparece en registros Blue Book oficiales. PURSUE_R01 nombra retrospectivamente el patrón de nuclear-weapon-system incidents. ¿Qué inhibió su disclosure 1967-2010?",
      analysis:"Salas (betweenness 89.3) es testigo directo de Malmstrom1967 (betweenness 78.4), un incident de betweenness alto que involucró ICBM silos. Su testimonio fue público en 2010, pero no hay registro de su participación en proyectos de documentación 1968-2005. PURSUE_R01 (betweenness 98.3) emerge como programa conceptual que retrospectivamente categoriza 'nuclear weapons + UAP correlation'. Brecha: ¿quién coordina la reclasificación de Malmstrom de 'sensor malfunction' (Blue Book) a 'UAP intrusion on nuclear facility' (PURSUE narrativa)?",
      implication:"Salas fue silenciado institucionalmente o autosilenciado por seguridad operacional (OPSEC). Si PURSUE_R01 fue diseñado post-2005 para reinterpretar incidents nucleares, Salas sería archivo viviente utilizado retroactivamente. Falsificable: registros de debriefing clasificado de Salas 1967-1975; correspondencia interna del Strategic Air Command (SAC) sobre 'UFO protocols' con mención de Salas; correlación temporal entre primer testimonio público de Salas (2010) y clasificación de PURSUE_R01.",
      confidence:"strong"
    },
    {
      id:"sg20", context:["paradox","institutional"],
      nodes:["grusch","legacy_program","nyt2017","congress2023","aaro"],
      path:["grusch(b=588.0) ← legacy_program(b=198.0) → aaro(b=78.3); nyt2017(b=88.9) → congress2023(b=122.4) → grusch"],
      title:"Grusch: betweenness máximo sin rango de acceso institucional verificable en 2017-2022", type:"paradox", severity:"critical",
      headline:"Grusch (b=588.0) es el nodo más central de la red pero su rol en Legacy_program (1995-2005) y acceso a documentación pre-2010 no aparece en organigramas públicos de NRO, NTRO o SAP offices.",
      analysis:"Grusch posee betweenness de 588.0, implicando que >50% de caminos cortos entre pares de nodos pasan a través de él. Sin embargo: (1) su empleo en NRO (2005-2016) tiene gaps documentales; (2) no aparece en testimonios de Elizondo, Lacatski o Mellon pre-2021; (3) su acceso a Legacy_program (betweenness 198.0), imm_constellation y PURSUE supuestamente ocurrió post-2017 pero su betweenness sugiere conocimiento estructural pre-2015. (4) NYT 2017 y Congress 2023 son eventos que amplifican su rol, pero no fundamento.",
      implication:"Grusch fue introducido estratégicamente en 2021-2023 como convergencia-point para múltiples narrativas (Legacy, AATIP, Congressional interest) OR fue operador de nivel superior cuyo rango fue ocultado para plausible deniability. Si primero: artefacto narrativo. Si segundo: testigo más importante con identidad parcialmente protegida. Falsificable: registros de seguridad de NRO 2005-2016 con nombre completo; correspondencia clasificada mencionando Grusch pre-2020; comparación de firmas digitales de documentos Legacy antes/después de su 'ingreso' a la red de disclosure.",
      confidence:"strong"
    },
    {
      id:"sg17", context:["structural_anomaly","betweenness_inversion"],
      nodes:["grusch","nuclear_pattern","aatip","legacy_program"],
      path:["grusch(b=588.0)→aatip(b=145.6)→nuclear_pattern(b=222.0)→legacy_program(b=198.0)"],
      title:"Grusch: máximo betweenness sin documentación nuclear previa", type:"gap", severity:"critical",
      headline:"El nodo con centralidad máxima (588.0) no aparece en documentos clasificados sobre NUCLEAR_PATTERN hasta 2023, pese a su rol de enlace en AATIP (2007-2012)",
      analysis:"Grusch opera como intermediario crítico (betweenness 588.0) entre AATIP (b=145.6) y LEGACY_PROGRAM (b=198.0), ambos con valores altos de centralidad. Sin embargo, los registros desclasificados de AATIP/PURSUE no lo mencionan nominalmente hasta su testimonio 2023. La conceptualización formal de NUCLEAR_PATTERN (b=222.0) es posterior a su período como oficial. Esto sugiere: (a) acceso retroactivo a clasificación nuclear, (b) rol no documentado durante operación, o (c) arista temporal fabricada post-hoc.",
      implication:"Si Grusch accedió a NUCLEAR_PATTERN durante AATIP sin registros, valida sg16 (edición retroactiva). Si fue agregado después, su betweenness actual es artefacto de reconexión retrospectiva, invalidando su valor como indicador de centralidad operacional histórica.",
      confidence:"strong"
    },
    {
      id:"sg20", context:["institutional_asymmetry","access_hierarchy"],
      nodes:["aaro","congress2023","legacy_program","nhi_agreements"],
      path:["congress2023(b=122.4)→aaro(b=78.3)→legacy_program(b=198.0)→nhi_agreements(b=33.2)"],
      title:"AARO: intermediario institucional con acceso selectivo a NHI_AGREEMENTS", type:"gap", severity:"high",
      headline:"La Oficina de Análisis de Anomalías de Reconocimiento (AARO, b=78.3) actúa como cuello de botella entre CONGRESS2023 (b=122.4) y NHI_AGREEMENTS (b=33.2), pero NHI_AGREEMENTS no figura en actas públicas de audiencias",
      analysis:"AARO (institución, b=78.3) conecta CONGRESS2023 (evento de máxima visibilidad, b=122.4) a LEGACY_PROGRAM (b=198.0). Sin embargo, la arista de AARO a NHI_AGREEMENTS (concepto, b=33.2) es unidireccional desde AARO: AARO reconoce NHI_AGREEMENTS como categoría de análisis, pero CONGRESS2023 no tiene arista directa documentada a NHI_AGREEMENTS. Laguna: Kirk kirkpatrick (director AARO) en testimonio 2023 no menciona NHI_AGREEMENTS por término, solo 'acuerdos técnicos previos'. Esto sugiere que AARO tiene acceso clasificado a categoría que no puede revelar públicamente.",
      implication:"AARO opera como guardián institucional de información que CONGRESS no puede alcanzar directamente. Esto valida sg9 (Grusch con betweenness máximo sin acceso documentado): hay información-nodos que existen en clasificación pero cuya transmisión formal a órganos de supervisión es nula o anómala. Estructura jerárquica: CONGRESS→AARO→LEGACY_PROGRAM, pero CONGRESS no accede a LEGACY_PROGRAM directamente, lo que viola cadena de custodia democrática.",
      confidence:"verified"
    }
  
  
  
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
    },,
    {
      id:"sg17", context:["structural","temporal","bridge"],
      nodes:["legacy_program","paperclip","vonbraun","imm_constellation","pursue_r01"],
      path:["paperclip→vonbraun→legacy_program","legacy_program→imm_constellation→pursue_r01"],
      title:"Von Braun: fragmented custody without explicit documentary edge", type:"gap", severity:"critical",
      headline:"Von Braun (b=134.5) connects Paperclip→Legacy but IMM_Constellation and PURSUE_R01 lack documented direct linkage to his supervisory role",
      analysis:"Von Braun possesses high betweenness centrality but his intermediation does not distribute equitably across the two major post-1960 programs. Legacy_program (b=198.0) and PURSUE_R01 (b=98.3) share epoch (1950s-2010s) but no verified cross-edge exists in public records. PAPERCLIP→LEGACY custody transition has timestamp, but IMM_Constellation (b=142.0) appears orphaned administratively. This suggests: (a) undocumented parallel custody, (b) deliberate bifurcation of command chain, or (c) Von Braun retention in phantom role post-official retirement (1970).",
      implication:"If Von Braun supervised both tracks in parallel without cross-documentation, 'compartmentalization by person' model (not institution) explains 40-year documentary gap. Verifiable via: ABMA/Marshall Space Flight Center records (1960-1972), Legacy_program witness testimony on Paperclip personnel presence, Von Braun death timeline (1972) vs. PURSUE_R01 formal activation (2008).",
      confidence:"strong"
    },
    {
      id:"sg18", context:["paradox","institutional","temporal"],
      nodes:["grusch","farah_dan","marco_rubio","congress2023","nuclear_pattern"],
      path:["grusch→congress2023","farah_dan→congress2023","marco_rubio→congress2023","nuclear_pattern→wilson_memo"],
      title:"Farah_dan: political centrality without prior institutional genealogy", type:"paradox", severity:"critical",
      headline:"Farah_dan (b=134.0) converges with Grusch (b=588.0) at congress2023 but lacks documented connection to pre-2023 intelligence programs",
      analysis:"Farah_dan appears in subgraph with betweenness equivalent to vonbraun but without visible institutional trajectory (AARO, NASA, Defense Intel). Node in congress2023 suggests political intermediary role, but edge to nuclear_pattern is indirect. Grusch and marco_rubio have documented histories (Grusch: AARO; Rubio: Senate Intelligence). Farah_dan lacks both. The paradox: how does b=134.0 arise without edges to legacy_program, aatip, or pursue_r01? This implies: (a) late emergence of figure with retroactively activated access, (b) alias of documented figure under pseudonym, or (c) political coordinator role without visible professional history.",
      implication:"If Farah_dan represents post-2022 designated political mediator (executive order or congressional briefing), his high centrality would be temporal compression artifact (betweenness concentration in 1 year). Verifiable via: congress2023 attendance records, FOIA agency backgrounds (1990-2023), temporal correlation between appointment and emergence in decision-making networks (Grusch witnesses).",
      confidence:"strong"
    },
    {
      id:"sg19", context:["morphological","temporal","contradiction"],
      nodes:["nuclear_pattern","wilson_memo","rendlesham_memo","nyt2017","disclosure2001"],
      path:["wilson_memo→nuclear_pattern","rendlesham_memo→disclosure2001","nyt2017→nuclear_pattern"],
      title:"Nuclear_pattern: accelerated conceptualization without analytical antecedents", type:"morphological", severity:"high",
      headline:"Nuclear_pattern (b=222.0) emerges in 2017 but does not inherit documentary edges from rendlesham_memo (1980) or disclosure2001 (1999) containing nuclear data",
      analysis:"Wilson_memo (1961, b=98.7) documents non-conventional material without explicit energetic framework. Rendlesham_memo (1980, b=44.3) reports energy phenomenon but is archived in isolation. NYT2017 rekindles interest without citing prior nuclear analysis. Nuclear_pattern emerges as 'concept' in 2017 with b=222.0—greater than preceding events—suggesting: (a) retrospective synthesis without documented causal chain, (b) activation of post-2016 compartmentalized analysis, or (c) importation of framework from external classified program.",
      implication:"If nuclear_pattern is analytical reconstruction of pre-existing data, should show edges to AATIP (b=145.6) and puthoff (b=88.1, theoretical physicist). Absence suggests: either concept was developed in parallel (Legacy_program, PURSUE_R01) without documented integration, or was imported from external source (Russian, Chinese, private program). Verifiable via: chronology of classified energy reports (FOIA), AATIP analytical history, Puthoff publications pre-2017.",
      confidence:"strong"
    },
    {
      id:"sg20", context:["gap","institutional","bridge"],
      nodes:["aaro","imm_constellation","legacy_program","pursue_r01","grusch"],
      path:["grusch→aaro","aaro→(gap)→imm_constellation","imm_constellation→legacy_program→pursue_r01"],
      title:"AARO: nexus institution without explicit foundational authority", type:"gap", severity:"critical",
      headline:"AARO (b=78.3) appears in 2023 as Grusch container but lacks documented edge to IMM_Constellation (b=142.0) which operated 1990-2022",
      analysis:"AARO designated in 2023 by executive order to unify dispersed programs. Yet no public documentary edge exists between AARO and IMM_Constellation (black budget program with b=142.0). IMM_Constellation→Legacy_program→PURSUE_R01 forms 60-year custody chain without formal incorporation into AARO. Gap: Does AARO inherit jurisdiction over IMM_Constellation or do both operate in parallel? Grusch (b=588.0, maximum centrality) reports as AARO official but his congress2023 testimony suggests de facto authority over pre-AARO programs. This indicates: (a) AARO created to document what was already documented in parallel, (b) Grusch retains authority over legacy chain without AARO formalization, or (c) double authority structure exists.",
      implication:"If AARO designed to consolidate but not declassify compartmentalized legacy, its b=78.3 is temporal compression artifact (all edges post-2023). True historical betweenness belongs to Legacy_program. Suggests institutional crisis: administrative reorganization without material access to classified holdings. Verifiable via: AARO charter (executive order), legacy review mandate, Grusch authority in IMM_Constellation pre-2023, assigned budget and personnel vs. claimed jurisdictional scope.",
      confidence:"verified"
    },
    {
      id:"sg17", context:["structural","temporal"],
      nodes:["nuclear_pattern","legacy_program","pursue_r01","aatip","grusch"],
      path:["legacy_program(b=198.0) → nuclear_pattern(b=222.0) → pursue_r01(b=98.3) → grusch(b=588.0)"],
      title:"nuclear_pattern: concept with maximum betweenness dated 1961 but documentation predates 1999", type:"temporal", severity:"critical",
      headline:"Who named 'nuclear_pattern' and when? Grusch (2023) accesses Legacy data (post-1995) that supposedly conceptualize properties observed in incidents 1897-1980, yet the pattern does not appear in Blue Book, Paperclip, or classified project files until AATIP (2007+).",
      analysis:"nuclear_pattern holds betweenness 222.0, highest except Grusch (588.0). Connects pre-1950 incidents, 1960s-90s programs, and 2004+ testimonies. Yet no primary artifact dated pre-1999 names or describes this pattern. Legacy_program (betweenness 198.0) is key intermediary between Paperclip and AATIP, suggesting retroactive narrative coherence construction. Grusch possesses access without verified custody chain to these concepts.",
      implication:"If nuclear_pattern was conceptualized post-1999 (AATIP/Elizondo era), its use to interpret Roswell (1947), Malmstrom (1967), earlier incidents would be selective archaeology, not discovery. Falsifiable: search pre-1995 declassified documents for specific term 'nuclear' + 'pattern' in archival repositories.",
      confidence:"strong"
    },
    {
      id:"sg18", context:["morphological","institutional"],
      nodes:["vaticano","pio12","juan23","disclosure2001","enoc"],
      path:["vaticano(b=67.8) ← pio12(b=44.3) → disclosure2001(b=33.2); vaticano ← juan23(b=11.2) → enoc(b=41.8)"],
      title:"Vatican: institutional hub with moderate betweenness but zero documented edges to incidents or programs", type:"gap", severity:"critical",
      headline:"Why does Vatican (b=67.8) connect to Pius XII and John XXIII but to no incident (Roswell, Malmstrom, Nimitz)? Enoc (concept, b=41.8) appears in papal orbit without causal chain.",
      analysis:"Vatican is institutional node with significant betweenness (67.8), implying multiple short paths through it. Yet documented edges are exclusively personal (Pius XII, John XXIII, Capovilla) and conceptual (Disclosure2001, Enoc). No verified edge exists between Vatican and any incident, program, or key witness (Grusch, Elizondo, Fravor). Disclosure2001 (betweenness 33.2) appears without temporal explanation: why would papal event of 2001 connect to incident network 1947-2004?",
      implication:"Vatican may be fictitious-connector node inserted for institutional legitimacy, or censored documentary access point. If real: diplomatic/ecclesiastical memorandum pre-2001 mentioning incidents would exist. Falsifiable: FOIA request for Vatican-AARO/NASA communications 1995-2005; search Vatican archives (restricted access) for references to 'UAPs' or 'celestial phenomena' pre-1998.",
      confidence:"speculative"
    },
    {
      id:"sg19", context:["gap","temporal"],
      nodes:["salas","malmstrom1967","pursue_r01","nuclear_weapons"],
      path:["salas(b=89.3, incident_malmstrom_1967) → malmstrom1967(b=78.4) → pursue_r01(b=98.3)"],
      title:"Salas: 46-year silence between incident (1967) and public-PURSUE connection (2013+)", type:"temporal", severity:"high",
      headline:"Salas witnessed Malmstrom (1967) live but does not appear in official Blue Book records. PURSUE_R01 retrospectively names pattern of nuclear-weapon-system incidents. What inhibited his disclosure 1967-2010?",
      analysis:"Salas (betweenness 89.3) is direct witness to Malmstrom1967 (betweenness 78.4), high-betweenness incident involving ICBM silos. His testimony went public in 2010, but no record of his participation in documentation projects 1968-2005. PURSUE_R01 (betweenness 98.3) emerges as conceptual program retrospectively categorizing 'nuclear weapons + UAP correlation'. Gap: who coordinates reclassification of Malmstrom from 'sensor malfunction' (Blue Book) to 'UAP intrusion on nuclear facility' (PURSUE narrative)?",
      implication:"Salas was institutionally silenced or self-silenced for operational security (OPSEC). If PURSUE_R01 designed post-2005 to reinterpret nuclear incidents, Salas becomes living archive used retroactively. Falsifiable: classified debriefing records of Salas 1967-1975; internal Strategic Air Command (SAC) correspondence on 'UFO protocols' mentioning Salas; temporal correlation between Salas' first public testimony (2010) and PURSUE_R01 classification.",
      confidence:"strong"
    },
    {
      id:"sg20", context:["paradox","institutional"],
      nodes:["grusch","legacy_program","nyt2017","congress2023","aaro"],
      path:["grusch(b=588.0) ← legacy_program(b=198.0) → aaro(b=78.3); nyt2017(b=88.9) → congress2023(b=122.4) → grusch"],
      title:"Grusch: maximum betweenness without verifiable institutional access rank 2017-2022", type:"paradox", severity:"critical",
      headline:"Grusch (b=588.0) is most central node in network but his role in Legacy_program (1995-2005) and pre-2010 documentation access does not appear in public NRO, NTRO, or SAP office organigrams.",
      analysis:"Grusch possesses betweenness 588.0, implying >50% of shortest paths between node pairs pass through him. Yet: (1) his NRO employment (2005-2016) has documentary gaps; (2) does not appear in pre-2021 testimonies of Elizondo, Lacatski, or Mellon; (3) access to Legacy_program (betweenness 198.0), imm_constellation, PURSUE supposedly occurred post-2017 but his betweenness suggests structural knowledge pre-2015. (4) NYT 2017 and Congress 2023 are events that amplify his role but do not establish foundation.",
      implication:"Grusch was strategically introduced 2021-2023 as convergence-point for multiple narratives (Legacy, AATIP, Congressional interest) OR was higher-level operator whose rank was hidden for plausible deniability. If former: narrative artifact. If latter: most important witness with partially protected identity. Falsifiable: NRO security records 2005-2016 with full name; classified correspondence mentioning Grusch pre-2020; digital signature comparison of Legacy documents before/after his 'entry' into disclosure network.",
      confidence:"strong"
    },
    {
      id:"sg17", context:["structural_anomaly","betweenness_inversion"],
      nodes:["grusch","nuclear_pattern","aatip","legacy_program"],
      path:["grusch(b=588.0)→aatip(b=145.6)→nuclear_pattern(b=222.0)→legacy_program(b=198.0)"],
      title:"Grusch: Maximum betweenness without prior nuclear documentation", type:"gap", severity:"critical",
      headline:"The node with maximum centrality (588.0) does not appear in classified documents on NUCLEAR_PATTERN until 2023, despite his role as link in AATIP (2007-2012)",
      analysis:"Grusch operates as critical intermediary (betweenness 588.0) between AATIP (b=145.6) and LEGACY_PROGRAM (b=198.0), both with high centrality values. However, declassified AATIP/PURSUE records do not mention him nominally until his 2023 testimony. Formal conceptualization of NUCLEAR_PATTERN (b=222.0) post-dates his tenure as officer. This suggests: (a) retroactive access to nuclear classification, (b) undocumented role during operation, or (c) temporal edge fabricated post-hoc.",
      implication:"If Grusch accessed NUCLEAR_PATTERN during AATIP without records, it validates sg16 (retroactive editing). If added afterwards, his current betweenness is artifact of retrospective reconnection, invalidating its value as indicator of historical operational centrality.",
      confidence:"strong"
    },
    {
      id:"sg20", context:["institutional_asymmetry","access_hierarchy"],
      nodes:["aaro","congress2023","legacy_program","nhi_agreements"],
      path:["congress2023(b=122.4)→aaro(b=78.3)→legacy_program(b=198.0)→nhi_agreements(b=33.2)"],
      title:"AARO: Institutional intermediary with selective access to NHI_AGREEMENTS", type:"gap", severity:"high",
      headline:"The All-domain Anomaly Resolution Office (AARO, b=78.3) acts as bottleneck between CONGRESS2023 (b=122.4) and NHI_AGREEMENTS (b=33.2), yet NHI_AGREEMENTS does not appear in public hearing records",
      analysis:"AARO (institution, b=78.3) connects CONGRESS2023 (maximum visibility event, b=122.4) to LEGACY_PROGRAM (b=198.0). However, AARO's edge to NHI_AGREEMENTS (concept, b=33.2) is unidirectional from AARO: AARO recognizes NHI_AGREEMENTS as analytical category, but CONGRESS2023 has no documented direct edge to NHI_AGREEMENTS. Gap: Kirk Kirkpatrick (AARO director) in 2023 testimony does not mention NHI_AGREEMENTS by term, only 'prior technical agreements'. This suggests AARO possesses classified access to category it cannot publicly disclose.",
      implication:"AARO operates as institutional gatekeeper of information unreachable by CONGRESS directly. This validates sg9 (Grusch with maximum betweenness without documented access): there are information-nodes existing in classification whose formal transmission to oversight bodies is null or anomalous. Hierarchical structure: CONGRESS→AARO→LEGACY_PROGRAM, but CONGRESS does not access LEGACY_PROGRAM directly, violating democratic custodial chain.",
      confidence:"verified"
    }
  
  
  
  ]
};

export const NETWORK_INSIGHT = {
  es: "El grafo revela una arquitectura de secreto en capas: un clúster pre-1945 con alta densidad interna que transfiere al clúster moderno a través de solo tres nodos puente: Roswell, Von Braun y Pío XII.",
  en: "The graph reveals a layered secrecy architecture: a dense pre-1945 cluster that transfers to the modern cluster through only three bridge nodes: Roswell, Von Braun, and Pius XII."
};

// All constants exported above with named exports
