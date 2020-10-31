// docs: https://www.11ty.io/docs/config/

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/css/");

  return {
    dir: {
      includes: "_partials",
      layouts: "_layouts",
      input: "src",
      output: "dist"
    }
  };
};
