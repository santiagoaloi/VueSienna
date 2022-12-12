<template>
  <VList
    item-props
    :items="[
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
