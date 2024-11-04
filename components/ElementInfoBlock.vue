<template>
  <div>
    <div class="info-block__element__title">{{ title }}</div>
    <div class="info-block__element__value"></div>
  </div>
</template>

<script lang="ts" setup>
import type { infoType } from "@/Types/infoType"

const props = defineProps<{ info: infoType, type: string }>();

const title: string = getStringInfoBlock(props.type, props.info.name)

</script>