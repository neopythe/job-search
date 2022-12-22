<template>
  <input
    type="text"
    :value="value"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput($event) {
      // emitting an event to the parent component with a name of our choice as well as a payload of data as a second argument:
      this.$emit("handleInput", $event.target.value);
    },
  },
};
</script>
