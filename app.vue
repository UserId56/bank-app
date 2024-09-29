<template>
  <div class="layout" @click="clickTemplate">
    <AppHeader v-show="!isAdmin" />
    <div class="main" :class="{ admin: isAdmin }">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </div>
    <AppFooter v-show="!isAdmin" />
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
const route = useRoute();
const isAdmin = ref(route.path.includes("admin"));

provide('EventClick', EventClick)

</script>