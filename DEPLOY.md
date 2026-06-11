DEPLOY — UAP Intelligence Atlas
Deploy estándar
Push a `main` → Vercel auto-despliega (~60s). El build ejecuta la validación de datos: si hay broken links o IDs duplicados en nodes.js, el deploy falla (es intencional).
Checklist al subir v5.0.0
Copiar los archivos del paquete a la raíz del repo respetando rutas.
Eliminar `api/update-nodes.js` del repo (endpoint huérfano; el zip ya no lo incluye, pero Git conserva el archivo hasta que lo borres y commitees).
Commit + push. Verificar en el log de build de Vercel la línea `[atlas] Validación de datos OK`.
Verificación post-deploy: abrir `https://atlas-uap.vercel.app/#node=grusch` (debe abrir la ficha) · pegar la URL raíz en X/WhatsApp y comprobar el preview con imagen · probar el conmutador Grafo/Índice · abrir en móvil (debe arrancar en Índice).
Rotación de credenciales de tools.html (PENDIENTE — hazlo ya)
Las credenciales anteriores estuvieron expuestas en el repo público en versiones pasadas. Aunque el gate es cosmético (la protección real es el PAT de GitHub que se pega en runtime y no vive en el código), conviene rotarlas:
Elige usuario y contraseña nuevos.
Genera el hash en la consola del navegador:
```js
   const d = new TextEncoder().encode("usuario:contraseña");
   crypto.subtle.digest("SHA-256", d).then(b => console.log([...new Uint8Array(b)].map(x=>x.toString(16).padStart(2,"0")).join("")));
   ```
Sustituye el valor de `_tHash` en `public/tools.html` por el hash resultante.
Si en algún momento el PAT de GitHub estuvo en el repo: revócalo en GitHub → Settings → Developer settings y genera uno nuevo (scope mínimo: `repo`, solo este repositorio).
Variables de entorno (Vercel → Settings → Environment Variables)
Ninguna obligatoria tras eliminar el endpoint huérfano. Si en el futuro se restaura un endpoint de escritura: definir `TOOLS_TOKEN` (el código ya hace guard y devuelve 500 si no existe).
Recomendado
Activar Vercel Deployment Protection para `/tools.html` o mover el editor a un proyecto privado separado si el Atlas gana tráfico.
