<template>
  <div class="mt-5">
    <fieldset>
      <ul class="flex flex-wrap text-sm">
        <li
          v-for="value in uniqueValues"
          :key="value"
          class="flex h-8 w-1/2 items-center"
        >
          <input
            :id="value"
            v-model="selectedValues"
            :value="value"
            type="checkbox"
            class="mr-3"
            @change="selectValue"
          />
          <label :for="value">{{ value }}</label>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useUserStore, CLEAR_FILTERS } from "@/stores/user";

const props = defineProps({
  uniqueValues: { type: [Array<string>, Set<string>], required: true },
  action: { type: Function, required: true },
});

const selectedValues = ref<string[]>([]);

const router = useRouter();

const selectValue = () => {
  props.action(selectedValues.value);
  router.push({ name: "JobResults" });
};

const userStore = useUserStore();

userStore.$onAction(({ after, name }) => {
  after(() => {
    if (name === CLEAR_FILTERS) selectedValues.value = [];
  });
});
</script>
