<script setup>
const extraSmallBreak = useBreakpoints(breakpointsTailwind).smaller('sm');

const menuContainer = ref(null);
const { height: menuHeight } = useElementSize(menuContainer);

const pageContainer = ref(null);
const { height: pageHeight } = useElementSize(pageContainer);
</script>

<template>
  <div class="flex lg:flex-row flex-col my-16 max-sm:mt-4 mx-8 max-sm:mx-3">
    <TheMenu ref="menuContainer" />
    <UCard class="w-full transition-all duration-[0.25s] overflow-hidden" :style="{height: pageHeight ? (extraSmallBreak ? 40 : 48) + pageHeight + 'px' : 'initial', 'min-height': menuHeight ? menuHeight + 'px' : 'initial'}">
      <div ref="pageContainer">
        <slot />
      </div>
    </UCard>
  </div>
</template>

<style scoped>
</style>
