<template>
  <main class="flex h-screen flex-col">
    <section class="pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2">
          <headline-animation />
          <job-search-form />
        </div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            alt="Vue.js logo"
            class="h-80 w-80 object-contain"
          />
        </div>
        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
    <spotlight-gallery class="flex justify-center pb-16">
      <template #default="{ img, title, description }">
        <router-link
          to="/jobs/results"
          class="mx-5 flex h-72 w-64 flex-col overflow-hidden rounded-lg border border-brand-gray-1 shadow-brand-gray-3 transition ease-in-out hover:shadow-xl"
        >
          <img :src="img" alt="" class="h-2/5 object-cover" />
          <div class="h-48 p-3">
            <h3 class="text-lg font-semibold">{{ title }}</h3>
            <p class="mt-3 text-sm">{{ description }}</p>
          </div>
        </router-link>
      </template>
    </spotlight-gallery>
  </main>
</template>

<script setup lang="ts">
import HeadlineAnimation from "@/components/JobSearch/HeadlineAnimation.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";
import SpotlightGallery from "@/components/JobSearch/SpotlightGallery.vue";
</script>
