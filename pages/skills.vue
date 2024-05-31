<script setup>
const skillCategories = [
	{
		category: 'Frontend',
		skills: [
			{ label: 'HTML', icon: 'html5' },
			{ label: 'CSS', icon: 'css3' },
			{ label: 'SCSS', icon: 'sass' },
			{ label: 'JavaScript', icon: 'javascript' },
			{ label: 'TypeScript', icon: 'typescript' },
			{ label: 'Vue 2 & 3', icon: 'vuedotjs' },
			{ label: 'Nuxt 3', icon: 'nuxtdotjs' },
			{ label: 'jQuery', icon: 'jquery' },
			{ label: 'Bootstrap', icon: 'bootstrap' },
			{ label: 'Tailwind CSS', icon: 'tailwindcss' },
		],
	},
	{
		category: 'Backend',
		skills: [
			{ label: 'Node.js', icon: 'nodedotjs' },
			{ label: 'Express', icon: 'express' },
			{ label: 'PHP', icon: 'php' },
			{ label: 'CodeIgniter', icon: 'codeigniter' },
			{ label: 'Java', icon: 'language-java', iconCollection: 'mdi' },
			{ label: 'Mocha', icon: 'mocha' },
			{ label: 'Chai', icon: 'chai' },
		],
	},
	{
		category: 'Databases',
		skills: [
			{ label: 'MySQL', icon: 'mysql' },
		],
	},
	{
		category: 'Additional Technologies',
		skills: [
			{ label: 'Office.js', icon: 'office-365', iconCollection: 'hugeicons' },
			{ label: 'JavaFX', icon: 'java', iconCollection: 'hugeicons' },
		],
	},
	{
		category: 'IDEs and Tools',
		skills: [
			{ label: 'JetBrains IDEs', icon: 'jetbrains' },
			{ label: 'Eclipse', icon: 'eclipseide' },
			{ label: 'Git', icon: 'git' },
			{ label: 'GitHub', icon: 'github' },
			{ label: 'AWS EC2 & S3', icon: 'amazonaws' },
			{ label: 'Postman', icon: 'postman' },
			{ label: 'Datadog', icon: 'datadog' },
		],
	},
];
</script>

<template>
  <div>
    <SectionTitle>Skills</SectionTitle>

    <SkillGrid
      v-for="(skillCategory, gridIndex) in skillCategories"
      :key="gridIndex"
      :skill-category="skillCategory"
    >
      <SkillCard
        v-for="(skill, cardIndex) in skillCategory.skills"
        :key="cardIndex"
        :skill-icon="skill.icon"
        :icon-collection="skill.iconCollection"
      >
        {{ skill.label }}
      </SkillCard>
    </SkillGrid>
  </div>
</template>
