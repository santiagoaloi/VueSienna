export const useAppStore = defineStore('app', {
  state: () => ({
    drawer: true,
    isRouting: null,
    currentTheme: 'dark',
  }),
  persist: true,
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
