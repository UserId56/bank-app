<template>
  <div>
    <div class="card-product" v-for="card, indexCard in listCard" :key="card.title">
      <h3 class="card-product__title">{{ card.title }}</h3>
      <div class="card-product__content">
        <div class="card-product__content__image">
          <img :src="card.img" :alt="card.title">
        </div>
        <div class="card-product__content__block">
          <div class="card-product__content__block__rating">
            <div class="card-product__content__block__rating-filter"
              :style="`width: ${77 * (100 / (5 / (5 - card.rating))) / 100}px`">
            </div>

          </div>
          <div class="info-block">
            <div class="info-block__container" v-for="block, index in configColumn" :key="index">
              <div class="info-block__element" v-for="element in block" :key="element.name">
                <ElementInfoBlock :info="element" type="small" :value="listCard[indexCard][element.name]">
                </ElementInfoBlock>
              </div>
            </div>
          </div>
          <div class="card-product__btn">
            <BtnComponent bgcolor="blue" bigPadding>Оформить</BtnComponent>
            <BtnComponent bigPadding>Подробнее</BtnComponent>
          </div>
          <div class="card-product__contact-info">
            <a :href="'tel:+' + card.tel">{{ card.tel }}</a>
            <a :href="card.site" target="_blank">{{ card.site.replace('https://',
              '').replace('http://', '').replace('/', '') }}</a>
            <span>Лицензия: {{ card.license }}</span>
          </div>
        </div>
        <div class="card-product__content__tag">
          <div class="tag-list">
            <div class="tag-list__item" v-for="tag in card.tag" :key="tag.title">
              <img :src="tag.icon" :alt="tag.title">
              <div class="tag-list__item__title">{{ tag.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ElementInfoBlock from './ElementInfoBlock.vue';


const pathApp = useRoute().path;
const configColumn = productInfoConfig(pathApp.replace("/", ""));

let listCard = ref([{
  title: 'Кредитная карта Тинькофф All Airlines Black Edition',
  img: '/images/tbank.jpg',
  tel: '8 800 555 77 78',
  site: 'https://t-bank.com/',
  license: 53453,
  tag: [{
    icon: '/images/like.png',
    title: 'Мы рекомендум'
  },
  {
    icon: '/images/cashback.png',
    title: 'Большой кэшбэк'
  },
  {
    icon: '/images/time.png',
    title: 'Быстрое решение'
  }],
  rating: 1.5,
  moneyLimit: 2000000,
  gracePeriod: 55,
  cashback: 30,
  interestRate: 12,
  rate: 0,
  decision: 2
},
{
  title: 'Кредитная карта Тинькофф All Airlines Black Edition',
  img: '/images/tbank.jpg',
  tel: '8 800 555 77 78',
  site: 'https://google.com',
  license: 53453,
  tag: [{
    icon: '/images/like.png',
    title: 'Мы рекомендум'
  },
  {
    icon: '/images/cashback.png',
    title: 'Большой кэшбэк'
  },
  {
    icon: '/images/time.png',
    title: 'Быстрое решение'
  }],
  rating: 4.5,
  moneyLimit: 2000000,
  gracePeriod: 55,
  cashback: 30,
  interestRate: 12,
  rate: 0,
  decision: 2
}])

</script>
