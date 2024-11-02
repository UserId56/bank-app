<template>
  <div>
    <div class="card-product" v-for="card in listCard" :key="card.title">
      <h3 class="card-product__title">{{ card.title }}</h3>
      <div class="card-product__content">
        <div class="card-product__content__image">
          <img :src="card.img" :alt="card.title">
        </div>
        <div class="card-product__content__block">
          <div class="card-product__content__block__rating">
            <div class="card-product__content__block__rating_filter"
              :style="`width: ${77 * (100 / (5 / (5 - card.rating))) / 100}px`">
            </div>
            <div class="info-block">
              <div class="info-block__element">
                <div class="info-block__element__title"></div>
                <div class="info-block__element__value"></div>
              </div>
            </div>
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

let listCard = ref([{
  title: 'Кредитная карта Тинькофф All Airlines Black Edition',
  img: '/images/tbank.jpg',
  tel: 88005557778,
  site: 'https://',
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
  tel: 88005557778,
  site: 'https://',
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
}])

</script>
