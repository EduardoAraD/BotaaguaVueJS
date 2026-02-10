import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import CardNews from './CardNews.vue'
import { news } from '../../lib/data/news'

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

vi.mock('vue-router');

describe('Component CardNews', () => {
  it('renders correctly', () => {
    const wrapper = mount(CardNews, {
      props: {
        image: news[0].image,
        id: news[0].id,
        title: news[0].title,
        pageLink: news[0].titlePageLink,
      },
      global: {
        plugins: [vuetify],
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    expect(wrapper.text()).toContain('Botaagua empata em casa e garante vaga nas Semi-finais.')
  })

  it('router link is correctly', () => {
    const wrapper = mount(CardNews, {
      props: {
        image: news[0].image,
        id: news[0].id,
        title: news[0].title,
        pageLink: news[0].titlePageLink,
      },
      global: {
        plugins: [vuetify],
        stubs: {
          RouterLink: RouterLinkStub,
        }
      },
    });

    expect(
      wrapper.findComponent(RouterLinkStub).props().to
    ).toBe('/noticias/1-botaaguavsatalanta')
  })
})
