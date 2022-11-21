export const usePlaygroundStore = routes =>
  defineStore('playground', {
    state: () => ({
      searchField: '',
      searchableFields: ['title', 'subtitle'],
    }),

    getters: {
      projects: () =>
        routes
          .filter(
            r => r.name?.includes('playground') && r.name !== 'playground'
          )
          .flatMap(({ path, meta }) => {
            let regex = /(\w+)$/
            let fileName = path.match(regex)[1]

            return [
              {
                icon: meta.icon || '$mdiSpaceInvaders',
                to: `playground/${fileName.toLowerCase()}`,
                // Metadata custom name or extract SFC name.
                title: meta.title || fileName,
                subtitle: meta.description
                  ? `<span class="text-deep-purple-accent-1">Ali Connors</span> &mdash; ${meta.description}`
                  : 'No description available',
              },
            ]
          }),

      searchablePropjects(state) {
        return this.projects
          .filter(project =>
            state.searchableFields
              .map(field => project[field])
              .some(value =>
                value
                  .toString()
                  .toLowerCase()
                  .includes(state.searchField?.toLowerCase() ?? '')
              )
          )
          .sort(() => -1)
      },
    },
  })

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(usePlaygroundStore, import.meta.hot))
