<script setup>
useSeoMeta({
	title: 'About Me',
	ogTitle: 'About Me | Zac Holly',
	ogDescription: 'Software Engineer with 9+ years in EdTech. Vue 3 migration lead, Excel add-in developer, and accessibility advocate delivering measurable performance gains.',
	description: 'Software Engineer with 9+ years in EdTech. Vue 3 migration lead, Excel add-in developer, and accessibility advocate delivering measurable performance gains.',
});
</script>

<template>
	<div>
		<SectionTitle>About Me</SectionTitle>

		<p class="text-body">
			I'm a Software Engineer with 9+ years in EdTech and deep roots in the Vue ecosystem.
			I led a ground-up Vue 3 migration spanning 30+ views and 130+ components, cutting bundle size by 63% and improving page loads by over 50%.
			I've built Excel add-ins with formula validation engines, contributed to a large-scale PHP backend serving tens of thousands of users, and driven three rounds of WCAG 2.1 AA accessibility audits.
			From frontend SPAs and Nuxt sites to Office.js add-ins, Java desktop apps, and mobile builds, I focus on clean architecture, measurable performance, and accessibility.
		</p>

		<SubsectionTitle>
			Main Skills
		</SubsectionTitle>
		<UCard class="card-bordered">
			<div class="flex max-md:flex-col">
				<div class="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 bg-gradient w-full">
					<SkillCard
						v-for="(skill, index) of MAIN_SKILLS"
						:key="index"
						:skill="skill"
					>
						{{ skill.label }}
					</SkillCard>
				</div>
				<NavigationButton to="/skills" class="btn-view-all">
					<span class="flex">
						All Skills
						<UIcon
							name="i-mdi-arrow-right"
							class="ms-1 my-auto"
						/>
					</span>
				</NavigationButton>
			</div>
		</UCard>

		<SubsectionTitle>
			Highlighted Projects
		</SubsectionTitle>
		<UCard class="card-bordered">
			<div class="flex max-md:flex-col">
				<div class="grid xl:grid-cols-2 grid-cols-1 gap-4 bg-gradient w-full">
					<ProjectCard
						v-for="(project, index) of HIGHLIGHTED_PROJECTS"
						:key="index"
						:project="project"
						minimal
					/>
				</div>
				<NavigationButton to="/projects" class="btn-view-all">
					<span class="flex">
						All Projects
						<UIcon
							name="i-mdi-arrow-right"
							class="ms-1 my-auto"
						/>
					</span>
				</NavigationButton>
			</div>
		</UCard>
	</div>
</template>
