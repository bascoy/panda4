# 🚀 Pand4 Release Configuration

## NPM Token Setup

Para configurar la publicación automática a NPM:

1. Ve a [npmjs.com](https://www.npmjs.com) → Account → Access Tokens
2. Crea un nuevo token de tipo **Automation**
3. En GitHub: Settings → Secrets and variables → Actions
4. Añade el secreto: `NPM_TOKEN` con el valor del token

## Workflows Disponibles

### 🔄 Release Automático
- **Trigger**: Push a `main`
- **Condición**: Solo si la versión en package.json es mayor que la de NPM
- **Proceso**: Build → Verificación → Release en GitHub → Publicación a NPM

### ⚡ Release Manual
- **Trigger**: Manual en GitHub Actions
- **Opciones**: patch/minor/major + mensaje opcional
- **Proceso**: Bump version → Build → Commit → Tag → Release → Publish

## Comandos Locales

```bash
# Desarrollo
npm run dev                    # Astro dev server
npm run compile-all           # Compilar todos los CSS

# Versioning manual
npm version patch             # 1.0.0 → 1.0.1
npm version minor             # 1.0.0 → 1.1.0  
npm version major             # 1.0.0 → 2.0.0

# Publicación manual (después de npm version)
npm publish --provenance      # Con provenance para seguridad
```

## Flujo Recomendado

1. **Desarrollo**: Haz cambios y commits normales
2. **Bump version**: `npm version patch/minor/major`
3. **Push**: `git push` (automático con postversion script)
4. **Publish**: Automático via GitHub Actions

## Monitoreo

- **NPM**: https://www.npmjs.com/package/pand4
- **GitHub Releases**: https://github.com/bascoy/pand4/releases
- **Vercel Demo**: https://pand4.vercel.app