<template>
  <div>
    <h1 class="wrapper__title">Мы подобрали {{ count }} {{ offerString }}</h1>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  count: {
    type: Number,
    required: true
  }
})

function normalizeCountForm(number: number, wordsArr: string[]): string {
  number = Math.abs(number);
  if (Number.isInteger(number)) {
    let options = [2, 0, 1, 1, 1, 2];
    return wordsArr[(number % 100 > 4 && number % 100 < 20) ? 2 : options[(number % 10 < 5) ? number % 10 : 5]];
  }
  return wordsArr[1];
}
const offerString = computed(() => {
  return normalizeCountForm(props.count, ['предложение', 'предложения', 'предложений'])
})
</script>

<style></style>