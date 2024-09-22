<template>
  <div class="wrapper">
    <h1 class="home-title">Лучшие предложения</h1>
    <div class="tab">
      <div class="tab-item" v-for="tab in ArrayTab" :class="{ 'tab-active': tab.isOpen }"
        @click="selectedTab(tab.type)">
        {{ tab.title }}
      </div>
      <div class="list-cards">
        <div class="card" @click="test">

        </div>
      </div>


    </div>
  </div>
</template>

<script lang="ts" setup>
const ArrayTab = ref(tabConfig());
const store = useMyIndexStore();
store.getBest();

const selectedTab = (target: string): void => {
  for (let i = 0; i < ArrayTab.value.length; i++) {
    if (ArrayTab.value[i].type == target) {
      ArrayTab.value[i].isOpen = true
    } else {
      ArrayTab.value[i].isOpen = false
    }
  }
}

const test = () => {
  console.log(store.BestDataList)
}


</script>

<style></style>