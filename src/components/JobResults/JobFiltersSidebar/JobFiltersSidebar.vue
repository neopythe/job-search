<template>
  <div class="flex flex-col border-r border-brand-gray-1 p-4">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-3 font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear filters" type="secondary" />
        </div>
      </div>
      <collapsible-accordion>
        <div class="mt-5">
          <fieldset>
            <ul class="flex flex-wrap text-sm">
              <li class="flex h-8 w-1/2">
                <input id="VueTube" type="checkbox" class="mr-3" />
                <label for="VueTube">VueTube</label>
              </li>
              <li class="flex h-8 w-1/2">
                <input id="Vue and Me" type="checkbox" class="mr-3" />
                <label for="Vue and Me">Vue and Me</label>
              </li>
              <li class="flex h-8 w-1/2">
                <input id="Et Vue Brute" type="checkbox" class="mr-3" />
                <label for="Et Vue Brute">Et Vue Brute</label>
              </li>
              <li class="flex h-8 w-1/2">
                <input id="Vue Can Do It" type="checkbox" class="mr-3" />
                <label for="Vue Can Do It">Vue Can Do It</label>
              </li>
              <li class="flex h-8 w-1/2">
                <input id="Vue and a Half Men" type="checkbox" class="mr-3" />
                <label for="Vue and a Half Men">Vue and a Half Men</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </collapsible-accordion>
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";

export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    CollapsibleAccordion,
  },
};
</script>
