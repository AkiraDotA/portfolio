export const NAVIGATION = [
	{
		label: 'Home',
		route: '/',
	},
	{
		label: 'Skills',
		route: '/skills',
	},
	{
		label: 'Projects',
		route: '/projects',
	},
	// { Disabled for now
	// 	label: 'Resume',
	// 	route: '/resume',
	// },
	{
		label: 'Contact',
		route: '/contact',
	},
];

export const SKILL_CATEGORIES = [
	{
		category: 'Frontend',
		skills: {
			html: { label: 'HTML', icon: 'html5' },
			css: { label: 'CSS', icon: 'css3' },
			scss: { label: 'SCSS', icon: 'sass' },
			javascript: { label: 'JavaScript', icon: 'javascript' },
			typescript: { label: 'TypeScript', icon: 'typescript' },
			vue: { label: 'Vue 2 & 3', icon: 'vuedotjs' },
			nuxt: { label: 'Nuxt 3', icon: 'nuxtdotjs' },
			jquery: { label: 'jQuery', icon: 'jquery' },
			bootstrap: { label: 'Bootstrap', icon: 'bootstrap' },
			tailwind: { label: 'Tailwind CSS', icon: 'tailwindcss' },
		},
	},
	{
		category: 'Backend',
		skills: {
			node: { label: 'Node.js', icon: 'nodedotjs' },
			express: { label: 'Express', icon: 'express' },
			php: { label: 'PHP', icon: 'php' },
			codeigniter: { label: 'CodeIgniter', icon: 'codeigniter' },
			java: { label: 'Java', icon: 'language-java', iconCollection: 'mdi' },
			mocha: { label: 'Mocha', icon: 'mocha' },
			chai: { label: 'Chai', icon: 'chai' },
		},
	},
	{
		category: 'Databases',
		skills: {
			mysql: { label: 'MySQL', icon: 'mysql' },
		},
	},
	{
		category: 'Additional Technologies',
		skills: {
			officejs: { label: 'Office.js', icon: 'office-365', iconCollection: 'hugeicons' },
			javafx: { label: 'JavaFX', icon: 'java', iconCollection: 'hugeicons' },
		},
	},
	{
		category: 'IDEs and Tools',
		skills: {
			jetbrains: { label: 'JetBrains IDEs', icon: 'jetbrains' },
			eclipse: { label: 'Eclipse', icon: 'eclipseide' },
			git: { label: 'Git', icon: 'git' },
			github: { label: 'GitHub', icon: 'github' },
			aws: { label: 'AWS EC2 & S3', icon: 'amazonaws' },
			postman: { label: 'Postman', icon: 'postman' },
			datadog: { label: 'Datadog', icon: 'datadog' },
		},
	},
];

const [frontend, backend, databases, additional] = SKILL_CATEGORIES;
const vue2Skill = { ...frontend.skills.vue, label: 'Vue 2' };
const vue3Skill = { ...frontend.skills.vue, label: 'Vue 3' };
export const PROJECT_CATEGORIES = [
	{
		category: 'Work Projects',
		projects: [
			{
				title: 'Marketing Site',
				summary: 'Revamping a legacy PHP marketing site with an in-progress Nuxt 3 project. Adapted and customized a Nuxt 3 template to meet specific requirements, developing pages including login, catalog, book, cart, checkout, resource request forms, policy pages, and enrollment paths.',
				skills: [frontend.skills.javascript, vue3Skill, frontend.skills.nuxt, frontend.skills.scss, frontend.skills.bootstrap],
			},
			{
				title: 'Company & Product Marketing Landers',
				summary: 'Implemented modern marketing landers from initial wireframes, showcasing the company and primary product with updated visuals. The landers include details such as user statistics, included features, and user quotes.',
				skills: [frontend.skills.javascript, vue3Skill, frontend.skills.nuxt, frontend.skills.scss, frontend.skills.bootstrap],
			},
			{
				title: 'Question Builder Excel Add-in',
				summary: 'Created an <strong>accounting question builder Excel add-in</strong> that granted the ability to tag and format Excel worksheets in such a way that would allow them to be parsed and converted into HTML output that could be used in the creation of Moodle cloze questions. Also developed new functionality in the question builder to allow the possibility to convert the entire Excel workbook into an Excel file format to be used in tandem with the <strong>accounting question taker Excel add-in</strong>.',
				skills: [frontend.skills.javascript, additional.skills.officejs],
			},
			{
				title: 'Question Taking Excel Add-in',
				summary: 'Created an <strong>accounting question taker Excel add-in</strong> that allowed users to work on accounting questions Excel files created by the <strong>account question builder Excel add-in</strong>. Answers entered by a user would get parsed and checked by an advanced algorithm to properly account for all possible and equivalent answers to ensure users would be able to take advantage of Excel’s formula feature for their answers.',
				skills: [frontend.skills.javascript, additional.skills.officejs],
			},
			{
				title: 'Course Widget Grid',
				summary: 'Developed a course widget grid from an initial wireframe, serving as a dynamic course home page for students and instructors. Features include movable and resizable widgets that display course information such as announcements, upcoming assignments, grades, class averages, and the course calendar.',
				skills: [frontend.skills.javascript, vue2Skill, frontend.skills.bootstrap],
			},
			{
				title: 'Ticket Attachment Component',
				summary: 'Implemented support for ticket attachments by designing and developing stylized and intuitive Vue components that deliver detailed attachment information, integrated with Freshdesk’s API through a custom REST API wrapper.',
				skills: [frontend.skills.javascript, vue2Skill, frontend.skills.bootstrap],
			},
			{
				title: 'Dynamic Ticket Form',
				summary: 'Designed and developed a dynamic ticket form that adjusts fields based on user input throughout the form, enhancing the overall user experience for ticket submissions.',
				skills: [frontend.skills.javascript, vue2Skill, frontend.skills.bootstrap],
			},
			{
				title: 'Application Guided Tour',
				summary: 'Designed and developed custom Vue implementation of a guided tour, powered by shepherd.js that allowed developers to easily create guided tour steps for an interactive tour.',
				skills: [frontend.skills.javascript, vue2Skill, frontend.skills.bootstrap],
			},
			{
				title: 'Test Bank Converter',
				summary: 'Created and maintained a robust desktop application designed to convert imported test banks into an intermediate format for cloud storage and seamless export to various file formats as needed.',
				skills: [backend.skills.java, additional.skills.javafx],
			},
		],
	},
	{
		category: 'Personal Projects',
		projects: [
			{
				title: 'Portfolio Website',
				summary: 'Created this personal portfolio website to showcase my software engineering skills and projects, highlighting my work over the years. This project was also my first experience using Tailwind CSS, which I primarily used for all styling.',
				skills: [frontend.skills.javascript, vue3Skill, frontend.skills.nuxt, frontend.skills.tailwind],
			},
			{
				title: 'Timesheet Generator',
				summary: 'Developed a desktop application to generate timesheet text output from defined work schedules, enabling the easy creation of formatted Excel timesheets for accurate hour tracking during each pay period.',
				skills: [backend.skills.java, additional.skills.javafx],
			},
			{
				title: 'Diploma File Formatter',
				summary: 'Developed a desktop application for importing unformatted Word test bank documents, formatting them, and exporting to RTF files that match the standard Diploma test bank file format for test bank conversion.',
				skills: [backend.skills.java, additional.skills.javafx],
			},
		],
	},
	{
		category: 'Academic Projects',
		projects: [
			{
				title: 'Restroom Reviewer',
				summary: 'Developed a web app simplifying the search for quality public restrooms via Google Maps API. Key features include user authentication, restroom pinning, review submission, and admin tools for user and data management, providing a user-friendly platform for locating and reviewing public restrooms.',
				skills: [frontend.skills.javascript, vue3Skill, backend.skills.node, backend.skills.express, databases.skills.mysql],
			},
			{
				title: 'Lost and Found System',
				summary: 'Created a lost and found system for campus public safety, enabling students and faculty to view and claim lost items. Features include admin functionality for adding, deleting, and reporting items, and a user interface allowing item categorization and detailed claim submissions.',
				skills: [frontend.skills.javascript, frontend.skills.jquery, backend.skills.node, backend.skills.express, databases.skills.mysql],
			},
			{
				title: 'Incident Management System',
				summary: 'Developed an incident management system for documenting and categorizing safety incidents, triggering alerts for review meetings, and generating comprehensive PDF incident history reports.',
				skills: [frontend.skills.javascript, vue3Skill, backend.skills.node, backend.skills.express, databases.skills.mysql],
			},
			{
				title: 'Volunteer Database System',
				summary: 'Designed and implemented a database system to streamline volunteer management processes including registration, tracking volunteer hours, and generating detailed reports for analysis.',
				skills: [backend.skills.java, additional.skills.javafx, databases.skills.mysql],
			},
			{
				title: 'Farkle Web Game',
				summary: 'Built a web-based version of the dice game, Farkle, supporting up to four local players, featuring a user-friendly interface, score tracking, and real-time game updates.',
				skills: [frontend.skills.html, frontend.skills.css, frontend.skills.javascript, frontend.skills.jquery],
			},
		],
	},
];
