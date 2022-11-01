<template>
  <v-container class="d-flex flex-wrap align-center justify-center fill-height">
    <v-card
      elevation="13"
      class="py-8 rounded-lg mx-auto d-flex flex-column"
      height="500"
      width="360"
      color="rgba(50, 58, 68, 0.5)"
    >
      <div class="mt-auto text-h5 text-capitalize d-flex justify-center">
        Rating overview
      </div>

      <div class="my-auto d-flex flex-column align-center">
        <div class="text-capitalize">
          <div class="text-h2 mt-5">
            4.1
            <span class="text-h6 ml-n3">/5</span>
          </div>
        </div>

        <div>
          <v-rating
            :model-value="4.5"
            half-increments
            readonly
            color="yellow-darken-3"
          />
        </div>
        <div class="px-3">2,250 ratings</div>
      </div>

      <v-list
        class="d-flex flex-column-reverse"
        bg-color="transparent"
        density="compact"
      >
        <v-list-item v-for="raiting in 5">
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
              <v-icon class="mx-3">$mdiStar</v-icon>
            </div>
          </template>

          <template v-slot:append>
            <div style="width: 50px">
              <span class="ml-3"> {{ raiting * 224 + 2 }} </span>
            </div>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
