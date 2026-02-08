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
	'!bg-darkred-100',
	'!bg-darkred-200',
	'!bg-darkred-300',
	'!bg-darkred-400',
	'!bg-darkred-500',
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
        class="cursor-default h-full bg-gradient-to-br to-neutral-900 from-neutral-800 ring-0"
      >
        <h4 class="after:block after:bg-darkred after:mt-2 after:py-0.5 after:w-24" :class="minimal ? 'text-lg' : 'text-2xl'">
          {{ project.title }}
        </h4>

        <p
          v-if="!minimal"
          class="my-5 text-neutral-300"
          v-html="project.summary"
        />

        <div class="mt-auto" :class="{'pt-6': minimal}">
          <UBadge
            v-for="(skill, index) in project.skills"
            :key="index"
            :class="[getLoopingTint(index), 'm-1 !text-white font-light']"
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
