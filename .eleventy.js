const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
  eleventyConfig.addDataExtension("json", contents => JSON.parse(contents));
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://final-elent-cms.pages.dev",
    },
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    templateFormats: ["njk"],
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk"
  };
};
