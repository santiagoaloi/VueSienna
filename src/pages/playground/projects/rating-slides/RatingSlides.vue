<template>
  <VContainer>
    <VSheet max-width="1100" class="mx-auto bg-transparent">
      <VSwitch
        v-model="readOnly"
        class="ml-9 mb-n8"
        color="#747bff"
        label="Read-only ratings"
      />
      <VCarousel v-model="model" hide-delimiters :show-arrows="false">
        <VCarouselItem v-for="(chunk, i) in reviews" :key="chunk" :value="i">
          <VRow class="pa-8">
            <VCol md="4" cols="12" :key="i" v-for="(review, i) in chunk">
              <VCard
                elevation="13"
                class="d-flex justify-center align-center flex-column py-8 rounded-lg"
                height="400"
                color="rgba(50, 58, 68, 0.5)"
              >
                <div class="mt-auto d-flex flex-column text-h4 text-capitalize">
                  {{ review.title }}
                </div>

                <div class="mt-auto px-3">
                  <VList lines="two" bg-color="transparent">
                    <VListItem>
                      <VListItem-subtitle class="font-italic">
                        "{{ review.text }}"
                      </VListItem-subtitle>
                    </VListItem>
                  </VList>
                </div>
                <div>
                  <VRating
                    color="yellow-darken-3"
                    v-model="review.rating"
                    :readonly="readOnly"
                  />
                </div>
                <div class="mt-auto">
                  <VBtn
                    class="text-capitalize"
                    variant="text"
                    prepend-icon="$mdiBookOpenPageVariantOutline"
                    color="grey"
                    >See story</VBtn
                  >
                </div>
              </VCard>
            </VCol>
          </VRow>
        </VCarouselItem>
      </VCarousel>
      <div class="d-flex justify-center align-center py-4">
        <VBtn
          :rounded="0"
          v-for="button in sliderButtons"
          :key="button.icon"
          :icon="button.icon"
          @click="button.action()"
          color="rgba(	50, 58, 68, 0.5)"
        ></VBtn>
      </div>
    </VSheet>
  </VContainer>
</template>

<script setup>
defineOptions({
  name: 'playgroundRatingSlides',
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
      text: 'The biggest achievement',
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
<route lang="yaml">
meta:
  title: Rating component 2 (slides)
  description: Mockup rating cards slider to be used in official vuetify docs site.
  icon: $mdiStar
</route>
