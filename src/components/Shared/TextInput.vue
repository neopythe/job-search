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
  },
  data() {
    return {
      value: '',
    }
  },
  methods: {
    handleInput($event) {
      this.value = $event.target.value
      this.$emit('handleInput', this.value)
    },
  },
}
</script>
