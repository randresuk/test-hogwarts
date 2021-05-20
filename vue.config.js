module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/styles/_global.scss";
          @import "@/assets/styles/_normalize.scss";
        `,
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
  ? '/test-hogwarts/'
  : '/'
};