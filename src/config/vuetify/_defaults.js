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
    hideDetails: true,
    density: 'comfortable',
    bgColor: 'text-field-background',
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
}
