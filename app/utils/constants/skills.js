export const SKILLS = {
	html: { label: 'HTML', icon: 'html5', category: 'Frontend' },
	css: { label: 'CSS', icon: 'css3', category: 'Frontend' },
	scss: { label: 'SCSS', icon: 'sass', category: 'Frontend' },
	javascript: { label: 'JavaScript', icon: 'javascript', category: 'Frontend' },
	typescript: { label: 'TypeScript', icon: 'typescript', category: 'Frontend' },
	vue: { label: 'Vue 2 & 3', icon: 'vuedotjs', category: 'Frontend' },
	nuxt: { label: 'Nuxt 3', icon: 'nuxtdotjs', category: 'Frontend' },
	jquery: { label: 'jQuery', icon: 'jquery', category: 'Frontend' },
	officejs: { label: 'Office.js', icon: 'office-365', iconCollection: 'hugeicons', category: 'Frontend' },
	javafx: { label: 'JavaFX', icon: 'java', iconCollection: 'hugeicons', category: 'Frontend' },
	bootstrap: { label: 'Bootstrap', icon: 'bootstrap', category: 'Frontend' },
	tailwind: { label: 'Tailwind CSS', icon: 'tailwindcss', category: 'Frontend' },
	node: { label: 'Node.js', icon: 'nodedotjs', category: 'Backend' },
	express: { label: 'Express', icon: 'express', category: 'Backend' },
	php: { label: 'PHP', icon: 'php', category: 'Backend' },
	codeigniter: { label: 'CodeIgniter', icon: 'codeigniter', category: 'Backend' },
	java: { label: 'Java', icon: 'language-java', iconCollection: 'mdi', category: 'Backend' },
	mocha: { label: 'Mocha', icon: 'mocha', category: 'Backend' },
	chai: { label: 'Chai', icon: 'chai', category: 'Backend' },
	mysql: { label: 'MySQL', icon: 'mysql', category: 'Databases' },
	jetbrains: { label: 'JetBrains IDEs', icon: 'jetbrains', category: 'IDEs and Tools' },
	eclipse: { label: 'Eclipse', icon: 'eclipseide', category: 'IDEs and Tools' },
	git: { label: 'Git', icon: 'git', category: 'IDEs and Tools' },
	github: { label: 'GitHub', icon: 'github', category: 'IDEs and Tools' },
	aws: { label: 'AWS EC2 & S3', icon: 'amazonaws', category: 'IDEs and Tools' },
	postman: { label: 'Postman', icon: 'postman', category: 'IDEs and Tools' },
	datadog: { label: 'Datadog', icon: 'datadog', category: 'IDEs and Tools' },
	vue2: { label: 'Vue 2', icon: 'vuedotjs', category: 'Frontend', hidden: true },
	vue3: { label: 'Vue 3', icon: 'vuedotjs', category: 'Frontend', hidden: true },
};

const SKILL_CATEGORY_ORDER = ['Frontend', 'Backend', 'Databases', 'IDEs and Tools'];

export const SKILL_CATEGORIES = SKILL_CATEGORY_ORDER.map(categoryName => ({
	category: categoryName,
	skills: Object.fromEntries(
		Object.entries(SKILLS)
			.filter(([, skill]) => skill.category === categoryName && !skill.hidden),
	),
}));

export const MAIN_SKILLS = [SKILLS.javascript, SKILLS.vue, SKILLS.nuxt, SKILLS.php, SKILLS.codeigniter, SKILLS.mysql];
