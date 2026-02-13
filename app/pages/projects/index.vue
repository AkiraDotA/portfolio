<script setup>
useSeoMeta({
	title: 'Projects',
	ogTitle: 'Projects | Zac Holly',
	ogDescription: 'Zac Holly\'s projects include Vue 2 & 3 applications, Excel add-ins, and more. View his full list of projects here.',
	description: 'Zac Holly\'s projects include Vue 2 & 3 applications, Excel add-ins, and more. View his full list of projects here.',
});

const route = useRoute();
const router = useRouter();

const allSkills = Object.values(SKILLS).filter(skill => !skill.hidden && !skill.filterHidden);

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

const otherSkills = computed(() => allSkills.filter(skill => !relevantSkills.value.includes(skill)));

const filterItems = computed(() => {
	const groups = [
		[{ type: 'label', label: 'Listed in projects' }, ...relevantSkills.value],
	];
	if (otherSkills.value.length) {
		groups.push([{ type: 'label', label: 'Other skills' }, ...otherSkills.value]);
	}
	return groups;
});

// Two-way sync between the URL query param (?skills=vue3,nuxt) and the select menu
const selectedSkills = computed({
	get() {
		const param = route.query.skills;
		if (!param) return [];
		return param.split(',')
			.map(key => Object.values(SKILLS).find(skill => skill.key === key))
			.filter(Boolean);
	},
	set(skills) {
		const query = { ...route.query };
		if (skills.length === 0) {
			delete query.skills;
		}
		else {
			query.skills = skills.map(skill => skill.key).join(',');
		}
		router.replace({ query });
	},
});

const filteredProjects = computed(() => {
	// Show all projects when no filter is active; the query param check
	// catches invalid keys so the empty state still shows for bad URLs
	if (selectedSkills.value.length === 0 && !route.query.skills) {
		return PROJECT_CATEGORIES;
	}

	const selectedKeys = selectedSkills.value.map(skill => skill.key);
	const filteredProjects = [];
	PROJECT_CATEGORIES.forEach((category) => {
		const projects = category.projects.filter(project => project.skills.some(skill => selectedKeys.includes(skill.key)));

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
			:items="filterItems"
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
				>({{ selectedSkills.length }}) {{ selectedSkills.map(skill => skill.label).join(', ') }}</span>
			</template>
			<template #item-leading="{ item: skill }">
				<UIcon
					:name="`i-${skill.iconCollection ?? 'simple-icons'}-${skill.icon}`"
					class="text-accent w-5 h-5 my-1 me-2"
				/>
			</template>
		</USelectMenu>
		<p
			v-if="(selectedSkills.length || route.query.skills) && !filteredProjects.length"
			class="text-center text-dimmed py-12"
		>
			No listed projects use the selected skills yet.
		</p>
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
