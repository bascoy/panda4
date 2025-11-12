# Pand4 Framework

Un framework CSS moderno, modular y responsive construido con SCSS. Sistema de diseño completo con tokens CSS, utilidades y componentes base.

[![npm version](https://img.shields.io/npm/v/pand4)](https://www.npmjs.com/package/pand4)
[![npm downloads](https://img.shields.io/npm/dm/pand4)](https://www.npmjs.com/package/pand4)
[![license](https://img.shields.io/npm/l/pand4)](https://github.com/bascoy/pand4/blob/main/LICENSE)
[![bundle size](https://img.shields.io/bundlephobia/minzip/pand4)](https://bundlephobia.com/package/pand4)

## 🚀 Instalación

```bash
# NPM
npm install pand4

# Yarn
yarn add pand4

# PNPM
pnpm add pand4
```

## 📖 Uso Básico

### En JavaScript/Bundlers (Recomendado)

```javascript
// Framework completo (CSS compilado)
import 'pand4';

// Versiones específicas
import 'pand4/dist/pand4.css';           // Completo expandido
import 'pand4/dist/pand4.min.css';       // Completo minificado
import 'pand4/dist/pand4-nano.css';      // Versión nano (solo esenciales)
import 'pand4/dist/pand4-utilities.css'; // Solo utilidades
```

### En SCSS (Para desarrollo avanzado)

```scss
// Importar fuente SCSS para personalización
@use 'pand4/scss' as *;

// Configurar módulos específicos
$p4-modules: (
  'utilities/buttons': true,
  'utilities/spacing': true,
  'components/cards': false,
);

// Uso en tus componentes
.mi-componente {
  @include p4-container;
  padding: var(--p4-spacer-24);
}
```

### En HTML

```html
<!-- Desde node_modules -->
<link rel="stylesheet" href="node_modules/pand4/src/styles/pand4/dist/pand4.min.css">

<!-- Desde CDN -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pand4/src/styles/pand4/dist/pand4.min.css">
```

### Personalizar Variables CSS

```css
/* Personalizar después de importar Pand4 */
:root {
  --p4-color-primary-500: #3b82f6;
  --p4-font-family-base: 'Inter', system-ui, sans-serif;
  --p4-text-color-base: #1a1a1a;
}
```

## 🎨 Personalización

### Variantes del Framework

Pand4 ofrece **tres variantes** para diferentes necesidades:

```javascript
// 1. Versión completa (recomendada)
import 'pand4';
import 'pand4/dist/pand4.css';

// 2. Versión nano (solo esenciales: reset, root vars, elementos base)
import 'pand4/dist/pand4-nano.css';

// 3. Solo utilidades CSS
import 'pand4/dist/pand4-utilities.css';

// 4. Tema oscuro (dark theme colors)
import 'pand4/dist/pand4-dark-theme.css';

// 5. Atomic CSS (variables + utilidades, ideal para tree-shaking con PurgeCSS)
import 'pand4/dist/pand4-atomic.css';
```

**Comparativa de tamaños:**
- `pand4.css` - Framework completo (165 KB / 134 KB min)
- `pand4-nano.css` - Solo esenciales (8.5 KB / 7.6 KB min)
- `pand4-utilities.css` - Solo utilidades (153 KB / 123 KB min)
- `pand4-dark-theme.css` - Tema oscuro (13 KB / 12 KB min)
- `pand4-atomic.css` - Atomic CSS (6.4 KB / 5.9 KB min) ⚡ **Tree-shakeable**

### 🌳 Atomic CSS + PurgeCSS (Máximo Tree-Shaking)

La versión **atomic** está diseñada para tree-shaking máximo con PurgeCSS:

```javascript
// 1. Importar versión atomic
import 'pand4/dist/pand4-atomic.css';

// 2. Configurar PurgeCSS en tu bundler (Vite, Webpack, etc.)
// postcss.config.js
export default {
  plugins: [
    require('@fullhuman/postcss-purgecss')({
      content: ['./src/**/*.{html,js,jsx,ts,tsx,vue}'],
      safelist: [/^p4-/, /^--p4-/],
    }),
  ],
};
```

**Resultado**: Solo las clases que realmente uses terminarán en tu bundle final (normalmente < 2 KB).

### Uso del Dark Theme

El tema oscuro solo incluye las variables CSS de colores dark. Impórtalo después del framework base:

```javascript
// En tu aplicación
import 'pand4/dist/pand4.css';           // Base framework
import 'pand4/dist/pand4-dark-theme.css'; // Dark theme colors
```

```html
<!-- O en HTML -->
<link rel="stylesheet" href="node_modules/pand4/dist/pand4.min.css">
<link rel="stylesheet" href="node_modules/pand4/dist/pand4-dark-theme.min.css">
```

### Personalización con CSS Variables (✅ Recomendado)

La forma **recomendada** de personalizar Pand4 es mediante CSS custom properties:

```css
:root {
  /* Colores */
  --p4-color-primary-500: #3b82f6;
  --p4-color-secondary-500: #64748b;
  
  /* Tipografía */
  --p4-font-family-base: 'Inter', system-ui, sans-serif;
  --p4-font-family-secondary: Impact, 'Arial Black', sans-serif;
  --p4-text-color-base: var(--p4-color-neutral-950);
  --p4-text-color-base-inverse: var(--p4-color-neutral-50);
  
  /* Espaciado */
  --p4-spacer-base: 1rem;
  
  /* Bordes */
  --p4-border-radius-base: 0.25rem;
  
  /* Transiciones */
  --p4-transition-duration: 200ms;
}
```

**Ventajas de usar CSS Variables:**
- ✅ No requiere recompilar SCSS
- ✅ Se pueden cambiar dinámicamente con JavaScript
- ✅ Soporta temas (light/dark) en runtime
- ✅ Mejor rendimiento
- ✅ Más fácil de mantener

### Personalización con SCSS (Casos específicos)

Para builds personalizados con módulos específicos:

```scss
// Importar y configurar módulos
@use 'pand4/scss' as *;

// Configurar qué módulos incluir
$p4-modules: (
  // Esenciales (siempre recomendados)
  'generic/root': true,
  'generic/reset': true,
  
  // Componentes específicos
  'components/buttons': true,
  'components/forms': false,
  
  // Utilidades específicas
  'utilities/spacing': true,
  'utilities/display': true,
  'utilities/typography': false,
) !default;

// El framework solo incluirá los módulos configurados
```

**⚠️ Importante:** Para personalizar colores, tipografía, espaciado, etc., usa CSS variables. Solo usa SCSS para configurar qué módulos incluir en tu build.

## 📁 Estructura del Framework

```
pand4/
├── abstract/              # Variables, mixins, funciones
│   ├── variables/
│   │   ├── _breakpoints.scss
│   │   ├── _containers.scss
│   │   └── _utilities.scss
│   ├── _functions.scss
│   ├── _mixins.scss
│   └── _index.scss
├── generic/              # Reset y configuración root
│   ├── root/            # Variables CSS custom
│   │   ├── _colors.scss
│   │   ├── _font-family.scss
│   │   ├── _font-sizes.scss
│   │   ├── _spacing.scss
│   │   └── _typography.scss
│   ├── _animations.scss
│   ├── _reset.scss
│   └── _index.scss
├── elements/            # Estilos base de elementos HTML
│   ├── _html.scss
│   ├── _body.scss
│   ├── _links.scss
│   └── _index.scss
├── objects/             # Patrones de layout
│   ├── _container.scss
│   └── _index.scss
├── components/          # Componentes UI
│   └── buttons/
│       ├── _button-default.scss
│       ├── _button-ghost-variant.scss
│       ├── _button-naked-variant.scss
│       ├── _button-icon-variant.scss
│       └── _index.scss
└── utilities/          # Clases utilitarias
    ├── _utilities.scss
    ├── _rtl.scss
    └── _index.scss
```

## 🎯 Sistema de Variables CSS

### Colores

```css
/* Paleta de colores neutral */
--p4-color-neutral-0: #ffffff;
--p4-color-neutral-50: #fafafa;
--p4-color-neutral-100: #f5f5f5;
/* ... hasta neutral-950 */

/* Colores de marca */
--p4-color-primary-500: #your-brand-color;
--p4-color-secondary-500: #your-secondary-color;

/* Colores semánticos */
--p4-color-success-500: #10b981;
--p4-color-warning-500: #f59e0b;
--p4-color-error-500: #ef4444;
```

### Tipografía

```css
/* Familias de fuente */
--p4-font-family-base: system-ui, sans-serif;
--p4-font-family-mono: 'Courier New', monospace;

/* Tamaños de fuente */
--p4-text-size-xs: 0.75rem;
--p4-text-size-sm: 0.875rem;
--p4-text-size-base: 1rem;
--p4-text-size-lg: 1.125rem;
/* ... hasta 9xl */

/* Pesos de fuente */
--p4-font-weight-light: 300;
--p4-font-weight-normal: 400;
--p4-font-weight-semibold: 600;
--p4-font-weight-bold: 700;
```

### Espaciado

```css
/* Sistema de espaciado (basado en 4px) */
--p4-spacer-0: 0;
--p4-spacer-4: 0.25rem;   /* 4px */
--p4-spacer-8: 0.5rem;    /* 8px */
--p4-spacer-12: 0.75rem;  /* 12px */
--p4-spacer-16: 1rem;     /* 16px */
--p4-spacer-24: 1.5rem;   /* 24px */
/* ... hasta spacer-1000 */
```

## 🔧 Componentes

### Botones

```html
<!-- Botón por defecto -->
<button class="p4-btn">Botón Principal</button>

<!-- Variantes -->
<button class="p4-btn p4-btn--ghost">Botón Ghost</button>
<button class="p4-btn p4-btn--naked">Botón Naked</button>
<button class="p4-btn p4-btn--icon" aria-label="Menú">
  <svg>...</svg>
</button>
```

## 🛠️ Utilidades CSS

```html
<!-- Display -->
<div class="p4-d-flex p4-d-grid p4-d-block">

<!-- Flexbox -->
<div class="p4-flex-row p4-flex-column p4-items-center p4-justify-between">

<!-- Spacing -->
<div class="p4-p-16 p4-m-24 p4-gap-12">

<!-- Typography -->
<p class="p4-text-lg p4-font-bold p4-text-center">

<!-- Colors -->
<div class="p4-bg-primary-500 p4-text-white">
```

## 📱 Breakpoints Responsivos

```scss
// Breakpoints por defecto
$p4-breakpoints: (
  'sm': 640px,   // Móvil grande / Tablet pequeña
  'md': 768px,   // Tablet
  'lg': 1024px,  // Laptop
  'xl': 1280px,  // Desktop
  '2xl': 1536px  // Desktop grande
);
```

Uso con media queries:

```scss
@use 'pand4/abstract' as *;

.mi-componente {
  padding: var(--p4-spacer-16);
  
  @include mq($min-screen: $p4-breakpoint-md) {
    padding: var(--p4-spacer-32);
  }
}
```

## 🌐 Demo y Documentación

📚 **Documentación completa**: [https://pand4.vercel.app](https://pand4.vercel.app)

## 🤝 Contribuir

Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'feat: add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

### Commits Convencionales

Este proyecto usa [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `docs:` Cambios en documentación
- `style:` Cambios de formato (no afectan el código)
- `refactor:` Refactorización de código
- `test:` Añadir o modificar tests
- `chore:` Tareas de mantenimiento

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**bascoy** - [GitHub](https://github.com/bascoy) - [NPM](https://www.npmjs.com/~bascoy)

---

⭐ ¡Dale una estrella si te gusta el proyecto!
