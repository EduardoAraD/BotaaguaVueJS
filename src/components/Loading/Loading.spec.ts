import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import Loading from './Loading.vue'

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

describe('Component Loading', () => {
  it('renders correctly', () => {
    const wrapper = mount(Loading, {
      global: {
        plugins: [vuetify],
      }
    });

    const loadingDiv = wrapper.find('[data-test-id="loading"]')
    loadingDiv.exists()
    expect(loadingDiv.exists()).toBe(true);
  })
})
