# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.4] - 2025-11-04

### Fixed
- Fixed `main` field in `package.json` to point to compiled CSS instead of SCSS
- Added `style` field for better CSS framework compatibility
- Added `sass` field to expose SCSS source files
- Improved `exports` configuration for better module resolution
- Ensures Bundlephobia can properly analyze package size

## [1.0.3] - 2025-11-04

### Added
- New `CodeBlock` component for documentation with syntax highlighting and copy button
- New `DemoBlock` component for unified demo display
- Button icon variant (`.p4-btn--icon`) for icon-only buttons
- Font weight variables and utilities
- NPM badges on homepage
- Comprehensive documentation styles in `docs.scss`

### Changed
- **Documentation Update**: Emphasized CSS Variables as recommended customization method
- Updated README.md to prioritize CSS custom properties over SCSS configuration
- Added warning that SCSS configuration only for breakpoints and containers
- Refactored `index.astro` with improved structure and examples
- Updated `Layout.astro` with server-side dynamic year
- Enhanced documentation components for better code examples

### Improved
- Better documentation architecture with reusable components
- Clearer customization guidelines for users
- More comprehensive CSS variable examples

## [1.0.0] - 2025-10-23

### Added
- Initial release of Pand4 SCSS framework
- Modular SCSS architecture with abstract utilities
- Responsive grid system
- Typography and spacing utilities
- Component styles for buttons, forms, and layouts
- Documentation site built with Astro
- Vercel deployment configuration
- NPM package configuration

### Features
- Modern @use syntax support
- Customizable CSS variables
- Mobile-first responsive design
- Semantic color system
- Flexible spacing scale
- Cross-browser compatibility

[Unreleased]: https://github.com/bascoy/pand4/compare/v1.0.4...HEAD
[1.0.4]: https://github.com/bascoy/pand4/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/bascoy/pand4/compare/v1.0.0...v1.0.3
[1.0.0]: https://github.com/bascoy/pand4/releases/tag/v1.0.0