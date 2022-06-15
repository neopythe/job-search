<template>
  <div>
    <h1 class="text-6xl font-bold">Job Results View</h1>
    <h2>{{ experiment }}</h2>
  </div>
</template>

<script>
export default {
  name: 'JobResultsView',
  computed: {
    experiment() {
      console.log(this.$router)
      return 'Irrelevant'
    },
  },
}
</script>
