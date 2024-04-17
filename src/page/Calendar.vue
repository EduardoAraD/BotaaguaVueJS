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
  </LayoutPage>
</template>

<script setup>
  import { reactive, onMounted } from 'vue'
  import { getListMatch } from '../lib/api';
  import TitlePage from '../components/TitlePage/TitlePage.vue'
  import LayoutPage from '../components/LayoutPage.vue';
  import CardMatch from '../components/CardMatch/CardMatch.vue'

  const state = reactive({
    matchs: [],
  })

  onMounted(() => {
    const matchs = getListMatch();
    state.matchs = matchs;
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
