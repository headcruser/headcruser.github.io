# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Descripción general

Sitio de portafolio / CV personal de Daniel Martinez Sierra, publicado con GitHub Pages desde la rama `master` (`headcruser.github.io`). El contenido está en español (`lang="es"`).

Es un sitio estático sin paso de compilación, gestor de paquetes, linter ni pruebas: edita los archivos y abre `index.html` en el navegador (o sirve la carpeta, p. ej. `python -m http.server`) para previsualizar. Hacer push a `master` lo publica.

## Estructura

- `index.html` — la única página. Las secciones se identifican por id: `#acerca-de`, `#trabajos` (proyectos, imágenes en `img/proyectos/`), `#contacto`, más un pie con redes sociales.
- `css/app.css` — todos los estilos propios. Los colores son variables CSS en `:root` (`--main-color`, etc.); reutilízalas en lugar de escribir valores fijos. Las clases utilitarias `.none` y `.hidden` se activan/desactivan desde JS.
- `js/app.js` — el único script propio, envuelto en una IIFE `((d,w)=>{...})(document,window)`. Se encarga de:
  - Formulario de contacto (`.form--contact`): envía `FormData` con `fetch` al endpoint AJAX de FormSubmit (`formsubmit.co/ajax/<id>`), muestra `.contact-form-loader` mientras envía, luego asigna `location.hash = '#gracias'` para abrir el modal de confirmación y `#close` después de 1.5 s para cerrarlo.
  - Botón para volver arriba (`.scroll-top-btn`), visible después de 900px de scroll.
- El modal "gracias" es CSS puro, se abre con `.modal#gracias:target` — lo controla el hash de la URL, no clases agregadas desde JS.
- `css/vendor/` (Font Awesome 5.13, normalize.css) y `js/all.js` (JS de Font Awesome) son archivos de terceros copiados al repo; no los edites. `index.html` no carga `js/all.js`.
- `assets/cv_dms.pdf` — CV descargable enlazado desde la página.
- Los enlaces del favicon en `index.html` usan rutas absolutas desde la raíz (`/img/favicon/...`), que solo funcionan cuando el sitio se sirve desde la raíz del dominio.

## Convenciones

`.editorconfig`: UTF-8, tabulaciones (tamaño 4), salto de línea final, sin espacios sobrantes al final de las líneas. Los mensajes de commit se escriben en español.
