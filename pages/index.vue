<script setup>
useHead({
	title: 'About Me',
});
</script>

<template>
  <div>
    <SectionTitle>About Me</SectionTitle>

    <p>
      Software Engineer with expertise in JavaScript and Vue.js. Worked on projects including Excel add-ins,
      numerous front-end Vue applications, and web accessibility auditing and improvements. Quick learner,
      collaborative team player, and passionate about leveraging technology to solve difficult problems.
    </p>

    <SubsectionTitle>
      Main Skills
    </SubsectionTitle>
    <UCard
      :ui="{ base: 'h-full border-gray-800 border-2', background: 'to-gray-900', ring: 'ring-0' }"
    >
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
    <UCard
      :ui="{ base: 'h-full border-gray-800 border-2', background: 'to-gray-900', ring: 'ring-0' }"
    >
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
