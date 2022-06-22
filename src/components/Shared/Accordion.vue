<template>
  <div class="py-5 border-b border-solid border-brand-gray-1">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      data-test="clickable-area"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen" class="w-full mt-5 text-sm">
      <slot>
        <p>Whoops, somebody forgot to populate me!</p>
      </slot>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: 'Accordion',
  setup() {
    const header = ref('Cool Title')
    const isOpen = ref(false)

    const open = () => {
      isOpen.value = !isOpen.value
    }

    const caretIcon = computed(() =>
      isOpen.value ? ['fas', 'angle-up'] : ['fas', 'angle-down']
    )

    return {
      caretIcon,
      header,
      isOpen,
      open,
    }
  },
  // props: {
  //   header: {
  //     type: String,
  //     required: true,
  //   },
  // },
  // data() {
  //   return {
  //     isOpen: false,
  //   }
  // },
  // computed: {
  //   caretIcon() {
  //     return this.isOpen ? ['fas', 'angle-up'] : ['fas', 'angle-down']
  //   },
  // },
  // methods: {
  //   open() {
  //     this.isOpen = !this.isOpen
  //   },
  // },
}
</script>
