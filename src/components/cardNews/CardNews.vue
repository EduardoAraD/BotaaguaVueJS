<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <RouterLink
      v-bind="props"
      :to="`/noticias/${id}-${pageLink.toLowerCase().replace(/\s/g, '')}`"
      class="border-md d-flex flex-column w-100 rounded-lg overflow-hidden position-relative"
      style="text-decoration: none; min-width: 270px; transition: 0.2s"
    >
      <v-img height="200" :src="image" alt="Foto da Notícia" cover />
      <div
        class="position-absolute w-100 pa-3"
        style="bottom: 0px; background-color: #000000CC;"
      >
        <p
          class="text-body-2 font-weight-bold"
          :class="isHovering ? 'text-blue' : 'text-white'"
          style="transition: 0.2s;"
        >{{ title }}</p>
      </div>
    </RouterLink>
  </v-hover>
</template>

<script lang="ts" setup>
  defineProps<{
    image: HTMLImageElement,
    id: String,
    title: String,
    pageLink: String,
  }>();
</script>
