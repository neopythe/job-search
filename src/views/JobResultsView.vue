<template>
  <div>
    <h1 class="text-6xl font-bold">Job Results View</h1>
    <button @click="goToHome">Go to homepage</button>
  </div>
</template>

<script>
export default {
  name: 'JobResultsView',
  methods: {
    goToHome() {
      this.$router.push({ name: 'Home' })
    },
  },
}
</script>
