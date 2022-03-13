/<script setup lang="ts">

</script>

<template>
	<li class="project">
		<header class="projectHeader">
			<h3>Company Name</h3>
			<p>Project Name</p>
		</header>
		<div class="projectDescription">
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, omnis. Doloribus expedita accusamus, quas sunt fugit. Elit. Modi, omnisexpedita accusamus, quas. Doloribus expedita</p>
		</div>
		<picture class="projectScreenshot">
			<img
				src="../../assets/projects/br-modelo-site.png"
				alt="Project image description"
			/>
		</picture>
	</li>
</template>

<style scoped>
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