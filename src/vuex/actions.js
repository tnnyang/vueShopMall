import axios from 'axios'
import types from './types'

const actions = {
	getProductList({commit}, state){
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
	}
}

export default actions