<script setup lang="ts">
	import SectionHeader from './sectionHeader.vue';
	import SocialItem from './social/SocialItem.vue';
</script>

<template>
	<section id="social">
		<div class="wrapper">
			<SectionHeader />
			<ul>
				<SocialItem />
				<SocialItem />
				<SocialItem />
				<SocialItem />
			</ul>
		</div>
	</section>
</template>

<style scoped>

#social {
	margin-bottom: 64px;
}

</style>