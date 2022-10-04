export const useAppStore = defineStore('app', {
  // Data
  state: () => ({
    drawer: true,
  }),
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
