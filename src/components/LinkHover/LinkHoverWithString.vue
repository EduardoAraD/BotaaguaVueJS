<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <a
      v-if="isLinkExternal"
      v-bind="props"
      :href="link"
      target="_blank"
      rel="noopener noreferrer"
      class="text-subtitle-2"
      :class="isHovering ? 'text-blue' : 'text-white'"
      style="text-decoration: none;"
    >
      {{  name }}
    </a>
    <RouterLink
      v-else
      v-bind="props"
      :to="link"
      class="text-subtitle-2"
      :class="isHovering ? 'text-blue' : 'text-white'"
      style="text-decoration: none;"
    >
      {{ name }}
    </RouterLink>
  </v-hover>
</template>

<script setup>
  import { RouterLink } from 'vue-router';

  defineProps({
    link: { type: String, default: '/' },
    name: { type: String, default: '' },
    isLinkExternal: { type: Boolean, default: false }
  })
</script>
