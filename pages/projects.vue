<script setup>

</script>

<template>
  <div>
    <SectionTitle>Projects</SectionTitle>

    <ProjectGrid
      v-for="(projectCategory, gridIndex) in PROJECT_CATEGORIES"
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
