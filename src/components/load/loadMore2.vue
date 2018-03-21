<template>
  <div id="wrapper" v-cloak>
    <ul>
      <img class="loading" src="images/scroll/loading.svg" v-if="static == 1">
      <img class="success" src="images/scroll/success.svg" v-if="static == 2">
      <img class="before" src="images/scroll/before.svg" v-if="static == 0">
      <li v-for="li in lis">{{li.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    offset: {
      type: Number,
      default: 40
    },
    enableInfinite: {
      type: Boolean,
      default: true
    },
    enableRefresh: {
      type: Boolean,
      default: true
    },
    onRefresh: {
      type: Function,
      default: undefined,
      required: false
    },
    onInfinite: {
      type: Function,
      default: undefined,
      require: false
    }
  },
  data() {
    return {
      top: 0,
      state: 0,
      startY: 0,
      touching: false,
      infiniteLoading: false
    }
  },
  methods: {
    touchStart(e) {
      this.startY = e.targetTouches[0].pageY
      this.startScroll = this.$el.scrollTop || 0
      this.touching = true
    },
    touchMove(e) {
      if (!this.enableRefresh || this.$el.scrollTop > 0 || !this.touching) {
        return
      }
      let diff = e.targetTouches[0].pageY - this.startY - this.startScroll
      if (diff > 0) e.preventDefault()
      this.top = Math.pow(diff, 0.8) + (this.state === 2 ? this.offset : 0)

      if (this.state === 2) { // in refreshing
        return
      }
      if (this.top >= this.offset) {
        this.state = 1
      } else {
        this.state = 0
      }
    },
    touchEnd(e) {
      if (!this.enableRefresh) return
      this.touching = false
      if (this.state === 2) { // in refreshing
        this.state = 2
        this.top = this.offset
        return
      }
      if (this.top >= this.offset) { // do refresh
        this.refresh()
      } else { // cancel refresh
        this.state = 0
        this.top = 0
      }
    },
    refresh() {
      this.state = 2
      this.top = this.offset
      this.onRefresh(this.refreshDone)
    },
    refreshDone() {
      this.state = 0
      this.top = 0
    },

    infinite() {
      this.infiniteLoading = true
      this.onInfinite(this.infiniteDone)
    },

    infiniteDone() {
      this.infiniteLoading = false
    },

    onScroll(e) {
      if (!this.enableInfinite || this.infiniteLoading) {
        return
      }
      let outerHeight = this.$el.clientHeight
      let innerHeight = this.$el.querySelector('.inner').clientHeight
      let scrollTop = this.$el.scrollTop
      let ptrHeight = this.onRefresh ? this.$el.querySelector('.pull-refresh').clientHeight : 0
      let infiniteHeight = this.$el.querySelector('.load-more').clientHeight
      let bottom = innerHeight - outerHeight - scrollTop - ptrHeight
      if (bottom < infiniteHeight) this.infinite()
    }
  }
}
</script>
<style scoped>
.yo-scroll {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background-color: #ddd
}
.yo-scroll .inner {
  position: absolute;
  top: -2rem;
  width: 100%;
  transition-duration: 300ms;
}
.yo-scroll .pull-refresh {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.yo-scroll.touch .inner {
  transition-duration: 0ms;
}
.yo-scroll.down .down-tip {
  display: block;
}
.yo-scroll.up .up-tip {
  display: block;
}
.yo-scroll.refresh .refresh-tip {
  display: block;
}
.yo-scroll .down-tip,
.yo-scroll .refresh-tip,
.yo-scroll .up-tip {
  display: none;
}
.yo-scroll .load-more {
  height: .3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>