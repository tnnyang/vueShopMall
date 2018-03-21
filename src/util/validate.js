/*
* 正则验证
*/

//验证手机号
export function isMObile(value){
    var val = value.replace(/\ +/g, "");
    if (!value.match("^((13[0-9])|(14[0-9])|(15[0|1|2|3|5|6|7|8|9])|(17[0-9])|18[0-9])\\d{8}|(170\\d{8})$")) {
        return true;
    }
}
//长度验证
export function lengthCheck(value, length){
    var value = value.replace(/\ +/g, "");    
    if(value.length < length){
        return true;
    }
}
//密码验证
export function checkPwd(value){
    var value = value.replace(/\ +/g, "");      
    if(!value.match(/^[0-9a-zA-Z]{6,16}$/)){
        return true;
    }
}

export function isEqual(value1, value2){
    var value = value.replace(/\ +/g, "");  
    if(value1 != value2){
        return true;
    }
}

//数字
export function isNum(value) {
    if (!value.match(/^\d+$/)) {
        return true;
    }
}

//金额
export function isDecimal(value) {
    if (!value.match(/^\d*\.?\d{1,2}$/)) {
        return true;
    }
}