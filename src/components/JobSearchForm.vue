<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-brand-gray-3"
  >
    <font-awesome-icon
      :icon="['fas', 'search']"
      class="ml-4 mr-3 text-brand-gray-3"
    />
    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <label for="" class="absolute left-0 -top-8">Role</label>
        <input
          v-model="role"
          type="text"
          placeholder="Software engineer"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
      <span
        class="flex h-full items-center border-l border-r border-brand-gray-3 bg-brand-gray-2 px-3 font-normal"
        >in</span
      >
      <div class="relative flex h-full flex-1 items-center px-3">
        <label for="" class="absolute left-0 -top-8">Where?</label>
        <input
          v-model="location"
          type="text"
          placeholder="Los Angeles"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
  },
  data() {
    return {
      role: "",
      location: "",
    };
  },
};
</script>
