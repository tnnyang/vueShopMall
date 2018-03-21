<template>
    <swiper :options="swiperOption" v-if="slider">
       <swiper-slide v-for="(item, index) in slider" :key="index">  <!--使用 key，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。这里可以看一下 item 有没有唯一标识 id，如果有，可以设置为 :key="item.id"，如果没有唯一标识，可以考虑 v-for="(item, index) in items"，然后设置 :key="index"-->
          <a :href="item.href"><img :src="item.img" alt=""></a>
       </swiper-slide>
       <div class="swiper-pagination" slot="pagination"></div>
   </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  export default {
      props: ['slider'],
      data() {
          return {
              swiperOption: {
                  autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                  },
                  loop: true,
                  pagination: {
                    el: '.swiper-pagination'
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