<template>
  <VContainer class="d-flex align-center justify-center flex-wrap fill-height">
    <VCard
      elevation="13"
      class="d-flex flex-column mx-auto py-8 rounded-lg"
      height="500"
      width="360"
      color="rgba(50, 58, 68, 0.5)"
    >
      <div class="d-flex justify-center mt-auto text-h5 text-capitalize">
        Rating overview
      </div>

      <div class="d-flex align-center flex-column my-auto">
        <div class="text-capitalize">
          <div class="text-h2 mt-5">
            4.1
            <span class="text-h6 ml-n3">/5</span>
          </div>
        </div>

        <div>
          <VRating
            :model-value="4.5"
            half-increments
            readonly
            color="yellow-darken-3"
          />
        </div>
        <div class="px-3">2,250 ratings</div>
      </div>

      <VList
        class="d-flex flex-column-reverse"
        bg-color="transparent"
        density="compact"
      >
        <VListItem v-for="raiting in 5">
          <v-progress-linear
            height="20"
            :model-value="raiting * 18 + 8"
            color="yellow-darken-3"
            rounded
          />
          <template v-slot:prepend>
            <div style="width: 10px">
              <span>{{ raiting + 1 }}</span>
            </div>
            <div class="d-flex">
              <VIcon class="mx-3">$mdiStar</VIcon>
            </div>
          </template>

          <template v-slot:append>
            <div style="width: 50px">
              <span class="ml-3"> {{ raiting * 224 + 2 }} </span>
            </div>
          </template>
        </VListItem>
      </VList>
    </VCard>
  </VContainer>
</template>
<route lang="yaml">
meta:
  title: Rating component 1 (card)
  description: Mockup rating card to be used in official vuetify docs site.
  icon: $mdiStar
</route>
