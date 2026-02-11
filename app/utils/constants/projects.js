import { SKILLS } from './skills.js';

const summaryFiles = import.meta.glob('./summaries/*.md', { eager: true, query: '?raw', import: 'default' });

function parseMarkdown(md) {
	return md.trim().replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

function getSummary(id) {
	const key = `./summaries/${id}.md`;
	const raw = summaryFiles[key];
	if (!raw) throw new Error(`Summary file not found: ${id}.md`);
	return parseMarkdown(raw);
}

export const PROJECT_CATEGORIES = [
	{
		category: 'Work Projects',
		projects: [
			{
				id: 'marketing-landers',
				title: 'Company & Product Marketing Landers',
				skills: [SKILLS.javascript, SKILLS.vue3, SKILLS.nuxt, SKILLS.scss, SKILLS.bootstrap],
			},
			{
				id: 'marketing-site',
				title: 'Marketing Site',
				skills: [SKILLS.javascript, SKILLS.vue3, SKILLS.nuxt, SKILLS.scss, SKILLS.bootstrap],
			},
			{
				id: 'central-php-system',
				title: 'Central PHP System',
				skills: [SKILLS.php, SKILLS.codeigniter, SKILLS.javascript, SKILLS.jquery, SKILLS.mysql],
			},
			{
				id: 'question-builder-excel-addin',
				title: 'Question Builder Excel Add-in',
				skills: [SKILLS.javascript, SKILLS.officejs],
			},
			{
				id: 'question-taker-excel-addin',
				title: 'Question Taking Excel Add-in',
				skills: [SKILLS.javascript, SKILLS.officejs],
			},
			{
				id: 'course-widget-grid',
				title: 'Course Widget Grid',
				skills: [SKILLS.javascript, SKILLS.vue2, SKILLS.bootstrap],
			},
			{
				id: 'ticket-attachment-component',
				title: 'Ticket Attachment Component',
				skills: [SKILLS.javascript, SKILLS.vue2, SKILLS.bootstrap],
			},
			{
				id: 'dynamic-ticket-form',
				title: 'Dynamic Ticket Form',
				skills: [SKILLS.javascript, SKILLS.vue2, SKILLS.bootstrap],
			},
			{
				id: 'application-guided-tour',
				title: 'Application Guided Tour',
				skills: [SKILLS.javascript, SKILLS.vue2, SKILLS.bootstrap],
			},
			{
				id: 'test-bank-converter',
				title: 'Test Bank Converter',
				skills: [SKILLS.java, SKILLS.javafx],
			},
		],
	},
	{
		category: 'Personal Projects',
		projects: [
			{
				id: 'portfolio-website',
				title: 'Portfolio Website',
				skills: [SKILLS.javascript, SKILLS.vue3, SKILLS.nuxt, SKILLS.tailwind],
			},
			{
				id: 'timesheet-generator',
				title: 'Timesheet Generator',
				skills: [SKILLS.java, SKILLS.javafx],
			},
			{
				id: 'diploma-file-formatter',
				title: 'Diploma File Formatter',
				skills: [SKILLS.java, SKILLS.javafx],
			},
		],
	},
	{
		category: 'Academic Projects',
		projects: [
			{
				id: 'restroom-reviewer',
				title: 'Restroom Reviewer',
				skills: [SKILLS.javascript, SKILLS.vue3, SKILLS.node, SKILLS.express, SKILLS.mysql],
			},
			{
				id: 'lost-and-found-system',
				title: 'Lost and Found System',
				skills: [SKILLS.javascript, SKILLS.jquery, SKILLS.node, SKILLS.express, SKILLS.mysql],
			},
			{
				id: 'incident-management-system',
				title: 'Incident Management System',
				skills: [SKILLS.javascript, SKILLS.vue3, SKILLS.node, SKILLS.express, SKILLS.mysql],
			},
			{
				id: 'volunteer-database-system',
				title: 'Volunteer Database System',
				skills: [SKILLS.java, SKILLS.javafx, SKILLS.mysql],
			},
			{
				id: 'farkle-web-game',
				title: 'Farkle Web Game',
				skills: [SKILLS.html, SKILLS.css, SKILLS.javascript, SKILLS.jquery],
			},
		],
	},
];

PROJECT_CATEGORIES.forEach((category) => {
	category.projects.forEach((project) => {
		project.summary = getSummary(project.id);
	});
});

const findProject = (id) => {
	for (const category of PROJECT_CATEGORIES) {
		const project = category.projects.find(p => p.id === id);
		if (project) return project;
	}
	throw new Error(`Project not found: ${id}`);
};

export const HIGHLIGHTED_PROJECTS = [
	findProject('marketing-site'),
	findProject('central-php-system'),
	findProject('question-taker-excel-addin'),
	findProject('course-widget-grid'),
];
