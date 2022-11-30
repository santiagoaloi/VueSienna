export default {
  dark: {
    dark: true,
    colors: {
      primary: '#7b55c7',
      surface: '#22272e',
      'appbar-background': '#22272e',
      'primary-button': '#373e47',
      'on-surface-variant': '#2e3640',
    },
    variables: {
      //Custom vars
      'app-background': '#22272e',
      'app-typography': '#adbac7',
      'app-gradient-title-from': '#9898df',
      'app-gradient-title-to': '#adbac7',
      'app-app-bar-tab-slider-color': '#192430',
      'app-skriptag-title': '#192430',

      // Tab bg hover color not being highlighted.
      'theme-appbar-background-overlay-multiplier': '0.1',
    },
  },
  light: {
    dark: false,
    colors: {
      primary: '#7b55c7',
      surface: '#e8eaed',
      'on-surface': '#2c3b49',
      'appbar-background': '#22272e',
      'primary-button': '#223141',
      'on-surface-variant': '#eceef0',
    },
    variables: {
      //Custom vars
      'app-background': '#E2E3E5',
      'app-typography': '#2c3b49',
      'app-gradient-title-from': '#9898df',
      'app-gradient-title-to': '#2c3b49',
      'app-app-bar-tab-slider-color': '#192430',
      'app-skriptag-title': '#192430',

      // Tab bg hover color not being highlighted.
      'theme-appbar-background-overlay-multiplier': '0.1',
    },
  },
}
