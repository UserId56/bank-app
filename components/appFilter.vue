<template>
  <div class="wrapper filter">
    <h1 class="filter--title">{{ stringsComponent.title }}</h1>
    <h2 class="filter--subtitle" v-if="stringsComponent.subTitle">{{ stringsComponent.subTitle }}</h2>
    <div class="filter-type" v-if="$route.path === '/'">
      <NuxtLink :to="typeFilter.link" class="filter-type-button" v-for="typeFilter in FilterTypeConfig">
        <div class="filter-type-button--icon">
          <img :src="typeFilter.imageUrl" alt="">
        </div>
        <div class="filter-type-button--title">{{ typeFilter.title }}</div>
      </NuxtLink>

    </div>
    <div class="filter-interface">
      <inputFilterVue :typeButton="item" v-for="item, index in testFilter" :key="index" :data-filterId="index">
      </inputFilterVue>
    </div>
  </div>
</template>

<script lang="ts" setup>
import getStringsData from "@/helpers/strings/appFilter"
import { typeFilters } from "@/helpers/filterTypeConfig"
import type { TypeFilter } from "@/helpers/filterTypeConfig"
import inputFilterVue from "./inteface/inputFilter.vue";
const pathApp = useRoute().path;
const stringsComponent = getStringsData(pathApp);
const FilterTypeConfig: Array<TypeFilter> = typeFilters();
const testFilter = ["sum", "purpose", "purpose", "sum"]
// const { data } = await useAsyncData('appFilter', (): any => getStringsData(route.path), { server: false })

// const myStore = useMyIndexStore()
// console.log(myStore.test)
</script>

<style></style>