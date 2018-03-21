<template>
  <div id="wrapper" ref="wrapper" v-cloak >
    <ul>
      <img class="loading" src="../../../static/images/loading.svg" v-if="staticNum == 1">
      <img class="success" src="../../../static/images/success.svg" v-if="staticNum == 2">
      <img class="before" src="../../../static/images/before.svg" v-if="staticNum == 0">
      <li v-for="li in list">{{li.name}}</li>
    </ul>
  </div>
</template>

<script>
import iScroll from 'iscroll'
export default {
  data() {
    return {
      is_r: false,
      staticNum: "",
      list: [
        {name:"一"},
        {name:"二"},
        {name:"三"},
        {name:"四"},
        {name:"五"},
        {name:"六"},
        {name:"七"},
        {name:"八"},
        {name:"九"},
        {name:"十"},
      ]
    }
  },
  mounted(){
    let self = this;
    self.$nextTick(() => {      
      let myscroll = new iScroll(self.$refs.wrapper,{
        topOffset: 0,
        //上拉时触发
        onScrollMove:function() {
          self.staticNum = 0;
          //如果上拉高度 大于 (内容高度 - wrapper高度) 50px 以上  且是未刷新状态时触发 ; 
          if(this.y <= ( this.wrapperH - this.scroller.clientHeight - 50) && self.is_r == false){
            //正在加载状态
            self.is_r = true;
            setTimeout(function(){
              //这里表示数据加载成功后
              for (var i = 0;i < 3;i++){
                self.list.push({name:"+"});
              }
              //这里表示渲染完成后刷新wrapper
              setTimeout(function(){
                //显示加载成功状态图标 (没有更多数据时候的提示作用)
                self.staticNum = 2;
                setTimeout(function(){
                  self.staticNum = "";
                },500)
                //加载完成状态
                self.is_r = false;
                myscroll.refresh();
              },0)
            },2000)
            
          }
        },
        onScrollEnd:function() {
          //上拉之后如果触发刷新则 状态图标值为1 显示loading状态
          if(self.is_r == true){
            self.staticNum = 1;
          }
        }
      });
    });
  }
}
</script>
<style scoped>
* {
  margin:0;
  padding: 0;
}
#wrapper {
  width: 80%;
  height: 500px;
  background: #d6edff;
  margin: 0 auto;
  overflow: hidden;
}
#wrapper ul {
  width: 100%;
  padding-bottom: 50px;
  list-style: none;
}
#wrapper ul li {
  width: 80%;
  height: 60px;
  display: block;
  background-color: pink;
  margin: 5px auto;
  text-align: center;
}
#wrapper ul .loading , #wrapper ul .success , #wrapper ul .before {
  position: absolute;
  left: calc(50% - 16px);
  bottom: 10px;
  width:.64rem;
}
#wrapper ul .loading {
  animation: spin 1s linear infinite;
}
@keyframes spin
{
    0%   {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
}
[v-cloak] {
  display: none;
}
</style>