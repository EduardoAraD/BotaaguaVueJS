<template>
  <div
    class="d-inline-block flex-column position-relative align-center"
    style="height: 400px; width: 100vw;"
  >
    
    <v-img
      class="w-100 h-100 d-block"
      cover
      :src="image"
      alt="foto da noticia"
    />
    
    <div  style="bottom: 0px; background-color: #00000077;"
      class="position-absolute pa-4 w-100 d-flex ga-2 flex-column justify-space-around">
      <h2 class="text-h6 font-weight-bold text-white">{{ title }}</h2>
      <p class="text-body-2 text-white">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    title: { type: String, default: 'Title' },
    subtitle: { type: String, default: '' },
    image: { type: String, default: '' }
  })
</script>
