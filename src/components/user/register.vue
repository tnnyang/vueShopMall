<template>
	<div class="register">
		<p><img src="../../../static/images/reg_banner.png" alt=""></p>
		<div class="regBox">
			<ul>
		        <li class="phone">
		        	<input type="tel" placeholder="请输入手机号码" maxlength="11" v-model="phone" @keyup="checkPhoneIsEmpty" @blur="phoneBlur" @focus="phoneFocus">
		        	<span @click="clearPhone"><img src="../../../static/images/clear_pwd.png" v-show="phoneClearShow"></span>
		        </li>
		        <li class="pwd">
		        	<input type="password" placeholder="设置登录密码" v-model="pwd" @keyup="checkPwdIsEmpty" @blur="pwdBlur" @focus="pwdFocus" ref="pwd">
		        	<p>
		        		<span class="eye_pwd" @click="changePwdType"><img src="../../../static/images/eyeclose_pwd.png" ref="eye"></span>
		        		<span @click="clearPwd"><img src="../../../static/images/clear_pwd.png" v-show="pwdClearShow"></span>
		        	</p>
		        </li>
		        <li class="vercode">
		        	<input type="tel" placeholder="验证码" maxlength="6" v-model="vercode">
		        	<input type="button" class="send_code" value="获取验证码" @click="sendCode" ref="send">
		            <span class="clear_pwd"><img src="../../../static/images/clear_pwd.png"></span>
		        </li>
		        <p class="invited" @click="invited">我是被邀请来的哦<span class="invit_down" :class="{'open':invitOpen}"><img src="../../../static/images/reg_up.png" alt=""></span></p>
		        <li class="invit" v-show="invitShow">
					<input type="text" placeholder="请输入邀请人手机号码/邀请码" class="invitcode" v-model="invitcode">
		            <span class="clear_pwd" id="clear_pwd"><img src="../../../static/images/clear_pwd.png"></span>
		        </li>
		        <li class="loginbtn"><button type="button" class="gradual_btn btn" @click="registerSubmit">注册</button></li>
		        <li class="checked"><input type="checkbox" class="check" v-model="checked">我已阅读并同意<a href="http://m.hurongclub.com/InfoPublish/GetInvestContract?borrowId=0&code=registration&uid=0">《互融CLUB注册服务协议》</a></li>
		    </ul>
		</div>
	</div>
</template>

<script>
import * as util from '../../util/util'
import * as validateFun from '../../util/validate'
export default {
	data() {
		return {
			phone: "",
			pwd: "",
			vercode: "",
			invitcode: "",
			checked: true,
			phoneClearShow: false,
			pwdClearShow: false,
			invitOpen: false,
			invitShow: false
		}
	},
	methods: {
		checkPhoneIsEmpty() {
			if(this.phone){
				this.phoneClearShow = true;
			}else{
				this.phoneClearShow = false;
			}
		},
		phoneBlur() {
			this.phoneClearShow = false;
		},
		phoneFocus() {
			if(this.phone){
				this.phoneClearShow = true;
			}
		},
		clearPhone() {
			this.phone = "";
		},
		checkPwdIsEmpty() {
			if(this.pwd){
				this.pwdClearShow = true;
			}else{
				this.pwdClearShow = false;
			}
		},
		pwdBlur() {
			this.pwdClearShow = false;
		},
		pwdFocus() {
			if(this.pwd){
				this.pwdClearShow = true;
			}
		},
		clearPwd() {
			this.pwd = "";
		},
		changePwdType() {
			if(this.$refs.pwd.type == "password"){
				this.$refs.pwd.type = "text";
				this.$refs.eye.src = "../../../static/images/eye_pwd.png";
			}else{
				this.$refs.pwd.type = "password";
				this.$refs.eye.src = "../../../static/images/eyeclose_pwd.png";
			}				
		},
		sendCode() {
			if(!this.phone){
				util.alertMsg("请输入手机号");
				return false;
			}else if(validateFun.isMObile(this.phone)){
				util.alertMsg("手机号格式不正确");
				return false;
			}else{
				util.countDown(60, this.$refs.send);
			}
		},
		invited() {
			this.invitShow = !this.invitShow;
			this.invitOpen = !this.invitOpen;
		},
		registerSubmit() {
			if(!this.phone){
				util.alertMsg("请输入手机号");
				return false;
			}else if(validateFun.isMObile(this.phone)){
				util.alertMsg("手机号格式不正确");
				return false;
			}else if(validateFun.checkPwd(this.pwd)){
				util.alertMsg('密码由6-16位数字、字母组成');
				return false;
			}else if(validateFun.lengthCheck(this.vercode, 6)){
				util.alertMsg('请输入6位数的验证码');
				return false;
			}else if(validateFun.isNum(this.vercode)){
				util.alertMsg('验证码只能为数字');
				return false;
			}else if (!this.checked) {
                util.alertMsg("请阅读并同意协议");
                return false;
            }else{
				alert("验证通过");
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*register*/
.register{width: 100%;height: 100%;position: absolute;left: 0;top: 0;background:#fff;}
input{font-size: .34rem;}
.regBox{width: 100%;margin: .4rem auto;padding:0 .5rem;}
.regBox li:not(.loginbtn){margin-bottom:.3rem;overflow:hidden;border-bottom: 1px solid #efefef;font-size:.3rem;color: #343434;}
.regBox input{border:none;height:.86rem;width:85%;float:left;padding: .2rem 0 .2rem .1rem;line-height: .46rem;}
.regBox input::-webkit-input-placeholder{font-size:.3rem;color:#cfcfcf;}
.regBox .btn{width:100%;padding: 0;border-radius: .43rem;-webkit-border-radius:.43rem;color: #fff;font-size:.3rem;height: .86rem;margin: .7rem 0 .3rem;}
.regBox .vercode input{width:57%;float: left;}
.vercode .clear_pwd{float: right;width: .7rem;height: .86rem;padding: .28rem .2rem;}
.regBox input.send_code{width: 28%;height: .46rem;margin:.2rem 1% 0 0;font-size:.28rem;float:right;padding:0;border-left:1px solid #efefef;color: #ef3232;background: none;}
.phone span,.pwd span{float: right;width:.7rem;height: .86rem;padding: .28rem .2rem;margin-right: .07rem;}
.phone span img,.pwd span img{width: .3rem;height: .3rem;}
.clear_pwd img{display: none;}
.regBox li.invit{margin-bottom: 0;}
.regBox li.invited{font-size: .26rem;overflow: hidden;padding-left: .1rem;color: #343434;border:0;margin:0;}
.invited .invit_down{width: .6rem;height: .3rem;padding: .1rem .2rem 0;display: inline-block;}
.invit_down img{width: .2rem;height: .2rem;-webkit-transition: transform 0.2s ease-out;transition: transform 0.2s ease-out;}
.invit_down.open img{ -webkit-transform: rotateZ(90deg); transform: rotateZ(90deg);}
.regBox input.invitcode{margin-top: .1rem;width: 72%;float: left;}
.invit .clear_pwd{float: right;width: .7rem;height: .86rem;padding: .28rem .2rem;margin-right: .07rem;}
.regBox .checked input{width:.22rem;height:.22rem;background:url(../../../static/images/check.png) no-repeat 0 center/.22rem .22rem;margin-right: .05rem;}
.regBox li.checked{font-size:.24rem;line-height:.44rem;height:.44rem;border:none;}
.checked a{color:#ef3232;}
.regBox .checked input.check:checked{background:url(../../../static/images/checked.png) no-repeat 0 center/.22rem .22rem;}
.pwd input{width:73%;}
</style>
