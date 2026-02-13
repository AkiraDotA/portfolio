<script setup>
useSeoMeta({
	title: 'About Me',
	ogTitle: 'About Me | Zac Holly',
	ogDescription: 'Zac Holly is a Software Engineer with expertise in JavaScript and Vue.js. He is passionate about creating accessible, responsive, and performant web applications.',
	description: 'Zac Holly is a Software Engineer with expertise in JavaScript and Vue.js. He is passionate about creating accessible, responsive, and performant web applications.',
});
</script>

<template>
	<div>
		<SectionTitle>About Me</SectionTitle>

		<p class="text-body">
			I'm a Software Engineer who works across the full stack, with deep roots in the Vue ecosystem.
			With 9+ years in EdTech, I've led a ground-up Vue 3 migration, built Excel add-ins with formula validation engines,
			contributed to a large-scale PHP backend, and run multiple rounds of WCAG accessibility audits.
			I've worked on everything from frontend SPAs and Nuxt sites to Office.js add-ins, Java desktop apps, and mobile builds.
			No matter the platform, I focus on clean architecture, accessibility, and building things the right way.
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
