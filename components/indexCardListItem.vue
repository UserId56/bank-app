<template>
  <div class="card" v-for="element in store.BestDataList" :key="element.id">
    <div class="card--content">
      <img class="card--logo" :src="element.logo" alt="logo">
      <span class="card--title">
        {{ (element.balance < 2) ? '' : 'до' }} {{ element.balance }}&#37; </span>
          <span class="card--subtitle">На остаток</span>
          <span class="card--title">
            {{ (element.cashback < 2) ? '' : 'до' }} {{ element.cashback }}&#37; </span>
              <span class="card--subtitle">На остаток</span>
    </div>
    <div class="card-info" @click="showOffer(element.id)">
      Подробнее
    </div>
  </div>
</template>

<script lang="ts" setup>
const store = useMyIndexStore();
await useAsyncData('list', () => store.getBest().then(() => true))
const showOffer = (item: number) => {
  // console.log("test", store)
  // store.test1(item);
  // console.log(store.BestDataList)
  console.log('Нужно настроить редирект, когда допилишь страницы банков')
}


</script>

<style></style>