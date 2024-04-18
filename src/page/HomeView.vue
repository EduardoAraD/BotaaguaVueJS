<template>
  <v-app>
    <Carousel />
    <NextMatch :match="state.match" />
  </v-app>
</template>

<script setup>
  import NextMatch from '../components/NextMatch/NextMatch.vue';
  import Carousel from '../components/Carousel/Carousel.vue';
  import { onBeforeMount, reactive } from 'vue';
  import { getNextMatch } from '../lib/api';
  import { emptyMatchComplete } from '../model/Match';

  const state = reactive({
    match: emptyMatchComplete
  })

  onBeforeMount(() => {
    state.match = getNextMatch();
  })

</script>
