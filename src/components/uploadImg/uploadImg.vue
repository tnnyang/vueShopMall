<template>
  <div class="upload">
    <div class="upload_warp">
      <div class="upload_warp_left" @click="fileClick">
        <img src="../../../static/images/upload.png">
        <input @change="fileChange($event)" type="file" ref="upload_file" multiple style="display: none"/>
      </div>
      <div class="upload_warp_right" @drop="drop($event)" @dragenter="dragenter($event)" @dragover="dragover($event)">
        或者将文件拖到此处
      </div>
    </div>
    <div class="upload_warp_text">
      选中{{imgList.length}}张文件，共{{bytesToSize(this.size)}}
    </div>    
    <div class="upload_warp_img" v-show="imgList.length!=0">
      <div class="upload_warp_img_div" v-for="(item,index) of imgList">
        <div class="upload_warp_img_div_top">
          <div class="upload_warp_img_div_text">
            {{item.file.name}}
          </div>
          <img src="../../../static/images/del.png" class="upload_warp_img_div_del" @click="fileDel(index)">
        </div>
        <img :src="item.file.src">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      imgList: [],
      size: 0
    }
  },
  methods:{
    fileClick() {
        this.$refs.upload_file.click()
    },
    fileChange(el) {
        if (!el.target.files[0].size) return;
        this.fileList(el.target);
        el.target.value = ''
    },
    fileList(fileList) {
        let files = fileList.files;
        for (let i = 0; i < files.length; i++) {
            //判断是否为文件夹
            if (files[i].type != '') {
                this.fileAdd(files[i]);
            } else {
                //文件夹处理
                this.folders(fileList.items[i]);
            }
        }
    },
    //文件夹处理
    folders(files) {
        let _this = this;
        //判断是否为原生file
        if (files.kind) {
            files = files.webkitGetAsEntry();
        }
        files.createReader().readEntries(function (file) {
            for (let i = 0; i < file.length; i++) {
                if (file[i].isFile) {
                    _this.foldersAdd(file[i]);
                } else {
                    _this.folders(file[i]);
                }
            }
        })
    },
    foldersAdd(entry) {
        let _this = this;
        entry.file(function (file) {
            _this.fileAdd(file)
        })
    },
    fileAdd(file) {
        //总大小
        this.size = this.size + file.size;
        //判断是否为图片文件
        if (file.type.indexOf('image') == -1) {
            file.src = 'wenjian.png';
            this.imgList.push({
                file
            });
        } else {
            let reader = new FileReader();
            reader.vue = this;
            reader.readAsDataURL(file);
            reader.onload = function () {
                file.src = this.result;
                this.vue.imgList.push({
                    file
                });
            }
        }
    },
    fileDel(index) {
        this.size = this.size - this.imgList[index].file.size;//总大小
        this.imgList.splice(index, 1);
    },
    bytesToSize(bytes) {
        if (bytes === 0) return '0 B';
        let k = 1000, // or 1024
            sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
    },
    dragenter(el) {
        el.stopPropagation();
        el.preventDefault();
    },
    dragover(el) {
        el.stopPropagation();
        el.preventDefault();
    },
    drop(el) {
        el.stopPropagation();
        el.preventDefault();
        this.fileList(el.dataTransfer);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.upload_warp_img_div_top {
  position: absolute;
  top: 0;
  width: 100%;
  height: .6rem;
  background-color: rgba(0, 0, 0, 0.4);
  line-height: .6rem;
  text-align: left;
  color: #fff;
  font-size: .24rem;
  text-indent: 4px;
}

.upload_warp_img_div_text {
  white-space: nowrap;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.upload_warp_img_div img {
  width:2.4rem;
  height:2.4rem;
  border: 1px solid #ccc;
}
.upload_warp_img_div .upload_warp_img_div_del {
  position: absolute;
  top: .12rem;
  width: .32rem;
  height: .32rem;
  right: .1rem;
  border:0;
}
.upload_warp_img_div {
  position: relative;
  margin: 0 .4rem .3rem .2rem;
  float: left;
  line-height: 2.4rem;
  display: table-cell;
  text-align: center;
  background-color: #eee;
  cursor: pointer;
}

.upload_warp_img {
  border-top: 1px solid #D2D2D2;
  padding: 14px 0 0 14px;
  overflow: hidden
}

.upload_warp_text {
  text-align: left;
  margin-bottom: 10px;
  padding-top: 10px;
  text-indent: 14px;
  border-top: 1px solid #ccc;
  font-size: 14px;
}

.upload_warp_right {
  float: left;
  width: 57%;
  margin-left: 2%;
  height: 100%;
  border: 1px dashed #999;
  border-radius: 4px;
  line-height: 1rem;
  color: #999;
  text-align:center;
}

.upload_warp_left img {
  width:.64rem;
  height:.64rem;
  margin: .2rem auto 0;
}

.upload_warp_left {
  float: left;
  width: 40%;
  height: 100%;
  border: 1px dashed #999;
  border-radius: 4px;
  cursor: pointer;
}

.upload_warp {
  margin: .28rem;
  height: 1rem;
}

.upload {
  border: 1px solid #ccc;
  background-color: #fff;
  width: 6.5rem;
  box-shadow: 0px 1px 5px #ccc;
  border-radius: 4px;
  margin:.2rem auto 0;
}
</style>