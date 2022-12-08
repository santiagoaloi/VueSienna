<template>
  <VContainer fluid>
    <PublicProfileForm :schema="formSchema" />
  </VContainer>
</template>

<script setup>
const formSchema = {
  fields: [
    {
      label: 'Name',
      name: 'name',
      rules: Yup.string().required(),
      component: VTextField,
    },
    {
      label: 'Last name',
      name: 'lastName',
      rules: Yup.string().required(),
      component: VTextField,
    },
    {
      label: 'Email',
      name: 'email',
      rules: Yup.string().email().required(),
      component: VTextField,
      disabled: true,
    },
    {
      label: 'Bio',
      name: 'bio',
      rules: Yup.string(),
      component: VTextarea,
      counter: true,
      maxlength: 150,
    },
  ],
}
</script>
