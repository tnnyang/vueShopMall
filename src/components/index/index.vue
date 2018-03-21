<template>
  <div>    
    <search></search>
    <swiper :slider="getSlider"></swiper>
    <order-wish></order-wish>
    <products :products="getProductList"></products>
    <router-link to="/user" class="user">用户中心</router-link>
    <router-link to="/load" class="user">加载更多</router-link>
    <router-link to="/loadMore1" class="user">加载更多1</router-link>
    <router-link to="/loadMore2" class="user">加载更多2</router-link>
    <router-link to="/avatar" class="user">设置头像</router-link>
    <router-link to="/imgView" class="user">图片浏览</router-link>
    <router-link to="/lazyLoad" class="user">图片延时加载</router-link>
    <router-link to="/textSlider" class="user">文字间歇滚动滚动</router-link>
    <router-link to="/leftSlider" class="user">侧滑删除1</router-link>
    <router-link to="/leftDelete" class="user">侧滑删除2</router-link>
    <router-link to="/touchSlider" class="user">另一种图片触摸滑动</router-link>
    <router-link to="/datePicker" class="user">日期选择器</router-link>
    <router-link to="/date" class="user">日期选择器1</router-link>
    <router-link to="/uploadImg" class="user">上传图片</router-link>
    <router-link to="/uploadImg1" class="user">上传图片1（可以一次实现多张图片的添加，且图片体积过大的，会进行等比压缩，压缩比例可以通过父组件传递，也可自己手动控制）</router-link>
    <router-link to="/uploadImg2" class="user">上传图片2（可以依次实现单张图片的添加，且可以单击图片实现大图的预览）</router-link>
    <router-link to="/fullPage" class="user">整屏滑动</router-link>
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