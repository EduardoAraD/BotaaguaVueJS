<template>
  <v-container>
    <TitlePage
      :paths="path"
      title="Estádio"
    />
    <div class="d-flex flex-column mt-10 ga-1">
      <h3 class="text-h4 text-center">O nosso primeiro lar</h3>
      <v-parallax :src="stadium1" class="rounded-lg">
        <div
          class="d-flex fill-height align-end"
        >
          <div class="d-flex flex-column align-center w-100"
            style="background-color: #00000077;"
          >
            <h1 class="text-h5">Estádio Town Park</h1>
          </div>
        </div>
      </v-parallax>
      <v-card class="d-flex flex-column align-center justify-center pa-3 ma-4">
        <p class="text-body-1 font-weight-bold">Town Park - Arena Pabussu</p>
        <p class="text-body-1">Capacidade: <span class="font-weight-bold">10.248</span> pessoas</p>
        <p class="text-body-1">Estreia:
          <a
            href="https://youtu.be/cJqVsXWpvso?si=GIjfIUYiCcOLfBHY"
            target="_blank"
            class="text-blue text-decoration-none"
          >
            Botaagua 0 x 2 Tottenham
          </a>
        </p>
      </v-card>
      <p class="text-body-1 text-justify">
        Nesse primeiro estádio o Botaagua teve um total de 11 jogos, 5 jogos pela primeira temporada e 
        6 pela segunda, todos pela UEFA Champions League. São apenas 4 vitórias, 4 empates e 3 derrotas.
        Um aproveitamento de 48%.
        <br />
        A maior vitória do Botaagua nesse estádio foi o 3 a 0 em cima do Borussia Dortmund, que foi apenas o segundo jogo.
      </p>

      <h3 class="text-h4 text-center mt-6">Bem-vindo a segunda casa</h3>
      <v-parallax :src="stadium2" class="rounded-lg">
        <div
          class="d-flex fill-height align-end"
        >
          <div class="d-flex flex-column align-center w-100"
            style="background-color: #00000077;"
          >
            <h1 class="text-h5">Estádio El Medio</h1>
          </div>
        </div>
      </v-parallax>
      <v-card class="d-flex flex-column align-center justify-center pa-3 ma-4">
        <p class="text-body-1 font-weight-bold">Estádio El Medi - Arena Pabussú</p>
        <p class="text-body-1">Capacidade: <span class="font-weight-bold">30.493</span> pessoas</p>
        <p class="text-body-1">Estreia:
          <a
            href="https://youtu.be/ym53flsXVUc?si=6yS9UtcOdXqnqJ56"
            target="_blank"
            class="text-blue text-decoration-none"
          >
            Botaagua 4 x 1 Heartz
          </a>
        </p>
      </v-card>
      <p class="text-body-1 text-justify">
        O atual mando de campo do Botaagua FC, o akjshda tem trazido sorte, só nesse estádio
        o Botaagua tem mais vitórias que o primeiro estádio com apenas uma temporada são 7
        vitórias em 8 jogos.
        <br />
        Até o momento, o maior triunfo do Botaagua foi de 5 a 1 sobre o Panathinaikos e Legia
        Varsóvia na fase de grupos da UEFA Europa League.
      </p>
    </div>
  </v-container>
</template>

<script setup lang="ts">
  import TitlePage from '../components/TitlePage/TitlePage.vue'
  import stadium1 from '../assets/stadium/stadium1.png'
  import stadium2 from '../assets/stadium/stadium2.png'

  const path = [{ title: 'Clube', link: '/' }];

</script>
