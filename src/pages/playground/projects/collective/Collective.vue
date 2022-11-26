<template>
  <VRow>
    <VCol sm="6">
      <VCard
        flat
        style="z-index: 2"
        min-height="300"
        class="d-flex justify-end bg-transparent flex-column ml-md-16 ml-5"
      >
        <div>
          <VImg
            width="130"
            src="https://images.opencollective.com/vuetify/39eea68/logo/256.png"
          >
          </VImg>
        </div>
        <div class="pl-3">
          <h1>Vuetify</h1>
          <VBtn
            class="rounded-s-xl mx-1 my-2 ml-md-n1"
            size="small"
            color="#373e47"
          >
            COLLECTIVE
          </VBtn>
          <VBtn
            v-for="tag in filteredTags.basic"
            class="rounded-e-xl mx-1 text-lowercase"
            size="small"
            color="#373e47"
          >
            {{ tag }}
          </VBtn>

          <VMenu>
            <template v-slot:activator="{ props }">
              <VBtn
                v-bind="props"
                v-if="tagsExtendedLength"
                class="rounded-e-xl mx-1 text-lowercase"
                size="small"
                color="#373e47"
              >
                +{{ tagsExtendedLength }} more
              </VBtn>
            </template>

            <VCard
              color="#323a44"
              flat
              class="mt-2 mr-n3"
              min-width="100"
              height="250"
            >
              <VCardText
                v-for="tag in filteredTags.extended"
                class="text-center"
              >
                <h4>{{ tag }}</h4>
              </VCardText>
            </VCard>
          </VMenu>

          <div class="d-flex align-center mt-2 flex-wrap">
            <VBtn
              class="mr-3"
              size="x-small"
              color="#373e47"
              v-for="icon in socialIcons"
              icon
            >
              <VIcon> {{ icon.name }}</VIcon>
            </VBtn>

            <VBtn
              v-if="repo"
              prepend-icon="$mdiGithub"
              size="small"
              rounded="pill"
              color="#373e47"
              class="text-capitalize"
            >
              Code repository
            </VBtn>

            <div class="ml-3 text-capitalize">
              <a class="underline" href="#"> fiscal host:</a>
              <a class="open-source-collective" href="#">
                open source collective</a
              >
            </div>
          </div>
        </div>
      </VCard>
    </VCol>

    <VCol sm="6" class="d-none d-md-flex">
      <VImg
        class="img-mask mt-n3"
        cover
        src="https://images.opencollective.com/vuetify/12cc40f/background.png"
      >
      </VImg>
    </VCol>
  </VRow>
</template>

<script setup>
defineOptions({
  name: 'playgroundCollective',
})

let collective = reactive({
  tags: [
    'javascript',
    'material',
    'material-components',
    'material-design',
    'material-theme',
    'semantic',
    'vue',
    'vue-component',
    'vue-components',
    'vue-material',
    'vue2',
    'vuejs',
    'vuejs2',
    'vuetify',
    'vuetifyjs',
    'Open Source',
  ],
  repo: 'https://github.com/vuetifyjs/vuetify',
  socialIcons: [
    contactIcon('john@vuetify.com'),
    twitterIcon('https://twitter.com/zeroskillz'),
    webIcon('https://vuetifyjs.com/en/'),
  ],

  get filteredTags() {
    return {
      basic: this.tags.slice(0, 3),
      extended: this.tags.slice(3, this.tags[-1]) || null,
    }
  },

  get tagsExtendedLength() {
    return this.filteredTags.extended.length
  },
})

function contactIcon(email) {
  return {
    name: '$mdiEmail',
    url: email,
  }
}

function twitterIcon(url) {
  return {
    name: '$mdiTwitter',
    url,
  }
}

function webIcon(url) {
  return {
    name: '$mdiWeb',
    url,
  }
}

let { tagsExtendedLength, filteredTags, socialIcons, repo } = collective
</script>

<style>
.img-mask {
  -webkit-mask: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM2OCIgaGVpZ2h0PSI0NzIiIHZpZXdCb3g9IjAgMCAxMzY4IDQ3MiIgZmlsbD0ibm9uZSIgCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cGF0aCBvcGFjaXR5PSIwLjIiIGQ9Ik0zMS45ODU2IDAuMDAwNDM3MTU0QzIyMC40MDkgMjUzLjYwNiA4MjMuMjU2IDQyOC4yNzcgOTkwLjA4MiA0NTYuNzY0QzExMDMuMjcgNDc2LjA5MiAxMzExLjA2IDQ2OC4yMzIgMTM2OCA0NDYuMDY5QzEzNjggMzg0LjYyMSAxMzY4IDEuMTM4MTQgMTM2OCAxLjEzODE0Qzk4MC4yOCAwLjc2MTY4MiAzNzAuOTkxIDAuMDAwMjQ2MjMgMzEuOTg1NiAwLjAwMDQzNzE1NFoiIGZpbGw9IiMwMDAwMDAiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjA3NSIgZD0iTTkwLjUyMDkgLTQxLjYxNkMyMTcuNDUgLTQxLjYxNiAxMTQwLjgzIC00Mi44MDk4IDEzOTUuNzIgLTQyLjgwOThDMTM5NS43MiAyMS4zMTY1IDEzOTUuNzIgMTY3LjYxMyAxMzk1LjcyIDIwOC41NjZDMTM5NS43MiAyNjcuNTYyIDE2NDQuMiA1MzUuNjExIDEwMDUuMDQgNDY0LjAyNkM2ODguNzU3IDQyOC42MDMgNTExLjg3MyAyMzIuOTgyIDM0OC45MDIgMTk5LjU4OEMyMTkuMzMgMTczLjAzOCA2My4yNTExIDk0LjI1MDYgOTAuNTIwOSAtNDEuNjE2WiIgZmlsbD0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03NTMuODMxIDQzNC44NzJDNzU2LjM4NiA0MzUuMTU1IDc1OC42ODcgNDMzLjMxNCA3NTguOTcgNDMwLjc1OUM3NTkuMjUzIDQyOC4yMDQgNzU3LjQxMiA0MjUuOTAzIDc1NC44NTcgNDI1LjYyQzc1Mi4zMDIgNDI1LjMzNyA3NTAuMDAyIDQyNy4xNzggNzQ5LjcxOSA0MjkuNzMzQzc0OS40MzUgNDMyLjI4OCA3NTEuMjc3IDQzNC41ODkgNzUzLjgzMSA0MzQuODcyWiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTY3NS45NDggNDI1LjA2QzY3Ny44NyA0MjUuMjczIDY3OS42IDQyMy44ODggNjc5LjgxMyA0MjEuOTY3QzY4MC4wMjYgNDIwLjA0NiA2NzguNjQxIDQxOC4zMTUgNjc2LjcyIDQxOC4xMDJDNjc0Ljc5OSA0MTcuODg5IDY3My4wNjkgNDE5LjI3NCA2NzIuODU2IDQyMS4xOTVDNjcyLjY0MiA0MjMuMTE3IDY3NC4wMjcgNDI0Ljg0NyA2NzUuOTQ4IDQyNS4wNloiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05NTkuMTk5IDQ0NS4zN0M5NjIuNjI4IDQ0NS43NTEgOTY1LjcxNSA0NDMuMjc5IDk2Ni4wOTYgNDM5Ljg1MUM5NjYuNDc2IDQzNi40MjIgOTY0LjAwNCA0MzMuMzM1IDk2MC41NzYgNDMyLjk1NUM5NTcuMTQ4IDQzMi41NzUgOTU0LjA2IDQzNS4wNDYgOTUzLjY4IDQzOC40NzRDOTUzLjMgNDQxLjkwMyA5NTUuNzcxIDQ0NC45OSA5NTkuMTk5IDQ0NS4zN1oiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01ODIuNDc0IDM3Mi40OTRDNTg2Ljg1NCAzNzIuOTc5IDU5MC43OTggMzY5LjgyMyA1OTEuMjgzIDM2NS40NDNDNTkxLjc2OSAzNjEuMDYzIDU4OC42MTIgMzU3LjExOSA1ODQuMjMzIDM1Ni42MzRDNTc5Ljg1MyAzNTYuMTQ4IDU3NS45MDkgMzU5LjMwNSA1NzUuNDIzIDM2My42ODRDNTc0LjkzOCAzNjguMDY0IDU3OC4wOTUgMzcyLjAwOCA1ODIuNDc0IDM3Mi40OTRaIiBzdHJva2U9IiMwMDAwMDAiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNODg2LjM4MSA0MjYuNjU5Qzg5MS45MiA0MjcuMjczIDg5Ni45MDggNDIzLjI4IDg5Ny41MjIgNDE3Ljc0MUM4OTguMTM2IDQxMi4yMDIgODk0LjE0NCA0MDcuMjE0IDg4OC42MDUgNDA2LjZDODgzLjA2NiA0MDUuOTg1IDg3OC4wNzcgNDA5Ljk3OCA4NzcuNDYzIDQxNS41MTdDODc2Ljg0OSA0MjEuMDU2IDg4MC44NDEgNDI2LjA0NCA4ODYuMzgxIDQyNi42NTlaIiBzdHJva2U9IiMwMDAwMDAiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNzA3LjExNyA0MTYuNDczQzcxMy45MDUgNDE3LjIyNiA3MjAuMDE4IDQxMi4zMzMgNzIwLjc3MSA0MDUuNTQ0QzcyMS41MjQgMzk4Ljc1NiA3MTYuNjMxIDM5Mi42NDMgNzA5Ljg0MiAzOTEuODlDNzAzLjA1NCAzOTEuMTM3IDY5Ni45NDEgMzk2LjAzIDY5Ni4xODggNDAyLjgxOUM2OTUuNDM1IDQwOS42MDcgNzAwLjMyOCA0MTUuNzIxIDcwNy4xMTcgNDE2LjQ3M1oiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05OTguNjMxIDQzMC4zNzJDMTAwNi41MSA0MzEuMjQ1IDEwMTMuNiA0MjUuNTY5IDEwMTQuNDcgNDE3LjY5M0MxMDE1LjM1IDQwOS44MTcgMTAwOS42NyA0MDIuNzI1IDEwMDEuNzkgNDAxLjg1MkM5OTMuOTE4IDQwMC45NzkgOTg2LjgyNSA0MDYuNjU1IDk4NS45NTIgNDE0LjUzMUM5ODUuMDc5IDQyMi40MDYgOTkwLjc1NSA0MjkuNDk5IDk5OC42MzEgNDMwLjM3MloiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03OTEuODk4IDQyMy4zNDZDODA1LjQ3NSA0MjQuODUxIDgxNy43MDIgNDE1LjA2NSA4MTkuMjA3IDQwMS40ODhDODIwLjcxMiAzODcuOTExIDgxMC45MjcgMzc1LjY4NSA3OTcuMzUgMzc0LjE3OUM3ODMuNzczIDM3Mi42NzQgNzcxLjU0NiAzODIuNDYgNzcwLjA0MSAzOTYuMDM3Qzc2OC41MzYgNDA5LjYxNCA3NzguMzIxIDQyMS44NCA3OTEuODk4IDQyMy4zNDZaIiBzdHJva2U9IiMwMDAwMDAiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjQzLjMxNCAzNzUuNTYyQzY1Ni44OTEgMzc3LjA2NyA2NjkuMTE4IDM2Ny4yODEgNjcwLjYyMyAzNTMuNzA0QzY3Mi4xMjggMzQwLjEyNyA2NjIuMzQzIDMyNy45MDEgNjQ4Ljc2NiAzMjYuMzk1QzYzNS4xODkgMzI0Ljg5IDYyMi45NjIgMzM0LjY3NiA2MjEuNDU3IDM0OC4yNTNDNjE5Ljk1MiAzNjEuODMgNjI5LjczNyAzNzQuMDU2IDY0My4zMTQgMzc1LjU2MloiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zODAuNDQ3IDI5Ny41NzhDMzgyLjc4NiAyOTguNjQ0IDM4NS41NDYgMjk3LjYxMSAzODYuNjExIDI5NS4yNzFDMzg3LjY3NiAyOTIuOTMyIDM4Ni42NDMgMjkwLjE3MiAzODQuMzA0IDI4OS4xMDdDMzgxLjk2NSAyODguMDQyIDM3OS4yMDUgMjg5LjA3NSAzNzguMTQgMjkxLjQxNEMzNzcuMDc0IDI5My43NTMgMzc4LjEwNyAyOTYuNTEzIDM4MC40NDcgMjk3LjU3OFoiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMjMuMzkzIDI2MS41MTlDMzI1LjE1MiAyNjIuMzIgMzI3LjIyOCAyNjEuNTQzIDMyOC4wMjkgMjU5Ljc4NEMzMjguODMgMjU4LjAyNSAzMjguMDUzIDI1NS45NDkgMzI2LjI5NCAyNTUuMTQ4QzMyNC41MzUgMjU0LjM0NyAzMjIuNDU5IDI1NS4xMjQgMzIxLjY1OCAyNTYuODgzQzMyMC44NTcgMjU4LjY0MyAzMjEuNjM0IDI2MC43MTggMzIzLjM5MyAyNjEuNTE5WiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQ4NS45NzMgMzE5LjMyOUM0ODkuOTgzIDMyMS4xNTUgNDk0LjcxNCAzMTkuMzg0IDQ5Ni41NCAzMTUuMzc0QzQ5OC4zNjYgMzExLjM2MyA0OTYuNTk2IDMwNi42MzIgNDkyLjU4NSAzMDQuODA2QzQ4OC41NzUgMzAyLjk4IDQ4My44NDQgMzA0Ljc1MSA0ODIuMDE4IDMwOC43NjFDNDgwLjE5MiAzMTIuNzcxIDQ4MS45NjIgMzE3LjUwMyA0ODUuOTczIDMxOS4zMjlaIiBzdHJva2U9IiMwMDAwMDAiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzA3LjAzNyAyMzIuOTE4QzMxMS4wNDcgMjM0Ljc0NCAzMTUuNzc5IDIzMi45NzQgMzE3LjYwNSAyMjguOTYzQzMxOS40MzEgMjI0Ljk1MyAzMTcuNjYgMjIwLjIyMiAzMTMuNjUgMjE4LjM5NkMzMDkuNjQgMjE2LjU3IDMwNC45MDggMjE4LjM0IDMwMy4wODIgMjIyLjM1MUMzMDEuMjU2IDIyNi4zNjEgMzAzLjAyNyAyMzEuMDkyIDMwNy4wMzcgMjMyLjkxOFoiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MzAuMDE2IDMxMC42NTNDNDM2LjcgMzEzLjY5NiA0NDQuNTg2IDMxMC43NDUgNDQ3LjYyOSAzMDQuMDYxQzQ1MC42NzMgMjk3LjM3NyA0NDcuNzIxIDI4OS40OTIgNDQxLjAzOCAyODYuNDQ4QzQzNC4zNTQgMjgzLjQwNSA0MjYuNDY4IDI4Ni4zNTYgNDIzLjQyNSAyOTMuMDRDNDIwLjM4MSAyOTkuNzI0IDQyMy4zMzMgMzA3LjYwOSA0MzAuMDE2IDMxMC42NTNaIiBzdHJva2U9IiMwMDAwMDAiLz4KICA8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzU1LjY4NSAyNjMuMDcyQzM2MS45MDEgMjY1LjkwMiAzNjkuMjM0IDI2My4xNTggMzcyLjA2NSAyNTYuOTQyQzM3NC44OTUgMjUwLjcyNiAzNzIuMTUxIDI0My4zOTIgMzY1LjkzNSAyNDAuNTYyQzM1OS43MTkgMjM3LjczMSAzNTIuMzg1IDI0MC40NzYgMzQ5LjU1NSAyNDYuNjkyQzM0Ni43MjQgMjUyLjkwOCAzNDkuNDY5IDI2MC4yNDEgMzU1LjY4NSAyNjMuMDcyWiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUyOC42NzUgMzE1LjM5NUM1MzkuMDM1IDMyMC4xMTIgNTUxLjI1OCAzMTUuNTM4IDU1NS45NzUgMzA1LjE3OEM1NjAuNjkyIDI5NC44MTggNTU2LjExOCAyODIuNTk2IDU0NS43NTggMjc3Ljg3OEM1MzUuMzk4IDI3My4xNjEgNTIzLjE3NiAyNzcuNzM1IDUxOC40NTkgMjg4LjA5NUM1MTMuNzQxIDI5OC40NTUgNTE4LjMxNSAzMTAuNjc4IDUyOC42NzUgMzE1LjM5NVoiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00MDUuNjQ2IDI3NC41NDJDNDE4LjA3OCAyODAuMjAzIDQzMi43NDUgMjc0LjcxNCA0MzguNDA2IDI2Mi4yODJDNDQ0LjA2NyAyNDkuODUgNDM4LjU3OCAyMzUuMTgzIDQyNi4xNDYgMjI5LjUyMkM0MTMuNzE0IDIyMy44NjEgMzk5LjA0NyAyMjkuMzUgMzkzLjM4NiAyNDEuNzgyQzM4Ny43MjUgMjU0LjIxNCAzOTMuMjE0IDI2OC44ODEgNDA1LjY0NiAyNzQuNTQyWiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiAgPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwNy44MDcgMjA0LjMxN0MzMjAuMjM5IDIwOS45NzcgMzM0LjkwNiAyMDQuNDg4IDM0MC41NjcgMTkyLjA1NkMzNDYuMjI4IDE3OS42MjUgMzQwLjczOSAxNjQuOTU3IDMyOC4zMDcgMTU5LjI5N0MzMTUuODc1IDE1My42MzYgMzAxLjIwOCAxNTkuMTI1IDI5NS41NDcgMTcxLjU1N0MyODkuODg2IDE4My45ODkgMjk1LjM3NSAxOTguNjU2IDMwNy44MDcgMjA0LjMxN1oiIHN0cm9rZT0iIzAwMDAwMCIvPgogIDxwYXRoIG9wYWNpdHk9IjAuMyIgZD0iTTguMjQ2NTggLTcyLjgyNzZDMjc3LjYxIDI0MC41OCA3MjguODI2IDQ0Ni4wNjkgMTI0MCA0NDYuMDY5QzE3NTAuNDUgNDQ2LjA2OSAyMjAxLjAyIDI0MC41OCAyNDcwIC03Mi44Mjc2SDguMjQ2NThaIiBmaWxsPSIjMDAwMDAwIi8+CiAgPHBhdGggb3BhY2l0eT0iMSIgZD0iTTguMjQ2NTggLTcyLjgyNzZDMjc3LjYxIDI0MC41OCA3MjguODI2IDQ0Ni4wNjkgMTI0MCA0NDYuMDY5QzE3NTAuNDUgNDQ2LjA2OSAyMjAxLjAyIDI0MC41OCAyNDcwIC03Mi44Mjc2SDguMjQ2NThaIiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPgo=)
    100% -55vh / cover no-repeat;
}
.img-mask {
  position: absolute;
  right: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  z-index: 1;
}

.underline {
  cursor: pointer;
  border-bottom: 2px dotted rgb(150, 155, 163);
  color: rgb(222, 228, 234);
  margin-right: 8px;
  font-size: 15px;
  text-decoration: none;
}
.underline:hover {
  cursor: help;
  color: rgb(64, 142, 221);
}

.open-source-collective {
  cursor: pointer;
  color: rgb(222, 228, 234);
  text-decoration: none;
  font-size: 15px;
}
.open-source-collective:hover {
  color: rgb(255, 255, 255);
}
</style>
<route lang="yaml">
meta:
  title: Collective layout mockup
  description: Requested by John Leider.
  icon: '$mdiCircleOutline'
</route>
