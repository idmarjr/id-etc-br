import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SocialItem from '../social/SocialItem.vue'

describe('SocialItem', () => {
	const props = { title: 'GitHub', url: 'https://github.com/idmarjr' }

	it('renders the title as link text', () => {
		const wrapper = mount(SocialItem, { props })
		expect(wrapper.find('a').text()).toBe('GitHub')
	})

	it('sets the correct href', () => {
		const wrapper = mount(SocialItem, { props })
		expect(wrapper.find('a').attributes('href')).toBe('https://github.com/idmarjr')
	})

	it('opens in a new tab with safe rel attribute', () => {
		const wrapper = mount(SocialItem, { props })
		const a = wrapper.find('a')
		expect(a.attributes('target')).toBe('_blank')
		expect(a.attributes('rel')).toBe('noopener noreferrer')
	})
})
