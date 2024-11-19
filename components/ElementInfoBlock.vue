<template>
  <div class="info-block__element-container">
    <div class="info-block__element__title">{{ title }}</div>
    <div class="info-block__element__value">{{ getStringProductBlock(info.type, value) }}</div>
  </div>
</template>

<script lang="ts" setup>
import type { infoType } from "@/Types/infoType"

const props = defineProps<{ info: infoType, type: string, value: any }>();

const title: string = getStringInfoBlock(props.type, props.info.name)

</script>