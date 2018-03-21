/*
 * 图片轮播模块
*/

import types from '../types'

const state = {
	slider: []
}

const getters = {
	getSlider: state => state.slider
}

const mutations = {
	[types.GET_SLIDER](state, slider){
		state.slider = slider;
	}
}

export default {
    state,
    getters,
    mutations
}