<template>
  <v-app>
    <SlideNewsVue />
    <NextMatch :match="state.match" />
  </v-app>
</template>

<script setup>
  import SlideNewsVue from '../components/SlideNews/SlideNews.vue';
  import NextMatch from '../components/NextMatch/NextMatch.vue';
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
