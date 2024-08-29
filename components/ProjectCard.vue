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
        :ui="{ base: 'h-full', background: 'dark:bg-gradient-to-br to-gray-900 from-gray-800', body: {base: 'flex flex-col h-full' }, ring: 'ring-0' }"
        class="cursor-default"
      >
        <h4 class="after:block after:bg-darkred after:mt-2 after:py-0.5 after:w-24" :class="minimal ? 'text-lg' : 'text-2xl'">
          {{ project.title }}
        </h4>

        <p
          v-if="!minimal"
          class="my-5 text-gray-300"
          v-html="project.summary"
        />

        <div class="mt-auto" :class="{'pt-6': minimal}">
          <UBadge
            v-for="(skill, index) in project.skills"
            :key="index"
            :ui="{ base: 'm-1', font: '!text-white font-light' }"
            :class="getLoopingTint(index)"
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
