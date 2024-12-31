<script setup lang="ts">
	import { ref } from 'vue';
	import SectionHeader from '../SectionHeader.vue';
	import ProjectItem from './ProjectItem.vue';

	const importImage = (imageName: string) => new URL(`../../assets/projects/${imageName}`, import.meta.url).href

	const ProjectItems = ref([
	{
			id: 1,
			company: 'Booking.com',
			project: 'Location experience (2023 - 2024)',
			description: 'Location team is responsible for overseeing the Booking.com maps experience, serving as a cross-functional unit that collaborates with various teams across the company. By partnering with teams from multiple areas of the business, we help design, develop and enhance maps and location-based features to deliver seamless and impactful user experiences. Our primary objective is to continuously improve the way users interact with maps, ensuring that they have access to relevant and timely information that enhances their overall experience with the platform.',
			imageURL: importImage('booking-com-search-result-map.png'),
			imageDescription: 'Booking.com Maps preview',
		},
		{
			id: 2,
			company: 'Booking.com',
			project: 'Partner content (2020 - 2023)',
			description: 'Partner content team works to smooth the relationship Booking.com users have with content. It means we work to improve partners experience when managing  their property information as well as how guests will consume content when looking for a place to stay. This means we work with multiple topics like photos management, property facilities and content moderation among other subjects. As a UX designer I work close to product managers prioritizing demands, UX Researchers to prepare and run qualitative research and with the tech team to create and ship product improvements using A/B testing.',
			imageURL: importImage('booking-com-partner-content.png'),
			imageDescription: 'Booking.com Facilities & Services information',
		},
		{
			id: 3,
			company: 'Booking.com',
			project: 'Web direct (2018 - 2020)',
			description: 'WebDirect was a website content management system that integrated with Booking.com administration tool. It allow partners to create their own customized website using information and reservation engine provided by Booking.com without  deep technical knowledge. Operating as a startup inside the company, our team had full autonomy to shape and develop the product. As a UX designer working in a startup like environment I was responsible for the entire user experience cycle including research, user interviews, UX/UI design and in multiple cases, front end development.',
			imageURL: importImage('webdirect.png'),
			imageDescription: 'Web visitors page from Webdirect content management system (CMS)',
		},
		{
			id: 4,
			company: 'Booking.com',
			project: 'Availability optimisation (2016 - 2018)',
			description: 'At availability performance team I helped to define and create multiple tools and features to Booking.com Extranet, the tool hoteliers use to manage their properties. The team main focus was to identify blockers and bottle necks that could impact room availability and revenue, helping users to act to improve performance. As a UX designer my contributions were around internal research, ideation, UX and UI design as well as, implement, run and analyze A/B tests.',
			imageURL: importImage('availability-performance.png'),
			imageDescription: 'Availability optimisation page at Booking.com Extranet',
		},
		{
			id: 5,
			company: 'BR Modelo Web',
			project: 'Open source (2014 - Present)',
			description: 'BR Modelo Web (BRMW) is an open source project I started to contribute early on helping with UX and UI Design as well as Front End code, especially CSS. With educational purpose, BRMW is a tool to create, in a visual way, database models and base on it generate SQL code. With more than 10,000 monthly users it\'s  widely spread throughout the curriculum of multiple Brazilian universities. I\'m one of the official maintainers, contribution with project management, research,  UX/UI design, product vision among other administrative duties.',
			imageURL: importImage('br-modelo-web-site.png'),
			imageDescription: 'BR Modelo Web website',
		},
		{
			id: 6,
			company: 'Hotelup',
			project: 'Hospitality Software (2014 - 2016)',
			description: 'Hotelup was my second endeavor as entrepreneur, now building a SaaS based product. After explore multiple markets to build solutions, our team identified a lack of affordable solutions for small and medium hoteliers. This lead us to bootstrap Hotelup, a mobile first web based CRM for the hospitality industry. With a small team we spent 6 months from kickstart to first  public release. As a classic startup I accumulated multiple functions including UX designer, front end developer, customer support and sales representative.',
			imageURL: importImage('hotelup-reservations.png'),
			imageDescription: 'Hotelup reservations page',
		},
		{
			id: 7,
			company: 'Aerochimps',
			project: 'Digital Agency (2012 - 2016)',
			description: 'Aerochimps was my first endeavor as entrepreneur. Founded in 2012 by me and two other partners, our focus was to help companies to build digital products, from websites to embedded software. Our approach were shaped based on clients necessities, objectives and budget, always using user centric design and qualitative research. At Aerochimps I used many hats that range from  researcher, UX/UI designer, front end developer, product owner and agile coach in projects to a variety of industries like energy, law, finance, health and cloud computing.',
			imageURL: importImage('aerochimps.png'),
			imageDescription: 'Aerochimps.com website',
		},
		{
			id: 8,
			company: 'Aurum Software',
			project: 'Astrea (2012 - 2015)',
			description: 'I joined Astrea team as a consultant earlier in the product conception with focus to help the team on implementation fidelity. At the time they were on early stages of work with web technologies and having a hard time to reach fidelity between UI prototypes and development environment. The original work plan was to spend 4 weeks helping the team to identify bottlenecks and improvement areas. At the end I spend 3 years and helped to structure the base to what later became Astrea Design language and components library.',
			imageURL: importImage('astrea.png'),
			imageDescription: 'Astrea workspace',
		},
	])
</script>

<template>
	<section
		id="work"
		data-aos="fade-down"
	>
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