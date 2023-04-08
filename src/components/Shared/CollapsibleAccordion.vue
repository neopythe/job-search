<template>
  <div class="border-b border-brand-gray-1 py-5">
    <div
      class="flex cursor-pointer flex-wrap items-center justify-between"
      role="button"
      @click="toggleIsOpen"
    >
      <h3 class="font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen" class="mt-5 w-full">
      <slot>
        <p>Whoops, somebody forgot to populate me!</p>
      </slot>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
  name: "CollapsibleAccordion",
  props: {
    header: { type: String, required: true },
  },
  setup() {
    const isOpen = ref(false);

    const toggleIsOpen = () => {
      isOpen.value = !isOpen.value;
    };

    const caretIcon = computed(() =>
      isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"]
    );

    return { caretIcon, isOpen, toggleIsOpen };
  },
};
</script>
