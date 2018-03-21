<template>
	<swiper :options="swiperOption1" v-if="slider">
       <swiper-slide v-for="(item, index) in slider" :key="index">
          <img :src="item" alt="">
       </swiper-slide>
       <div class="swiper-pagination goodsdetailpage" slot="pagination"></div>
   </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  export default {
      props: ['slider'],
      data () {
          return {
              swiperOption1: {
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                  },
                  initialSlide: 0,
                  loop: true,
                  pagination: {
                    el: '.goodsdetailpage'
                  }
              }
          }
      }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-pagination-bullet {
    width:0.833rem;
    height: 0.833rem;
    display: inline-block;
    background: #7c5e53;
}
</style>