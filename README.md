# UAP Intelligence Atlas

Sistema de inteligencia relacional sobre el fenómeno UAP, la desclasificación y los programas asociados. **No es una web de OVNIs ni un canal conspirativo**: es una plataforma OSINT de análisis contextual con rigor editorial estricto — cada nodo tiene credibilidad explícita y trazabilidad documental.

**Producción:** https://atlas-uap.vercel.app/ · **Licencia datos:** CC0

## Stack
React 18 · D3 v7 · Vite 5 · deploy estático en Vercel (sin backend, sin BD). El repositorio es la fuente de verdad.

## Estructura
```
index.html               Shell con SEO completo (OG/Twitter/JSON-LD)
vite.config.js           Build + plugin de validación de datos (broken links, IDs duplicados)
public/tools.html        Panel editorial (gate SHA-256; protección real = PAT de GitHub)
public/og-cover.png      Imagen de preview para unfurling (1200×630)
src/App.jsx              Aplicación completa: grafo D3, Vista Índice, modo Patrones, hash routing
src/data/nodes.js        NODES[] + LINKS_DATA + métricas runtime (Brandes) + paletas
src/data/sources.js      Fuentes por nodo con blindaje de 4 URLs (original/espejo/Wayback/dataset)
src/data/smokingGuns.js  Pistolas humeantes (anomalías estructurales curadas)
src/data/releases.js     Tracker de releases PURSUE (war.gov/UFO)
src/data/help.js         Manual bilingüe con convención feature_id/since_version
```

## Scripts
`npm run dev` · `npm run build` (incluye validación de datos: falla con broken links) · `npm run preview`

## Modelo de datos (schema de nodo)
```js
{ id, label:{es,en}, year, cat, sub:{es,en}, credibility, desc:{es,en}, links:[ids] }
```
**Credibilidad (criterio sagrado):** `high` = juramento ante Congreso / documento oficial / FOIA verificado · `medium` = fuente identificada con cargo verificable · `low` = sin corroboración independiente.

**Filosofía editorial:** calidad > cantidad (3-4 nodos por release) · Evidencia ≠ Relación ≠ Interpretación ≠ Hipótesis · la IA propone, el humano decide · las contradicciones se documentan, no se resuelven.

## URLs compartibles
`/#node=<id>` abre la ficha de ese nodo · `/#pattern=<id>` activa esa pistola humeante.

## Documentación
[CHANGELOG.md](CHANGELOG.md) · [DEPLOY.md](DEPLOY.md) (deploy, credenciales, Vercel) · [CONTRIBUTING.md](CONTRIBUTING.md) (checklist de ingesta editorial)
