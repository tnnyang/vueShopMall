<template>
  <div class="avatar">
      <img src="../../../static/images/upload.png" alt="" ref="avatar">
      <input type="file" accept="image/png,image/jpg,image/jpeg" @change="change($event)">
      <input type="hidden" ref="hiddenImgSrc" value="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAYAAACrHtS+AAAABGdBTUEAALGPC/xhBQAAAvZJREFUeAHt3UFOxEAMRNEJ4h65/7FyEpBYFqtYlkvl/uwaTbfteomGTYvreZ6fDz/HJPB1zKQM+pcA4Ic9CIAfBv6t8973fenvWOcmoH+j8YbnWpY6B7wUW+4mwHPtSp0DXootdxPguXalzgEvxZa7CfBcu1LngJdiy90EeK5dqXPAS7HlbgI8167UOeCl2HI3AZ5rV+oc8FJsuZsAz7UrdQ54KbbcTYDn2pU6B7wUW+4mwHPtSp0DXootdxPguXalzgEvxZa7CfBcu1LngJdiy90EeK5dqXPAS7HlbgI8167U+b+7ZaVTgjbpXavT7tLxhgc9rB2tAt6RYtAZgAdhdbQKeEeKQWcAHoTV0SrgHSkGnQF4EFZHq4B3pBh0BuBBWB2tAt6RYtAZgAdhdbQKeEeKQWcAHoTV0SrgHSkGnQF4EFZHq4B3pBh0BuBBWB2tAt6RYtAZgAdhdbQKeEeKQWcAHoTV0SrgHSkGnQF4EFZHq4B3pBh0BuBBWB2tAt6RYtAZgAdhdbRqv1umd706hnpzxnR991023vA3T8eCzwK+APHNCIC/SWvBZ+3f4dPfafqdPV3f/czwhrsFhusDPhy4uxzgboHh+oAPB+4uB7hbYLg+4MOBu8sB7hYYrg/4cODucoC7BYbrAz4cuLsc4G6B4fqADwfuLge4W2C4PuDDgbvLAe4WGK4P+HDg7nKAuwWG6wM+HLi7HOBugeH6gA8H7i4HuFtguD7gw4G7ywHuFhiuD/hw4O5ygLsFhusDPhy4uxzgboHh+va7ZcPzfk67S6b58oZrIsvXgC8H1vEA10SWrwFfDqzjAa6JLF8DvhxYxwNcE1m+Bnw5sI4HuCayfA34cmAdD3BNZPka8OXAOh7gmsjyNeDLgXU8wDWR5WvAlwPreIBrIsvXgC8H1vEA10SWrwFfDqzjAa6JLF8DvhxYxwNcE1m+Bnw5sI4HuCayfA34cmAdD3BNZPn60v/jtXze48fjDT/sEQAc8MMSOGzcX9nbHKPTeiVzAAAAAElFTkSuQmCC"/>
  </div>
</template>

<script>
export default {
  watch: {
    "$route": "changeImgSrc"
  },
  methods: {
    change(event) {
        let image = this.$refs.avatar;
        this.clip(event , {
          resultObj : image,
          aspectRatio : 1
        })
    },
    changeImgSrc(){
      let imgSrc = this.$refs.hiddenImgSrc.value;
      this.$refs.avatar.src = imgSrc;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img{width:150px;height:150px;margin:0 auto;display:block;}
input[type='file']{outline:none;margin-top:20px;}
</style>