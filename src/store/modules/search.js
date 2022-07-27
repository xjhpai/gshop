import {
    reqSearch
} from "@/api";


const state = {
    productList: {}

}

const mutations = {
    RECEIVE_LIST(state, productList) {
        state.productList = productList
    },
}

const actions = {
    async getSearch({ commit }, searchParams) {
        //浅拷贝 不删除search组件中的options中的数据
        searchParams = {...searchParams}
        Object.keys(searchParams).forEach( key => {
            if(searchParams[key] === ''|| Array.isArray(searchParams[key]) && searchParams[key].length === 0){
                delete searchParams[key]
            }
        })
        const result = await reqSearch(searchParams)
        if (result.code === 200) {
            console.log('productList', result.data);
            commit('RECEIVE_LIST', result.data)
        }
    },

}
const getters = {
    goodsList(state) {
        return state.productList.goodsList || []
    },
    trademarkList(state) {
        return state.productList.trademarkList || []
    },
    attrsList(state) {
        return state.productList.attrsList || []
    },
    total(state){
        return state.productList.total ||  0
    },
    pageSize(state){
        return state.productList.pageSize ||  5
    },
    pageNo(state){
        return state.productList.pageNo ||  1
    },
}

export default {
    state,
    mutations,
    actions,
    getters
}