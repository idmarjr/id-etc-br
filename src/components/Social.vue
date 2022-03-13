<script setup lang="ts">
	import SectionHeader from './sectionHeader.vue';
	import SocialItem from './social/SocialItem.vue';
</script>

<template>
	<section id="social">
		<div class="wrapper">
			<SectionHeader />
			<ul class="socialList">
				<SocialItem />
				<SocialItem />
				<SocialItem />
				<SocialItem />
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