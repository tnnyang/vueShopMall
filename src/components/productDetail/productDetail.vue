<template>
<transition name="move">
<div v-if="productDetailShow" class="productDetail" ref="detail">
	<div class="goodsDetail">
		<swiper :slider="detail.goodsPic"></swiper>
		<p class="back" @click="detailHideEvent">返回</p>
		<div class="goods_part">
			<p class="goods_title">{{detail.productTitle}}</p>
			<ul class="goods_price clearfix">
				<li>商城价：<span>{{detail.productPrice}}元</span></li>
				<li>市场价：<del>{{detail.productMarket}}元</del></li>
			</ul>
			<p class="choice_color arrow"><i>已选</i>白色；</p>
		</div>
		<div class="goods_part">
			<div class="goods_part_desc check arrow">
				<p class="invest_money">投资金额：<i>{{detail.productInvest}}元</i></p>
				<p class="invest_limit">投资期限：<i>{{detail.productLimit}}个月</i></p>
				<p class="invest_get">投资收益：<i>5%年化收益+该商品</i></p>
			</div>
			<div class="goods_part_installment arrow">
				<p>分期（敬请期待）</p>
			</div>
		</div>
		<!-- Tab切换 -->
		<div id="goods_detailtab">
			<div class="hd goods_detailtab_nav">
				<ul>
					<li v-for="(tabItem, index) in tabsTitle" :class="{'on':tabsIndex == index}" @click="tabChange(index)">{{tabItem}}</li>
				</ul>
			</div>
			<div class="bd goods_detailtab_con" id="goods_detailtab_con" ref="detailTab">
				<div class="con" v-show="tabsIndex == 0">
					<div class="goods_pic">
						<p><img src="static/images/banner.jpg" alt=""></p>
						<p><img src="static/images/banner.jpg" alt=""></p>
						<p><img src="static/images/banner.jpg" alt=""></p>
						<p><img src="static/images/banner.jpg" alt=""></p>
						<p><img src="static/images/banner.jpg" alt=""></p>
						<p><img src="static/images/banner.jpg" alt=""></p>
						<p><img src="static/images/banner.jpg" alt=""></p>
						<p><img src="static/images/banner.jpg" alt=""></p>
						<p><img src="static/images/banner.jpg" alt=""></p>
						<p><img src="static/images/banner.jpg" alt=""></p>
						<p><img src="static/images/banner.jpg" alt=""></p>
						<p><img src="static/images/banner.jpg" alt=""></p>
					</div>				
				</div>
				<div class="con" v-show="tabsIndex == 1">
					<div class="goods_spec">
						<p><i>佩戴方式</i>入耳式</p>
						<p><i>兼容平台</i>ios</p>
						<p><i>套餐类型</i>官方标配</p>
						<p><i>是否线控</i>是</p>
						<p><i>颜色分类</i>白色、黑色</p>
						<p><i>线控耳机品牌</i>Fabful</p>
						<p><i>型号</i>I6S</p>
						<p><i>线控耳机性质</i>品牌原装</p>
					</div>
				</div>
				<div class="con" v-show="tabsIndex == 2">
					<div class="goods_problem">
						<dl>
							<dt>1、什么是“免费商城”</dt>
							<dd>免费商城是互融CLUB退出的一款集消费与理财为一体的全新产品形态。免费商城是互融CLUB退出的一款集消费与理财为一体的全新产品形态。免费商城是互融CLUB退出的一款集消费与理财为一体的全新产品形态。</dd>
						</dl>
						<dl>
							<dt>2、“免费商城”收益如何计算？</dt>
							<dd>免费商城是互融CLUB退出的一款集消费与理财为一体的全新产品形态。免费商城是互融CLUB退出的一款集消费与理财为一体的全新产品形态。免费商城是互融CLUB退出的一款集消费与理财为一体的全新产品形态。</dd>
						</dl>
						<dl>
							<dt>3、“免费商城”商品如何发放？</dt>
							<dd>免费商城是互融CLUB退出的一款集消费与理财为一体的全新产品形态。免费商城是互融CLUB退出的一款集消费与理财为一体的全新产品形态。免费商城是互融CLUB退出的一款集消费与理财为一体的全新产品形态。</dd>
						</dl>
					</div>
				</div>
			</div>
		</div>		
	</div>
	<p class="invest_get"><a href="#">投资领取</a></p>
</div>
</transition>
</template>

<script>
import BScroll from 'better-scroll';
import swiper from '@/components/slider/goodsSlider'

import {mapGetters, mapActions} from 'vuex'

export default {
	props: {
		detail: Object
	},
	data() {
		return {
			//notNextTick: true,			
			swiperOption1: {
                autoplay: 3000,
                loop: true,
                autoplayDisableOnInteraction: false,
                pagination: '.goodsdetailpage',
                onSlideChangeEnd: swiper => {
					//console.log('onSlideChangeEnd', swiper.realIndex)
				}
            },
            tabsTitle: ["图文详情", "产品规格", "常见问题"],
            tabsIndex: 0
		}
	},
	// created() {
	// 	//打印下获得数据结果
	// 	console.log(this.productDetailShow);
	// },
	computed:{
		...mapGetters([
			'productDetailShow'
		])
	},
	mounted(){
		this.$nextTick(() => {
			setTimeout(()=>{   //初始化的时候DOM并没有全部渲染完，需要加入定时器
				if (!this.scroll) {
					this.scroll = new BScroll(this.$refs.detail, {
						click: true
					});
				} else {
					this.scroll.refresh();
				}
			}, 10);
		});
	},
	methods: {
		...mapActions([
			'detailHideEvent'
		]),
		tabChange(index) {
			this.tabsIndex = index;
			setTimeout(() => {
				this.$refs.detailTab.style.height = this.$refs.detailTab.children[index].children[0].offsetHeight + 57 + "px";
				this.scroll.refresh();
			}, 10);
		}
	},	
	components: {
		swiper
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.con{padding-bottom:.9rem;}
.productDetail{position:fixed;left:0;top:0;width:100%;height:100%;z-index:1;background:#f2f2f5;}
.productDetail.move-enter-active, .productDetail.move-leave-active{transition: all 0.2s linear;}
.productDetail.move-enter, .productDetail.move-leave-active{transform: translate3d(100%, 0, 0);}
.back{position:fixed;left:.3rem;top:.3rem;z-index:2;font-size:.28rem;}
</style>