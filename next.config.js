// module.exports = {
//   i18n: {
//     locales: ["en"],
//     defaultLocale: "en",
//   },
// };

const withMDX = require('@next/mdx')()

module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})