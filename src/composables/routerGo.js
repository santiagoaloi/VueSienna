export const useGoTo = routeName => {
  const route = useRoute()
  const router = useRouter()

  return {
    isCurrent: computed(() => route.name === routeName),
    goTo: () => router.push({ name: routeName }),
  }
}
