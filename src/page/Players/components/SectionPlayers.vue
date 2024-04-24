<template>
  <section>
    <h3 class="text-overline" style="font-size: 1.2rem !important;">{{ title }}</h3>
    <div class="d-flex ga-2 overflow-auto">
      <v-card
        v-for="player in players"
        :key="player.id"
        class="position-relative d-flex flex-column"
        style="min-width: 150px; width: min-content;"
      >        
        <v-img
          v-if="player.image !== undefined"
          height="180"
          width="150"
          cover
          :src="player.image"
          :alt="'Image de ' + player.name"
        />
        <v-img
          v-else
          height="180"
          width="150"
          cover
          src="https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png"
          alt="image default"
        />

        <div class="position-absolute d-flex align-center flex-column bg-grey rounded-sm pa-1" style="top: 0;">
          <span class="text-body-2 font-weight-medium">{{ player.position }}</span>
          <span class="text-body-2 font-weight-medium">{{ player.overrall }}</span>
        </div>
        <div class="d-flex align-center" style="height: 46px;">
          <p class="text-center w-100 text-body-2">{{ player.name.toUpperCase() }}</p>
        </div>
      </v-card>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { Player } from '../../../model/Player'

  defineProps<{
    title: { type: String },
    players: { type: Array<Player> },
  }>();

</script>
