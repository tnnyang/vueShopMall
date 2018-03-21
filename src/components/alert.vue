<template>
  <div class="validatePopTips vetically" :class="{'show_down':addClass}" v-if="showAlert" ref="pop"><span>{{alertMsg}}</span></div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      addClass: false,
    }
  },
  computed: {
    ...mapGetters([
      'showAlert',
      'alertMsg'
    ])
  },
  watch: {
    'showAlert'() {
      if(this.showAlert){
        setTimeout(() => {
            this.addClass = true
        },50);        
        setTimeout(() => {
            this.$refs.pop.style.transform = "translateY(-.8rem)";
            this.addClass = false
            setTimeout(() => {
                this.$store.dispatch('showAlert', false);                
            },500);
        },3000);
      }
    }
  }
}
</script>
<style scoped>

</style>