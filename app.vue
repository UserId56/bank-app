<template>
  <div class="layout" @click="clickTemplate">
    <AppHeader />
    <div class="main">
      <NuxtLoadingIndicator />
      <AppFilter />
      <NuxtPage />
    </div>
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
import "@/assets/scss/index.scss"
let EventClick: any = reactive({
  targetEl: null
})
const clickTemplate = (ev: Event) => {
  EventClick.targetEl = ev.target;
  EventClick.type = ev.type
  // console.log(EventClick)
}

provide('EventClick', EventClick)

</script>