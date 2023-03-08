<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <li class="mb-7">
        <router-link
          to="/jobs/results/1"
          class="borders mx-auto block rounded border-brand-gray-2 bg-white hover:shadow-gray"
        >
          <div class="mx-8 border-b border-brand-gray-2 pt-5 pb-2">
            <h2 class="mb-2 text-2xl font-semibold">
              Technical Program Manager, Perception, Augmented Reality
            </h2>
            <div class="flex align-middle text-sm font-semibold">
              <div class="mr-5">
                <span>Gaggle</span>
              </div>
              <div>
                <span>San Francisco, CA, USA</span>
              </div>
            </div>
          </div></router-link
        >
      </li>
    </ol>
  </main>
</template>

<script>
export default {
  name: "JobListings",
};
</script>
