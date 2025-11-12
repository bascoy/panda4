import purgecss from '@fullhuman/postcss-purgecss';

export default {
  plugins: [
    purgecss({
      content: [
        './src/**/*.html',
        './src/**/*.astro',
        './src/**/*.jsx',
        './src/**/*.tsx',
        './src/**/*.vue',
      ],
      safelist: {
        standard: [/^p4-/, /^--p4-/],
        deep: [],
        greedy: [/^data-/],
      },
      defaultExtractor: (content) => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
        return broadMatches.concat(innerMatches);
      },
      fontFace: true,
      keyframes: true,
      variables: true,
    }),
  ],
};
