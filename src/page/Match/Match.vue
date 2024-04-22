<template>
  <LayoutPage>
    <TitlePage
      :paths="path"
      :title="`${state.match.home.name} x ${state.match.away.name}`"
    />

    <section class="mt-4">
      <CardInfoMatch
        :isLoading="state.isMatchLoading"
        :stadium="state.match.stadium"
        :dateMatch="state.match.date"
        :championship="state.match.championship"
        :stage="state.match.stage"
        :clubHome="state.match.home"
        :clubAway="state.match.away"
        :score="state.score"
        :goals="state.goals"
        :scorePenalty="state.match.score.scorePenalts"
      />
    </section>

    <section v-if="!state.isMatchLoading" class="d-flex justify-center">
      <iframe
        v-if="state.match.video !== ''"
        :src="state.match.video"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        class="rounded-lg"
      />
      <span v-else class="text-overline">Vídeo em breve</span>
    </section>

    <StatsMatch
      :isLoading="state.isMatchLoading"
      :statsHome="state.stats.home"
      :statsAway="state.stats.away"
    />
  </LayoutPage>
</template>

<script setup lang="ts">
  import { onMounted, reactive } from 'vue'
  import { useRoute } from 'vue-router'
  import TitlePage from '../../components/TitlePage/TitlePage.vue'
  import LayoutPage from '../../components/LayoutPage.vue';
  import CardInfoMatch from './components/CardInfoMatch.vue';
  import StatsMatch from './components/StatsMatch.vue';
  import { emptyMatchComplete } from '../../model/Match';
  import { emptyStatsMatch } from '../../model/StatsMatch';
  import { getMatchById } from '../../lib/api';
  import { tranformScoreArrayInScorePage } from '../../utils/tranformGoalsArrayInGoalPage';
  import { getStatusMatchByDateHour } from '../../utils/getStatusMatch'

  const route = useRoute()
  const path = [{ title: 'Calendário', link: '/calendario' }];

  let state = reactive({
    isMatchLoading: true,
    match: emptyMatchComplete,
    score: {
      goalsHome: [],
      goalsAway: [],
    },
    goals: {
      home: 0,
      away: 0,
    },
    stats: emptyStatsMatch,
  });

  onMounted(async () => {
    const idMatch = route.params.id.split('-')[0]

    setTimeout(() => {
      const match = getMatchById(idMatch);
      if(match !== undefined) {
        state.match = match;

        state.score = tranformScoreArrayInScorePage(match.score)

        const status = getStatusMatchByDateHour(match.date);
        const isFinishedMatch = status === 'finished'

        if(isFinishedMatch) {
          state.stats = match.stats
          state.goals = {
            home: match.stats.home.goals,
            away: match.stats.away.goals,
          }
        }
      }
      state.isMatchLoading = false;
    }, 2000);
  })

</script>

<style>
  iframe {
    max-width: 700px;
    height: 300px;
    width: 100%;
  }
</style>
