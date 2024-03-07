<template>
  <div class="layout">
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

</script>