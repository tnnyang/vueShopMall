var myScroll;
function loaded() {
	var pullDownEl = $('#pullDown'),
		pullDownHeight = pullDownEl.height(),
		pullUpEl = $('#pullUp'),	
		pullUpHeight = pullUpEl.height(),
		pullDownLabel = $('.pullDownLabel'),
		pullUpLabel = $('.pullUpLabel');
	
	myScroll = new iScroll('wrapper', {
	    topOffset: pullDownHeight,
	    vScrollbar: false,  //是否显示垂直滚动条
		onRefresh: function () {
			if (pullDownEl.hasClass('loading')) {
				pullDownEl.removeClass();
				pullDownLabel.html("下拉刷新");
			} else if (pullUpEl.hasClass('loading')) {
				pullUpEl.removeClass();
				pullUpLabel.html("上拉加载更多");
			}
		},
		onScrollMove: function () {
			if (this.y > 5 && !pullDownEl.hasClass('flip')) {
				pullDownEl.removeClass().addClass('flip');
				pullDownLabel.html("释放立即刷新");
				this.minScrollY = 0;
			} else if (this.y < 5 && pullDownEl.hasClass('flip')) {
				pullDownEl.removeClass();
				pullDownLabel.html("下拉刷新");
				this.minScrollY = -pullDownHeight;
			} else if (this.y < (this.maxScrollY - 5) && this.dirY && this.dirY > -1 && !pullUpEl.hasClass('flip')) {
				pullUpEl.removeClass().addClass('flip');
				pullUpLabel.html("释放加载更多");
				this.maxScrollY = this.maxScrollY;
			} else if (this.y > (this.maxScrollY + 5) && pullUpEl.hasClass('flip')) {
				pullUpEl.removeClass();
				pullUpLabel.html("上拉加载更多");
				this.maxScrollY = pullUpHeight;
			}
		},
		onScrollEnd: function () {
			if (pullDownEl.hasClass('flip')) {
				pullDownEl.removeClass().addClass('loading');
				pullDownLabel.html("加载中...");				
				pullDownAction();
			} else if (pullUpEl.hasClass('flip')) {
				pullUpEl.removeClass().addClass('loading');
				pullUpLabel.html("加载中...");				
				pullUpAction();
			}           
		}
	});
}


/*以下加了一个Request["touchmove"]是否存在的判断的原因是在投资详情页面也引用了这个js，
* 而在滚动页面时由于禁用了浏览器的默认行为，
* 就会导致超出一屏的页面无法滚动，
* 在其他的比如只有触摸上拉加载更多的页面，
* 由于使用的是iscroll的滚动而非浏览器的默认滚动行为，
* 故需要禁用浏览器的默认行为，才能使得触摸上拉的行为更好地执行。
* 使用方法只需在跳转到投资详情页面时给跳转地址加一个touchmove=1的参数即可。
*/

//获取url中的参数   使用方法Request["platform"]   platform为地址栏参数名
function getRequest() {
    var url = window.location.search;
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}
var Request = new Object();
Request = getRequest();

if(!Request["touchmove"]){
	document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
}
document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 200); }, false);