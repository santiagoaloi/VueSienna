export const useGoTo = routeName => {
  const route = useRoute()
  const router = useRouter()

  return {
    isCurrent: computed(() => route.name === routeName),
    goTo: async () => await router.push({ name: routeName }),
  }
}
