<template>
  <v-container>
    <v-sheet max-width="1200" class="mx-auto" elevation="8">
      <v-carousel v-model="model" hide-delimiters :show-arrows="false">
        <v-carousel-item
          v-for="(chunk, key, i) in reviews"
          :key="chunk"
          :value="i"
        >
          <v-row class="pa-8">
            <v-col md="4" cols="12" :key="i" v-for="(review, i) in chunk">
              <v-card height="400" color="white">
                <v-card-title> {{ review.title }} </v-card-title>
              </v-card>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
      <div class="d-flex justify-center align-center py-4">
        <v-btn
          v-for="button in sliderButtons"
          :key="button.icon"
          variant="text"
          :icon="button.icon"
          @click="button.action()"
        ></v-btn>
      </div>
    </v-sheet>
  </v-container>
</template>

<script setup>
defineOptions({
  name: "PlaygroundAutocomplete",
})

const model = $ref(0)

const sliderButtons = $ref([
  {
    icon: "$mdiChevronLeft",
    action() {
      model = Math.max(model - 1, 0)
    },
  },
  {
    icon: "$mdiChevronRight",
    action() {
      model = Math.min(model + 1, 1)
    },
  },
])
const reviews = $ref({
  chunk1: [
    { title: "paypal", text: "good review 1" },
    { title: "tesla", text: "good review 2" },
    { title: "twitter", text: "good review 3" },
  ],
  chunk2: [
    { title: "microsoft", text: "good review 3" },
    { title: "apple", text: "good review 4" },
    { title: "spotify", text: "good review 5" },
  ],
})
</script>
