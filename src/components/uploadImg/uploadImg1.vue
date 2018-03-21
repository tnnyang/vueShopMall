<template>
  <div>
      <input type="file" id="img-upload" multiple accept="image/*" @change="uploadImg($event)"/>
      <ul class="list-ul" v-show="!isPhoto">
        <li class="list-li" v-for="(item, index) in imgArr">
          <img :src="item.src">
          <p class="img_del" @click='delImage(index)'></p>       
        </li>
      </ul>
  </div>
</template>

<script>
import EXIF from 'exif-js/exif'
export default {
  data () {
    return {
      imgArr: [],
      imgNumLimit: 9,
      isPhoto: true
    }
  },
  watch: {
    imgArr: 'toggleAddPic'
  },
  methods:{
    toggleAddPic() {
      if(this.imgArr.length >= 1) {
        this.isPhoto = false;
      } else {
        this.isPhoto = true;
      }
    },
    uploadImg(e) {
      let tag = e.target;
      let fileList = tag.files;
      let imgNum = fileList.length;
      let _this = this;
      // _this.imgArr = [];//图片数据清零   这里不能清零，否则第二次选择的图片就会覆盖第一次选择的图片
      if(this.imgArr.length + imgNum > this.imgNumLimit){
          alert('一次最多上传' + this.imgNumLimit + '张图片！');
          return;
      }
      var Orientation;
      for(let i=0;i<imgNum;i++){
          EXIF.getData(fileList[i], function(){
              Orientation = EXIF.getTag(fileList[i], 'Orientation');
          });
          let reader = new FileReader();
          reader.readAsDataURL(fileList[i]);
          reader.onload = function(){
              var oReader = new FileReader();
              oReader.onload = function(e) {
                  var image = new Image();
                  image.src = e.target.result;
                  image.onload = function() {
                      var expectWidth = this.naturalWidth;
                      var expectHeight = this.naturalHeight;
                      if (this.naturalWidth > this.naturalHeight && this.naturalWidth > 800) {
                          expectWidth = 800;
                          expectHeight = expectWidth * this.naturalHeight / this.naturalWidth;
                      } else if (this.naturalHeight > this.naturalWidth && this.naturalHeight > 1200) {
                          expectHeight = 1200;
                          expectWidth = expectHeight * this.naturalWidth / this.naturalHeight;
                      }
                      var canvas = document.createElement("canvas");
                      var ctx = canvas.getContext("2d");
                      canvas.width = expectWidth;
                      canvas.height = expectHeight;
                      ctx.drawImage(this, 0, 0, expectWidth, expectHeight);
                      var base64 = null;
                      //修复ios上传图片的时候 被旋转的问题
                      if(Orientation != "" && Orientation != 1){
                          switch(Orientation){
                              case 6://需要顺时针（向左）90度旋转
                                  _this.rotateImg(this,'left',canvas);
                                  break;
                              case 8://需要逆时针（向右）90度旋转
                                  _this.rotateImg(this,'right',canvas);
                                  break;
                              case 3://需要180度旋转
                                  _this.rotateImg(this,'right',canvas);//转两次
                                  _this.rotateImg(this,'right',canvas);
                                  break;
                          }
                      }
                      base64 = canvas.toDataURL("image/jpeg", 0.8);
                      if(fileList[i].size / 1024000 > 1){   //图片体积过大则等比缩放
                          _this.imgScale(base64, 1);
                      }else{
                          _this.imgArr.push({"src": base64});
                      }
                      // console.log(JSON.stringify(_this.imgArr));
                  };
              };
              oReader.readAsDataURL(fileList[i]);
          }
      }
    },
    imgScale(imgUrl,quality) {    //quality  值越小缩放比例越小，也可以传入小数
        let img = new Image();
        let _this = this;
        let canvas = document.createElement('canvas');
        let cxt = canvas.getContext('2d');
        img.src = imgUrl;
        img.onload = function(){
            //缩放后图片的宽高
            let width = img.naturalWidth / quality;
            let height = img.naturalHeight / quality;
            canvas.width = width;
            canvas.height = height;
            cxt.drawImage(this, 0, 0, width, height);
            _this.imgArr.push({"src": canvas.toDataURL('image/jpeg')});
        }
    },
    rotateImg(img, direction,canvas) {//图片旋转
        var min_step = 0;
        var max_step = 3;
        if (img == null)return;
        var height = img.height;
        var width = img.width;
        var step = 2;
        if (step == null) {
            step = min_step;
        }
        if (direction == 'right') {
            step++;
            step > max_step && (step = min_step);
        } else {
            step--;
            step < min_step && (step = max_step);
        }
        var degree = step * 90 * Math.PI / 180;
        var ctx = canvas.getContext('2d');
        switch (step) {
            case 0:
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0);
                break;
            case 1:
                canvas.width = height;
                canvas.height = width;
                ctx.rotate(degree);
                ctx.drawImage(img, 0, -height);
                break;
            case 2:
                canvas.width = width;
                canvas.height = height;
                ctx.rotate(degree);
                ctx.drawImage(img, -width, -height);
                break;
            case 3:
                canvas.width = height;
                canvas.height = width;
                ctx.rotate(degree);
                ctx.drawImage(img, -width, 0);
                break;
        }
    },
    delImage(index) {
      this.imgArr.splice(index, 1);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-li{float:left;width:1.2rem;height:1.2rem;margin-right:.2rem;overflow:hidden;position:relative;}
.list-li img{width:1.2rem;height:1.2rem;}
.img_del{position:absolute;top:3px;right:3px;border:1px solid #fff;border-radius:50%;width:22px;height:22px;background:rgba(0,0,0,.38);}
.img_del:before, .img_del:after{position:absolute;top:9px;left:3px;z-index:2;width:14px;height:1px;background:#fff;-webkit-transform:rotate(45deg);content: "";}
.img_del:after{-webkit-transform:rotate(-45deg);}
</style>