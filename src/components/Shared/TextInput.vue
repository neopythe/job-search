<template>
  <input
    type="text"
    :value="value"
    :placeholder="placeholder"
    class="w-full text-lg focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput($event) {
      this.$emit('handleInput', $event.target.value)
    },
  },
}
</script>
