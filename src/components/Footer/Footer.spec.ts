import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Footer from './Footer.vue'

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('Component Footer', () => {
  it('renders correctly', () => {
    const wrapper = mount(Footer, {
      global: {
        plugins: [vuetify],
      }
    });

    expect(wrapper.text()).toContain('@2024 TODOS OS DIREITOS RESERVADOS A EDUARDO ARAÚJO')
  })
})
