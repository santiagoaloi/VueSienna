export default function (app) {
  Object.values(import.meta.globEager('@/plugins/*.js')).map(i =>
    i.default.install(app)
  )
}
