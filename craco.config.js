module.exports = {
  style: {
    css: {
      modules: true, // CSS Modules 활성화
    },
    sass: {
      loaderOptions: {
        additionalData: `
          @import "src/styles/variables";
          @import "src/styles/mixin";
        `,
      },
    },
  },
};
