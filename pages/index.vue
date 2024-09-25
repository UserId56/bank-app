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
    <BtnComponent class="margin-0-a btn-all-offer" setIcon="shopping-bag" bgcolor="white">Все предложения</BtnComponent>
  </div>
</template>

<script lang="ts" setup>
import BtnComponent from '@/components/inteface/BtnComponent.vue'

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