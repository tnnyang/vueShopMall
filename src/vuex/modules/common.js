import axios from 'axios'
import types from '../types'

const state = {
	showAlert: false,
	alertMsg: ""
}

const getters = {
	showAlert: state => state.showAlert,
	alertMsg: state => state.alertMsg
}

const actions = {
	getProductList({commit, state}){
		axios.get('src/data/data.json').then(response => {
			response = response.data;
			if (response.status == 0) {
				commit(types.GET_PRODUCT_LIST, response.products);			
			}
		}, response => {
		// error callback
		});
	},
	getSlider({commit}, state){
		axios.get('src/data/data.json').then(response => {
			response = response.data;	
			if (response.status == 0) {
				commit(types.GET_SLIDER, response.slider);			
			}
		}, response => {
		// error callback
		});
	},
	showAlert({commit}, status){
		commit(types.SHOW_ALERT, status)
	},
	alertMsg({ commit }, str) {
        commit(types.ALERT_MSG, str)
    }
}

const mutations = {
	[types.SHOW_ALERT](state, status){
		state.showAlert = status
	},
	[types.ALERT_MSG](state, str){
		state.alertMsg = str
	}
}

export default {	
	state,
	getters,
	actions,
	mutations
}