import Vue from "vue";
import Vuex from 'vuex'

import user from "./modules/user"
import home from "./modules/home"
import search from "./modules/search"
import detail from "./modules/detail"
import shopCart from "./modules/shopCart"
import trade from "./modules/trade"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        home,
        search,
        detail,
        shopCart,
        trade
    }
})