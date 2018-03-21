<template>
<div class="login">
	<div class="login_head">
	    <img src="../../../static/images/account_tou.png" alt="">
	    <p>更多精彩，等你到来</p>
	</div>
	<div class="loginBox">
	    <ul>
	        <li class="phone">
	        	<input type="tel" placeholder="手机号码" maxlength="11" v-model="phone" @keyup="checkPhoneIsEmpty" @blur="phoneBlur" @focus="phoneFocus" />
	            <span @click="clearPhone"><img src="../../../static/images/clear_pwd.png" v-show="phoneClearShow"></span>
	        </li>
	        <li class="pwd">
	        	<input type="password"  placeholder="请输入密码" v-model="pwd" @keyup="checkPwdIsEmpty" @blur="pwdBlur" @focus="pwdFocus" ref="pwd"/>
	            <p>
	                <span class="eye_pwd" @click="changePwdType"><img src="../../../static/images/eyeclose_pwd.png" ref="eye"></span>
	                <span @click="clearPwd"><img src="../../../static/images/clear_pwd.png" v-show="pwdClearShow"></span>
	            </p>
	        </li>
	        <li class="loginbtn"><button type="button" class="gradual_btn btn" @click="loginSubmit">登录</button></li>
	    </ul>
	</div>
	<p class="option">
		<router-link to="/user/forgetPwd">忘记密码</router-link>
		<router-link to="/user/register">快速注册</router-link>
	</p>
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
				phoneClearShow: false,
				pwdClearShow: false
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
			loginSubmit() {
				if(!this.phone){
					util.alertMsg("请输入手机号");
					return false;
				}else if(validateFun.isMObile(this.phone)){
					util.alertMsgUrl("手机号格式不正确","http://www.baidu.com");
					return false;
				}else if(validateFun.checkPwd(this.pwd)){
					util.alertMsg('密码由6-16位数字、字母组成');
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
.login{width: 100%;height: 100%;position: absolute;left: 0;top: 0;background:#fff;}
.login_head{overflow: hidden;margin: .8rem auto 0;}
.login_head img{width: 1.27rem;height: 1.27rem;margin: 0 auto;}
.login_head p{font-size: .3rem;color: #343434;text-align: center;margin-top: .5rem;}
.loginBox{width: 100%;margin: 1.6rem auto .5rem;padding:0 .5rem;}
.loginBox li:not(.loginbtn){margin-bottom:.3rem;overflow:hidden;border-bottom: 1px solid #efefef;font-size:.3rem;color: #343434;}
.loginBox input{border:none;height:.86rem;width:100%;float:left;padding: .2rem 0 .2rem .1rem;line-height: .46rem;}
.loginBox input::-webkit-input-placeholder{font-size:.3rem;color:#cfcfcf;}
.loginBox .btn{width:100%;padding: 0;border-radius: .43rem;-webkit-border-radius:.43rem;color: #fff;height: .86rem;margin-top: .7rem;}
.phone input{width: 85%;}
.pwd input{width: 73%;}
.phone span, .pwd span{float: right;width:.7rem;height: .86rem;padding: .28rem .2rem;margin-right: .07rem;}
.phone span img,.pwd span img{width: .3rem;height: .3rem;}
.option{text-align: center;font-size: .24rem;margin-top: 2.64rem;}
.option a{display: inline-block;color: #909090;padding: 0 .3rem;}
.option a:nth-child(1){border-right:1px solid #efefef;}
.option a:nth-child(2){color:#ef3232;}
</style>
