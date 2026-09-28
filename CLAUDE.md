# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Descripción general

Sitio de portafolio / CV personal de Daniel Martinez Sierra, publicado con GitHub Pages desde la rama `master` (`headcruser.github.io`). El contenido está en español (`lang="es"`).

Es un sitio estático sin paso de compilación, gestor de paquetes, linter ni pruebas: edita los archivos y abre `index.html` en el navegador (o sirve la carpeta, p. ej. `python -m http.server`) para previsualizar. Hacer push a `master` lo publica.

## Estructura

- `index.html` — la única página. Las secciones se identifican por id: `#inicio`, `#acerca-de`, `#stack`, `#trabajos` (proyectos, logos en `img/proyectos/`), `#experiencia` y `#contacto` (dentro del `<footer>`, con redes sociales). Los iconos son SVG en línea (trazo, estilo Lucide).
- Texto pendiente de completar va en `<span class="ph">[...]</span>`; se ve resaltado en la página, así que no debe quedar ninguno al publicar.
- `css/app.css` — todos los estilos propios, mobile-first (breakpoints en 600/700/900px). Colores, fuentes y espaciados son variables CSS en `:root` (`--main-color`, `--font-display`, `--gutter`, etc.); reutilízalas en lugar de escribir valores fijos. Fuentes de Google Fonts: Bricolage Grotesque (títulos), IBM Plex Sans (texto), JetBrains Mono (etiquetas). Las clases utilitarias `.none` y `.hidden` se activan/desactivan desde JS.
- `js/app.js` — el único script propio, envuelto en una IIFE `((d,w)=>{...})(document,window)`. Se encarga de:
  - Formulario de contacto (`.form--contact`): envía `FormData` con `fetch` al endpoint AJAX de FormSubmit (`formsubmit.co/ajax/<id>`), muestra `.contact-form-loader` mientras envía, escribe el resultado (éxito o error) en `.contact-form-response`, asigna `location.hash = '#gracias'` para abrir el modal y `#close` después de 1.5 s para cerrarlo.
  - Menú móvil: `.menu-btn` alterna `.menu--open` en `.menu` (debajo de 900px).
  - Botón para volver arriba (`.scroll-top-btn`), visible después de 900px de scroll.
  - Año actual en `.year` del pie.
- El modal "gracias" es CSS puro, se abre con `.modal#gracias:target` — lo controla el hash de la URL, no clases agregadas desde JS.
- `css/vendor/` (Font Awesome 5.13, normalize.css) y `js/all.js` (JS de Font Awesome) son archivos de terceros copiados al repo; no los edites. `index.html` solo carga normalize.css.
- `assets/cv_dms.pdf` — CV descargable enlazado desde la página. Se genera a partir de `assets/cv/cv_dms.html` (tamaño carta, una página, mismos tokens de color y fuentes que `app.css`); edita el HTML y vuelve a imprimirlo:
  ```
  "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --no-sandbox --disable-gpu --no-pdf-header-footer --print-to-pdf="%TEMP%\cv_dms.pdf" "file:///<ruta>/assets/cv/cv_dms.html"
  ```
  y copia el resultado a `assets/cv_dms.pdf`. Las fuentes del CV están en `assets/cv/fonts/` (subconjunto latin de Google Fonts) porque Chrome headless falla al cargarlas por red; usa una ruta de salida corta, con rutas largas no genera el archivo.
- Los enlaces del favicon en `index.html` usan rutas absolutas desde la raíz (`/img/favicon/...`), que solo funcionan cuando el sitio se sirve desde la raíz del dominio.

## Convenciones

`.editorconfig`: UTF-8, tabulaciones (tamaño 4), salto de línea final, sin espacios sobrantes al final de las líneas. Los mensajes de commit se escriben en español.
