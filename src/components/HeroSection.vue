<template>
  <main>
    <section class="flex h-screen flex-col bg-yellow-400 pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1 border border-blue-100">
          1 column
        </div>
        <div class="col-span-5 col-start-2 border border-blue-100">
          <headline-animation />
        </div>
        <div class="col-span-5 col-start-7 border border-blue-100">
          5 columns
        </div>
        <div class="col-span-1 col-start-12 border border-blue-100">
          1 column
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import HeadlineAnimation from "./HeadlineAnimation.vue";

export default {
  name: "HeroSection",
  components: {
    HeadlineAnimation,
  },
};
</script>
