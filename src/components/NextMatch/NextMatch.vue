<template>
  <section>
    <v-card class="d-flex py-4 flex-column ga-4 align-center justify-center bg-grey-darken-4">
      <h3 class="text-white text-h7 font-weight-bold">
        UEFA Champions League 2024
      </h3>

      <div class="d-flex justify-space-around w-100 overflow-hidden align-center"
        style="max-width: 400px;"
      >
        <div class="d-flex flex-column align-center ga-1">
          <v-img height="80" width="80" cover :src="logo" alt="BTA" />
          <p class="text-white font-weight-bold text-body-1">Botaagua</p>
        </div>
        <p class="text-white font-weight-bold text-body-1">X</p>
        <div class="d-flex flex-column align-center ga-1">
          <v-img height="80" width="80" cover :src="logo" alt="BTA" />
          <p class="text-white font-weight-bold text-body-1">Botaagua</p>
        </div>
      </div>
      <div class="d-flex flex-column ga-1 align-center">
        <div class="d-flex align-center ga-1">
          <v-icon icon="mdi-calendar" color="white" />
          <span class="text-body-1 text-white">09/04/2024</span>
        </div>
        <div class="d-flex align-center ga-1">
          <v-icon icon="mdi-map-marker-outline" color="white" />
          <span class="text-body-1 text-white">Arena Pabussú - Caucaia/CE</span>
        </div>
        <v-hover v-slot:default="{ isHovering, props }">
          <RouterLink
            to="/" v-bind="props"
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

<script setup>
import { RouterLink } from 'vue-router';
import logo from '../../assets/logo.png'

</script>

