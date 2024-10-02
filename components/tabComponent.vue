<template>
  <div class="tab">
    <BtnComponent class="tab-item" v-for="tab in tabsList" :class="{ 'tab-active': tab.isOpen }"
      @click="selectedTab(tab.type)" borderHidden>
      {{ tab.title }}
    </BtnComponent>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  tabsList: {
    type: Array<tabConfigType>,
    required: true,
    default: []
  }
})
const emit = defineEmits(['selectTab'])
const selectedTab = (target: string): void => {
  emit('selectTab', target)
  for (const element of props.tabsList) {
    if (element.type == target) {
      element.isOpen = true
    } else {
      element.isOpen = false
    }
  }
}
</script>
