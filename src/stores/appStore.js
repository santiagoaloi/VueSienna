export const useAppStore = defineStore('app', {
  state: () => ({
    drawer: true,
    currentTheme: 'dark',
  }),
  persist: true,
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
