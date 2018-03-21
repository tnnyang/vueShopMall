<template>
  <div>
    <h5 class="content-header">图片列表</h5>
    <div class="image-list">
      <div class="list-default-img" v-show="isPhoto" @click.stop="addPic">
        <img src="../../../static/images/upload.png" />
        <span>请选择或者拍照上传照片</span>
        <input type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="onFileChange" style="display:none;" ref="upload_file">
      </div>
      <ul class="list-ul" v-show="!isPhoto">
        <li class="list-li" v-for="(item, index) in imgUrls">
          <a class="list-link" @click='previewImage(item)'>
            <img :src="item">
          </a>
          <span class="list-img-close" @click='delImage(index)'>删除</span>
        </li>
        <li class="list-li-add">
          <span class="add-img" @click.stop="addPic">添加图片</span>
        </li>
      </ul>
    </div>
    <div class="add-preview" v-show="isPreview" @click="closePreview">
      <img :src="previewImg">
    </div>
    <p @click="saveImage">提交</p>
  </div>
</template>

<script>
import 'lrz/dist/lrz.bundle'
import axios from 'axios'
export default {
  data() {
    return {
      imgUrls: [],
      urlArr: [],
      isPhoto: true,
      btnTitle: '',
      isModify: false,
      previewImg:'',
      isPreview: false
    }
  },
  watch: {
    imgUrls: 'toggleAddPic'
  },
  methods: {
    toggleAddPic() {
      let vm = this;
      if(vm.imgUrls.length >= 1) {
        vm.isPhoto = false;
      } else {
        vm.isPhoto = true;
      }
    },
    addPic(e) {
      let vm = this;
      vm.$refs.upload_file.click();
      return false;
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if(!files.length) return;
      this.createImage(files, e);
    },
    createImage(file, e) {
      let vm = this;
      lrz(file[0], { width: 1000 }).then(function(rst) {
        vm.imgUrls.push(rst.base64);
        return rst;


        // var formData = new FormData();
        // formData.append("token", "iN7NgwM31j4-BZacMjPrOQBs34UG1maYCAQmhdCV:aGtu0aGiPLvai3E2hEJskXraevk=:eyJzY29wZSI6ImNteGoiLCJkZWFkbGluZSI6MTAwMDAwMDAwMDAwMDAwMDAwMDAwfQ==");  
        // formData.append("file", rst.file);


        // // axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';
        // axios.post("http://upload.qiniu.com/",formData).then(response => {
        //   if("1" == response.error) {  
        //       alert(response.message);  
        //       return false;  
        //   }else {  
        //       alert(response.thumbnail);
        //       return false;  
        //   }  
        // });
        // return rst;


      }).always(function() {
        // 清空文件上传控件的值
        e.target.value = null;
      });
    },
    delImage(index) {
      let vm = this;
      vm.imgUrls.splice(index, 1);
    },
    previewImage(url){
      let vm = this;
      vm.isPreview = true;
      vm.previewImg = url;
    },
    closePreview(){
      let vm = this;
      vm.isPreview = false;
      vm.previewImg = "";
    },
    saveImage(){
      let vm = this;
      let urlArr = [],
      imgUrls = this.imgUrls;
      for(let i = 0; i < imgUrls.length; i++) {
        if(imgUrls[i].indexOf('file') == -1) {
          urlArr.push(imgUrls[i].split(',')[1]);
        }else {
          urlArr.push(imgUrls[i]);
        }
      }      
      //数据传输操作
      console.log(urlArr);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-default-img img{width:.64rem;margin:0 auto;}
.list-link img{width:120px;}
</style>