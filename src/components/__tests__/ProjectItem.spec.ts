import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ProjectItem from '../work/ProjectItem.vue'

describe('ProjectItem', () => {
	const props = {
		company: 'Booking.com',
		project: 'Search result map',
		description: 'Interactive map for hotel search results.',
		imageUrl: '/assets/booking.png',
		imageDescription: 'Booking.com search result map screenshot',
	}

	it('renders the company name', () => {
		const wrapper = mount(ProjectItem, { props })
		expect(wrapper.find('h3').text()).toBe('Booking.com')
	})

	it('renders the project name', () => {
		const wrapper = mount(ProjectItem, { props })
		expect(wrapper.text()).toContain('Search result map')
	})

	it('renders the description', () => {
		const wrapper = mount(ProjectItem, { props })
		expect(wrapper.text()).toContain('Interactive map for hotel search results.')
	})

	it('renders the image with correct src and alt', () => {
		const wrapper = mount(ProjectItem, { props })
		const img = wrapper.find('img')
		expect(img.attributes('src')).toBe('/assets/booking.png')
		expect(img.attributes('alt')).toBe('Booking.com search result map screenshot')
	})
})
