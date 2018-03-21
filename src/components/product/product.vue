<template>
<div>
	<div class="floor2" v-for="product in products">
		<h3 class="floor2_top clearfix" v-if="show">
			<strong>{{product.subject}}</strong>
			<router-link :to="'/productMore/' + product.goodsType">更多&gt;&gt;</router-link>
		</h3>
		<ul class="floor2_item" :class="{'list_floor2_item': isAddClass}">
			<li v-for="floorItem in product.product" @click="selectItem(floorItem)">
				<a href="javascript:;">
					<img :src="floorItem.productImg" alt="">
					<span>{{floorItem.productTitle}}</span>
					<p><i class="pro_free fl">{{floorItem.productPrice}}元</i><em class="pro_price fr">{{floorItem.productInvest}}元起投</em></p>
				</a>
			</li>
		</ul>
	</div>
	<product-detail :detail="selectDetail" v-if="productDetailShow"></product-detail>
</div>
</template>

<script>
import productDetail from "@/components/productDetail/productDetail";
import '../../../static/css/pro_details.css';

import {mapGetters, mapActions} from 'vuex'

export default {
	props: ["products"],
	// props: {
	// 	products: Array
	// },
	data() {
		return {
			show: true,
			isAddClass: false,
			product: []
		}		
	},
	// created() {
	// 	//打印下获得数据结果
	// 	// console.log(this.productDetailShow);
	// 	// console.log(this.products);		
	// },
	computed: {
		...mapGetters([
			'productDetailShow',
			'selectDetail'
		]),
	},
	mounted() {
		this.$nextTick(function(){
			if(this.$route.params.goodsType){
				this.isAddClass = true;
				this.show = false;
			}
		})		
	},
	watch: {  //监听路由的变化
		"$route": "productData"
	},
	methods: {
		...mapActions([
			'detailShowEvent'
		]),
		selectItem(item) {
			this.detailShowEvent(item);
		},
		productData(){
			console.log(this.$route.params.goodsType);
		}
	},
	components: {
		productDetail
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*@import 在引入外部css文件时，最后不能使用分号;*/
/*@import '../../../static/css/pro_details.css'*/
/*floor2*/
.floor2_top{margin:0 .3rem .2rem 0;line-height:.64rem;}
.floor2_top strong{font-weight:normal;color:#282828;font-size:.3rem;float:left;border-left:.08rem solid #d9ad4d;height:.64rem;padding-left:.24rem;}
.floor2_top a{color:#df9900;font-size:.26rem;float:right;}
.floor2_item{margin:0 .2rem;overflow: hidden;}
.floor2_item li{float:left;width:50%;font-size:.24rem;margin-bottom:.2rem;}
.floor2_item li a{display:block;margin:0 .1rem;padding-bottom:.4rem;background:#fff;}
.floor2_item img{width:3.34rem;height:2.7rem;margin:0 auto;border-bottom:1px solid #eee;}
.floor2_item span{color:#393939;height:.82rem;text-align:justify;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;margin:.18rem .2rem 0;line-height:.4rem;}
.floor2_item p{margin:.2rem .2rem 0;overflow:hidden;}
.pro_free{color:#e2421b;}
.pro_price{color:#999;}
.list_floor2_item, .list_floor2_item li, .list_floor2_item li a{margin:0;}
.list_floor2_item li:nth-child(odd){padding:0 .02rem .04rem 0;}
.list_floor2_item li:nth-child(even){padding:0 0 .04rem .02rem;}
.list_floor2_item img{border:0;}
</style>
