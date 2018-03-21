<template>
<div>
  <div class="search" @click="search"><a href="javascript:;"><img src="static/images/search.png" alt="">搜索免费商品</a></div>
  <search-mall :search="hotSearch" ref="search"></search-mall>
</div>
</template>

<script>
import searchMall from "@/components/search/searchMall";

export default {
	data() {
		return {
			hotSearch: []
		}
	},
	created() {
		this.$http.get('src/data/data.json').then(response => {
	      response = response.body;
	      if (response.status == 0) {
	        this.hotSearch = Object.assign({}, this.hotSearch, response.search);
	      }
	    }, response => {
	      // error callback
	    });
	},
	methods: {
		search() {
			this.$refs.search.show();
		}
	},
	components: {
		searchMall
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{background:#fff;overflow:hidden;}
.search a{display:block;color:#b2b2b2;border:1px solid #eee;border-radius:3.3rem;width:6.6rem;height:.6rem;line-height:.6rem;margin:.14rem auto;font-size:.26rem;color:#b2b2b2;}
.search img{width:.36rem;float:left;margin:.12rem .26rem 0 .32rem;}
.search_box{margin-top:.14rem;}
.search_box .search{width:5.84rem;margin:0 .3rem 0 0;display:inline-block;}
.search_input{background:none;border:0;width:4rem;height:.58rem;color:#b2b2b2;}
.search_btn{background:none;border:0;display:inline-block;font-size:.28rem;color:#393939;}
</style>
