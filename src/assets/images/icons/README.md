# Iconos SVG

Esta carpeta contiene los iconos SVG utilizados en Pand4 Framework.

## 📁 Estructura

```
src/
├── assets/
│   └── images/
│       └── icons/                # ← Iconos SVG aquí
│           ├── chevron-left.svg
│           ├── chevron-right.svg
│           ├── more-vertical.svg
│           ├── p4-logo.svg
│           └── panda-logo.svg
└── components/
    └── Icon.astro                # Componente para cargar iconos
```

## 🎨 Uso del componente Icon

```astro
---
import Icon from '../components/Icon.astro';
---

<!-- Uso básico -->
<Icon name="chevron-left" />

<!-- Con clases personalizadas -->
<Icon name="p4-logo" styleClass="my-custom-class" />
```

## 📦 Estructura HTML generada

El componente `Icon` genera la siguiente estructura:

```html
<i class="p4-icon my-custom-class">
  <svg ...>
    ...
  </svg>
</i>
```

## 🎨 Personalización con CSS

Puedes controlar el tamaño y estilo de los iconos mediante CSS:

```astro
<!-- Usando clases de utilidad de Pand4 -->
<Icon name="chevron-right" styleClass="p4-w-16" />  <!-- 16px -->
<Icon name="chevron-right" styleClass="p4-w-24" />  <!-- 24px -->
<Icon name="chevron-right" styleClass="p4-w-48" />  <!-- 48px -->

<!-- Combinando múltiples clases -->
<Icon name="home" styleClass="p4-w-32 text-blue-500" />
```

El color se controla mediante la propiedad CSS `color` (los iconos usan `currentColor`):

```css
.p4-icon { color: red; }
```

## � Iconos disponibles

- `chevron-left` - Flecha izquierda
- `chevron-right` - Flecha derecha
- `more-vertical` - Menú de tres puntos vertical
- `p4-logo` - Logo de Pand4
- `panda-logo` - Logo del panda

## ➕ Añadir nuevos iconos

1. Coloca el archivo `.svg` en esta carpeta
2. Usa el nombre del archivo (sin extensión) en el componente:
   ```astro
   <Icon name="mi-nuevo-icono" />
   ```

## ✨ Características

- **Carga dinámica**: Los SVG se cargan automáticamente desde esta carpeta
- **SVG puro**: El SVG se renderiza exactamente como está en el archivo
- **Sin estilos predefinidos**: Total control mediante clases CSS
- **Clase base**: Todos los iconos tienen la clase `p4-icon`

## ✅ Requisitos para los SVG

1. **ViewBox**: Usar `viewBox="0 0 24 24"` (24x24 es el estándar)
2. **Sin dimensiones fijas**: No incluir `width` ni `height` en el SVG
3. **Colores**: Usar `currentColor` para que sea estilizable con CSS
4. **Atributos stroke**: Incluir `stroke="currentColor"` y `fill="none"`
5. **Nombre**: Usar kebab-case (ej: `arrow-right.svg`)

## 📝 Ejemplo de SVG correcto

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
</svg>
```

## 🎯 Añadir nuevos iconos

1. Coloca tu archivo SVG en `src/assets/images/icons/`
2. Asegúrate de que cumpla los requisitos
3. Usa el componente: `<Icon name="tu-icono" />`

## 🔍 Iconos disponibles

- `home.svg` - Icono de inicio/casa
- `search.svg` - Icono de búsqueda
- `user.svg` - Icono de usuario/perfil
- `menu.svg` - Icono de menú hamburguesa

## 🎨 Estilizado

Los iconos heredan el color del texto (`currentColor`):

```astro
<!-- Rojo -->
<span style="color: red;">
  <Icon name="home" />
</span>

<!-- Con clases de Pand4 -->
<Icon name="search" class="text-primary" />
```

## ♿ Accesibilidad

- Sin título: `role="presentation"` (decorativo)
- Con título: `role="img"` y `aria-label` (significativo)

```astro
<!-- Decorativo -->
<Icon name="home" />

<!-- Significativo -->
<Icon name="home" title="Ir al inicio" />
```
