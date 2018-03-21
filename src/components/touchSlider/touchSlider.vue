<template>
  <swiper :options="swiperOption" v-if="getSlider">
       <swiper-slide v-for="(item, index) in getSlider" :key="index">
          <a :href="item.href"><img :src="item.img" alt=""></a>
       </swiper-slide>
       <div class="swiper-pagination" slot="pagination"></div>
   </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import {mapGetters} from 'vuex'

export default {
  data() {
      return {
        swiperOption: {
          effect: 'coverflow',
          autoplay: 3000,
          loop: true,
          initialSlide: 1,   //默认显示第二张
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
          },
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
  },
  created() {   //实例已经创建完成之后被调用
    //获取轮播图片
    this.$store.dispatch('getSlider')
  },
  computed: {
    ...mapGetters([
      'getSlider'
    ])
  }
}
</script>
<style scoped>
.swiper-slide{width:68%;}
</style>