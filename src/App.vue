<template>
  <v-app>
    <TheHeader />
    <v-main>
      <RouterView />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script setup>
  import TheHeader from './components/TheHeader/TheHeader.vue'
  import TheFooter from './components/Footer/index.vue'

</script>
