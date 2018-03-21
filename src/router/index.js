import Vue from 'vue'
import Router from 'vue-router'
//import index from '@/components/index/index'
//import productMore from '@/components/product/productMore'

Vue.use(Router)

export default new Router({
	// mode: 'history',
	routes: [
		{
			path: '/',
			name: 'index',
			//component: index,
			component: resolve => require(['@/components/index/index'], resolve)
		},
		{
			path: '/productMore/:goodsType',
			name: 'productMore',
			//component: productMore,
			component: resolve => require(['@/components/product/productMore'], resolve)
		},
		{
			path: '/user',
			component: resolve => require(['@/components/user/user'], resolve)
			// children: [
			// 	{
			// 		path: 'login',
			// 		component: resolve => require(['@/components/user/login'], resolve),
			// 	},
			// 	{
			// 		path: 'register',
			// 		component: resolve => require(['@/components/user/register'], resolve)
			// 	}
			// ]
		},
		{
			path: '/user/login',
			component: resolve => require(['@/components/user/login'], resolve)
		},
		{
			path: '/user/register',
			component: resolve => require(['@/components/user/register'], resolve)
		},
		{
			path: '/load',
			component: resolve => require(['@/components/load/load'], resolve)
		},
		{
			path: '/loadMore1',
			component: resolve => require(['@/components/load/loadMore1'], resolve)
		},
		{
			path: '/loadMore2',
			component: resolve => require(['@/components/load/loadMore2'], resolve)
		},		
		{
			path: '/avatar',
			component: resolve => require(['@/components/clip/avatar'], resolve)
		},
		{
			path: '/imgView',
			component: resolve => require(['@/components/imgView/imgView'], resolve)
		},
		{
			path: '/lazyLoad',
			component: resolve => require(['@/components/lazyLoad/lazyLoad'], resolve)
		},
		{
			path: '/textSlider',
			component: resolve => require(['@/components/textSlider/textSlider'], resolve)
		},
		{
			path: '/leftSlider',
			component: resolve => require(['@/components/leftSlider/leftSlider'], resolve)
		},
		{
			path: '/leftDelete',
			component: resolve => require(['@/components/leftSlider/leftDelete'], resolve)
		},
		{
			path: '/touchSlider',
			component: resolve => require(['@/components/touchSlider/touchSlider'], resolve)
		},
		{
			path: '/datePicker',
			component: resolve => require(['@/components/datePicker/datePicker'], resolve)
		},
		{
			path: '/date',
			component: resolve => require(['@/components/datePicker/date'], resolve)
		},
		{
			path: '/uploadImg',
			component: resolve => require(['@/components/uploadImg/uploadImg'], resolve)
		},
		{
			path: '/uploadImg1',
			component: resolve => require(['@/components/uploadImg/uploadImg1'], resolve)
		},
		{
			path: '/uploadImg2',
			component: resolve => require(['@/components/uploadImg/uploadImg2'], resolve)
		},
		{
			path: '/fullPage',
			component: resolve => require(['@/components/fullPage/fullPage'], resolve)
		}
	]
})