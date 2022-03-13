<script setup lang="ts">
	import { ref } from 'vue';
	import SectionHeader from '../sectionHeader.vue';
	import ProjectItem from './ProjectItem.vue';

	const ProjectItems = ref([
		{
			id: 1,
			company: 'Booking.com',
			project: 'Partner content team (2020 - Present)',
			description: 'Partner content team work to improvethe relationship between our partners and  users with content. This means I work with multiple topoics like property photos, property facilities among other subjects.',
			imageURL: 'src/assets/projects/booking-com-partner-content.png',
			imageDescription: 'Booking.com Facilities & Services information',
		},
		{
			id: 2,
			company: 'Booking.com',
			project: 'Web direct team (2018 - 2020)',
			description: 'WebDirect was a content management system that integrate with Booking.com, alowing partners to create their own website in a matter of minutes with content and booking engine ready to go.',
			imageURL: 'src/assets/projects/webdirect.png',
			imageDescription: 'Web visitors page from Webdirect content management system (CMS)',
		},
		{
			id: 3,
			company: 'Booking.com',
			project: 'Availability optimisation team (2016 - 2018)',
			description: 'With focus in help partners to identify valuable and blocked availability dates the team built a series of tools and optimizations that identify and informa partners of missing business oportunities.',
			imageURL: 'src/assets/projects/availability-performance.png',
			imageDescription: 'Availability optimisation page at Booking.com Extranet',
		},
		{
			id: 4,
			company: 'BR Modelo Web',
			project: 'Open source (2014 - Present)',
			description: 'A open source web based tool to model databases. BR Modelo Web allow their uses to create conceptual and logic models as well as export SQL code ready to use, all free and with educational focus.',
			imageURL: 'src/assets/projects/br-modelo-web-site.png',
			imageDescription: 'BR Modelo Web website',
		},
		{
			id: 5,
			company: 'Hotelup',
			project: 'Web based CRM software (2015 - 2016)',
			description: 'Hotelup was a responsive web based software that makes things simple to owners, managers and staff of Hotels around the world with a easy-to-use booking system that runs from the cloud.',
			imageURL: 'src/assets/projects/hotelup-reservations.png',
			imageDescription: 'Hotelup reservations page',
		},
		{
			id: 6,
			company: 'Aerochimps',
			project: 'Digital Agency (2012 - 2016)',
			description: 'Aerochimps was a digital agency with focus in system development. With a small but powerful team we built solutions to a variety of industries like, financial, cloud computing, advocacy and energy.',
			imageURL: 'src/assets/projects/aerochimps.png',
			imageDescription: 'Aerochimps.com website',
		},
		{
			id: 7,
			company: 'Aurum Software',
			project: 'Astrea (2012 - 2015)',
			description: 'Astrea is a legal focused CRM tool that help lawyers and law firms to improve their efficiency offering a set of tools and automations.',
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