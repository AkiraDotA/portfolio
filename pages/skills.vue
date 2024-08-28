<script setup>
useHead({
	title: 'Skills',
});
</script>

<template>
  <div>
    <SectionTitle>Skills</SectionTitle>

    <SkillGrid
      v-for="(skillCategory, gridIndex) in SKILL_CATEGORIES"
      :key="gridIndex"
      :skill-category="skillCategory"
    >
      <SkillCard
        v-for="(skill, key) in skillCategory.skills"
        :key="key"
        :skill-icon="skill.icon"
        :icon-collection="skill.iconCollection"
      >
        {{ skill.label }}
      </SkillCard>
    </SkillGrid>
  </div>
</template>
