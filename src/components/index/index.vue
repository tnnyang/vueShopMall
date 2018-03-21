<template>
  <div>    
    <search></search>
    <swiper :slider="getSlider"></swiper>
    <order-wish></order-wish>
    <products :products="getProductList"></products>
  </div>
</template>

<script>
import search from '@/components/search/search'
import swiper from '@/components/slider/slider'
import orderWish from '@/components/orderWish/orderWish'
import products from '@/components/product/product'

import {mapGetters} from 'vuex'

export default {  
  data () {
    return {
      slider: [],
      products: []
    }
  },
  created () {   //实例已经创建完成之后被调用
    //获取轮播图片
    this.$store.dispatch('getSlider')
    //获取商品列表
    this.$store.dispatch('getProductList')
  },
  computed: {
    ...mapGetters([
      'getProductList',
      'getSlider'
    ])
  },
  components: {
    search,
    swiper,
    orderWish,
    products
  }
}
</script>
<style scoped>
  .user{display:block;margin:.2rem .3rem;}
</style>