<template>
  <div class="wrapper">
    <h1 class="home-title">Лучшие предложения</h1>
    <div class="tab">
      <div class="tab-item" v-for="tab in ArrayTab" :class="{ 'tab-active': tab.isOpen }"
        @click="selectedTab(tab.type)">
        {{ tab.title }}
      </div>
    </div>
    <indexCardList></indexCardList>
  </div>
</template>

<script lang="ts" setup>
const ArrayTab = ref(tabConfig());
const selectedTab = (target: string): void => {
  for (const element of ArrayTab.value) {
    if (element.type == target) {
      element.isOpen = true
    } else {
      element.isOpen = false
    }
  }
}


</script>

<style></style>