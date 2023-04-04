<template>
  <div class="flex w-96 flex-col border-r border-brand-gray-1 p-4">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-3 font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear filters" type="secondary" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";

export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
  },
};
</script>
