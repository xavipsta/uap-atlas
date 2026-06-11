import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'node:fs'

// ── Validación de integridad de datos del Atlas en cada build ──────────────
// Falla el build si hay broken links o IDs duplicados en nodes.js.
function validateAtlasData() {
  return {
    name: 'validate-atlas-data',
    async buildStart() {
      const code = readFileSync('src/data/nodes.js', 'utf8')
      const m = await import('data:text/javascript,' + encodeURIComponent(code))
      const ids = new Set(m.NODES.map(n => n.id))
      if (ids.size !== m.NODES.length)
        this.error(`[atlas] ${m.NODES.length - ids.size} IDs duplicados en NODES`)
      const broken = m.LINKS_DATA.filter(l => !ids.has(l.source) || !ids.has(l.target))
      if (broken.length)
        this.error(`[atlas] ${broken.length} broken links: ${JSON.stringify(broken.slice(0, 5))}`)
      console.log(`\n[atlas] Validación de datos OK · ${m.NODES.length} nodos · ${m.LINKS_DATA.length} links · 0 broken\n`)
    },
  }
}

export default defineConfig({
  plugins: [validateAtlasData(), react()],
})
