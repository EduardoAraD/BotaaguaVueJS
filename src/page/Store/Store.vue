<template>
  <LayoutPage>
    <TitlePage
      :paths="path"
      title="Loja"
    />

    <section class="mt-6">
      <v-row justify="center">
        <v-col cols="12" md="8" lg="6">
          <v-card class="overflow-hidden rounded-lg bg-grey-darken-4">
            <v-carousel
              height="400"
              hide-delimiters
              show-arrows="hover"
            >
              <v-carousel-item
                v-for="(image, index) in product.images"
                :key="index"
                :src="image"
                cover
              />
            </v-carousel>

            <v-card-title class="text-h5 font-weight-bold pt-4">
              {{ product.name }}
            </v-card-title>

            <v-card-subtitle class="text-body-2 text-grey-lighten-1">
              {{ product.description }}
            </v-card-subtitle>

            <v-card-actions class="pt-2 pb-4">
              <v-btn
                color="primary"
                variant="flat"
                size="large"
                prepend-icon="mdi-shopping"
                href="https://tracking.abtrack.ai/tracking/click"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </LayoutPage>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue'
  import LayoutPage from '../../components/LayoutPage.vue'
  import TitlePage from '../../components/TitlePage/TitlePage.vue'
  import camisaFrente from '@/assets/01b0c3180853971.6511f8299b71f.png'
  import camisaVerso from '@/assets/e3f1c0180853971.6511f828a0cc5.webp'

  const path = [{ title: 'Loja', link: '/store' }]

  const product = {
    name: 'Camisa do Botaagua',
    description: 'Camisa oficial do Botaagua. Vista as cores do clube e apoie o time.',
    images: [camisaFrente, camisaVerso],
  }

  let abtrackScript: HTMLScriptElement | null = null

  onMounted(() => {
    if (document.querySelector('script[src="https://cdn.abtrack.ai/scripts/abtrack.js"]')) return
    abtrackScript = document.createElement('script')
    abtrackScript.src = 'https://cdn.abtrack.ai/scripts/abtrack.js'
    abtrackScript.async = true
    abtrackScript.defer = true
    document.head.appendChild(abtrackScript)
  })

  onUnmounted(() => {
    if (abtrackScript?.parentNode) {
      abtrackScript.parentNode.removeChild(abtrackScript)
    }
  })
</script>
