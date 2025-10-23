# Pand4 Framework

Un framework CSS moderno, modular y responsive construido con SCSS.

## 🚀 Instalación

```bash
npm install pand4
```

## � Uso

### Importar el framework completo

```scss
// Importar todo el framework
@import 'pand4';
```

### Importar módulos específicos

```scss
// Solo variables
@import 'pand4/variables';

// Solo mixins
@import 'pand4/mixins';

// Solo utilidades
@import 'pand4/utilities';
```

### Usar CSS compilado

```html
<!-- En tu HTML -->
<link rel="stylesheet" href="node_modules/pand4/src/styles/pand4/pand4.css">
```

O importarlo en tu JavaScript/CSS:

```css
@import 'pand4/css';
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
│   ├── variables/        # Variables de colores, tipografías, espaciados
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
    ├── _rtl.scss       # Soporte RTL
    └── _sr-only.scss   # Utilidades de accesibilidad
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

## 🔧 Personalización

```scss
// Sobrescribir variables antes de importar
$primary-color: #your-color;
$font-family-base: 'Your Font', sans-serif;

@import 'pand4';
```

## 📊 Ejemplos de Uso

### Usando mixins

```scss
.mi-componente {
  @include responsive-text();
  @include center-content();
}
```

### Usando variables

```scss
.mi-elemento {
  color: var(--color-primary);
  font-size: var(--font-size-lg);
  margin: var(--spacer-4);
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
