import { SKILLS } from './skills.js';

const summaryFiles = import.meta.glob('./summaries/*.md', { eager: true, query: '?raw', import: 'default' });
const descriptionFiles = import.meta.glob('./descriptions/*.md', { eager: true, query: '?raw', import: 'default' });

function parseMarkdown(md) {
	return md.trim()
		.replace(/\r\n/g, '\n')
		.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
		.split(/\n{2,}/)
		.map(p => `<p>${p.trim()}</p>`)
		.join('');
}

function getSummary(id) {
	const key = `./summaries/${id}.md`;
	const raw = summaryFiles[key];
	if (!raw) throw new Error(`Summary file not found: ${id}.md`);
	return parseMarkdown(raw);
}

function getDescription(id) {
	const key = `./descriptions/${id}.md`;
	const raw = descriptionFiles[key];
	if (!raw) return '';
	return parseMarkdown(raw);
}

export const BADGE_TINTS = [
	'!bg-accent-100',
	'!bg-accent-200',
	'!bg-accent-300',
	'!bg-accent-400',
	'!bg-accent-500',
];
export const getLoopingTint = index => BADGE_TINTS[index % BADGE_TINTS.length];

export const PROJECT_CATEGORIES = [
	{
		category: 'Work Projects',
		projects: [
			{
				id: 'instructor-dashboard-vue3',
				title: 'Instructor Dashboard — Vue 3 Migration',
				skills: [SKILLS.javascript, SKILLS.vue3, SKILLS.tailwind],
				highlights: [
					'Led full architectural migration from Vue 2 with Vue CLI and Vuex to Vue 3 with Composition API and Pinia',
					'Primary developer rebuilding every major feature from scratch',
					'Zod schema validation across all forms replacing manual validation from the Vue 2 version',
					'Composable-driven architecture with centralized API client, store integration, and loading debounce',
					'CI/CD pipeline with PR deploy workflows and CDN placeholder replacement for staging and production',
				],
			},
			{
				id: 'instructor-dashboard',
				title: 'Instructor Dashboard',
				skills: [SKILLS.javascript, SKILLS.vue2, SKILLS.bootstrap],
				highlights: [
					'4+ years as a primary contributor on a large-scale Vue 2 SPA',
					'Led three rounds of WCAG accessibility audits addressing contrast, ARIA labels, landmarks, and keyboard navigation',
					'Multi-month ticket system rebuild with conditional form logic for nine topic types and file attachments',
					'Course section UI overhaul replacing create/copy tabs with modal-based forms and a unified SectionForm component',
					'Draggable course reordering and date validation for assignments and sections',
				],
			},
			{
				id: 'central-php-system',
				title: 'Central PHP System',
				skills: [SKILLS.php, SKILLS.codeigniter, SKILLS.javascript, SKILLS.jquery, SKILLS.mysql],
				highlights: [
					'Contributions spanning a monorepo built on CodeIgniter 3, Symfony 6, and Moodle',
					'Helped build the base course copy feature enabling bulk assignment copying with due date retention',
					'Maintained the cloze question engine with financial formula support for PV, PMT, and SQRT',
					'Integrated Freshdesk API for ticket management and Pipedrive CRM for sales workflows',
					'Contributed to an ongoing Symfony DDD migration within the legacy codebase',
				],
			},
			{
				id: 'question-builder-excel-addin',
				title: 'Question Builder Excel Add-in',
				skills: [SKILLS.javascript, SKILLS.officejs],
				highlights: [
					'OOP class architecture in vanilla JavaScript with no framework dependencies',
					'Spreadsheet export pipeline converting tagged workbooks to HTML cloze output and standalone Excel files',
					'Formula simplification and drill-down powered by @cortex-js/compute-engine',
					'Multi-sheet support handling up to 20 tabs with correct formula offset handling',
					'Color-coded cell tagging system for marking answers, tolerances, and formatting',
				],
			},
			{
				id: 'question-taker-excel-addin',
				title: 'Question Taking Excel Add-in',
				skills: [SKILLS.javascript, SKILLS.officejs],
				highlights: [
					'Formula validation engine that simplifies student and expected formulas to canonical forms for comparison',
					'Real-time "Check My Work" feedback with visual cell-level indicators for correct and incorrect answers',
					'MessagingService singleton for structured iframe communication with the LMS via postMessage',
					'Cell cutting prevention that restores formatting when students accidentally modify protected cells',
					'Multi-sheet support with synchronized auto-saving across all tabs',
				],
			},
			{
				id: 'course-renderer',
				title: 'Course Renderer',
				skills: [SKILLS.javascript, SKILLS.vue2, SKILLS.bootstrap],
				highlights: [
					'Widget-based course home page with a drag-and-resize grid system and management modal',
					'Guided tour system using Shepherd.js with multi-step progression and route-aware navigation',
					'Lazy loading with skeleton placeholders and route-based role restrictions for navigation visibility',
					'Comprehensive accessibility audit spanning student home, reports, section management, and navigation',
					'Last-accessed-page system evolved through multiple refactors from auto-redirect to non-intrusive banner',
				],
			},
			{
				id: 'marketing-site',
				title: 'Marketing Site',
				skills: [SKILLS.javascript, SKILLS.vue3, SKILLS.nuxt, SKILLS.scss, SKILLS.bootstrap],
				highlights: [
					'Ground-up Nuxt 3 rebuild replacing a legacy PHP marketing codebase',
					'Video modals, full-resolution image viewing via v-viewer, and Calendly scheduling integration',
					'Sticky navigation footer with scroll-aware behavior',
					'Accessibility integrated from early development with focus management across interactive elements',
					'SPA deployment through GitHub Actions with environment-specific CDN configuration',
				],
			},
			{
				id: 'test-bank-converter',
				title: 'Test Bank Converter',
				skills: [SKILLS.java, SKILLS.javafx],
				highlights: [
					'Import support for DOCX and Moodle XML with export to plain text, Moodle XML, and Excel',
					'Table parsing with multi-level indentation detection and cell justification from Word styles',
					'HTML-to-image conversion pipeline for embedding tables in plain text exports',
					'Question error-checking system flagging missing bodies or learning objectives before export',
					'Packaged as a standalone Windows executable with Launch4j and a bundled JRE',
				],
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
				highlights: [
					'Designed and built from scratch as both a showcase and an engineering exercise',
					'Vanta.js animated wave background rendered through Three.js with color mode adaptation',
					'Mouse-tracking radial gradient hover effects built with VueUse composables',
					'Contact form with reCAPTCHA v3 validation and server-side email API via nuxt-nodemailer',
					'Custom accent color palette with seamless light and dark mode switching via CSS variables',
				],
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
				highlights: [
					'Interactive Google Maps interface for browsing and pinning restroom locations',
					'Community-driven review system with ratings for cleanliness, accessibility, and experience',
					'Session-based authentication with registration, login, and profile history',
					'Admin dashboard with user moderation and oversight of submitted entries and reviews',
				],
			},
		],
	},
];

PROJECT_CATEGORIES.forEach((category) => {
	category.projects.forEach((project) => {
		project.summary = getSummary(project.id);
		project.description = getDescription(project.id);
	});
});

export const ALL_PROJECTS = PROJECT_CATEGORIES.flatMap(cat => cat.projects);

export const findProject = (id) => {
	for (const category of PROJECT_CATEGORIES) {
		const project = category.projects.find(p => p.id === id);
		if (project) return project;
	}
	throw new Error(`Project not found: ${id}`);
};

export function findProjectCategory(id) {
	return PROJECT_CATEGORIES.find(cat => cat.projects.some(p => p.id === id))?.category ?? '';
}

export const HIGHLIGHTED_PROJECTS = [
	findProject('marketing-site'),
	findProject('central-php-system'),
	findProject('question-taker-excel-addin'),
	findProject('instructor-dashboard-vue3'),
];
