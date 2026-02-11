<template>
  <v-app>
    <TheHeader />
    <v-main>
      <RouterView />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import TheHeader from './components/TheHeader/TheHeader.vue'
  import TheFooter from './components/Footer/Footer.vue'

  declare global {
    interface Window {
      dataLayer: unknown[]
      gtag: (...args: unknown[]) => void
    }
  }

  onMounted(() => {
    window.dataLayer = window.dataLayer || []
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }
    window.gtag = gtag

    gtag('js', new Date())
    gtag('config', 'AW-17853631589')

    if (document.querySelector('script[src*="googletagmanager.com/gtag/js?id=AW-17853631589"]')) return
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17853631589'
    document.head.appendChild(script)
  })
</script>
