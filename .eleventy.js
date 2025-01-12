const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
  // Add data extensions
  eleventyConfig.addDataExtension("json", contents => JSON.parse(contents));

  // Passthrough copy for assets
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Add sitemap plugin
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://example.com",
    },
  });

  // Add filter for finding translations
  eleventyConfig.addFilter("translate", function(key, locale) {
    try {
      return locale[key] || key;
    } catch (e) {
      return key;
    }
  });

  // Return 11ty config object
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
