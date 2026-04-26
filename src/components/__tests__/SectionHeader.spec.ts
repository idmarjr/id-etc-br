import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SectionHeader from '../SectionHeader.vue'

describe('SectionHeader', () => {
	it('renders the title inside h2', () => {
		const wrapper = mount(SectionHeader, { props: { title: 'About' } })
		expect(wrapper.find('h2').text()).toBe('About')
	})

	it('renders a header element', () => {
		const wrapper = mount(SectionHeader, { props: { title: 'Work' } })
		expect(wrapper.find('header').exists()).toBe(true)
	})
})
