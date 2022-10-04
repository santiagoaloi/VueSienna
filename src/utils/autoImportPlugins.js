export default app => {
  Object.values(import.meta.globEager('@@@/*.js')).map(module =>
    module.install(app)
  )
}
