<template>
  <div class="wrapper">
    <AppFilter />
    <h1 class="home-title">Лучшие предложения</h1>
    <!-- <div class="tab">
      <div class="tab-item" v-for="tab in ArrayTab" :class="{ 'tab-active': tab.isOpen }"
        @click="selectedTab(tab.type)">
        {{ tab.title }}
      </div>
    </div> -->
    <div class="tab">
      <BtnComponent class="tab-item" v-for="tab1 in ArrayTab" :class="{ 'tab-active': tab1.isOpen }"
        @click="selectedTab(tab1.type)" borderHidden>
        {{ tab1.title }}
      </BtnComponent>
    </div>
    <indexCardList></indexCardList>
    <BtnComponent class="margin-0-a btn-all-offer">Все предложения</BtnComponent>
  </div>
</template>

<script lang="ts" setup>
import BtnComponent from '@/components/inteface/BtnComponent.vue'

const store = useMyIndexStore();
const ArrayTab = ref(tabConfig());
const selectedTab = (target: string): void => {
  store.setTab(target);
  for (const element of ArrayTab.value) {
    if (element.type == target) {
      element.isOpen = true
    } else {
      element.isOpen = false
    }
  }
}
</script>