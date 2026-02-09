<script setup>
useSeoMeta({
	title: 'Projects',
	ogTitle: 'Projects | Zac Holly',
	ogDescription: 'Zac Holly\'s projects include Vue 2 & 3 applications, Excel add-ins, and more. View his full list of projects here.',
	description: 'Zac Holly\'s projects include Vue 2 & 3 applications, Excel add-ins, and more. View his full list of projects here.',
});

const relevantSkills = computed(() => {
	const relevantSkills = [];
	PROJECT_CATEGORIES.forEach((category) => {
		category.projects.forEach((project) => {
			project.skills.forEach((skill) => {
				if (!relevantSkills.includes(skill)) {
					relevantSkills.push(skill);
				}
			});
		});
	});

	return relevantSkills;
});

const selectedSkills = ref([]);
const filteredProjects = computed(() => {
	if (selectedSkills.value.length === 0) {
		return PROJECT_CATEGORIES;
	}

	const filteredProjects = [];
	PROJECT_CATEGORIES.forEach((category) => {
		const projects = category.projects.filter(project => project.skills.some(skill => selectedSkills.value.includes(skill.label)));

		if (projects.length > 0) {
			filteredProjects.push({
				...category,
				projects,
			});
		}
	});

	return filteredProjects;
});
</script>

<template>
	<div>
		<SectionTitle>Projects</SectionTitle>

		<USelectMenu
			v-model="selectedSkills"
			:items="relevantSkills"
			value-key="label"
			searchable
			multiple
			clear
			placeholder="Filter projects by skills"
			size="lg"
			icon="i-mdi-filter-outline"
			class="w-full"
		>
			<template #label>
				<span
					v-if="selectedSkills.length"
					class="truncate"
				>({{ selectedSkills.length }}) {{ selectedSkills.join(', ') }}</span>
			</template>
			<template #item-leading="{ item: skill }">
				<UIcon
					:name="`i-${skill.iconCollection ?? 'simple-icons'}-${skill.icon}`"
					class="text-accent w-5 h-5 my-1 me-2"
				/>
			</template>
		</USelectMenu>
		<ProjectGrid
			v-for="(projectCategory, gridIndex) in filteredProjects"
			:key="gridIndex"
			:project-category="projectCategory"
		>
			<ProjectCard
				v-for="(project, cardIndex) in projectCategory.projects"
				:key="cardIndex"
				:project="project"
			/>
		</ProjectGrid>
	</div>
</template>
