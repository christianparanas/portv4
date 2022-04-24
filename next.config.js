module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  env: {
    GITHUB_PERSONAL_ACCESS_TOKEN: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
  },
};

const withMDX = require("@next/mdx")();

module.exports = withMDX({
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
});
