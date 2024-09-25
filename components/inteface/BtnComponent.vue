<template>
  <div class="btn" :class="{
    'btn-border-none': props.borderHidden,
    'btn-bg-blue': props.bgcolor === 'blue',
    'btn-bg-white': props.bgcolor === 'white',
    'btn-bg-blue-blur': props.bgcolor === 'blue-blur',
  }">
    <img :src="icon" alt="" class="btn-icon" v-if="props.setIcon">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const icon = ref('')

const props = defineProps({
  setIcon: {
    type: String,
    required: false,
    default: '',
  },
  bgcolor: {
    type: String,
    required: false,
    default: '#333',
  },
  borderHidden: {
    type: Boolean,
    required: false,
    default: false,
  },
  bigPadding: {
    type: Boolean,
    required: false,
    default: false,
  }
})

const iconList = {
  bank: '/images/bank.svg',
  star: '/images/star.svg',
  'shopping-bag': '/images/shopping-bag.svg',
  'nfc-card': '/images/nfc-card.svg',
  'cube-of-notes-stack': '/images/cube-of-notes-stack.svg',
  'credit-card': '/images/credit-card.svg'
}

icon.value = (props.setIcon && iconList[props.setIcon as keyof typeof iconList]) ? iconList[props.setIcon as keyof typeof iconList] : ''

</script>