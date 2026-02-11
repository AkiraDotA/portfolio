import { SKILLS } from './skills.js';

export const PROJECT_CATEGORIES = [
	{
		category: 'Work Projects',
		projects: [
			{
				id: 'marketing-landers',
				title: 'Company & Product Marketing Landers',
				summary: 'Implemented modern marketing landers from initial wireframes, showcasing the company and primary product with updated visuals. The landers include details such as user statistics, included features, and user quotes.',
				skills: [SKILLS.javascript, SKILLS.vue3, SKILLS.nuxt, SKILLS.scss, SKILLS.bootstrap],
			},
			{
				id: 'marketing-site',
				title: 'Marketing Site',
				summary: 'Revamping a legacy PHP marketing site with an in-progress Nuxt 3 project. Adapted and customized a Nuxt 3 template to meet specific requirements, developing pages including login, catalog, book, cart, checkout, resource request forms, policy pages, and enrollment paths.',
				skills: [SKILLS.javascript, SKILLS.vue3, SKILLS.nuxt, SKILLS.scss, SKILLS.bootstrap],
			},
			{
				id: 'central-php-system',
				title: 'Central PHP System',
				summary: 'Continuously maintaining and extending a PHP-based application that serves as the core of the digital ecosystem, powering the marketing site, admin dashboard, proprietary CMS, e-commerce platform, and LMS. Enhanced the system by integrating Vue.js applications and managing the MVC architecture, libraries, and REST API, ensuring a cohesive framework for development and integration across the platform.',
				skills: [SKILLS.php, SKILLS.codeigniter, SKILLS.javascript, SKILLS.jquery, SKILLS.mysql],
			},
			{
				id: 'question-builder-excel-addin',
				title: 'Question Builder Excel Add-in',
				summary: 'Created an <strong>accounting question builder Excel add-in</strong> that granted the ability to tag and format Excel worksheets in such a way that would allow them to be parsed and converted into HTML output that could be used in the creation of Moodle cloze questions. Also developed new functionality in the question builder to allow the possibility to convert the entire Excel workbook into an Excel file format to be used in tandem with the <strong>accounting question taker Excel add-in</strong>.',
				skills: [SKILLS.javascript, SKILLS.officejs],
			},
			{
				id: 'question-taker-excel-addin',
				title: 'Question Taking Excel Add-in',
				summary: 'Created an <strong>accounting question taker Excel add-in</strong> that allowed users to work on accounting questions Excel files created by the <strong>account question builder Excel add-in</strong>. Answers entered by a user would get parsed and checked by an advanced algorithm to properly account for all possible and equivalent answers to ensure users would be able to take advantage of Excel\'s formula feature for their answers.',
				skills: [SKILLS.javascript, SKILLS.officejs],
			},
			{
				id: 'course-widget-grid',
				title: 'Course Widget Grid',
				summary: 'Developed a course widget grid from an initial wireframe, serving as a dynamic course home page for students and instructors. Features include movable and resizable widgets that display course information such as announcements, upcoming assignments, grades, class averages, and the course calendar.',
				skills: [SKILLS.javascript, SKILLS.vue2, SKILLS.bootstrap],
			},
			{
				id: 'ticket-attachment-component',
				title: 'Ticket Attachment Component',
				summary: 'Implemented support for ticket attachments by designing and developing stylized and intuitive Vue components that deliver detailed attachment information, integrated with Freshdesk\'s API through a custom REST API wrapper.',
				skills: [SKILLS.javascript, SKILLS.vue2, SKILLS.bootstrap],
			},
			{
				id: 'dynamic-ticket-form',
				title: 'Dynamic Ticket Form',
				summary: 'Designed and developed a dynamic ticket form that adjusts fields based on user input throughout the form, enhancing the overall user experience for ticket submissions.',
				skills: [SKILLS.javascript, SKILLS.vue2, SKILLS.bootstrap],
			},
			{
				id: 'application-guided-tour',
				title: 'Application Guided Tour',
				summary: 'Designed and developed custom Vue implementation of a guided tour, powered by shepherd.js that allowed developers to easily create guided tour steps for an interactive tour.',
				skills: [SKILLS.javascript, SKILLS.vue2, SKILLS.bootstrap],
			},
			{
				id: 'test-bank-converter',
				title: 'Test Bank Converter',
				summary: 'Created and maintained a robust desktop application designed to convert imported test banks into an intermediate format for cloud storage and seamless export to various file formats as needed.',
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
				summary: 'Created this personal portfolio website to showcase my software engineering skills and projects, highlighting my work over the years. This project was also my first experience using Tailwind CSS, which I primarily used for all styling.',
				skills: [SKILLS.javascript, SKILLS.vue3, SKILLS.nuxt, SKILLS.tailwind],
			},
			{
				id: 'timesheet-generator',
				title: 'Timesheet Generator',
				summary: 'Developed a desktop application to generate timesheet text output from defined work schedules, enabling the easy creation of formatted Excel timesheets for accurate hour tracking during each pay period.',
				skills: [SKILLS.java, SKILLS.javafx],
			},
			{
				id: 'diploma-file-formatter',
				title: 'Diploma File Formatter',
				summary: 'Developed a desktop application for importing unformatted Word test bank documents, formatting them, and exporting to RTF files that match the standard Diploma test bank file format for test bank conversion.',
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
				summary: 'Developed a web app simplifying the search for quality public restrooms via Google Maps API. Key features include user authentication, restroom pinning, review submission, and admin tools for user and data management, providing a user-friendly platform for locating and reviewing public restrooms.',
				skills: [SKILLS.javascript, SKILLS.vue3, SKILLS.node, SKILLS.express, SKILLS.mysql],
			},
			{
				id: 'lost-and-found-system',
				title: 'Lost and Found System',
				summary: 'Created a lost and found system for campus public safety, enabling students and faculty to view and claim lost items. Features include admin functionality for adding, deleting, and reporting items, and a user interface allowing item categorization and detailed claim submissions.',
				skills: [SKILLS.javascript, SKILLS.jquery, SKILLS.node, SKILLS.express, SKILLS.mysql],
			},
			{
				id: 'incident-management-system',
				title: 'Incident Management System',
				summary: 'Developed an incident management system for documenting and categorizing safety incidents, triggering alerts for review meetings, and generating comprehensive PDF incident history reports.',
				skills: [SKILLS.javascript, SKILLS.vue3, SKILLS.node, SKILLS.express, SKILLS.mysql],
			},
			{
				id: 'volunteer-database-system',
				title: 'Volunteer Database System',
				summary: 'Designed and implemented a database system to streamline volunteer management processes including registration, tracking volunteer hours, and generating detailed reports for analysis.',
				skills: [SKILLS.java, SKILLS.javafx, SKILLS.mysql],
			},
			{
				id: 'farkle-web-game',
				title: 'Farkle Web Game',
				summary: 'Built a web-based version of the dice game, Farkle, supporting up to four local players, featuring a user-friendly interface, score tracking, and real-time game updates.',
				skills: [SKILLS.html, SKILLS.css, SKILLS.javascript, SKILLS.jquery],
			},
		],
	},
];

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
