<template>
  <section>
    <v-card class="d-flex py-4 flex-column ga-4 align-center justify-center bg-grey-darken-4">
      <h3 class="text-white text-h6 font-weight-bold">
        {{ match.championship }}
      </h3>

      <div class="d-flex justify-space-around w-100 overflow-hidden align-center ga-1"
        style="max-width: 400px;"
      >
        <div class="d-flex flex-column align-center ga-1" style="flex: 1">
          <v-img height="80" width="80" contain
            :src="match.home.logo" :alt="match.home.shortName"
          />
          <p class="font-weight-regular text-body-1 text-center">{{ match.home.name }}</p>
        </div>
        <p class="text-h3 font-weight-medium">
          {{ state.status === 'finished' ? match.score.goalsHome.length : '' }}
        </p>
        <span v-if="state.hasPenalty" class="text-body-2 font-weight-medium">
          {{ `(${match.score.scorePenalts.home} x ${match.score.scorePenalts.away})` }}
        </span>
        <span v-else class="text-body-2 font-weight-medium">X</span>
        <p class="text-h3 font-weight-medium">
          {{ state.status === 'finished' ? match.score.goalsAway.length : '' }}
        </p>
        <div class="d-flex flex-column align-center ga-1" style="flex: 1">
          <v-img height="80" width="80" contain
            :src="match.away.logo" :alt="match.away.shortName"
          />
          <p class="font-weight-regular text-body-1 text-center">{{ match.away.name }}</p>
        </div>
      </div>
      <div class="d-flex flex-column ga-1 align-center">
        <div class="d-flex align-center ga-1">
          <v-icon icon="mdi-calendar" color="white" />
          <span class="text-body-1 text-white">
            {{ state.status === 'lived' ? 'AO VIVO' : formatDate(match.date) }}
          </span>
        </div>
        <div class="d-flex align-center ga-1">
          <v-icon icon="mdi-map-marker-outline" color="white" />
          <span class="text-body-1 text-white">{{ match.stadium }}</span>
        </div>
        <v-hover v-slot:default="{ isHovering, props }">
          <RouterLink
            :to="`calendario/${match.id}-${match.home.name.toLowerCase().replace(/\s/g)}x${match.away.name.toLowerCase().replace(/\s/g, '')}`"
            v-bind="props"
            class="text-none font-weight-bold text-body-1"
            :class="[isHovering ? 'text-blue-darken-3' : 'text-white']"
            style="text-decoration: none; cursor: pointer"
          >
            Saiba mais
          </RouterLink>
        </v-hover>
      </div>
    </v-card>
  </section>
</template>

<script lang="ts" setup>
  import { RouterLink } from 'vue-router';
  import { onMounted, reactive } from 'vue';
  import { Match } from '../../model/Match';
  import { getStatusMatchByDateHour } from '../../utils/getStatusMatch';
  import { formatDate } from '../../utils/formatedDate'

  const props = defineProps<{
    match: { type: Match },
  }>();

  const state = reactive({
    status: '',
    hasPenalty: false,
  })

  onMounted(() => {
    const status = getStatusMatchByDateHour(props.match.date);
    state.status = status;
    state.hasPenalty = props.match.score.scorePenalts !== undefined && status === 'finished'
  })

</script>
