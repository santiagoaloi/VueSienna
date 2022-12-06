<template>
  <VList
    item-props
    :items="[
      {
        title: 'Overview',
        value: 'overview',
        to: '/account/overview',
        prependIcon: '$mdiViewDashboardOutline',
      },
      {
        title: 'Public Profile',
        value: 'PublicProfile',
        to: '/account/publicprofile',
        prependIcon: '$mdiAccountCogOutline',
      },
    ]"
    density="compact"
    nav
  >
  </VList>
</template>
