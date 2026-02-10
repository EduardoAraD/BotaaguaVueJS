import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ItemStats from './ItemStats.vue';

global.ResizeObserver = require('resize-observer-polyfill')

describe('Component ItemStats', () => {
  it('renders correctly', () => {
    const wrapper = mount(ItemStats, {
      props: {
        valueHome: '0',
        valueAway: '1',
        title: 'Kicks'
      }
    })
  
    // Assert the rendered text of the component
    expect(wrapper.text()).toContain('Kicks')
    expect(wrapper.text()).toContain('0')
    expect(wrapper.text()).toContain('1')
  })
})
