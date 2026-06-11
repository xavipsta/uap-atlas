CONTRIBUTING — Protocolo de ingesta editorial
Checklist exacto desde "hay release PURSUE nuevo" hasta "está en producción". La IA asiste en redacción y verificación; las decisiones de inclusión y credibilidad son siempre humanas.
1 · Detección y lectura
[ ] Revisar https://www.war.gov/UFO/ y el comunicado oficial del release.
[ ] Comparar con `src/data/releases.js` — si el release no está, es ingesta nueva.
2 · Verificación de fuentes (antes de escribir nada)
[ ] Confirmar el comunicado en la fuente original (war.gov / sala de prensa).
[ ] Verificar afirmaciones extraordinarias en ≥2 fuentes independientes.
[ ] Si hay contradicción entre fuentes: se documenta la contradicción, no se resuelve.
3 · Propuesta de nodos (máximo 3-4 por release)
[ ] Cada candidato cumple el schema completo (label/sub/desc en ES y EN).
[ ] `credibility` según rúbrica: high = oficial/juramento/FOIA · medium = fuente identificada verificable · low = sin corroboración. Ante la duda, el nivel inferior.
[ ] `links` solo a IDs existentes; preferir el enlace específico (documento) al genérico (agencia).
[ ] Nunca modificar id/credibility/links de nodos existentes sin justificación documental.
4 · Escritura
[ ] Añadir nodos a `nodes.js` (las métricas se recalculan solas en runtime).
[ ] Añadir fuente a `sources.js` con blindaje de 4 capas: URL original + espejo + Wayback + dataset. `type` correcto (los tipos no-oficiales no pasan el filtro "Solo fuentes oficiales").
[ ] Actualizar `releases.js` (status: indexed, fecha, nota bilingüe).
[ ] Si la UI cambió: sección nueva en `help.js` (ES+EN, con feature_id/since_version).
5 · Validación y publicación
[ ] `npm run build` — la validación integrada debe decir `Validación de datos OK · 0 broken`.
[ ] Actualizar CHANGELOG.md (patch para datos, minor para features) y la constante VERSION en App.jsx si procede.
[ ] Commit con mensaje `data: ingesta <release>` o `feat: <feature>` + push.
[ ] Verificar el deploy en producción (ficha del nodo nuevo + pestaña Fuentes).
