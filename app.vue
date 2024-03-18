<template>
  <div class="layout" @click="clickTemplate">
    <AppHeader />
    <div class="main">
      <NuxtLoadingIndicator />
      <AppFilter />
      <h1>{{ EventClick.date }}</h1>
      <h1>{{ EventClick.type }}</h1>
      <NuxtPage />
    </div>
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
import "@/assets/scss/index.scss"
let EventClick: any = reactive({
  targetEl: null,
  type: "",
})
const clickTemplate = (ev: Event) => {
  console.log(ev)
  // console.log(EventClick)
  EventClick.targetEl = ev.target;
  EventClick.type = ev.type
  // console.log(EventClick)
}

provide('EventClick', EventClick)

</script>