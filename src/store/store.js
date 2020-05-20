import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks'
import profile from './modules/profile'

import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    modules:{
        stocks,
        profile
    }
})