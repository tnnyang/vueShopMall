<template>
<div class="orderwish">
	  <div class="order_wish public_box">
		<ul>
			<li class="vetically border"><a href="myOrder.html"><img src="static/images/index_order.png" alt="">我的订单</a></li>
			<li class="wish vetically" @click="showWish"><a href="javascript:;"><img src="static/images/wish.png" alt="">心愿单</a></li>
		</ul>
	</div>
	<div class="popup" v-show="wishShow">
		<div class="mask"></div>
		<div class="popup_con bounceInDown">
			<div class="popup_con_inner">
				<div class="popupcon_inner">
					<div class="wish_pop">
						<p class="wish_tit">心愿单</p>
						<p><textarea rows="6" placeholder="我想要..."></textarea></p>
						<p class="clearfix"><button type="button" class="wish_btn wish_cancel" @click="hideWish">取消</button><button type="button" class="wish_btn wish_sure">确定</button></p>
					</div>				
				</div>
			</div>
		</div>  
	</div>
</div>
</template>

<script  type="text/ecmascript-6">
export default {
	data() {
		return {
			wishShow: false
		};
	},
	methods: {
		showWish() {
			this.wishShow = true;
		},
		hideWish() {
			this.wishShow = false;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.order_wish li{text-align:center;font-size:.24rem;color:#393939;background:#fff;height:2rem;margin-bottom:.2rem;}
.order_wish li a{display:block;width:100%;}
.border{margin-left:-1px;border-right:1px solid #eee;}
.order_wish img{width:.96rem;margin:0 auto .14rem;}
.wish_pop{background:#fff;overflow:hidden;border-radius:.1rem;border-top:.06rem solid #d9ad4d;padding:0 .24rem;}
.wish_tit{font-size:.32rem;color:#393939;margin:.3rem 0;}
.wish_pop textarea{background:#f2f2f5;border:0;resize:none;padding:.15rem;font-size:.26rem;line-height:.35rem;color:#999;width:100%;height:2rem;}
.wish_btn{width:2.5rem;height:.68rem;border:0;border-radius:.1rem;margin:.56rem 0;font-size:.3rem;}
.wish_cancel{border:1px solid #d9ad4d;background:none;color:#d9ad4d;float:left;}
.wish_sure{background:#d9ad4d;color:#fff;float:right;}
</style>
