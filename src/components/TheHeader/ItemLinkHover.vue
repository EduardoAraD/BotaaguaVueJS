<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <RouterLink
      :to="link"
      v-bind="props"
      class="text-none font-weight-bold"
      :class="[isHovering ? 'text-blue' : 'text-white', isSubTitle ? 'text-body-2': 'text-body-1']"
      style="text-decoration: none; cursor: pointer"
    >
      {{ name }}
    </RouterLink>
  </v-hover>
</template>

<script setup>
  defineProps({
    link: { type: String, default: '/' },
    name: { type: String, default: '' },
    isSubTitle: { type: Boolean, default: false }
  })
</script>
