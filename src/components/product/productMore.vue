<template>
<div>
	<product-list :products="getProductList"></product-list>
</div>
</template>

<script>
import productList from '@/components/product/product'

import {mapGetters} from 'vuex'

export default {
	data() {
		return {
			productList: []
		}		
	},
	created () {
		//获取商品列表
    	this.$store.dispatch('getProductList');
	},
	computed: {
		...mapGetters([
		  'getProductList'
		])
	},	
	components:{
		productList
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
