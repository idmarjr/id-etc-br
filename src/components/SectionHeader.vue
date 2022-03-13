<script setup lang="ts">

</script>

<template>
	<header class="sectionHeader">
		<h2><span>Section Name</span></h2>
	</header>
</template>

<style scoped>
	.sectionHeader {
		margin-bottom: 24px;
	}
	.sectionHeader h2 {
		position: relative;
		font-size: 2.6em;
		font-weight: 200;
	}

	.sectionHeader h2::after {
		content: " ";
		display: block;
		position: absolute;
		top: 58%;
		width: 100%;
		height: 1px;
		border-top: 1px solid var(--primary-color);
	}

	.sectionHeader h2 > span {
		position: relative;
		display: inline-block;
		padding-right: 12px;
		background-color: var(--secondary-color);
		z-index: 1;
	}
</style>