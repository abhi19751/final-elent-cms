module.exports = function(eleventyConfig) {
  // Additional configurations can be added here
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
