<template>
  <VContainer class="d-flex align-center fill-height">
    <VCard class="mx-auto" width="500 ">
      <VContainer>
        <VSwitch
          v-model="centerInputText"
          class="mb-n2"
          color="primary"
          label="Center input text"
        />

        <VTextField
          variant="filled"
          autofocus
          :class="{ 'input-text-center': centerInputText }"
        />
      </VContainer>
    </VCard>
  </VContainer>
</template>

<route lang="yaml">
meta:
  title: Input text centered
  description: Attempt of centering the text inside the input component
  icon: '$mdiFormDropdown'
</route>

<script setup>
const centerInputText = ref(false)
</script>
