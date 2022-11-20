<template>
  <div class="base-table-no-data-wrapper">
    <span class="wizard-icon"> 🧙 </span>
    <VCardTitle v-text="`No matches found.`" />
    <VCardSubtitle v-text="`Try searching something different...`" />
  </div>
</template>

<script setup>
defineOptions({
  name: 'BaseTableNoData',
})
</script>
