<template>
  <v-card class="mb-8 px-2 py-8 rounded-lg">

    <Loading v-if="isLoading" />
    
    <div v-else class="d-flex flex-column align-center">
      <span class="text-body-2 text-center">
        {{ stadium }} | {{ formatDate(dateMatch) }}
      </span>
      <p class="text-body-1 font-weight-bold text-center">
        {{ championship }} - {{ stage }}
      </p>
      <div
        class="d-flex align-center justify-center w-100 my-2"
        :class="state.status === 'finished' ? 'ga-4' : 'ga-10'"
      >
        <div class="d-none d-sm-flex justify-center" style="flex: 1">
          <h3 class="font-weight-bold text-center text-body-1">
            {{ clubHome.name }}
          </h3>
        </div>
        <div
          class="d-flex align-center justify-center"
          :class="state.status === 'finished' ? 'ga-2' : 'ga-10'"
        >
        <v-img height="64" width="64" contain
          :src="clubHome.logo" :alt="clubHome.shortName" />
        <div class="d-flex align-center justify-center ga-1">
          <h2 class="text-h4 font-weight-medium">{{ state.status === 'finished' ? goals.home : '' }}</h2>
          <span v-if="state.hasPenalty" class="text-h6 font-weight-regular">
            {{ `(${scorePenalty.home} x ${scorePenalty.away})` }}
          </span>
          <h2 v-else class="text-h4 font-weight-medium">-</h2>
          <h2 class="text-h4 font-weight-medium">{{ state.status === 'finished' ? goals.away : '' }}</h2>
        </div>
        <v-img height="64" width="64" contain
          :src="clubAway.logo" :alt="clubAway.shortName" />
        </div>
        <div class="d-none d-sm-flex justify-center" style="flex: 1">
          <h3 class="font-weight-bold text-center text-body-1">
            {{ clubAway.name }}
          </h3>
        </div>
      </div>
      <div class="d-flex w-100 ga-10" v-if="state.status === 'finished'">
        <div class="d-flex flex-column align-end" style="flex: 1">
          <div class="d-flex ga-1" v-for="players in score.goalsHome">
            <span class="font-weight-bold text-caption">{{ players.player }}</span>
            <span
              class="font-weight-bold text-caption"
              v-for="goal in players.goals"
            >{{ goal.minute }}'{{ goal.isPenalty && '(P)' }}</span>
          </div>
        </div>
        <div class="d-flex flex-column" style="flex: 1">
          <div class="d-flex ga-1" v-for="players in score.goalsAway">
            <span class="font-weight-bold text-caption">{{ players.player }}</span>
            <span
              class="font-weight-bold text-caption"
              v-for="goal in players.goals"
            >{{ goal.minute }}'{{ goal.isPenalty && '(P)' }}</span>
          </div>
        </div>
      </div>
      <div v-else-if="state.status === 'started'" class="d-flex flex-column align-center">
        <p class="text-overline">Começar o jogo em:</p>
        <span class="text-h6 font-weight-bold">
          {{ state.count.hours }} : {{ state.count.minutes }} : {{ state.count.secunds }}
        </span>
      </div>
      <div v-else class="d-flex align-center justify-center ga-4">
        <div
          :class="state.isLiveBlink ? 'bg-red-lighten-2' : 'bg-red-darken-2'"
          style="height: 1rem; width: 1rem; border-radius: 999px; transition: 0.5s;"
        />
        <p class="text-overline">Ao vivo</p>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
  import { reactive, watch } from 'vue';
  import Loading from '../../../components/Loading/Loading.vue';
  import { Club, emptyClub } from '../../../model/Club';
  import { formatDate } from '../../../utils/formatedDate';
  import { getStatusMatchByDateHour } from '../../../utils/getStatusMatch';

  const props = defineProps({
    isLoading: { type: Boolean, default: false },
    stadium: { type: String, default: '' },
    dateMatch: { type: String, default: '' },
    championship: { type: String, default: '' },
    stage: { type: String, default: '' },
    clubHome: { default: emptyClub },
    clubAway: { default: emptyClub },
    goals: {
      type: {
        home: Number,
        away: Number,
      },
    },
    score: {
      type: {
        goalsHome: Array,
        goalsAway: Array,
      },
    },
    scorePenalty: {
      type: {
        home: Number,
        away: Number,
      },
    }
  })

  const state = reactive({
    count: { hours: 0, minutes: '00', secunds: '00' },
    status: '',
    hasPenalty: false,
    isLiveBlink: false,
  })

  function getCountForDateMatch(dateMatch: string){
    const date = new Date(dateMatch).getTime()
    const now = Date.now();
    const diff = (date - now) / 1000;

    if((date - now) < 0) {
      return {
        hours: 0,
        minutes: 0,
        secunds: 0,
      }
    }

    const HOURTIME = 60 * 60;
    const MINUTETIME = 60;
    const hours = Math.floor(diff / (60*60));
    const minutes = Math.floor((diff - hours * HOURTIME) / MINUTETIME);
    const secunds = Math.floor(diff - (hours * HOURTIME + minutes * MINUTETIME))

    return {
      hours,
      minutes: minutes < 10 ? `0${minutes}` : minutes,
      secunds: secunds < 10 ? `0${secunds}` : secunds,
    }
  }

  watch(() => props.dateMatch, () => {
    const status = getStatusMatchByDateHour(props.dateMatch);
    if(status === 'lived') {
      state.isLiveBlink = true;
    }
    if(status === 'finished') {
      state.hasPenalty = props.scorePenalty !== undefined
    }
    state.status = status;
  })

  watch(() => [state.status, state.isLiveBlink], ([status, isLiveBlink]) => {
    if(status === 'lived') {
      setTimeout(() => {
        state.isLiveBlink = !isLiveBlink
      }, 1000)
    }
  })

  watch(() => [state.status, state.count], ([status, _]) => {
    if(status === 'started') {
      setTimeout(() => {
        const countdown = getCountForDateMatch(props.dateMatch)
        state.count = countdown;

        const isCountdownOver =
          countdown.hours === 0 && countdown.minutes === 0 && countdown.secunds === 0;
        if(isCountdownOver) {
          state.status = 'lived'
        }
      }, 1000);
    }
  })

</script>
