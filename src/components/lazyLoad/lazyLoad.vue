<template>
  <div>
    <ul id="container">
      <li v-for="img in list"><img v-lazy="img"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
        return {
             list: [
                'http://covteam.u.qiniudn.com/test16.jpg',
                'http://covteam.u.qiniudn.com/test14.jpg',
                'http://covteam.u.qiniudn.com/test15.jpg',
                'http://covteam.u.qiniudn.com/test16.jpg',
                'http://covteam.u.qiniudn.com/test17.jpg',
                'http://covteam.u.qiniudn.com/test18.jpg',
                'http://covteam.u.qiniudn.com/test19.jpg',
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
img[lazy=loading] {
    display:block;
    width: .32rem;
    margin:1rem auto;
    background-position:center center!important;
    background: url("../../../static/images/loading.gif");
    background-size:100px 100px;
    background-repeat:no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
img[lazy=error] {
    background-position:center center!important;
    /*background: url("../../../static/images/error.png");*/
    background-size:100px 100px;
    background-repeat:no-repeat;

    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
img[lazy=loaded] {
    background-position:center center!important;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-color: green;
}
</style>