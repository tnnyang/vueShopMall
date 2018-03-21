/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlParse () {
	let url = window.location.search;
	let obj = {};
	let reg = /[?&][^?&]+=[^?&]+/g;
	let arr = url.match(reg);
	// ['?id=12345', '&a=b']
	if (arr) {
		arr.forEach((item) => {
			let tempArr = item.substring(1).split('=');
			let key = decodeURIComponent(tempArr[0]);
			let val = decodeURIComponent(tempArr[1]);
			obj[key] = val;
		});
	}
	return obj;
};

import store from '../vuex/'
/*
* 验证公共提示alertMsg-只有提示没有回调函数
* 提示公共提示alertMsgUrl-既有提示也有提示消失后的跳转
*/
export function alertMsg(str){
	store.dispatch('showAlert', true);
    store.dispatch('alertMsg', str);
    // setTimeout(() => {
    //     store.dispatch('showAlert', false);
    // },2000);
}

export function alertMsgUrl(str, url){
	store.dispatch('showAlert', true);
    store.dispatch('alertMsg', str);
    setTimeout(() => {
        window.location.href = url;
    },3500);
}

//重置倒计时
let countDownFlag = false;
export function resetCountDown(){
    countDownFlag = true;
}

//获取验证码倒计时
export function countDown(time, el){
	if(!countDownFlag){
		let timer = setInterval(() => {
	        time --;	        
	        if (time == 0) {
	            clearInterval(timer);
	            el.value = "重新获取";
	            el.removeAttribute("disabled");
	        }else{
	        	el.setAttribute("disabled",true);
	        	el.value = time + "s";
	        }
	    }, 1000);
	}else{
		el.value = "获取验证码";
        el.removeAttribute("disabled");
	}
}