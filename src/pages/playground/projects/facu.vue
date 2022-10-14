<template>
  <template>
    <v-table fixed-header height="300px">
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Calories</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </v-table>
  </template>
</template>

<script setup>
let wizards = [
  { id: 1, name: 'Harry', lastName: 'Potter' },
  { id: 2, name: 'Ron', lastName: 'Weasley' },
  { id: 3, name: 'Hermione', lastName: 'Granger' },
]

function findWizzard(name) {
  for (const wizzard of wizards) {
    if (wizzard.name === name) {
      return wizzard
    }
  }
}
console.log(findWizzard('Harry'))

// const newArray = wizards
//   .filter(item => {
//     return item.name === 'Harry'
//   })
//   .map(newItem => {
//     const obj = { ...newItem }
//     return obj
//   })
</script>
