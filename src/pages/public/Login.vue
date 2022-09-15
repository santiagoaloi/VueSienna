<template>
  <v-card color="blue-grey-darken-1" dark :loading="isUpdating">
    <template v-slot:progress>
      <v-progress-linear
        absolute
        color="green-lighten-3"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="person.name"
              :disabled="isUpdating"
              filled
              color="blue-grey-lighten-2"
              label="Nombre"
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="person.password"
              :disabled="isUpdating"
              filled
              color="blue-grey-lighten-2"
              label="Password"
              hint="Enter your password to access this website"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-autocomplete
              v-model="person.friends"
              :disabled="isUpdating"
              :items="people"
              filled
              chips
              closable-chips
              color="blue-grey-lighten-2"
              label="Seleccionar amigos"
              item-title="name"
              item-value="name"
              multiple
            >
              <template v-slot:chip="{ props, item }">
                <v-chip
                  v-bind="props"
                  :prepend-avatar="item.raw.avatar"
                  :text="item.raw.name"
                ></v-chip>
              </template>
              <template v-slot:item="{ props, item }">
                <v-list-item
                  v-if="typeof item.raw !== 'object'"
                  v-bind="props"
                ></v-list-item>
                <v-list-item
                  v-else
                  v-bind="props"
                  :prepend-avatar="item.raw.avatar"
                  :title="item.raw.name"
                  :subtitle="item.raw.group"
                ></v-list-item>
              </template>
            </v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-switch
        v-model="autoUpdate"
        :disabled="isUpdating"
        class="mt-0"
        color="green-lighten-2"
        hide-details
        label="Auto Update"
      ></v-switch>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="autoUpdate"
        :loading="isUpdating"
        color="blue-grey-lighten-3"
        prepend-icon="mdi-update"
        @click="isUpdating = true"
      >
        Update Now
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
const person = ref({});

const srcs = {
  1: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
  2: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
  3: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
  4: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
  5: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
};

const people = [
  { header: "Group 1" },
  { name: "Sandra Adams", group: "Group 1", avatar: srcs[1] },
  { name: "Ali Connors", group: "Group 1", avatar: srcs[2] },
  { name: "Trevor Hansen", group: "Group 1", avatar: srcs[3] },
  { name: "Tucker Smith", group: "Group 1", avatar: srcs[2] },
  { divider: true },
  { header: "Group 2" },
  { name: "Britta Holt", group: "Group 2", avatar: srcs[4] },
  { name: "Jane Smith ", group: "Group 2", avatar: srcs[5] },
  { name: "John Smith", group: "Group 2", avatar: srcs[1] },
  { name: "Sandra Williams", group: "Group 2", avatar: srcs[3] },
];

const isUpdating = ref(false);
const autoUpdate = ref(true);
</script>
