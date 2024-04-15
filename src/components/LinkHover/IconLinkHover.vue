<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <a
      v-bind="props"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <v-icon :icon="icon" :color="isHovering ? 'blue-darken-2' : 'white'" />
    </a>
  </v-hover>
</template>

<script setup>
  defineProps({
    link: { type: String, default: '/' },
    icon: { type: String, default: 'mdi-home' }
  })

</script>
