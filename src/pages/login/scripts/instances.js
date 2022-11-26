export class AuthProviderLoginButton {
  constructor({
    name = 'changeMe',
    icon = '$mdiLink',
    loading = false,
    disabled = false,
    action,
  }) {
    Object.assign(this, {
      name,
      icon,
      loading,
      disabled,
      action,
    })
  }
}
