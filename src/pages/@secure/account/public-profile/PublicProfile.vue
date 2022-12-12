<template>
  <VContainer fluid>
    <v-row>
      <v-col cols="12" md="6">
        <v-card color="transparent">
          <v-card-text>
            <v-card-title>Public Profile</v-card-title>
            <v-card-subtitle
              >Odio euismod lacinia at quis risus sed vulputate odio. Non nisi
              est sit amet. Egestas integer eget aliquet nibh praesent tristique
              magna.
            </v-card-subtitle>

            <v-card-text>
              <PublicProfileForm :schema="formSchema" />
            </v-card-text>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
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
