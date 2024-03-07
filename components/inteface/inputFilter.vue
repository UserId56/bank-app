<template>
  <div class="input-container">
    <label class="input-container--title" :for="props.typeButton" v-if="props.typeButton !== 'button'">{{ data.title
      }}</label>
    <input type="text" name="sum" id="sum" :max="data.max" class="input-container--input"
      v-if="props.typeButton === 'sum'" v-model="valueModel">
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  typeButton: {
    type: String,
    default: "button"
  }
})
const dataTemp: inputData = inputFilterData(props.typeButton)
const data = toRef(dataTemp);
const value = toRef(data.value.min || '0')
const valueModel = computed({
  get() {
    return value.value?.toLocaleString()
  },
  set(newVlaue = '0') {
    let intNewValue = +newVlaue.replace(/\s/g, "");
    console.log(intNewValue)
    value.value = isNaN(intNewValue) ? newVlaue.replace(/\D+/g, "") : intNewValue
    nextTick(() => {
      value.value = validationInputFilter(newVlaue, data.value.min || 0, data.value.max || 0)
    })

  }
})
</script>

<style></style>