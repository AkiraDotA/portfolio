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

		<p>
			I'm a Software Engineer with expertise in JavaScript and Vue.js. I've worked on numerous projects,
			including front-end Vue applications, Excel add-ins, web accessibility auditing and improvements, and many more.
			I'm a quick learner, a collaborative team player, and passionate about leveraging technology to solve difficult problems.
		</p>

		<SubsectionTitle>
			Main Skills
		</SubsectionTitle>
		<UCard class="h-full border-neutral-800 border-2 bg-neutral-900 ring-0">
			<div class="flex max-md:flex-col">
				<div class="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 bg-gradient w-full">
					<SkillCard
						v-for="(skill, index) of MAIN_SKILLS"
						:key="index"
						:skill-icon="skill.icon"
						:icon-collection="skill.iconCollection"
					>
						{{ skill.label }}
					</SkillCard>
				</div>
				<NavigationButton to="/skills" class="flex justify-center items-center bg-darkred-300 !text-base md:!w-48 h-12 md:ms-8 md:me-2 max-md:mt-6 my-auto">
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
		<UCard class="h-full border-neutral-800 border-2 bg-neutral-900 ring-0">
			<div class="flex max-md:flex-col">
				<div class="grid xl:grid-cols-2 grid-cols-1 gap-4 bg-gradient w-full">
					<ProjectCard
						v-for="(project, index) of HIGHLIGHTED_PROJECTS"
						:key="index"
						:project="project"
						minimal
					/>
				</div>
				<NavigationButton to="/projects" class="flex justify-center items-center bg-darkred-300 !text-base md:!w-48 h-12 md:ms-8 md:me-2 max-md:mt-6 my-auto">
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
