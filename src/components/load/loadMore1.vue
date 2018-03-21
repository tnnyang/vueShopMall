<template>
    <pull-to-refresh
        @on-pullup='onPullup'
        @on-pulldown='onPulldown' class="page">
        <ul @click="testClick($event)">
            <li :key="index" v-for="(item, index) in items"># item {{ index }} </li>
        </ul>
    </pull-to-refresh>
</template>

<style>
    .loadmore{
        width:100%;
    }
</style>

<script>
    import PullToRefresh from '@/components/load/pull-to-refresh'
    export default {
        data () {
        return {
                items: [2,3,4,5,1,2,3,4,5,2,3,4,5,1,2,3,4,5,2,3,4,5,2,3,4,5]
            }
        },
        methods: {
            onPullup(finshCallback) {
                setTimeout(()=>{
                    this.items=this.items.concat([6,6,6,6,6,6,6,6,6,6,6])
                    finshCallback();//finish refreshing state
                },3000);
            },
            onPulldown(finshCallback) {
                setTimeout(()=>{            
                    this.items=[9,9,9,9,9,9,9,9,9,9,9,9,9,9]
                    finshCallback();//finish refreshing state
                },3000);
            },
            testClick(event){
                window.alert('click '+event.target.innerHTML)
            }
        },
        components: {PullToRefresh}
    }
</script>
<style scoped>
/*scrollbar start*/
.iScrollVerticalScrollbar {
  position: absolute;
  z-index: 9999;
  width: 2px;
  bottom: 2px;
  top: 2px;
  right: 2px;
  overflow: hidden;
}

.iScrollVerticalScrollbar.iScrollBothScrollbars {
  bottom: 18px;
}

.iScrollIndicator {
  position: absolute;
  background: #999;
  border-radius: 6px;
  opacity: .8;
}

.iScrollVerticalScrollbar .iScrollIndicator {
  width: 100%;
  background: #999;
}
</style>