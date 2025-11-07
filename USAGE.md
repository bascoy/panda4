# Pand4 - Ejemplos de Uso

## 🚀 Instalación Rápida

```bash
npm install pand4
```

## � Variantes Disponibles

Pand4 ofrece **3 variantes** optimizadas para diferentes casos de uso:

### 1. **Completa** (`pand4.css`)
Framework completo con todos los módulos: reset, root vars, elementos, objetos, componentes y utilidades.

```javascript
import 'pand4';
// o específicamente
import 'pand4/dist/pand4.css';
```

### 2. **Nano** (`pand4-nano.css`)
Versión minimalista con solo lo esencial: reset, variables CSS y estilos base de elementos.

```javascript
import 'pand4/dist/pand4-nano.css';
```

### 3. **Utilities** (`pand4-utilities.css`)
Solo clases utilitarias CSS (sin componentes ni estilos base).

```javascript
import 'pand4/dist/pand4-utilities.css';
```

## 📖 Métodos de Importación

### 1. JavaScript/Bundlers (Recomendado)

```javascript
// Vite, Webpack, Rollup, etc.
import 'pand4';                              // Versión completa
import 'pand4/dist/pand4.min.css';          // Completa minificada
import 'pand4/dist/pand4-nano.css';         // Nano
import 'pand4/dist/pand4-utilities.css';    // Solo utilidades

// Next.js - pages/_app.js o app/layout.tsx
import 'pand4';

// Nuxt.js - nuxt.config.js
export default {
  css: ['pand4/dist/pand4.css']
}

// Vue.js - main.js
import 'pand4';
```

### 2. SCSS (Personalización Avanzada)

```scss
// Importar fuente SCSS con configuración de módulos
@use 'pand4/scss' as *;

// Configurar módulos específicos antes de importar
$p4-modules: (
  'utilities/buttons': true,
  'utilities/spacing': true,
  'components/cards': false,
) !default;
```

### 3. HTML Directo

```html
<!-- Desde node_modules -->
<link rel="stylesheet" href="node_modules/pand4/src/styles/pand4/dist/pand4.min.css">

<!-- Desde CDN (jsDelivr) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pand4/src/styles/pand4/dist/pand4.min.css">

<!-- Versión nano -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pand4/src/styles/pand4/dist/pand4-nano.min.css">
```

## 🎯 Comparación de Variantes

| Variante | Tamaño | Incluye | Caso de Uso |
|----------|--------|---------|-------------|
| **Completa** | ~XX KB | Todo | Apps completas, prototipos rápidos |
| **Nano** | ~XX KB | Reset + Vars + Elementos | Base para frameworks, personalización total |
| **Utilities** | ~XX KB | Solo clases utilitarias | Complemento a frameworks existentes |

## 💡 Recomendaciones por Proyecto

### Framework/Bundler
- **Vite + Vue/React**: `import 'pand4'`
- **Next.js**: `import 'pand4'` en `_app.js` o `layout.tsx`
- **Nuxt.js**: `css: ['pand4/dist/pand4.css']` en config
- **SvelteKit**: `import 'pand4'` en `+layout.svelte`
- **Astro**: `import 'pand4'` en layout principal

### Por Necesidad
- **Proyecto nuevo**: `pand4` (completa)
- **Personalización máxima**: `pand4-nano.css` + tus estilos
- **Complementar framework**: `pand4-utilities.css`
- **Producción optimizada**: Importar versiones `.min.css`

### SCSS Projects
- **Build personalizado**: `@use 'pand4/scss'` con `$p4-modules`
- **Sin personalización**: `import 'pand4'`

## 📦 Exports Disponibles

```json
{
  "exports": {
    ".": {
      "sass": "./src/styles/pand4/scss/pand4.scss",
      "default": "./src/styles/pand4/dist/pand4.css"
    },
    "./scss": "./src/styles/pand4/scss/_index.scss",
    "./dist/pand4.css": "./src/styles/pand4/dist/pand4.css",
    "./dist/pand4.min.css": "./src/styles/pand4/dist/pand4.min.css",
    "./dist/pand4-nano.css": "./src/styles/pand4/dist/pand4-nano.css",
    "./dist/pand4-nano.min.css": "./src/styles/pand4/dist/pand4-nano.min.css",
    "./dist/pand4-utilities.css": "./src/styles/pand4/dist/pand4-utilities.css",
    "./dist/pand4-utilities.min.css": "./src/styles/pand4/dist/pand4-utilities.min.css"
  }
}
```

### Uso de cada export:

```javascript
// Export principal (CSS completo)
import 'pand4';

// SCSS source
import 'pand4/scss';

// CSS compilado - versiones específicas
import 'pand4/dist/pand4.css';           // Completo
import 'pand4/dist/pand4.min.css';       // Completo minificado
import 'pand4/dist/pand4-nano.css';      // Nano
import 'pand4/dist/pand4-nano.min.css';  // Nano minificado
import 'pand4/dist/pand4-utilities.css'; // Utilidades
import 'pand4/dist/pand4-utilities.min.css'; // Utilidades minificado
```

## 🎨 Personalización Avanzada

### Configurar Módulos con SCSS

```scss
// En tu archivo principal SCSS
@use 'pand4/scss' as *;

// Configurar qué módulos cargar
$p4-modules: (
  // Generic
  'generic/reset': true,
  'generic/root': true,
  
  // Elements
  'elements/html': true,
  'elements/body': true,
  'elements/links': true,
  
  // Components
  'components/buttons': true,
  
  // Utilities
  'utilities/display': true,
  'utilities/spacing': true,
  'utilities/typography': false,
) !default;
```

### Personalizar Variables CSS

```css
/* Después de importar Pand4 */
:root {
  /* Colores */
  --p4-color-primary-500: #3b82f6;
  --p4-color-secondary-500: #64748b;
  
  /* Tipografía */
  --p4-font-family-base: 'Inter', system-ui, sans-serif;
  --p4-text-size-base: 1rem;
  
  /* Espaciado */
  --p4-spacer-base: 1rem;
  
  /* Bordes */
  --p4-border-radius-base: 0.25rem;
}
```

---

📚 **Más ejemplos**: [https://pand4.vercel.app](https://pand4.vercel.app)