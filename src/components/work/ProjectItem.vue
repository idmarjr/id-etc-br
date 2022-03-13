<script setup lang="ts">
	const props = defineProps({
		company: {
			type: String,
			required: true
		},
		project: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		imageUrl: {
			type: String,
			required: true
		},
		imageDescription: {
			type: String,
			required: true
		}
	})
</script>

<template>
	<li class="project">
		<header class="projectHeader">
			<h3>{{ company }}</h3>
			<p>{{ project }}</p>
		</header>
		<div class="projectDescription">
			<p>{{ description }}</p>
		</div>
		<picture class="projectScreenshot">
			<img
				:src="imageUrl"
				:alt="imageDescription"
			/>
		</picture>
	</li>
</template>

<style lang="scss" scoped>
	.project {
		list-style: none;
		margin-bottom: 48px;
	}

	.projectHeader {
		margin-bottom: 12px;;
	}
	.projectHeader h3 {
		font-size: 2.2em;
		font-weight: 200;
		margin-bottom: 6px;
	}

	.projectHeader p {
		font-size: 1.4em;
		font-weight: 200;
		letter-spacing: 0.03;
	}

	.projectDescription {
		  font-size: 1.4em;
		  font-weight: 200;
		  line-height: 1.4;
		  margin-bottom: 12px;
	}

	.projectScreenshot {
		overflow: hidden;
		border-radius: 3px;
		box-shadow: 0px 2px 4px 0px #00000040;
	}
</style>