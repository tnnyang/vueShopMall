/*
 * 商品模块
*/

import types from '../types'

const state = {
	productDetailShow: false,
	selectDetail: {},
	productList: []
}

const getters = {
	productDetailShow: state => state.productDetailShow,
	selectDetail: state => state.selectDetail,
	getProductList: state => state.productList
	// productDetailShow(state){
	// 	return state.productDetailShow;
	// }
}

const actions = {
	detailShowEvent({commit, state}, item){
		commit(types.PRODUCT_DETAIL_SHOW, item);
	},
	detailHideEvent({commit, state}){
		commit(types.PRODUCT_DETAIL_HIDE);
	}
}

const mutations = {
	[types.PRODUCT_DETAIL_SHOW](state, item){
		state.productDetailShow = true;
		state.selectDetail = item;
	},
	[types.PRODUCT_DETAIL_HIDE](state){
		state.productDetailShow = false;
	},
	[types.GET_PRODUCT_LIST](state, productData){		
		state.productList = productData;
	}
}

export default {
    state,
    actions,
    getters,
    mutations
}