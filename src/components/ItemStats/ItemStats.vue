<template>
  <div class="d-flex w-100 justify-space-between align-center">
    <p class="text-body-1">{{ valueHome }}</p>
    <h3 class="text-body-1 font-weight-bold">{{ title }}</h3>
    <p class="text-body-1">{{ valueAway }}</p>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    valueHome: String,
    title: String,
    valueAway: String,
  }>();

</script>
