module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
                    @import "@/global-styles/colors.scss";
                    @import "@/global-styles/typography.scss";
                `,
      },
    },
  },
};
