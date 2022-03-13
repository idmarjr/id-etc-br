<script setup lang="ts">

</script>

<template>
	<li class="socialItem">
		<a
			href=""
			target="_blank"
			rel="noopener noreferrer"
		>Social Media Name</a>
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
	}

	.socialItem a:hover {
		text-decoration: underline;
	}
</style>