import Vue from 'vue'
import Vuex from 'vuex'

import common from './modules/common'
import slider from './modules/slider'
import product from './modules/product'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
    	common,
    	slider,
        product
    }
})