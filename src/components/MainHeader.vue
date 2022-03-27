<script setup lang="ts">

</script>

<template>
	<header class="mainHeader">
		<div class="wrapper">
			<h1 class="vhide">Idmar Ramos Juniuor - Product designer and frontend developer</h1>
			<picture class="profilePicture">
				<img
					src="../assets/id-tulip-fields.png"
					alt="Idmar picture"
				/>
			</picture>
			<nav class="mainNav">
				<ul>
					<li><a href="#about">About</a></li>
					<li><a href="#work">Work</a></li>
					<li><a href="#social">Social</a></li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<style lang="scss" scoped>
	.mainHeader {
		padding-top: 64px;
	}

	.mainHeader .wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.profilePicture {
		max-width: 82px;
		max-height: 82px;
		border-radius: 100%;
		overflow: hidden;
		margin-bottom: 16px;
	}

	.mainNav {
		width: 100%;
		padding: 8px;
		border: 1px solid var(--primary-color);
		margin-bottom: 12px;
	}

	.mainNav ul {
		display: flex;
		flex-direction: row;
		justify-content: center;
		width: 100%;
	}

	.mainNav li a {
		display: block;
		padding: 6px;
		margin: 0 6px;
		font-size: 1.8em;
		color: var(--primary-color);
	}
</style>