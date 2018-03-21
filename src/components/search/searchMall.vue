<template>
<transition name="move">
<div v-show="showFlag" class="searchDetail">
	<div class="search_box vetically">
		<div class="search">
			<img src="static/images/search.png" alt="">
			<input type="text" placeholder="搜索免费商品" class="search_input">		
		</div>
		<button type="button" class="search_btn" @click="hide">取消</button>
	</div>
	<div class="search_tips">
		<strong>热门搜索</strong>
		<ul class="clearfix">
			<li v-for="item in search"><a href="#">{{item}}</a></li>
		</ul>
		<strong style="margin-top:.3rem;">历史搜索</strong>
		<ul class="clearfix">
			<li><a href="#">手机</a></li>
			<li><a href="#">Mac</a></li>
		</ul>
	</div>
	<button type="button" class="clear_btn">清除历史记录</button>
</div>
</transition>
</template>

<script  type="text/ecmascript-6">
export default {
	props: ["search"],
	data() {
		return {
			showFlag: false
		}
	},
	methods: {
		show() {
			this.showFlag = true;
		},
		hide () {
			this.showFlag = false;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{background:#fff;border:1px solid #e3e3ea;border-radius:3.3rem;margin:.14rem auto;font-size:.26rem;color:#b2b2b2;}
.search a{display:block;color:#b2b2b2;}
.search img{width:.36rem;float:left;margin:.12rem .26rem 0 .32rem;}
.search_box{font-size:0;margin-top:.14rem;}
.search_box .search{width:5.84rem;margin:0 .3rem 0 0;}
.search_input{float:left;background:none;border:0;width:80%;height:.58rem;color:#b2b2b2;font-size:.26rem;}
.search_btn{height:.6rem;background:none;border:0;display:inline-block;font-size:.28rem;color:#393939;}
.search_tips{margin:0 .3rem;font-size:0;}
.search_tips strong{font-size:.28rem;color:#393939;font-weight:normal;margin:.5rem 0 .2rem;display:block;}
.search_tips li{float:left;margin:0 .56rem .2rem 0;padding:.1rem .2rem;color:#4e4e4e;background:#f2f2f5;font-size:.24rem;border-radius:.1rem;}
.clear_btn{background:none;border:1px solid #e1e1e1;border-radius:.1rem;width:2.62rem;height:.6rem;font-size:.26rem;color:#b2b2b2;display:block;margin:.2rem auto 0;}
.searchDetail{position:fixed;left:0;top:0;width:100%;height:100%;z-index:100;background:#fff;}
.searchDetail.move-enter-active, .searchDetail.move-leave-active{transition: all 0.2s linear;}
.searchDetail.move-enter, .searchDetail.move-leave-active{transform: translate3d(100%, 0, 0);}
</style>
