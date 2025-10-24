# Pand4 - Ejemplos de Uso

## 🚀 Instalación Rápida

```bash
npm install pand4
```

## 📖 Métodos de Importación

### 1. SCSS (Recomendado)

```scss
// Importar todo el framework
@use 'pand4' as *;

// Con namespace específico
@use 'pand4' as p4;

// Con variables personalizadas
@use 'pand4' as * with (
  $primary-color: #3b82f6,
  $secondary-color: #64748b
);
```

### 2. CSS Compilado en JavaScript

```javascript
// Vite, Webpack, Rollup, etc.
import 'pand4/css';           // CSS completo
import 'pand4/min.css';       // CSS minificado

// Next.js - pages/_app.js
import 'pand4/css';

// Nuxt.js - nuxt.config.js
export default {
  css: ['pand4/css']
}

// Vue.js - main.js
import 'pand4/css';
```

### 3. HTML Directo

```html
<!-- CSS completo -->
<link rel="stylesheet" href="node_modules/pand4/css">

<!-- CSS minificado -->
<link rel="stylesheet" href="node_modules/pand4/min.css">

<!-- Desde CDN (jsDelivr) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pand4/src/styles/pand4/pand4.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pand4/src/styles/pand4/pand4.min.css">
```

## 🎯 Comparación de Métodos

| Método | Uso | Ventajas | Desventajas |
|--------|-----|----------|-------------|
| `@use 'pand4'` | SCSS | Personalización completa, tree-shaking | Requiere compilador SCSS |
| `import 'pand4/css'` | JS/Bundler | Fácil integración, sin compilador | CSS completo |
| `import 'pand4/min.css'` | JS/Bundler | Menor tamaño | Sin personalización |
| `<link>` HTML | HTML directo | Sin build process | Sin optimizaciones |

## 💡 Recomendaciones por Proyecto

### Framework/Bundler
- **Vite + Vue/React**: `import 'pand4/css'`
- **Next.js**: `import 'pand4/css'` en `_app.js`
- **Nuxt.js**: `css: ['pand4/css']` en config
- **SvelteKit**: `import 'pand4/css'` en `app.html`

### SCSS Projects
- **Con personalización**: `@use 'pand4' as * with (...)`
- **Sin personalización**: `@use 'pand4' as *`

### Producción
- **Bundlers**: `import 'pand4/min.css'`
- **CDN**: Link directo a `.min.css`

## 📦 Exports Disponibles

```json
{
  "exports": {
    ".": "./src/styles/pand4/pand4.scss",     // SCSS principal
    "./css": "./src/styles/pand4/pand4.css",  // CSS compilado
    "./min.css": "./src/styles/pand4/pand4.min.css" // CSS minificado
  }
}
```

### Uso de cada export:

```javascript
// Default export (SCSS)
import 'pand4';              // Solo para bundlers con soporte SCSS

// CSS exports
import 'pand4/css';          // CSS completo
import 'pand4/min.css';      // CSS minificado
```