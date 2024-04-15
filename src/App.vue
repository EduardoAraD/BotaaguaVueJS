<template>
  <v-app>
    <TheHeader />
    <v-main class="mt-15">
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader/TheHeader.vue'
  //
</script>
