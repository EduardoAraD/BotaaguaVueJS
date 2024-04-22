<template>
  <v-container>
    <TitlePage
      :paths="path"
      title="História"
    />
    <div class="d-flex flex-column mt-10 ga-2">
      <h3 class="text-h4 text-center">O Botaagua foi criado no video-game</h3>
      <p class="text-body-1 text-justify">
        Nas alegrias de um PS2, Eduardo criou um modo carreira de clubes no Bomba Patch em 2010.
        Por gostar do Botafogo e gostar da sonoridade da palavra "Botaagua", ele criou esse nome e
        nunca mais parou de usar. Muitos amigos bricavam com ele por causa do nome ser engraçado, mas
        Edu manteve mesmo assim. As cores escolhidas do clube foram o Azul e o Amarelo que é utilizado
        até hoje pelo clube.
      </p>
      <h3 class="text-h4 text-center mt-4">A logo</h3>
      <v-img :src="logo" class="rounded-lg" height="200" contain />
      <p class="text-body-1 text-justify">
        Em 2018, Eduardo e Douglas criaram a logo que conhecemos hoje. A aguia no meio com o nome Botaagua
        Futebol Clube além das cores já conchecidas.
      </p>
    </div>
  </v-container>
</template>

<script setup>
  import logo from '../assets/logo.png'
  import TitlePage from '../components/TitlePage/TitlePage.vue'

  const path = [{ title: 'Clube', link: '/' }];

</script>
