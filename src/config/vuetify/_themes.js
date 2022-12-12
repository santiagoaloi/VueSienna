export default {
  dark: {
    dark: true,
    colors: {
      primary: '#8256d0',
      surface: '#1c2128',

      'appbar-background': '#242B33',

      'on-surface': '#adbac7',
      'on-surface-variant': '#242B33',

      'primary-button': '#373e47',
      'secondary-button': '#7b55c7',
      'save-button': '#8256d0',

      'field-outline-focus': '#8256d0',

      'text-field-background': '#2D333B',

      'navigation-drawer': '#22272e',

      'on-background': '#adbac7',
      'on-navigation-drawer': '#adbac7',
      'on-appbar-background': '#adbac7',
    },
    variables: {
      //Custom vars
      'app-background': '#22272e',
      'app-typography': '#adbac7',
      'app-gradient-title-from': '#9898df',
      'app-gradient-title-to': '#adbac7',
      'app-skriptag-title': '#192430',

      'medium-emphasis-opacity': 0.68,
      'field-border-opacity': 0.1,

      // Tab bg hover color not being highlighted.
      'theme-appbar-background-overlay-multiplier': '0.1',
      'theme-on-text-field-background': '#adbac7',
    },
  },
  light: {
    dark: false,
    colors: {
      primary: '#7b55c7',
      surface: '#f6fcff',

      'appbar-background': '#2D333B',

      'on-surface': '#24193B',
      'on-surface-variant': '#fff',

      'primary-button': '#31224F',
      'secondary-button': '#7b55c7',
      'save-button': '#347d39',

      'field-outline-focus': '#7b55c7',

      'text-field-background': '#e9eef5',
      'on-text-field-background': '#181027',
    },
    variables: {
      //Custom vars
      'app-background': '#eff3f8',
      'app-typography': '#2c3b49',
      'app-gradient-title-from': '#9898df',
      'app-gradient-title-to': '#2c3b49',
      'app-skriptag-title': '#192430',

      'medium-emphasis-opacity': 0.68,
      'field-border-opacity': 0.1,

      // Tab bg hover color not being highlighted.
      'theme-appbar-background-overlay-multiplier': '0.1',

      // V-list item nav looks much better this way.
      'theme-navigation-drawer-overlay-multiplier': '1',
    },
  },
}
