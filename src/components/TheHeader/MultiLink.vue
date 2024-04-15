<template>
  <v-hover v-slot:default="{ isHovering, props }">
    <div v-bind="props">
      <a
        class="text-none font-weight-bold cursor-pointer"
        :class="isHovering ? 'text-blue' : 'text-white'">
        {{ name }}
      </a>
      <v-expand-transition>
        <v-card
          v-if="isHovering"
          class="d-flex flex-column ga-2 px-4 py-2"
          :class="isMenuMobile ? 'position-relative ml-4 bg-transparent' : 'position-absolute bg-indigo-darken-4'"
        >
          
          <ItemLinkHover
            v-for="sublink in sublinks"
            :key="sublink.name"
            :link="sublink.link"
            :name="sublink.name"
            isSubTitle
          />
        </v-card>
      </v-expand-transition>
    </div>
  </v-hover>
</template>

<script setup lang="ts">
  import ItemLinkHover from './ItemLinkHover.vue';
  // interface SubLink {
  //   name: string;
  //   link: string;
  // }

  defineProps({
    name: { type: String, default: ''},
    sublinks: { type: Array, default: []},
    isMenuMobile: { type: Boolean, default: false }
  })
</script>
