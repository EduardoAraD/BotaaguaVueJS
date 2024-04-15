<template>
  <v-app>
    <TheHeader />
    <v-main>
      <RouterView />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader/TheHeader.vue'
import TheFooter from './components/Footer'
  //
</script>

