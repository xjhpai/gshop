import { reqDetailInfo } from "@/api"

const state = {
    skuDetailInfo: {}
}

const mutations = {
    RECEIVE_SKUDETAILINFO(state, skuDetailInfo) {
        state.skuDetailInfo = skuDetailInfo
    }
}

const actions = {
    async getSkuDetailInfo({ commit }, skuId) {
        const result = await reqDetailInfo(skuId)
        if (result.code === 200) {
            commit('RECEIVE_SKUDETAILINFO', result.data)
        }
    }
}

const getters = {
    categoryView(){
        return state.skuDetailInfo.categoryView || {}
    },
    spuSaleAttrList(){
        return state.skuDetailInfo.spuSaleAttrList || []
    },
    skuInfo(){
        return state.skuDetailInfo.skuInfo || {}
    },
}

export default {
    state,
    mutations,
    actions,
    getters

}
