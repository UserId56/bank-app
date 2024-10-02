<template>
  <div class="wrapper">
    <AppFilter />
    <wrapperTitle :count="count"></wrapperTitle>
    <tabComponent :tabsList="ArrayTab" @selectTab="selectedTab"></tabComponent>
  </div>
</template>

<script lang="ts" setup>
const count = ref(0)
const pathApp = useRoute().path;
const ArrayTab = ref(tabConfig(pathApp));

function selectedTab() { }

</script>

<style></style>