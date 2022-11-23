export const useGoTo = routeName => {
  const route = useRoute()
  const router = useRouter()

  return {
    // isCurrent: computed(() => route.path === routeName),
    goTo: async () => await router.push(routeName),
  }
}
