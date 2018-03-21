<template>	
    <div>
        <scroller :on-refresh="refresh" :on-infinite="infinite" ref="my_scroller">
            <div v-for="(item, index) in items" class="row" :class="{'grey-bg': index % 2 == 0}" @click="onItemClick(index, item)">{{item}}</div>
        </scroller>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: []
        }        
    },
    mounted() {
        for (var i = 1; i <= 20; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.');
        }
        this.top = 1;
        this.bottom = 20;
    },
    methods: {
        refresh(done) {
            setTimeout(() => {
                let start = this.top - 1
                for (let i = start; i > start - 10; i--) {
                this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
                }
                this.top = this.top - 10;
                done()
            }, 1500)
        },
        infinite(done) {
            if (this.bottom >= 30) {   //大于等于30条则提示无更多数据
                setTimeout(() => {
                    done(true)
                }, 1500)
                return;
            }
            setTimeout(() => {
                let start = this.bottom + 1
                for (let i = start; i < start + 10; i++) {
                    this.items.push(i + ' - keep walking, be 2 with you.')
                }
                this.bottom = this.bottom + 10;
                setTimeout(() => {
                    done()
                })
            }, 1500)
        },
        onItemClick(index, item) {
            console.log(index)
        }
    }
}
</script>
<style scoped>
.row{display:block;width:100%;height:50px;padding:10px 0 10px 15px;font-size:16px;line-height:30px;color:#444;background-color:#fff}
.grey-bg{background-color:#eee}
</style>