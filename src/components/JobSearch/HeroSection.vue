<template>
  <main>
    <section class="flex h-screen flex-col pt-10 pb-20">
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
  </main>
</template>

<script>
import HeadlineAnimation from "@/components/JobSearch/HeadlineAnimation.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

export default {
  name: "HeroSection",
  components: {
    HeadlineAnimation,
    JobSearchForm,
  },
};
</script>
