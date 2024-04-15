<template>
  <div class="d-flex flex-column w-100 overflow-hidden">
    <div
      class="d-flex"
      style="width: 400%;"
      :style="`margin-left: -${state.slideActive * 100}%`"
    >
      <NewsVue
        v-for="slide in slides"
        v-bind:key="slide.id"
        :title="slide.title"
        :image="slide.image"
        :subtitle="slide.subtitle"
      />
    </div>
    <!-- <div
      class="d-flex w-100 overflow-auto"
    >
      <div class="d-flex">
        <NewsVue
          v-for="slide in slides"
          v-bind:key="slide.id"
          :title="slide.title"
          :image="slide.image"
          :subtitle="slide.subtitle"
        />
      </div>
    </div> -->
    <div class="d-flex w-100 justify-center ga-4 pa-2">
      <input
        v-for="slide in slides"
        v-bind:key="slide.id"
        type="radio"
        :value="slide.id"
        name="slide-selected"
        v-model="state.slideActive"
        class="cursor-pointer"
      />
    </div>
  </div>
</template>

<script setup>
  import NewsVue from './News.vue'
  import { reactive } from 'vue'

  const slides = [
    {
      id: 0,
      image: 'https://images.flamengo.com.br/public/images/banners/12/17125444131.jpg',
      title: 'Flamengo vence o Nova Iguaçu e conquista seu 38º título do Campeonato Carioca',
      subtitle: 'Bruno Henrique foi o autor do golaço que decretou o triunfo rubro-negro por 1 a 0, no Maracanã',
    },
    {
      id: 1,
      image: 'https://images.flamengo.com.br/public/images/banners/12/17122736101m.jpeg',
      title: 'Após empate na estreia da Libertadores, Flamengo se reapresenta de olho no Nova Iguaçu',
      subtitle: 'Rubro-Negro venceu o jogo de ida por 3 a 0 e está muito próximo de levantar seu 38º título do Campeonato Carioca',
    },
    {
      id: 2,
      image: 'https://images.flamengo.com.br/public/images/banners/12/17124410452.jpeg',
      title: 'De volta ao Maracanãzinho, FlaBasquete tem amplo domínio e vence o Corinthians por 88 a 58, pelo NBB',
      subtitle: 'Gabriel Jaú marcou 24 pontos e foi o grande destaque da partida. Orgulho da Nação segue na liderança da competição',
    },
    {
      id: 3,
      image: 'https://www.ferroviario.com.br/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-01-at-16.07.43-810x535.jpeg',
      title: 'Ferroviário promove o Jantar de Arrancada para o Brasileiro',
      subtitle: '',
    }
  ];
  
  const state = reactive({
    slideActive: 1
  });

</script>
