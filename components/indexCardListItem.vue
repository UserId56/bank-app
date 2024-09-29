<template>
  <div class="card" v-for="element in store.BestDataList[store.tabName]" :key="element.id">
    <div class="card--content">
      <img class="card--logo" :src="element.logo" alt="logo">
      <span class="card--title">
        {{ getStringsCard[store.tabName].getFirtsTitlestring(element.balance) }}</span>
      <span class="card--subtitle" v-html="getStringsCard[store.tabName].firstSubstring"></span>
      <span class="card--title">
        {{ getStringsCard[store.tabName].getTwoTitlestring(element.cashback) }}</span>
      <span class="card--subtitle">{{ getStringsCard[store.tabName].twoSubstring }}</span>
    </div>
    <div class="card-info" @click="showOffer(element.id)">
      Подробнее
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useMyIndexStore();
console.log(getStringsCard)
await useAsyncData('list', () => store.getBest().then(() => true))
const showOffer = (item: number) => {
  console.log('Нужно настроить редирект, когда допилишь страницы банков')
}


</script>