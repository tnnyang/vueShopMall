<template>
	<swiper :options="swiperOption">
		<swiper-slide>Slide 1</swiper-slide>
		<swiper-slide>Slide 2</swiper-slide>
		<swiper-slide>Slide 3</swiper-slide>
		<swiper-slide>Slide 4</swiper-slide>
		<swiper-slide>Slide 5</swiper-slide>
		<swiper-slide>Slide 6</swiper-slide>
		<swiper-slide>Slide 7</swiper-slide>
		<swiper-slide>Slide 8</swiper-slide>
		<swiper-slide>Slide 9</swiper-slide>
		<swiper-slide>Slide 10</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>

<script>
import 'swiper/dist/css/swiper.min.css'
export default {
	data() {
	  return {
	    swiperOption: {
	    	direction: 'vertical',
			pagination: {
				el: '.swiper-pagination'
			},
	    }
	  }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
}
</style>
