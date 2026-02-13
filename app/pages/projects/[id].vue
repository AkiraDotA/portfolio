<script setup>
const route = useRoute();

let project;
let category;
try {
	project = findProject(route.params.id);
	category = findProjectCategory(route.params.id);
}
catch {
	throw createError({ statusCode: 404, statusMessage: 'Project not found' });
}

useSeoMeta({
	title: project.title,
	ogTitle: `${project.title} | Zac Holly`,
	description: project.summary.replace(/<[^>]*>/g, ''),
	ogDescription: project.summary.replace(/<[^>]*>/g, ''),
});
</script>

<template>
	<div>
		<NuxtLink
			to="/projects"
			class="inline-flex items-center text-muted hover:text-accent transition duration-300 mb-6"
		>
			<UIcon
				name="i-mdi-arrow-left"
				class="me-1"
			/>
			Back to Projects
		</NuxtLink>

		<SectionTitle>{{ project.title }}</SectionTitle>
		<p class="text-muted -mt-2 mb-4">
			{{ category }}
		</p>

		<div class="mb-6">
			<UBadge
				v-for="(skill, index) in project.skills"
				:key="index"
				:class="[getLoopingTint(index), 'm-1 !text-neutral-100 font-light']"
			>
				{{ skill.label }}
			</UBadge>
		</div>

		<UCard class="card-bordered mb-6">
			<h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 accent-bar after:mt-2 after:mb-4 after:py-0.5 after:w-10">
				Summary
			</h3>
			<div
				class="text-body space-y-4"
				v-html="project.summary"
			/>
		</UCard>

		<UCard
			v-if="project.description"
			class="card-bordered mb-6"
		>
			<h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 accent-bar after:mt-2 after:mb-4 after:py-0.5 after:w-10">
				Description
			</h3>
			<div
				class="text-body space-y-4"
				v-html="project.description"
			/>
		</UCard>

		<UCard
			v-if="project.highlights?.length"
			class="card-bordered mb-6"
		>
			<h3 class="text-xl font-bold text-neutral-800 dark:text-neutral-200 accent-bar after:mt-2 after:mb-4 after:py-0.5 after:w-10">
				Key Highlights
			</h3>
			<ul class="space-y-2 mt-2">
				<li
					v-for="(highlight, index) in project.highlights"
					:key="index"
					class="flex items-start gap-2 text-body"
				>
					<UIcon
						name="i-mdi-check-circle"
						class="text-accent mt-1 shrink-0"
					/>
					{{ highlight }}
				</li>
			</ul>
		</UCard>

		<NuxtLink
			to="/projects"
			class="inline-flex items-center text-muted hover:text-accent transition duration-300 mt-2"
		>
			<UIcon
				name="i-mdi-arrow-left"
				class="me-1"
			/>
			Back to Projects
		</NuxtLink>
	</div>
</template>
