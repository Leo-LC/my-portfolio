module.exports = {
  plugins: [
    require("autoprefixer"),
    require("cssnano"),
    require("stylelint"),
    purgecss({
      content: ["./**/*.html"],
      css: ["./**/*.css"],
    }),
  ],
};
