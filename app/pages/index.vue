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
			I'm a Software Engineer with expertise in JavaScript and Vue.js. I've worked on numerous projects,
			including front-end Vue applications, Excel add-ins, web accessibility auditing and improvements, and many more.
			I'm a quick learner, a collaborative team player, and passionate about leveraging technology to solve difficult problems.
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
						:skill-icon="skill.icon"
						:icon-collection="skill.iconCollection"
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
