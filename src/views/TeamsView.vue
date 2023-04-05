<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl">Teams</h1>
    </template>
    <template #subtitle>
      <div class="mx-auto max-w-screen-sm">
        <h2 class="my-4 w-full px-4 text-sm font-light">
          Together, we create access to information and build products that
          improve people's lives. Want to be a Gaggler? Find your role.
        </h2>
      </div>
    </template>
  </header-container>
</template>

<script>
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

export default {
  name: "TeamsView",
  components: { HeaderContainer },
};
</script>
