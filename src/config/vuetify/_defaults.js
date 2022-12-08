export default {
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
}
