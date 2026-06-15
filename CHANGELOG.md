Changelog — UAP Intelligence Atlas
Formato: Keep a Changelog · Versionado: SemVer
Convención: major = cambios de arquitectura · minor = features · patch = datos y fixes.
[5.1.0] — 2026-06-12
Added
Timeline interactiva: botón ⏱ en el header + barra con deslizador y play/pause. Recorre los años reales del corpus (1500 aC → 2027) ocultando nodos/aristas futuros SIN reconstruir el grafo (sin re-simulación).
Explorador de caminos (BFS): botón "⇄ Trazar camino desde aquí" en la ficha → click en destino → camino más corto resaltado con panel de saltos navegable. Determinista, sin IA. "Sin camino" también se comunica como dato.
Ventana analítica (expanded): nuevo `src/data/expanded.js` con contenido extendido curado por nodo (la IA propone, el humano decide). Sembrados 3 nodos: grusch, varginha1996 (con gestión de contradicción Rebelo↔STM/AARO), pursue_r02. El modal Ampliar ya lo consume.
3 secciones nuevas de help (ES+EN) con feature_id/since_version.
Fixed
FIX-01 (regresión v5.0.0): el grafo quedaba vacío al volver de la vista Índice tras cambiar filtros. Causa: el svg oculto con display:none corrompía la geometría del fit-to-view (getBBox=0). Solución: el svg ya no se oculta nunca — la vista Índice, opaca, lo cubre. Se evita además la reconstrucción/re-simulación al cambiar de pestaña.
[5.0.0] — 2026-06-10
Added
Vista Índice: puerta de entrada alternativa al grafo. Tarjetas de todos los nodos con ordenación (año / relevancia / A–Z) y filtro por credibilidad. Vista por defecto en móvil (<768px).
Hash routing: URLs compartibles `#node=id` y `#pattern=id` sin backend ni router.
Etiquetas inteligentes (zoom semántico): por defecto solo etiquetan los ~25 nodos de mayor betweenness; el resto aparece al acercar zoom o en hover.
Foco+contexto en clic: seleccionar un nodo atenúa todo salvo su vecindario (coherente con el modo Patrones; aristas resaltadas en azul en selección normal, rojo en patrones).
SEO completo en index.html: lang="es", title/description, canonical, Open Graph + Twitter Card con imagen de preview (`public/og-cover.png`), JSON-LD tipo Dataset, favicon propio.
Validación de datos en build (`vite.config.js`): el build falla si hay broken links o IDs duplicados en nodes.js.
Convención de evolución del help (`src/data/help.js`): cada feature nueva añade sección con `feature_id` y `since_version` en ambos idiomas. Secciones nuevas: Vista Índice, Compartir por URL, Etiquetas inteligentes.
Documentación de repo: README.md, DEPLOY.md, CONTRIBUTING.md, CHANGELOG.md.
Constante `VERSION` única en App.jsx, visible en footer y modal.
Changed
`releases.js`: R02 marcado como `indexed` (2026-05-22, entrega multiagencia CIA/ODNI/NASA/DoE + DoW) — estaba desincronizado con nodes.js.
Sidebar cerrada por defecto en móvil.
`package.json` version: 0.0.0 → 5.0.0.
Fixed
BUG-01: GraphHint no se disparaba nunca — ahora aparece una vez tras cerrar la intro (localStorage `uap_atlas_hint_seen`).
VERSION-01: footer mostraba "v4.5" hardcodeado en dos sitios — ahora ambos leen la constante VERSION.
Removed
`api/update-nodes.js`: endpoint serverless huérfano (tools.html no lo llama; commitea directo a GitHub). Acción manual: eliminar también el archivo en GitHub al hacer el commit.
Security
Pendiente operativo (ver DEPLOY.md): rotar credenciales de tools.html (las anteriores estuvieron expuestas en el repo público) y regenerar `_tHash`.
[4.9.0] — 2026-06-10
Métricas de grafo (betweenness Brandes, clustering, degree) calculadas en runtime desde NODES/LINKS_DATA; eliminadas las tablas estáticas tecleadas a mano (26 nodos sin betweenness, 34 sin clustering, valores distorsionados).
Ficha de nodo orientada al lector: indicador de credibilidad en lenguaje humano en panel lateral y modal Ampliar; retirada la telemetría cruda Grado/CC/B.
Ingesta PURSUE R02: nodo `pursue_r02` (high), enlaces a pursue_r01/nasa/odni_uap_d001/controlled_release_pattern; fuente con blindaje de 4 capas en sources.js. 104 nodos · 491 links.
Seguridad: token de api/update-nodes.js movido a `process.env.TOOLS_TOKEN` con guard; login de tools.html migrado de base64 reversible a hash SHA-256.
[4.4.0] y anteriores
v4.4 — Modo Patrones (pistolas humeantes visuales). · v4.3 — 79 nodos, blindaje documental 4 capas, tools.html. · v4.0 — Trazabilidad documental, PURSUE tracker, bilingüe. · v3 — Grafo funcional.
