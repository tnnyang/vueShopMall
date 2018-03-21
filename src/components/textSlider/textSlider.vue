<template>
<div class="marquee_box">
    <ul class="marquee_list" :class="{marquee_top : animate}">
        <li v-for="(item, index) in marqueeList">
            <span>{{item.name}}</span>
            <span>在</span>
            <span class="red">{{item.city}}</span>
            <span>杀敌</span>
            <span class="red">{{item.amount}}</span>
            <span>万</span>
        </li>
    </ul>
</div>
</template>

<script>
	export default {
		data(){
			return {
				animate: false,
				marqueeList: [
					{name: '1军',city: '北京',amount: '10'},
					{name: '2军',city: '上海',amount: '20'},
					{name: '3军',city: '广州',amount: '30'},
					{name: '4军',city: '重庆',amount: '40'},
				]
			}
		},
		mounted(){
			setInterval(this.showMarquee, 3000)
		},
		methods: {
			showMarquee() {
				this.animate = true;   // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
				setTimeout(()=>{       // 这里直接使用了es6的箭头函数，省去了处理this指向偏移问题，代码也比之前简化了很多
					this.marqueeList.push(this.marqueeList[0]);   // 将数组的第一个元素添加到数组的最后
					this.marqueeList.shift();     // 删除数组的第一个元素
					this.animate = false;    // margin-top 为0 的时候取消过渡动画，实现无缝滚动
			}, 500)}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.marquee_box {
	display: block;
	position: relative;
	width: 60%;
	height: 30px;
	overflow: hidden;
}
.marquee_list {
	display: block;
	position: absolute;
	top: 0;
	left: 0;
}
.marquee_top {
	transition: all 0.5s;
	margin-top: -30px
}

.marquee_list li {
	height: 30px;
	line-height: 30px;
	font-size: 14px;
	padding-left: 20px;
}
.marquee_list li span {
	padding: 0 2px;
}
.red {
	color: #FF0101;
}
</style>
