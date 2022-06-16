<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <li class="mb-7">
        <router-link
          to="/jobs/results/1"
          class="block mx-auto bg-white border border-solid border-brand-gray-1 rounded hover:shadow-gray"
        >
          <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-2">
            <h2 class="mb-2 text-2xl">
              Technical Program Manager, Perception, Augmented Reality
            </h2>
            <div class="flex flex-row align-middle">
              <div class="mr-5">
                <span>Gaggle</span>
              </div>
              <div>San Francisco, CA, USA</div>
            </div>
          </div>
          <div class="px-8 py-4">
            <div>
              <h3 class="mt-1 mb-2">Qualifications</h3>
              <div>
                <ul class="pl-8 list-disc">
                  <li>Bachelor's degree or equivalent practice experience.</li>
                  <li>5 years of experience in program management.</li>
                  <li>
                    Experience analyzing data through querying database (e.g.
                    SQL), using spreadsheet software, and creating statistical
                    models.
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-3 text-center">
              <router-link
                to="/jobs/results/1"
                class="text-sm text-brand-blue-1"
                >Expand</router-link
              >
            </div>
          </div>
        </router-link>
      </li>
    </ol>
  </main>
</template>

<script>
export default {
  name: 'JobListings',
}
</script>
