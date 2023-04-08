<template>
  <button :class="type">
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: { type: String, required: true },
  type: {
    type: String,
    required: false,
    default: "primary",
    validator(value) {
      return ["primary", "secondary"].includes(value);
    },
  },
});
</script>

<style scoped>
button {
  @apply whitespace-nowrap px-5 py-2.5 font-semibold hover:shadow-blue;
}

.primary {
  @apply rounded bg-brand-blue-1 text-xs text-white;
}

.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
</style>
