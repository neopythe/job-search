<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 -top-8">Role</label>
        <TextInput placeholder="Software engineer" />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2 font-light"
        >in</span
      >
      <div class="relative flex items-center flex-1 h-full pl-3">
        <label class="absolute left-3 -top-8">Where?</label>
        <TextInput placeholder="Los Angeles" />
      </div>
    </div>
    <ActionButton text="Search" type="secondary" class="rounded-r-3xl" />
  </form>
</template>

<script>
import ActionButton from '@/components/Shared/ActionButton.vue'
import TextInput from '@/components/Shared/TextInput.vue'
export default {
  name: 'JobSearchForm',
  components: {
    ActionButton,
    TextInput,
  },
  data() {
    return {
      role: '',
      location: '',
    }
  },
}
</script>
