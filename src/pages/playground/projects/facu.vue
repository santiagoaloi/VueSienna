<template>
  <v-card color="#323a44">
    <v-card-text>
      <v-btn @click="clonePeopleObjectStructured()" class="my-5">
        Crate people clone</v-btn
      >
      <h4 class="mb-5">Original people object</h4>
      {{ people }}

      <h4 class="my-5">Copied people object</h4>
      {{ copiedPeople }}

      <div class="mt-5">
        <small> Change Santi</small>
        <v-text-field v-model="people[0].name" />
      </div>

      <div class="mt-5">
        <small> Change Balin</small>
        <v-text-field v-model="people[1].name" />
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
const people = $ref([
  { name: 'Santi', lastName: 'Aloi' },
  { name: 'Balin', lastName: 'Toncovich' },
])

const copiedPeople = $ref([])

function clonePeopleObject() {
  let newArray = people.map(person => {
    return { ...person }
  })

  copiedPeople = newArray
}

function clonePeopleObjectStructured() {
  let newArray = structuredClone(toRaw(people))
  copiedPeople = newArray
}
</script>
