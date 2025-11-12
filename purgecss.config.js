export default {
  content: [
    './src/**/*.html',
    './src/**/*.astro',
    './src/**/*.jsx',
    './src/**/*.tsx',
    './src/**/*.vue',
  ],
  css: ['./src/styles/pand4/dist/pand4-atomic.css'],
  output: './src/styles/pand4/dist/',
  safelist: {
    // Mantener estas clases siempre
    standard: [
      /^p4-/,  // Variables CSS
      /^--p4-/, // Variables CSS
    ],
    deep: [],
    greedy: [
      /^data-/, // Atributos data
    ],
  },
  // Opciones avanzadas
  defaultExtractor: (content) => {
    // Extraer clases de utilidades tipo Tailwind
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
    return broadMatches.concat(innerMatches);
  },
  fontFace: true,
  keyframes: true,
  variables: true,
};
