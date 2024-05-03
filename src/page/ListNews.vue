<template>
  <v-container>
    <TitlePage title='Notícias' />
    <div class="py-2 ga-6 list">
      <CardNews
        v-for="item in state.news"
        :key="item.id"
        :id="item.id"
        :image="item.image"
        :title="item.title"
        :pageLink="item.titlePageLink"
      />
    </div>
    <v-pagination
      v-model="state.page"
      :length="state.numberPages"
    />
  </v-container>
</template>

<script setup>
  import { reactive, onMounted, watch } from 'vue'
  import TitlePage from '../components/TitlePage/TitlePage.vue';
  import CardNews from '../components/cardNews/CardNews.vue';
  import { getListNewsPublishes } from '../lib/api';

  const state = reactive({
    allNews: [],
    news: [],
    page: 1,
    numberPages: 1,
  })

  onMounted(() => {
    const news = getListNewsPublishes();
    state.allNews = news;
    state.numberPages = Math.ceil(news.length / 10);
  })

  watch(() => [state.page, state.allNews], ([page, news], _) => {
    state.news = news.slice((page - 1) * 10, page * 10)
  });
</script>

<style>
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  @media screen and (max-width: 700px) {
    .list {
      display: flex;
      flex-direction: column;
    }
  }
</style>
