<template>
  <v-app class="page">
    <slot />
  </v-app>
</template>

<style scoped>
  .page {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 3rem;
  }

  @media screen and (max-width: 600px) {
    .page {
      padding: 2rem 1rem;
    }
  }
</style>
