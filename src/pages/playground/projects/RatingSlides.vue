<template>
  <v-container>
    <v-sheet max-width="1100" class="mx-auto bg-transparent">
      <v-switch
        v-model="readOnly"
        class="ml-9 mb-n8"
        color="#747bff"
        label="Read-only ratings"
      />
      <v-carousel v-model="model" hide-delimiters :show-arrows="false">
        <v-carousel-item v-for="(chunk, i) in reviews" :key="chunk" :value="i">
          <v-row class="pa-8">
            <v-col md="4" cols="12" :key="i" v-for="(review, i) in chunk">
              <v-card
                elevation="13"
                class="d-flex justify-center align-center flex-column py-8 rounded-lg"
                height="400"
                color="rgba(50, 58, 68, 0.5)"
              >
                <div class="mt-auto d-flex flex-column text-h4 text-capitalize">
                  {{ review.title }}
                </div>

                <div class="mt-auto px-3">
                  <v-list :items="items" lines="two" bg-color="transparent">
                    <v-list-item>
                      <v-list-item-subtitle class="font-italic">
                        "{{ review.text }}"
                      </v-list-item-subtitle>
                    </v-list-item>
                  </v-list>
                </div>
                <div>
                  <v-rating
                    color="yellow-darken-3"
                    v-model="review.rating"
                    :readonly="readOnly"
                  />
                </div>
                <div class="mt-auto">
                  <v-btn
                    class="text-capitalize"
                    variant="text"
                    prepend-icon="$mdiBookOpenPageVariantOutline"
                    color="grey"
                    >See story</v-btn
                  >
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-carousel-item>
      </v-carousel>
      <div class="d-flex justify-center align-center py-4">
        <v-btn
          :rounded="0"
          v-for="button in sliderButtons"
          :key="button.icon"
          :icon="button.icon"
          @click="button.action()"
          color="rgba(	50, 58, 68, 0.5)"
        ></v-btn>
      </div>
    </v-sheet>
  </v-container>
</template>

<script setup>
defineOptions({
  name: 'PlaygroundRatingSlides',
})

let readOnly = $ref(true)

let model = $ref(0)

let sliderButtons = $ref([
  {
    icon: '$mdiChevronLeft',
    action() {
      model = Math.max(model - 1, 0)
    },
  },
  {
    icon: '$mdiChevronRight',
    action() {
      model = Math.min(model + 1, reviews.length - 1)
    },
  },
])

let reviews = reactive([
  [
    {
      title: 'tesla',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
      rating: 5,
    },
    {
      title: 'twitter',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
      rating: 3,
    },
    {
      title: 'apple',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
      rating: 5,
    },
  ],
  [
    {
      title: 'spotify',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
      rating: 1,
    },
    {
      title: 'spaceX',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
      rating: 4,
    },
    {
      title: 'nasa',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
      rating: 3,
    },
  ],
  [
    {
      title: 'netflix',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.',
      rating: 4,
    },
  ],
])
</script>
