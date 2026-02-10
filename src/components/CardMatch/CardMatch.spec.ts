import { RouterLinkStub, mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import CardMatch from './CardMatch.vue'
import { matchsEuropa } from '../../lib/data/matchs'

const vuetify = createVuetify({
  components,
  directives,
})

global.ResizeObserver = require('resize-observer-polyfill')

vi.mock('vue-router');

describe('Component CardMatch', () => {
  it('renders correctly', () => {
    const wrapper = mount(CardMatch, {
      props: {
        match: matchsEuropa[0],
      },
      global: {
        plugins: [vuetify],
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });
  
    const scoreHome = wrapper.find('[data-test-id="goalHome"]')
    // const scorePenalt = wrapper.find('[data-test-id="scorePenalt"]')
    // console.log('-------------------------------------------')
    // console.log(nameChampionship.exists())
    // console.log(scoreHome.text())
    // console.log('-------------------------------------------')
    expect(wrapper.text()).toContain('Stade Rennais FC')
    expect(scoreHome.text()).equal('1')
  })

  it('router link is correctly', () => {
    const wrapper = mount(CardMatch, {
      props: {
        match: matchsEuropa[0],
      },
      global: {
        plugins: [vuetify],
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    expect(
      wrapper.findComponent(RouterLinkStub).props().to
    ).toBe('/calendario/1-staderennaisfcxbotaaguafc')
  })

  it('defalt score in status diff of finished', () => {
    const dateFormatedNow = new Date().toJSON().slice(0,19).split('T').join(' ')
    const wrapper = mount(CardMatch, {
      props: {
        match: {
          ...matchsEuropa[0],
          date: dateFormatedNow
        },
      },
      global: {
        plugins: [vuetify],
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    const scoreHome = wrapper.find('[data-test-id="goalHome"]')

    expect(scoreHome.text()).not.equal('1')
  })

  it('show score penalty', () => {
    const wrapper = mount(CardMatch, {
      props: {
        match: matchsEuropa[7],
      },
      global: {
        plugins: [vuetify],
        stubs: {
          RouterLink: RouterLinkStub,
        }
      }
    });

    const scoreHome = wrapper.find('[data-test-id="goalHome"]')
    const scorePenalt = wrapper.find('[data-test-id="scorePenalt"]')

    expect(wrapper.text()).toContain('Manchester City')
    expect(scoreHome.text()).equal('2')
    expect(scorePenalt.text()).equal('(5 x 4)')
  })
})
