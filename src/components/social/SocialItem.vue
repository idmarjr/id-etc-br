<script setup lang="ts">
	const props = defineProps({
		title: {
			type: String,
			required: true
		},
		url: {
			type: String,
			required: true
		}
	})
</script>

<template>
	<li class="socialItem">
		<a
			:href="url"
			target="_blank"
			rel="noopener noreferrer"
		>{{ title }}</a>
	</li>
</template>

<style lang="scss" scoped>
	.socialItem {
		list-style: none;
	}

	.socialItem a {
		display: block;
		padding: 18px 12px;
		border: 1px solid var(--primary-color);
		margin-bottom: 12px;
		font-size: 1.6em;
		font-weight: 200;
		text-align: center;
		color: var(--primary-color);
		transition: all ease-in 0.3s;
	}

	.socialItem a:hover {
		text-decoration: underline;
	}

	////////////////////////////////////////////////////
	// @media > 810px
	////////////////////////////////////////////////////
	@media (min-width: 811px) {
		.socialItem {
			flex-basis: calc(25% - 12px);
		}

		.socialItem a {
			padding: 42px 24px;
		}
	}
</style>