<template>
  <nav class="d-flex align-center ga-1 mb-1">
    <LinkHoverWithString link="/" name="Início" />
    <div
      class="d-flex align-center ga-1"
      v-for="pat in paths" :key="pat"
    >
      <v-icon icon="mdi-chevron-right" color="white" size="20" />
      <LinkHoverWithString :link="pat.link" :name="pat.title" />
    </div>
    <v-icon icon="mdi-chevron-right" color="white" size="20" />
    <span class="text-subtitle-2">{{ title }}</span>
  </nav>

  <h1 class="text-h5 font-weight-bold">{{ title }}</h1>
</template>

<script setup>
  import LinkHoverWithString from '../LinkHover/LinkHoverWithString.vue'

  defineProps({
    paths: { type: Array, default: [] },
    title: { type: String, default: '' },
  })
</script>
