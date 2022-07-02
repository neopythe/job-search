<template>
  <div class="mt-5">
    <input
      v-model.lazy="skillsSearchTerm"
      type="text"
      placeholder="Computer programming, Finance degree"
      class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray rounded w-full text-base focus:outline-none"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

import { key } from '@/store'

import { UPDATE_SKILLS_SEARCH_TERM } from '@/store/constants'

export default defineComponent({
  name: 'JobFiltersSidebarSkills',
  setup() {
    const store = useStore(key)
    const skillsSearchTerm = computed({
      get() {
        return store.state.skillsSearchTerm
      },
      set(value) {
        store.commit(UPDATE_SKILLS_SEARCH_TERM, value)
      },
    })

    return { skillsSearchTerm }
  },
})
</script>
