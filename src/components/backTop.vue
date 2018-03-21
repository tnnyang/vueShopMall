<template>
  <div id="toolbar">
    <p id="backhome"><router-link to="/">返回首页</router-link></p>
    <p id="backtop" @click="backTop" v-show="isShow">返回顶部</p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: {
    toBottom: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  mounted() {
    document.querySelector('#toolbar').style.bottom = this.toBottom + "rem";

    this.$nextTick(function () {  
      window.addEventListener('scroll', this.needToTop);  //滚动事件监听  
    });  
  },
  methods: {
    backTop() {
      let timer = setInterval(() => {
        const el = document.documentElement || document.body
        let top = el.scrollTop
        let speed = Math.ceil(top / 5)
        el.scrollTop = top - speed
        if (top === 0) {
          clearInterval(timer)
        }
      }, 20)
    },
    needToTop: function() {  
      let curHeight = document.documentElement.scrollTop || document.body.scrollTop;  
      let viewHeight = document.documentElement.clientHeight;  
      if (curHeight > 100) {  
        this.isShow = true;                         //赋值是为了按钮的v-show='toTop'  
      }else{  
        this.isShow = false;  
      } 
    }
  }
}
</script>
<style scoped>
#toolbar{position:fixed;bottom:1rem;right:.16rem;z-index:100;}
#toolbar p{background-size:.88rem .88rem;width:.88rem;height:.88rem;text-indent:-99999rem;}
#backhome{background-image:url(../../static/images/backhome.png);}
#backhome a{display:block;}
#backtop{background-image:url(../../static/images/top.png);}
</style>