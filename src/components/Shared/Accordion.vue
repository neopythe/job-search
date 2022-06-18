<template>
  <div class="py-5 border-b border-solid border-brand-gray-1">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      @click="open"
    >
      <h3 class="text-base font-semibold">Organizations</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen" class="w-full mt-5">Child</div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    caretIcon() {
      return this.isOpen ? ['fas', 'angle-up'] : ['fas', 'angle-down']
    },
  },
  methods: {
    open() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
