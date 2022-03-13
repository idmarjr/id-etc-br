<script setup lang="ts">
	import { ref } from 'vue';
	import SectionHeader from './sectionHeader.vue';
	import SocialItem from './social/SocialItem.vue';

	const SocialItems = ref([
		{
			id: 1,
			title: 'Github',
			url: 'https://github.com/idmarjr',
		},
		{
			id: 2,
			title: 'Linkedin',
			url: 'https://linkedin.com/idmarjr',
		},
		{
			id: 3,
			title: 'Twitter',
			url: 'https://twitter.com/idmarjr',
		},
		{
			id: 4,
			title: 'Medium',
			url: 'https://medium.com/@idmarjr',
		}
	])
</script>

<template>
	<section id="social">
		<div class="wrapper">
			<SectionHeader title="Social" />
			<ul class="socialList">
				<SocialItem
					v-for="item in SocialItems"
					:key="item.id"
					:title="item.title"
					:url="item.url"
				/>
			</ul>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	#social {
		margin-bottom: 64px;
	}

	////////////////////////////////////////////////////
	// @media > 810px
	////////////////////////////////////////////////////
	@media (min-width: 811px) {
		.socialList {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
		}
	}
</style>