# Pand4 Framework

Un framework CSS moderno, modular y responsive construido con SCSS.

[![npm version](https://badge.fury.io/js/pand4.svg)](https://www.npmjs.com/package/pand4)
[![npm downloads](https://img.shields.io/npm/dm/pand4.svg)](https://www.npmjs.com/package/pand4)

## 🚀 Instalación

```bash
npm install pand4
```

## � Uso

### Importar el framework completo

```scss
// Método moderno recomendado
@use 'pand4' as *;
```

### Uso con Variables Personalizadas

```scss
// Personalizar variables al importar
@use 'pand4' as * with (
  $primary-color: #3b82f6,
  $secondary-color: #64748b,
  $base-font-size: 16px
);
```

### Usar CSS compilado

#### En HTML:
```html
<link rel="stylesheet" href="node_modules/pand4/src/styles/pand4/pand4.css">
```

#### En JavaScript/Bundlers (Vite, Webpack, etc.):
```javascript
// CSS completo
import 'pand4/css';

// CSS minificado (recomendado para producción)
import 'pand4/min.css';
```

#### En frameworks (Next.js, Nuxt, etc.):
```javascript
// En _app.js, layout.vue, etc.
import 'pand4/css';
```

## 🎨 Características

- **📱 Responsive**: Breakpoints adaptativos para todos los dispositivos
- **🎯 Modular**: Importa solo lo que necesitas
- **🎨 Personalizable**: Variables SCSS fáciles de modificar
- **♿ Accesible**: Utilidades de accesibilidad incluidas
- **🌍 RTL**: Soporte para idiomas de derecha a izquierda
- **⚡ Ligero**: Optimizado para rendimiento

## 📁 Estructura

```
pand4/
├── abstract/
│   ├── variables/       # Variables de colores, tipografías, espaciados
│   ├── _mixins.scss     # Mixins reutilizables
│   └── _functions.scss  # Funciones SCSS
├── generic/
│   ├── _reset.scss      # Reset CSS
│   └── _root.scss       # Variables CSS custom
├── elements/
│   ├── _html.scss       # Estilos base HTML
│   └── _body.scss       # Estilos base body
└── utilities/
    ├── _utilities.scss  # Clases utilitarias
    ├── _rtl.scss        # Soporte RTL
    └── _sr-only.scss    # Utilidades de accesibilidad
```

## 🎯 Variables Disponibles

### Colores
- Paleta de colores completa
- Variables de tema claro/oscuro
- Colores semánticos (primary, secondary, success, etc.)

### Tipografía
- Familias de fuentes
- Escalas tipográficas responsivas
- Weights y estilos

### Espaciado
- Sistema de espaciado consistente
- Margins y paddings
- Gaps para layouts

### Breakpoints
- Breakpoints responsive predefinidos
- Mobile-first approach

## 🔧 Personalización con SCSS

```scss
// Método moderno con @use y configuración
@use 'pand4' as * with (
  $primary-color: #your-color,
  $font-family-base: 'Your Font', sans-serif
);

// O método tradicional (menos recomendado)
$primary-color: #your-color;
$font-family-base: 'Your Font', sans-serif;
@use 'pand4' as *;
```

### 🆚 **@use vs @import en SCSS**

| Característica | `@use` (Recomendado) | `@import` (Legado) |
|----------------|---------------------|-------------------|
| **Namespace** | ✅ Automático | ❌ Global |
| **Conflictos** | ✅ Evita conflictos | ❌ Puede generar conflictos |
| **Performance** | ✅ Carga una vez | ❌ Carga múltiple |
| **Configuración** | ✅ `with (...)` | ❌ Variables globales |
| **Futuro** | ✅ Mantenido | ⚠️ Deprecado |

## 📊 Ejemplos de Uso

### Usando mixins

```scss
// Con @use y namespace
@use 'pand4' as p4;

.mi-componente {
  @include p4.responsive-text();
  @include p4.center-content();
}

// Con @use sin namespace (as *)
@use 'pand4' as *;

.mi-componente {
  @include responsive-text();
  @include center-content();
}
```

### Usando variables

```scss
// Variables CSS (siempre disponibles)
.mi-elemento {
  color: var(--color-primary);
  font-size: var(--font-size-lg);
  margin: var(--spacer-4);
}

// Variables SCSS con namespace
@use 'pand4' as p4;

.mi-elemento {
  color: p4.$primary-color;
  font-size: p4.$font-size-lg;
  margin: p4.$spacer-4;
}
```

## 🌐 Demo

Visita [https://pand4.vercel.app](https://pand4.vercel.app) para ver el framework en acción.

## 📚 Documentación Completa

Para documentación detallada, ejemplos y guías, visita nuestro [sitio web](https://pand4.vercel.app).

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## � Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**bascoy** - [GitHub](https://github.com/bascoy)

---

⭐ ¡Dale una estrella si te gusta el proyecto!
