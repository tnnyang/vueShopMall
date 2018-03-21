<template>
  <div class="list" ref="lists">
        <ul>
            <li v-for="(item,index) in list">
              <p ref="swipeLeft">
                {{item.content}}
                <i @click="del(item.content, index)">删除</i>
              </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      startX:0,   //触摸位置
      endX:0,     //结束位置
      moveX: 0,   //滑动时的位置
      expansion: null,
      list: [
          {"content":"第一条数据"},
          {"content":"第二条数据"},
          {"content":"第三条数据"},
      ]      
    }
  },
  mounted(){
    this.$refs.swipeLeft.forEach((element, index) => {
      let self = element;
      self.addEventListener('touchstart', e => {
        this.startX = event.changedTouches[0].pageX;
      });
      self.addEventListener('touchmove', e => {
        this.endX = event.changedTouches[0].pageX;
        if(this.expansion){                                       //判断是否展开，如果展开则收起
            this.expansion.className = "";
        }     
        if(this.endX - this.startX > 10){                         //右滑
            self.className = "";                               //右滑收起
        }
        if(this.startX - this.endX > 10){                         //左滑
            self.className = "swipeleft";                      //左滑展开
            this.expansion = self;
        }
      });
      self.addEventListener('touchend', e => {                 //如果距离小于删除按钮一半,强行回到起点
        this.endX = event.changedTouches[0].pageX;
        let childDel = self.lastChild;
        if(this.startX - this.endX < (childDel.offsetWidth / 2)){
            self.className = "";
        }
      });
    });
  },
  methods:{
    del(name, index){
        // alert("确认删除" + name);
        this.list.splice(index, 1);                                 //删除List这条数据 DOM随之更新渲染
        let swipeLeft = document.querySelector('.swipeleft');       //将展开的DOM归位 除掉样式类
        swipeLeft.className = "";
        this.expansion = null;
    }
  }
}
</script>
<style scoped>
.list{overflow:hidden;margin-top:.2rem;padding-left:.3rem;border-top:1px solid #ddd;}
.list li{overflow:hidden;width:120%;border-bottom:1px solid #ddd;}
.list li p{display:block;height:.88rem;line-height:.88rem;-webkit-transition:all 0.3s;transition:all 0.3s;}
.list li i{float:right;width:15%;text-align:center;background:#E2421B;color:#fff;}
.swipeleft{transform:translateX(-15%);-webkit-transform:translateX(-15%);}
</style>