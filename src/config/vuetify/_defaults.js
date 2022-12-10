export default {
  // Native Vuetify Components
  VToolbar: {
    VBtn: { variant: 'elevated' },
  },
  VAppBar: {
    flat: true,
    // border: true,
    density: 'comfortable',
    color: 'appbar-background',
  },
  VTextField: {
    variant: 'solo',
    hideDetails: 'auto',
    density: 'comfortable',
    bgColor: 'text-field-background',
  },
  VTextarea: {
    variant: 'solo',
    hideDetails: 'auto',
    density: 'comfortable',
    bgColor: 'text-field-background',
    rows: 3,
  },
  VAutocomplete: {
    menuProps: { contentClass: 'autocomplete-list-bg-color', maxHeight: '200' },
  },
  VTooltip: { location: 'bottom' },
  VImg: { transition: false },
  VNavigationDrawer: {
    color: 'navigation-drawer',
    width: 280,
    permanent: true,
  },
  VAlert: {
    border: 'start',
    borderColor: 'purple-accent-4',
    elevation: true,
  },

  // Custom Component Aliases
  ThemeSwitch: {
    color: '#6B6975',
    ripple: false,
    hideDetails: true,
    inset: true,
    trueIcon: '$mdiMoonWaxingCrescent',
    falseIcon: '$mdiWhiteBalanceSunny',
    trueValue: 'dark',
    falseValue: 'light',
  },

  SkriptagGithub: {
    color: 'primary',
    textColor: 'white',
    border: true,
    href: 'https://github.com/santiagoaloi/VueSienna',
    prependIcon: '$mdiGithub',
  },
}
