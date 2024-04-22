<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <RouterLink
      v-bind="props"
      :to="'/calendario/'+match.id+'-'+match.home.name.toLowerCase().replace(/\s/g, '')+'x'+match.away.name.toLowerCase().replace(/\s/g, '')"
      class="py-4 border-md d-flex flex-column align-center w-100 rounded-lg ga-1"
      :class="isHovering ? 'bg-grey-darken-3' : 'bg-grey-darken-4'"
      style="text-decoration: none; min-width: 270px; transition: 0.2s"
    >
      <h3 class="text-body-1 text-white font-weight-bold">
        {{ match.championship }}
      </h3>
      <div class="d-flex align-center justify-center w-100 ga-2" style="max-width: 350px;">
        <div class="d-flex flex-column align-center ga-1" style="flex: 1;">
          <v-img height="64" width="64" contain
            :src="match.home.logo" :alt="match.home.shortName"
          />
          <span class="text-body-2 text-white d-none d-md-flex">{{ match.home.name }}</span>
        </div>
        <h2 class="text-h4 font-weight-medium">
          {{ state.status === 'finished' ? match.score.goalsHome.length : '' }}
        </h2>
        <span v-if="state.hasPenalty" class="text-body-2">
          {{ `(${match.score.scorePenalts.home} x ${match.score.scorePenalts.away})` }}
        </span>
        <span v-else class="text-body-2 text-white">X</span>
        <h2 class="text-h4 font-weight-medium">
          {{ state.status === 'finished' ? match.score.goalsAway.length : '' }}
        </h2>
        <div class="d-flex flex-column align-center ga-1" style="flex: 1;">
          <v-img height="64" width="64" contain
            :src="match.away.logo" :alt="match.away.shortName" />
          <span class="text-body-2 text-white d-none d-md-flex">{{ match.away.name }}</span>
        </div>
      </div>
      <div class="d-flex flex-column justify-center align-center">
        <div class="d-flex ga-1 align-center">
          <v-icon icon="mdi-calendar" color="white" size="16" />
          <span class="text-body-2 text-white">{{ state.formatDate }}</span>
        </div>
        <div class="d-flex ga-1 align-center">
          <v-icon icon="mdi-map-marker-outline" color="white" size="16" />
          <span class="text-body-2 text-white">{{ match.stadium }}</span>
        </div>
      </div>
    </RouterLink>
  </v-hover>
</template>

<script lang="ts" setup>
  import { RouterLink } from 'vue-router';
  import { onMounted, reactive } from 'vue';
  import { Match } from '../model/Match'
  import { formatDate } from '../../utils/formatedDate';
  import { getStatusMatchByDateHour } from '../../utils/getStatusMatch';

  const props = defineProps<{
    match: { type: Match },
  }>();

  const state = reactive({
    formatDate: '',
    hasPenalty: false,
    status: 'started',
  })

  onMounted(() => {
    const status = getStatusMatchByDateHour(props.match.date);

    state.formatDate = formatDate(props.match.date);
    state.status = status;
    state.hasPenalty = props.match.score.scorePenalts !== undefined && status === 'finished'
  })

</script>
