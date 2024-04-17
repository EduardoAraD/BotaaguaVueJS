<template>
  <v-card class="d-flex flex-column pa-4 mt-8 rounded-lg align-center ga-4">
    <h3 class="text-h6 font-weight-bold" style="letter-spacing: 0.3rem !important;">ESTATÍSTICAS</h3>

    <Loading v-if="isLoading" />
    <div v-else class="d-flex w-100 flex-column ga-2">
      <ItemStats
        :valueHome="String(statsHome.goals)"
        title="Gols"
        :valueAway="String(statsAway.goals)"
      />
      <ItemStats
        :valueHome="statsHome.possession + '%'"
        title="Posse de Bola"
        :valueAway="String(statsAway.possession + '%')"
      />
      <ItemStats
        :valueHome="String(statsHome.kicks)"
        title="Finalizações"
        :valueAway="String(statsAway.kicks)"
      />
      <ItemStats
        :valueHome="String(statsHome.expectedGoals)"
        title="Gols esperados"
        :valueAway="String(statsAway.expectedGoals)"
      />
      <ItemStats
        :valueHome="String(statsHome.offSide)"
        title="Impedimentos"
        :valueAway="String(statsAway.offSide)"
      />
      <ItemStats
        :valueHome="String(statsHome.cornerKick)"
        title="Escanteios"
        :valueAway="String(statsAway.cornerKick)"
      />
      <ItemStats
        :valueHome="String(statsHome.free)"
        title="Faltas"
        :valueAway="String(statsAway.free)"
      />
      <ItemStats
        :valueHome="String(statsHome.penalty)"
        title="Pênaltis"
        :valueAway="String(statsAway.penalty)"
      />
      <ItemStats
        :valueHome="String(statsHome.yellowCard)"
        title="Cartões amarelos"
        :valueAway="String(statsAway.yellowCard)"
      />
      <ItemStats
        :valueHome="String(statsHome.redCard)"
        title="Cartões vermelhos"
        :valueAway="String(statsAway.redCard)"
      />
    </div>
  </v-card>
</template>

<script setup>
  import Loading from '../../../components/Loading/Loading.vue';
  import ItemStats from '../../../components/ItemStats/ItemStats.vue'

  defineProps(['isLoading', 'statsHome', 'statsAway'])

</script>
