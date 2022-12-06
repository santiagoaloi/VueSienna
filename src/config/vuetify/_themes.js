export default {
  dark: {
    dark: true,
    colors: {
      primary: '#7b55c7',
      surface: '#1c2128',
      'on-surface': '#ccc',
      'appbar-background': '#1c2128',
      'primary-button': '#373e47',
      'on-surface-variant': '#242B33',
      'text-field-background': '#2D333B',
      'navigation-drawer': '#22272e',
      'logout-btn': '#472e72',
    },
    variables: {
      //Custom vars
      'app-background': '#22272e',
      'app-typography': '#adbac7',
      'app-gradient-title-from': '#9898df',
      'app-gradient-title-to': '#adbac7',
      'app-skriptag-title': '#192430',

      // Tab bg hover color not being highlighted.
      'theme-appbar-background-overlay-multiplier': '0.1',
    },
  },
  light: {
    dark: false,
    colors: {
      primary: '#7b55c7',
      surface: '#f6fcff',
      'on-surface': '#2c3b49',
      'appbar-background': '#22272e',
      'primary-button': '#223141',
      'on-surface-variant': '#fff',
      'text-field-background': '#e9eef5',
      'on-background': '#2c3b49',
      'logout-btn': '#22272e', // Medium purple
    },
    variables: {
      //Custom vars
      'app-background': '#eff3f8',
      'app-typography': '#2c3b49',
      'app-gradient-title-from': '#9898df',
      'app-gradient-title-to': '#2c3b49',
      'app-skriptag-title': '#192430',

      // Tab bg hover color not being highlighted.
      'theme-appbar-background-overlay-multiplier': '0.1',

      // V-list item nav looks much better this way.
      'theme-navigation-drawer-overlay-multiplier': '1',
    },
  },
}
