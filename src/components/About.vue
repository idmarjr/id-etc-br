<script setup lang="ts">

</script>

<template>
	<section
		id="about"
		data-aos="fade-down"
	>
		<div class="wrapper">
			<header class="intro">
				<p class="higlight">Hello!</p>
				<p>I'm <strong>Idmar</strong>, a product guy with background in UX Design and Front-End development, currently based in Brazil.</p>
			</header>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.intro {
		padding: 64px 0;
		letter-spacing: 0.03em;
	}

	.intro .higlight {
		font-size: 4.2em;
		margin-bottom: 24px;
		font-weight: 300;
	}

	.intro p {
		font-size: 3.2em;
		line-height: 1.4em;
		font-weight: 100;
	}

	////////////////////////////////////////////////////
	// @media > 810px
	////////////////////////////////////////////////////
	@media (min-width: 811px) {
		.intro {
			padding-top: 48px;
			padding-bottom: 112px;
		}

		.intro .higlight {
			font-size: 6.4em;
			margin-bottom: 36px;
		}

		.intro p {
			font-size: 5.4em;
		}
	}
</style>