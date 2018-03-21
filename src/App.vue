<template>
  <div id="app">
    <alert-msg></alert-msg>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <back-top :toBottom="1"></back-top>
  </div>
</template>

<script>
import alertMsg from '@/components/alert'
import backTop from '@/components/backTop'
export default {
  components:{
  	alertMsg,
    backTop
  }
}
</script>