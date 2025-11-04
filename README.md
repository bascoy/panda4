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

### En CSS (Recomendado para personalización)

```css
/* Importar el CSS compilado */
@import 'pand4/css';

/* Personalizar variables CSS */
:root {
  --p4-color-primary-500: #3b82f6;
  --p4-font-family-base: 'Inter', system-ui, sans-serif;
  --p4-text-color-base: #1a1a1a;
}
```

### En SCSS (Para desarrollo avanzado)

```scss
// Método moderno con @use
@use 'pand4' as *;

// Uso en tus componentes
.mi-componente {
  @include p4-container;
  padding: var(--p4-spacer-24);
}
```

### En JavaScript/Bundlers

```javascript
// CSS completo
import 'pand4/css';

// CSS minificado (producción)
import 'pand4/min.css';
```

### En HTML

```html
<!-- CSS completo -->
<link rel="stylesheet" href="node_modules/pand4/css">

<!-- CSS minificado -->
<link rel="stylesheet" href="node_modules/pand4/min.css">
```

## 🎨 Personalización

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

Solo para casos donde necesites modificar **breakpoints** o **containers** antes de compilar:

```scss
@use 'pand4' as * with (
  // ⚠️ Solo estas variables se pueden configurar con SCSS
  $p4-breakpoints: (
    'sm': 640px,
    'md': 768px,
    'lg': 1024px,
    'xl': 1280px,
    '2xl': 1536px
  ),
  $p4-container-max-widths: (
    'sm': 640px,
    'md': 768px,
    'lg': 1024px,
    'xl': 1280px
  )
);
```

**⚠️ Importante:** La mayoría de variables (colores, tipografía, espaciado, etc.) NO se deben personalizar con SCSS. Usa CSS variables en su lugar.

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
