<script setup>
useHead({
	title: 'Projects',
});

const relevantSkills = computed(() => {
	const relevantSkills = [];
	PROJECT_CATEGORIES.forEach(category => {
		category.projects.forEach(project => {
			project.skills.forEach(skill => {
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
	PROJECT_CATEGORIES.forEach(category => {
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

const clearSelectedSkills = () => {
	selectedSkills.value = [];
};
</script>

<template>
  <div>
    <SectionTitle>Projects</SectionTitle>

    <div class="flex justify-end">
      <USelectMenu
        v-model="selectedSkills"
        :options="relevantSkills"
        value-attribute="label"
        multiple
        searchable
        searchable-placeholder="Search a skill..."
        clear-search-on-close
        placeholder="Filter projects by skills"
        size="lg"
        icon="i-mdi-filter-outline"
        class="w-full"
      >
        <template #label>
          <span v-if="selectedSkills.length" class="truncate">({{ selectedSkills.length }}) {{ selectedSkills.join(', ') }}</span>
        </template>
        <template #option="{ option: skill }">
          <UIcon
            dynamic
            :name="`i-${skill.iconCollection ?? 'simple-icons'}-${skill.icon}`"
            class="text-darkred w-5 h-5 my-1 me-2"
          />
          <span class="truncate">{{ skill.label }}</span>
        </template>
      </USelectMenu>
      <UButton
        v-if="selectedSkills.length"
        icon="i-mdi-close"
        color="white"
        class="px-2"
        title="Clear selected skills"
        @click="clearSelectedSkills"
      />
    </div>
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
