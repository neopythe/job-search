<template>
  <section>
    <h1>Build for everyone</h1>
    <h2>Find your next job at Gaggle</h2>
  </section>
</template>

<script>
export default {
  name: 'Headline',
  data() {
    return {
      sample: 'Hello',
    }
  },
  created() {
    console.log(`Hey, I've been created. My data exists! Look: ${this.sample}`)
  },
}
</script>
