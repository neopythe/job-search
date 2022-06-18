<template>
  <button :class="type">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: 'primary',
      validator(value) {
        return ['primary', 'secondary', 'sidebar'].includes(value)
      },
    },
  },
}
</script>

<style scoped>
button {
  @apply px-5 py-3 font-semibold;
}

.primary {
  @apply rounded text-white bg-brand-blue-1 hover:shadow-blue text-xs;
}

.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white text-base;
}

.sidebar {
  @apply px-0 text-brand-blue-1 bg-transparent hover:shadow-blue text-sm;
}
</style>
