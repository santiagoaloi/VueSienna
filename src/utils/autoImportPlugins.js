export default app => {
  Object.values(import.meta.globEager('@/modules/*.js')).map(module =>
    module.install(app)
  )
}
