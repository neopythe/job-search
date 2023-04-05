<template>
  <div class="w-full border-b border-brand-gray-1">
    <div class="mx-auto my-16 text-center">
      <slot name="title">Oops</slot>
      <slot name="subtitle">Looks like someone forgot to populate me!</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderContainer",
};
</script>
