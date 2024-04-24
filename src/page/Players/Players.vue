<template>
  <v-container>
    <TitlePage
      :paths="path"
      title="Elenco"
    />
    <div class="d-flex flex-column mt-10 ga-10">
      <h3 class="text-h4 text-center">Elenco do Clube</h3>
      <SectionPlayers title="Goleiros" :players="state.goalkeepers" />
      <SectionPlayers title="Defensores" :players="state.defenders" />
      <SectionPlayers title="Meio campistas" :players="state.midfielders" />
      <SectionPlayers title="Atacantes" :players="state.forwards" />
    </div>
  </v-container>
</template>

<script setup lang="ts">
  import { onMounted, reactive } from 'vue';
  import TitlePage from '../../components/TitlePage/TitlePage.vue'
  import SectionPlayers from './components/SectionPlayers.vue';
  import { getPlayersCurrent } from '../../lib/api'

  const path = [{ title: 'Clube', link: '/' }];

  const state = reactive({
    goalkeepers: [],
    defenders: [],
    midfielders: [],
    forwards: [],
  });

  onMounted(() => {
    const {
      goalkeepers,
      defenders,
      midfielders,
      forwards,
    } = getPlayersCurrent();
    
    state.goalkeepers = goalkeepers;
    state.defenders = defenders;
    state.midfielders = midfielders;
    state.forwards = forwards;
  })

</script>
