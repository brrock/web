const { DateTime } = require("luxon")
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/style.css');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin/config.yml');    
  eleventyConfig.addPassthroughCopy('./src/robots.txt'); 
  eleventyConfig.addPassthroughCopy('./src/output/style.css'); 
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
        return {
          dir: {
            input: "src",
            output: "public"
          }
        }
      };
