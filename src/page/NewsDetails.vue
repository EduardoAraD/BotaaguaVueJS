<template>
  <v-container>
    <TitlePage
      :paths="path"
      :title="state.news.titlePageLink"
    />

    <Loading v-if="state.isLoadingNews" />
    <div class="d-flex flex-column mt-10 ga-4" v-else>
      <h1 class="text-h4 text-center mb-2 font-weight-bold">{{ state.news.title }}</h1>
      <h4 class="text-h7 text-justify">{{ state.news.subtitle }}</h4>

      <v-img
        class="rounded-lg w-100"
        height="300"
        contain
        :src="state.news.image"
        alt="Foto da notícia"
      />

      <div v-for="description in state.news.descriptions" :key="description.value">
        <p
          class="text-body-1 text-justify"
          v-if="description.type=== 'paragraph'">
          {{ description.value }}
        </p>
        <h2
          class="mt-2"
          v-else-if="description.type=== 'heading'"
        >
          {{ description.value }}
        </h2>
        <v-img
          v-else
          class="rounded-lg w-100"
          height="300"
          contain
          :src="description.value"
          alt="Foto da noticia"
        />
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
  import { onMounted, reactive } from 'vue'
  import { useRoute } from 'vue-router'
  import TitlePage from '../components/TitlePage/TitlePage.vue'
  import Loading from '../components/Loading/Loading.vue'
  import LayoutPage from '../components/LayoutPage.vue';
  import { getNewsById } from '../lib/api';
  import { emptyNews } from '../model/News';

  const route = useRoute()
  const path = [{ title: 'Notícias', link: '/noticias' }];

  let state = reactive({
    isLoadingNews: true,
    news: emptyNews,
  });

  onMounted(async () => {
    const idNews = route.params.id.split('-')[0]

    setTimeout(() => {
      const news = getNewsById(idNews)
      if(news !== undefined) {
        state.news = news;
      }
      state.isLoadingNews = false;

    }, 2000);
  })

</script>
