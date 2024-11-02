<template>
  <div class="wrapper">
    <AppFilter />
    <wrapperTitle :count="count"></wrapperTitle>
    <tabComponent :tabsList="ArrayTab" @selectTab="selectedTab"></tabComponent>
    <cardProduct></cardProduct>
  </div>
</template>

<script lang="ts" setup>
const count = ref(0)
const pathApp = useRoute().path;
const ArrayTab = ref(tabConfig(pathApp));

function selectedTab(target: string) { console.log(target) }

</script>
