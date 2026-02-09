<script setup>
useSeoMeta({
	title: 'Skills',
	ogTitle: 'Skills | Zac Holly',
	ogDescription: 'Zac Holly\'s skills include JavaScript, Vue.js, Nuxt 3, and more. View his full list of skills here.',
	description: 'Zac Holly\'s skills include JavaScript, Vue.js, Nuxt 3, and more. View his full list of skills here.',
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
