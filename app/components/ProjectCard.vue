<script setup>
const { project } = defineProps({
	project: {
		type: Object,
		default() {},
	},
	minimal: {
		type: Boolean,
		default: false,
	},
});

const cardContainer = ref(null);
const { elementX, elementY, isOutside } = useMouseInElement(cardContainer);

const backgroundTints = [
	'!bg-accent-100',
	'!bg-accent-200',
	'!bg-accent-300',
	'!bg-accent-400',
	'!bg-accent-500',
];
const getLoopingTint = index => backgroundTints[index % backgroundTints.length];
</script>

<template>
	<BorderGradientHover
		ref="cardContainer"
		:x="elementX"
		:y="elementY"
	>
		<BackgroundGradientHover
			:x="elementX"
			:y="elementY"
			:is-outside="isOutside"
		>
			<UCard
				:ui="{ body: 'flex flex-col h-full' }"
				class="cursor-default h-full bg-gradient-to-br to-white from-neutral-50 dark:to-neutral-900 dark:from-neutral-800 ring-0"
			>
				<h4 class="accent-bar after:mt-2 after:py-0.5 after:w-24" :class="minimal ? 'text-lg' : 'text-2xl'">
					{{ project.title }}
				</h4>

				<p
					v-if="!minimal"
					class="my-5 text-body"
					v-html="project.summary"
				/>

				<div class="mt-auto" :class="{ 'pt-6': minimal }">
					<UBadge
						v-for="(skill, index) in project.skills"
						:key="index"
						:class="[getLoopingTint(index), 'm-1 !text-neutral-100 font-light']"
					>
						{{ skill.label }}
					</UBadge>
				</div>
			</UCard>
		</BackgroundGradientHover>
	</BorderGradientHover>
</template>

<style scoped>
</style>
