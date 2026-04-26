import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MainHeader from '../MainHeader.vue'

describe('MainHeader', () => {
	it('renders all navigation links', () => {
		const wrapper = mount(MainHeader)
		const links = wrapper.findAll('nav a')
		const texts = links.map(l => l.text())
		expect(texts).toContain('About')
		expect(texts).toContain('Work')
		expect(texts).toContain('Social')
	})

	it('navigation links point to correct anchors', () => {
		const wrapper = mount(MainHeader)
		const hrefs = wrapper.findAll('nav a').map(l => l.attributes('href'))
		expect(hrefs).toContain('#about')
		expect(hrefs).toContain('#work')
		expect(hrefs).toContain('#social')
	})

	it('renders the profile picture', () => {
		const wrapper = mount(MainHeader)
		expect(wrapper.find('img').exists()).toBe(true)
	})
})
