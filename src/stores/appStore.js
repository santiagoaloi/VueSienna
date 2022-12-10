/*
 * General application related logic.
 */

export const useAppStore = defineStore('app', {
  state: () => ({
    drawer: true,
    isRouting: null,
    currentTheme: 'dark',
    globalSnackbar: {
      model: false,
      text: '',
      color: '',
    },
  }),
  persist: true,

  actions: {
    snackbar(text, type) {
      let color

      switch (type) {
        case 'error':
          color = 'red'
          break

        default:
          color = 'primary'

          break
      }

      this.globalSnackbar = {
        model: true,
        text,
        color,
      }
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
