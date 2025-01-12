module.exports = function(eleventyConfig) {
  eleventyConfig.addDataExtension("json", contents => JSON.parse(contents));
  eleventyConfig.addPassthroughCopy("assets");

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
