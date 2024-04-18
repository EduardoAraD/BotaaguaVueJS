<template>
  <LayoutPage>
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
  </LayoutPage>
</template>

<script setup>
  import { reactive, onMounted } from 'vue'
  import TitlePage from '../components/TitlePage/TitlePage.vue'
  import LayoutPage from '../components/LayoutPage.vue';
  import CardNews from '../components/cardNews/CardNews.vue';
  import { getListNewsPublishes } from '../lib/api';

  const state = reactive({
    news: [],
  })

  onMounted(() => {
    const news = getListNewsPublishes();
    state.news = news;
  })

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
