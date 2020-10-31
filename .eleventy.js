// docs: https://www.11ty.io/docs/config/

module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias("default", "default.liquid");
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.setTemplateFormats(["css", "html", "liquid"]);

  return {
    dir: {
      includes: "_partials",
      layouts: "_layouts",
      input: "src",
      output: "dist"
    }
  };
};
