<template>
  <div
    v-if="state.isLoadingNews"
    class="d-flex w-100 align-center justify-center"
    style="height: 400px">
    <Loading />
  </div>
  <v-carousel
    v-else
    height="400"
    hide-delimiters
  >
    <v-carousel-item
      v-for="news in state.newsList"
      :key="news.id"
      :src="news.image"
      cover
    >
      <v-hover v-slot:default="{ isHovering, props }">
        <RouterLink
          v-bind="props"
          :to="`/noticias/${news.id}-${news.titlePageLink.toLowerCase().replace(/\s/g, '')}`"
        >
          <div style="bottom: 0px; background-color: #00000099;"
            class="position-absolute pa-4 w-100 d-flex ga-2 flex-column justify-space-around">
            <h2
              class="text-h6 font-weight-bold"
              :class="isHovering ? 'text-blue' : 'text-white'"
              style="transition: 0.2s;"
            >{{ news.title }}</h2>
            <p class="text-body-2 text-white">{{ news.subtitle }}</p>
          </div>
        </RouterLink>
      </v-hover>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
  import { onBeforeMount, reactive } from 'vue';
  import Loading from '../Loading/Loading.vue'
  import { getNewsToCarrousel } from '../../lib/api';

  const state = reactive({
    isLoadingNews: true,
    newsList: [],
  })

  onBeforeMount(() => {
    setTimeout(() => {
      state.newsList = getNewsToCarrousel();
      state.isLoadingNews = false;
    }, 2000);
  })
</script>
