<template>
  <div class="input-container" :class="{
    'selection-open': showList,
    'button': props.typeButton == 'button'
  }">
    <label class="input-container--title" :for="props.typeButton" v-if="props.typeButton !== 'button'">{{ data.title
      }}</label>
    <input type="text" name="sum" id="sum" :max="data.max" class="input-container--input"
      v-if="props.typeButton === 'sum'" v-model="valueModelNum">
    <div name="purpose" id="purpose" class="input-container--input selection" v-if="props.typeButton === 'purpose'"
      @click="showListSelect" ref="selectionListDIV">
      {{ value.title }}
      <ul class="selection--list" :class="{ 'show-list': showList }" ref="selectionList">
        <li v-for="valueOption in data.options" :class="{ selected: valueOption.value == value.value }"
          @click="selected(valueOption)">{{
            valueOption.title }}</li>
        <li>{{ EventClicks.target }}</li>
      </ul>
    </div>
    <BtnComponent v-if="props.typeButton == 'button'" borderHidden filter bgcolor="blue">{{ data.title }}</BtnComponent>

    <!-- <select name="purpose" id="purpose" class="input-container--input-num" v-if="props.typeButton === 'purpose'">
      <option :value="valueOption.value" v-for="valueOption in data.options">{{ valueOption.title }}</option>
    </select> -->
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
const data = ref(dataTemp);
const selectionList = ref<Ref | null>(null);
const selectionListDIV = ref<Ref | null>(null);
const height = ref(null);
const showList = ref(false);
const showListSelect = (ev: Event) => {
  if (!showList.value) {
    showList.value = true
    selectionList.value.style.maxHeight = selectionList.value.scrollHeight + "px";
  } else {
    selectionList.value.style.maxHeight = '0px'
    showList.value = !showList.value
  }
}

const value = ref<optionsType | string | number>(data.value.min || '0')
const selected = (selectValue: any) => {
  value.value = selectValue
}
const valueModelNum = computed({
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
value.value = (props.typeButton === "purpose" && data.value.options) ? data.value.options[0] : value.value;

const EventClicks: any = inject('EventClick')

watch(EventClicks, (newValue, oldValue) => {
  if (newValue.targetEl !== selectionList.value && selectionList.value !== null && showList.value && selectionListDIV.value !== newValue.targetEl || oldValue.targetEl === selectionList.value) {
    // showListSelect(EventClicks)
    selectionList.value.style.maxHeight = '0px'
    showList.value = !showList.value
  }
})

</script>