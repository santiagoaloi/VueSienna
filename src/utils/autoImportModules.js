export default app => {
  Object.values(import.meta.globEager('@@@/*.js')).map(m => m.install(app))
}
