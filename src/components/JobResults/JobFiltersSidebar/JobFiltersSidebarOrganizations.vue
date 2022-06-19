<template>
  <Accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input :id="organization" type="checkbox" class="mr-3" />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </Accordion>
</template>

<script>
import Accordion from '@/components/Shared/Accordion.vue'

export default {
  name: 'JobFiltersSidebarOrganizations',
  components: {
    Accordion,
  },
  computed: {
    UNIQUE_ORGANIZATIONS() {
      return this.$store.getters.UNIQUE_ORGANIZATIONS
    },
  },
}
</script>
