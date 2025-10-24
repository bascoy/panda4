# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Modern GitHub Actions workflow for automated releases
- NPM provenance support for enhanced security
- Compressed CSS builds (`.min.css`) for production use
- Manual release workflow via GitHub Actions
- Clean script for removing generated CSS files
- CSS linting and validation scripts
- Watch mode for development

### Changed
- **BREAKING**: Simplified package exports to 3 essential paths only
- Updated package.json with cleaner export structure
- Improved build scripts with better error handling
- Enhanced documentation with simplified usage examples
- CSS compilation now excludes source maps for cleaner output

### Fixed
- CSS compilation now uses expanded style for better readability
- GitHub Actions workflows updated to use modern actions
- Removed redundant export paths to reduce confusion

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

[Unreleased]: https://github.com/bascoy/pand4/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/bascoy/pand4/releases/tag/v1.0.0