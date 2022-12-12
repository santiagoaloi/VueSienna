<template>
  <Form @submit="saveProfile()">
    <v-row>
      <v-col
        cols="12"
        v-for="{ type, name, label, component, ...attrs } in schema.fields"
        :key="name"
      >
        <Field v-model="profile[name]" :id="name" :name="name" v-bind="attrs">
          <component
            :is="component"
            class="my-1"
            :label="label"
            :type="type"
            v-model="profile[name]"
            v-bind="attrs"
          />
        </Field>
        <small>
          <ErrorMessage
            class="ml-2 position-absolute text-red-lighten-3"
            :name="name"
          />
        </small>
      </v-col>
      <v-col class="text-end">
        <VBtn :loading="loading" type="submit" color="save-button"
          >Update Profile</VBtn
        >
      </v-col>
    </v-row>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'

let props = defineProps({
  schema: {
    type: Object,
    required: true,
    default: () => {},
  },
})

// Get a copy of the current profile.
let auth = useAuthStore()
const profile = reactive(cloneDeep(auth.profile))

// Save profile logic.

let app = useAppStore()
let account = useAccountStore()

let loading = $ref(false)

async function saveProfile() {
  loading = true
  const update = await account.updateProfile(profile)
  if (update.saved) {
    loading = false
    app.snackbar('Successfully updated settings.')
    return
  }
  loading = false
  app.snackbar('Something went wrong saving', 'error')
}
</script>
