import { reqAddOrUpdateCart } from "@/api"
import { reqShopList,reqCheckCart,delOneCart } from "@/api"

const state = {
    shopList: []
}

const mutations = {
    RECEIVE_SHOPLIST(state, shopList) {
        state.shopList = shopList
    }
}

const actions = {
    async AddOrUpdateCart({commit},{ skuId, skuNum }) {
        const result = await reqAddOrUpdateCart(skuId, skuNum)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async getShopList({ commit }) {
        const result = await reqShopList()
        if (result.code === 200) {
            commit('RECEIVE_SHOPLIST', result.data)
            console.log('getShopList',result.data);
        }
    },
    async CheckCart({commit},{ skuId, isChecked }) {
        const result = await reqCheckCart(skuId, isChecked)
        console.log('skuId, isChecked',skuId, isChecked);
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async checkedAll({commit,state,dispatch},isChecked){
        let promises = []
        state.shopList.forEach( item => {
            if(item.isChecked === isChecked) return
            let promise = dispatch('CheckCart',{skuId:item.skuId,isChecked})
            promises.push(promise)
        });
        return Promise.all(promises)
    },
    async delOneC({commit},{skuId}){
        const result = await delOneCart(skuId)
        if (result.code === 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('failed'))
        }
    },
    async deleteAll({commit,state,dispatch}){
        let promises = []
        state.shopList.forEach((item)=>{
          if(!item.isChecked) return
          let promise = dispatch('delOneC',{skuId:item.skuId})
          console.log(item.skuId);
          promises.push(promise)
        })
        return Promise.all(promises)
    },
}

const getters = {
    
}

export default {
    state,
    mutations,
    actions,
    getters

}
