const theme = require('@/configs/theme.js');

module.exports = {
  rtl: theme.isRTL,
  theme: {
    dark: theme.globalTheme === 'dark',
    options: {
      customProperties: true
    },
    themes: {
      dark: theme.dark,
      light: theme.light
    }
  }
}
