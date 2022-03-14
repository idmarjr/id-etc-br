<script setup lang="ts">
	import { ref } from 'vue';
	import SectionHeader from '../sectionHeader.vue';
	import ProjectItem from './ProjectItem.vue';

	const ProjectItems = ref([
		{
			id: 1,
			company: 'Booking.com',
			project: 'Partner content team (2020 - Present)',
			description: 'Partner content team work to smooth the relationship Booking.com users have with content. It means we work to improve the experience partners have when managing information about their properties as well as how guests will see this at the website. This means we work with multiple topics like photos, property facilities, content moderation among other subjects.',
			imageURL: 'src/assets/projects/booking-com-partner-content.png',
			imageDescription: 'Booking.com Facilities & Services information',
		},
		{
			id: 2,
			company: 'Booking.com',
			project: 'Web direct team (2018 - 2020)',
			description: 'WebDirect was a website content management system that integrates with Booking.com Extranet. It allowed partners to create their own customized website using information and reservation engine provided by Booking.com in a matter of minutes.',
			imageURL: 'src/assets/projects/webdirect.png',
			imageDescription: 'Web visitors page from Webdirect content management system (CMS)',
		},
		{
			id: 3,
			company: 'Booking.com',
			project: 'Availability optimisation team (2016 - 2018)',
			description: 'Availability optimization built tools that help Booking.com partners to get more from their room inventory. With focus in identify bottle necks and restrictions we built a set of tools help partners to provide relevant accommodations and improve their return over investment (ROI) on their inventory at Booking.com.',
			imageURL: 'src/assets/projects/availability-performance.png',
			imageDescription: 'Availability optimisation page at Booking.com Extranet',
		},
		{
			id: 4,
			company: 'BR Modelo Web',
			project: 'Open source (2014 - Present)',
			description: 'BR Modelo Web is a open-source web-based database modeling tool. Built with educational focus it aim to provide computer science graduates to easy way to modeling their database structure work, it got traction and today is used by more than ten thousand people per month including students and IT professionals. Working with a dedicated team of open-source contributors I use multiple hats in this project, including designer, front-end developer, QA, support and project manager.',
			imageURL: 'src/assets/projects/br-modelo-web-site.png',
			imageDescription: 'BR Modelo Web website',
		},
		{
			id: 5,
			company: 'Hotelup',
			project: 'Web based CRM software (2014 - 2016)',
			description: 'Hotelup was a software as a service (SaaS) built to help small and medium Hotels/hostels to manage their property. Offering inventory management and billing system among other features, all accessible everywhere via responsive web-based software, our small team managed to bootstrap the product from scratch in only 6 months. Operation took place for around a year before we decide to sunset the product.',
			imageURL: 'src/assets/projects/hotelup-reservations.png',
			imageDescription: 'Hotelup reservations page',
		},
		{
			id: 6,
			company: 'Aerochimps',
			project: 'Digital Agency (2012 - 2016)',
			description: 'Aerochimps was a digital agency I helped to found back in 2012. Created to help companies to build products using research and user centric design we worked for companies in multiple sectors like e-commerce, energy, financial, law and education. With a small but powerful team working remotely we helped customers across the globe, in-loco or remotely, to envision and build all kinds of digital solutions like mobile apps, websites and even embedded software.',
			imageURL: 'src/assets/projects/aerochimps.png',
			imageDescription: 'Aerochimps.com website',
		},
		{
			id: 7,
			company: 'Aurum Software',
			project: 'Astrea (2012 - 2015)',
			description: 'Astrea is a web app created by Aurum Software one of the leaders in the law tech sector in Brasil. Working as a designer and front-end developer consultant I helped the team to bootstrap the product, implementing a component based system using CSS scalable structure and bringing the original product concept to life.',
			imageURL: 'src/assets/projects/astrea.png',
			imageDescription: 'Astrea workspace',
		},
	])
</script>

<template>
	<section id="work">
		<div class="wrapper">
			<SectionHeader title="Work" />
			<ul>
				<ProjectItem
					v-for="item in ProjectItems"
					:key="item.id"
					:company="item.company"
					:project="item.project"
					:description="item.description"
					:image-description="item.imageDescription"
					:image-url="item.imageURL"
				/>
			</ul>
		</div>
	</section>
</template>

<style lang="scss" scoped>

</style>