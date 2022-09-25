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
	<li
		class="project"
		data-aos="fade-down"
		data-aos-delay="200"
	>
		<div class="project-info">
			<header class="projectHeader">
				<h3>{{ company }}</h3>
				<p>{{ project }}</p>
			</header>
			<div class="projectDescription">
				<p>{{ description }}</p>
			</div>
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
		margin-bottom: 24px;
	}
	.projectHeader h3 {
		font-size: 3.2em;
		font-weight: 200;
		margin-bottom: 8px;
	}

	.projectHeader p {
		font-size: 2em;
		font-weight: 200;
		letter-spacing: 0.03;
	}

	.projectDescription {
		  font-size: 1.6em;
		  font-weight: 200;
		  line-height: 1.4;
		  margin-bottom: 12px;
	}

	.projectScreenshot {
		overflow: hidden;
		border-radius: 3px;
		box-shadow: 0 2px 6px -1px rgba(0,0,0, 0.4);
	}

	////////////////////////////////////////////////////
	// @media > 810px
	////////////////////////////////////////////////////
	@media (min-width: 811px) {

		.project {
			display: flex;
			margin-bottom: 120px;
		}

		.project-info {
			max-width: 35%;
			margin-right: 24px;
		}

		.projectHeader h3 {
			font-size: 3.6em;
			margin-bottom: 12px;
		}

		.projectHeader p {
			letter-spacing: 0.03;
			margin-bottom: 24px;
		}

		.projectDescription {
		  font-size: 1.6em;
		  line-height: 1.8em;
		  margin-bottom: 24px;
		}

		.projectScreenshot {
			align-self: flex-start;
		}
	}
</style>