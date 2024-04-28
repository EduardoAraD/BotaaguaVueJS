<template>
  <v-container>
    <TitlePage
      :paths="path"
      :title="state.news.titlePageLink"
    />

    <Loading v-if="state.isLoadingNews" />
    <div class="d-flex flex-column mt-10 ga-4" v-else>
      <CardMatch v-if="state.hasMatch" :match="state.match" />
      <h1 class="text-h4 text-center mb-2 font-weight-bold">{{ state.news.title }}</h1>
      <h4 class="text-h7 text-justify">{{ state.news.subtitle }}</h4>

      <v-img
        class="rounded-lg w-100"
        contain
        :src="state.news.image"
        alt="Foto da notícia"
      />

      <div v-for="description in state.news.descriptions" :key="description.value">
        <div class="d-flex flex-column ga-2" v-if="description.type=== 'paragraph'">
          <p class="text-body-1 text-justify"
            v-for="paragraph in description.value"
            :key="paragraph"
          >
            {{ paragraph }}
          </p>
        </div>

        <div class="d-flex flex-column ga-2"
          v-else-if="description.type=== 'heading'">
          <h2 class="mt-2"
            v-for="heading in description.value"
            :key="heading"
          >
            {{ heading }}
          </h2>
        </div>

        <v-carousel
          v-else-if="description.type=== 'carousel'"
          hide-delimiters
          height="400"
        >
          <v-carousel-item
            v-for="image in description.value"
            :key="image"
            :src="image"
            contain
          ></v-carousel-item>
        </v-carousel>

        <div class="d-flex flex-column ga-2" v-else>
          <v-img
            v-for="image in description.value"
            :key="image"
            class="rounded-lg w-100"
            contain
            height="400"
            :src="image"
            alt="Foto da noticia"
          />
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
  import { onMounted, reactive } from 'vue'
  import { useRoute } from 'vue-router'
  import TitlePage from '../components/TitlePage/TitlePage.vue'
  import Loading from '../components/Loading/Loading.vue'
  import CardMatch from '../components/CardMatch/CardMatch.vue'
  import { getMatchById, getNewsById } from '../lib/api';
  import { emptyNews } from '../model/News';

  const route = useRoute()
  const path = [{ title: 'Notícias', link: '/noticias' }];

  let state = reactive({
    isLoadingNews: true,
    news: emptyNews,
    hasMatch: false,
    match: undefined,
  });

  function getMatchToNews(idMatch: string | undefined) {
    const match = getMatchById(idMatch);
    const hasMatchToNews = match !== undefined
    if(hasMatchToNews) {
      state.match = match
    }
    state.hasMatch = hasMatchToNews;
  }

  onMounted(async () => {
    const idNews = route.params.id.split('-')[0]

    setTimeout(() => {
      const news = getNewsById(idNews)
      if(news !== undefined) {
        state.news = news;
        getMatchToNews(news.idMatch);
      }
      state.isLoadingNews = false;
    }, 2000);
  })
</script>

