export const SKILLS = {
	javascript: { key: 'javascript', label: 'JavaScript', icon: 'javascript', category: 'Frontend' },
	typescript: { key: 'typescript', label: 'TypeScript', icon: 'typescript', category: 'Frontend' },
	vue: { key: 'vue', label: 'Vue 2 & 3', icon: 'vuedotjs', category: 'Frontend', filterHidden: true, filterKeys: ['vue2', 'vue3'] },
	nuxt: { key: 'nuxt', label: 'Nuxt', icon: 'nuxtdotjs', category: 'Frontend' },
	pinia: { key: 'pinia', label: 'Pinia', icon: 'pinia', category: 'Frontend' },
	zod: { key: 'zod', label: 'Zod', icon: 'zod', category: 'Frontend' },
	tailwind: { key: 'tailwind', label: 'Tailwind CSS', icon: 'tailwindcss', category: 'Frontend' },
	bootstrap: { key: 'bootstrap', label: 'Bootstrap', icon: 'bootstrap', category: 'Frontend' },
	scss: { key: 'scss', label: 'SCSS', icon: 'sass', category: 'Frontend' },
	html: { key: 'html', label: 'HTML', icon: 'html5', category: 'Frontend' },
	css: { key: 'css', label: 'CSS', icon: 'css3', category: 'Frontend' },
	jquery: { key: 'jquery', label: 'jQuery', icon: 'jquery', category: 'Frontend' },
	officejs: { key: 'officejs', label: 'Office.js', icon: 'office-365', iconCollection: 'hugeicons', category: 'Frontend' },
	javafx: { key: 'javafx', label: 'JavaFX', icon: 'java', iconCollection: 'hugeicons', category: 'Frontend' },
	node: { key: 'node', label: 'Node.js', icon: 'nodedotjs', category: 'Backend' },
	express: { key: 'express', label: 'Express', icon: 'express', category: 'Backend' },
	php: { key: 'php', label: 'PHP', icon: 'php', category: 'Backend' },
	codeigniter: { key: 'codeigniter', label: 'CodeIgniter', icon: 'codeigniter', category: 'Backend' },
	symfony: { key: 'symfony', label: 'Symfony', icon: 'symfony', category: 'Backend' },
	java: { key: 'java', label: 'Java', icon: 'language-java', iconCollection: 'mdi', category: 'Backend' },
	mocha: { key: 'mocha', label: 'Mocha', icon: 'mocha', category: 'Backend' },
	chai: { key: 'chai', label: 'Chai', icon: 'chai', category: 'Backend' },
	mysql: { key: 'mysql', label: 'MySQL', icon: 'mysql', category: 'Databases' },
	jetbrains: { key: 'jetbrains', label: 'JetBrains IDEs', icon: 'jetbrains', category: 'IDEs and Tools' },
	eclipse: { key: 'eclipse', label: 'Eclipse', icon: 'eclipseide', category: 'IDEs and Tools' },
	git: { key: 'git', label: 'Git', icon: 'git', category: 'IDEs and Tools' },
	github: { key: 'github', label: 'GitHub', icon: 'github', category: 'IDEs and Tools' },
	jira: { key: 'jira', label: 'Jira', icon: 'jira', category: 'IDEs and Tools' },
	aws: { key: 'aws', label: 'AWS', icon: 'amazonaws', category: 'IDEs and Tools' },
	postman: { key: 'postman', label: 'Postman', icon: 'postman', category: 'IDEs and Tools' },
	datadog: { key: 'datadog', label: 'Datadog', icon: 'datadog', category: 'IDEs and Tools' },
	vue2: { key: 'vue2', label: 'Vue 2', icon: 'vuedotjs', category: 'Frontend', hidden: true },
	vue3: { key: 'vue3', label: 'Vue 3', icon: 'vuedotjs', category: 'Frontend', hidden: true },
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
