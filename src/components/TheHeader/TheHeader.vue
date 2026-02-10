<template>
  <header class="position-fixed w-100" style="max-width: 100vw; z-index: 9999;">
    <div class="d-flex flex-md-row flex-column align-center justify-space-around"
    style="background-color: #1A237EEE;">
      <div class="d-flex align-center justify-space-around w-100">
        <div class="d-flex align-center ga-2">
          <RouterLink to="/">
            <v-img
              height="70"
              width="70"
              src="@/assets/logo.png"
            />
          </RouterLink>
          <h1 class="d-flex text-h5 text-center">Botaagua FC</h1>
        </div>
        <v-btn
          class="d-md-none d-flex"
          :class="state.isOpenMenuMobile && 'bg-red'"
          variant="tonal"
          @click="changeShowMenuMobile"
        >
          <v-icon
            :icon="state.isOpenMenuMobile ? 'mdi-close' : 'mdi-format-list-bulleted'"
            color="white"
            size="large"
          />
        </v-btn>
      </div>
      
      <div
        class="d-none d-md-flex ga-5 position-relative pa-2"
        style="min-width: 600px;"
      >
        <MultiLinkVue
          name="Clubes"
          :sublinks="sublinksToClub"
        />
        <ItemLinkHover link='/noticias' name="Notícias" />
        <MultiLinkVue name="Futebol" :sublinks="sublinksToSoccer" />
        <MultiLinkVue name='e-Sports' :sublinks="sublinksToESports" />
        <ItemLinkHover link='/' name="Ingressos" />
        <ItemLinkHover link='/' name="Loja" />
        <IconLinkHover
          link="https://www.instagram.com/botaagua_e_sport/"
          icon="mdi-instagram"
        />
        <IconLinkHover
          link="https://www.youtube.com/channel/UCQrKvSleGDchZ0pWxFuPhxw"
          icon="mdi-youtube"
        />
      </div>

      <v-expand-transition>
        <div
          v-if="state.isOpenMenuMobile"
          class="d-flex d-md-none flex-column px-10 py-5 ga-2 w-100 border-t-lg"
        >
          <MultiLinkVue
            name="Clubes"
            :sublinks="sublinksToClub"
            isMenuMobile
          />
          <ItemLinkHover link='/noticias' name="Notícias" />
          <MultiLinkVue name="Futebol" :sublinks="sublinksToSoccer" isMenuMobile />
          <MultiLinkVue name='e-Sports' :sublinks="sublinksToESports" isMenuMobile />
          <ItemLinkHover link='/' name="Ingressos" />
          <ItemLinkHover link='/' name="Loja" />
        </div>
      </v-expand-transition>
    </div>

  </header>
  <div style="height: 70px;" />
</template>

<script setup lang="ts">
  import { reactive } from 'vue';

  import ItemLinkHover from './ItemLinkHover.vue'
  import MultiLinkVue from './MultiLink.vue';
  import IconLinkHover from '../LinkHover/IconLinkHover.vue'

  const sublinksToClub = [
    { name: "História", link: '/clube/historia' },
    { name: "Elenco", link: '/clube/elenco' },
    { name: "Estádio", link: '/clube/estadio' },
  ]
  const sublinksToSoccer = [
    { name: "Calendário", link: '/calendario' },
    { name: "Competição", link: '/' },
  ]
  const sublinksToESports = [
    { name: "CS 2", link: '/' },
    { name: "League of Legends", link: '/' },
  ]

  const state = reactive({
    isOpenMenuMobile: false,
  });

  function changeShowMenuMobile() {
    state.isOpenMenuMobile = !state.isOpenMenuMobile
  }

</script>
