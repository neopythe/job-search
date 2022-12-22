<template>
  <section class="mb-16">
    <h1 class="mb-12 text-8xl font-bold tracking-tighter">
      <span :class="actionClass">{{ action }}</span>
      <br />
      <span class="whitespace-nowrap">for everyone</span>
    </h1>
    <h2 class="whitespace-nowrap text-3xl">Find your next job at Gaggle.</h2>
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList";

export default {
  name: "HeadlineAnimation",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClass() {
      return {
        [this.action.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action);
      }, 5000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
