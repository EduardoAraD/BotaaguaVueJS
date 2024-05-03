<template>
  <LayoutPage>
    <TitlePage title='Calendário' />
    <div class="py-2 ga-6 list">
      <CardMatch
        v-for="match in state.matchs"
        :key="match.id"
        :match="match"
      />
    </div>
    <v-pagination
      v-model="state.page"
      :length="state.numberPages"
    />
  </LayoutPage>
</template>

<script setup>
  import { reactive, onMounted, watch } from 'vue'
  import { getListMatch } from '../lib/api';
  import TitlePage from '../components/TitlePage/TitlePage.vue'
  import LayoutPage from '../components/LayoutPage.vue';
  import CardMatch from '../components/CardMatch/CardMatch.vue'

  const state = reactive({
    allMatchs: [],
    matchs: [],
    page: 1,
    numberPages: 1,
  })

  onMounted(() => {
    const matchs = getListMatch();
    state.allMatchs = matchs;
    state.numberPages = Math.ceil(matchs.length / 10);
  })

  watch(() => [state.page, state.allMatchs], ([page, matchs], _) => {
    state.matchs = matchs.slice((page - 1) * 10, page * 10)
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
