import {
    reqBaseCategoryList,
    reqBannerList,
    reqTodayRecommend,
    reqFloors
} from "@/api";


const state = {
    categoryList: [],
    bannerList: [],
    todayRecommend:[],
    floors:[],
}

const mutations = {
    RECEIVE_CATEGORY_LIST(state, categoryList) {
        state.categoryList = categoryList
    },
    RECEIVE_BANNER_LIST(state, bannerList) {
        state.bannerList = bannerList
    },
    RECEIVE_TODAYRECOMMEND(state, todayRecommend) {
        state.todayRecommend = todayRecommend
    },
    RECEIVE_FLOORS(state, floors) {
        state.floors = floors
    },
}
//获取三级分类列表
const actions = {
    async getCategoryList({ commit }) {
        const result = await reqBaseCategoryList()
        if (result.code === 200) {
            const categoryList = result.data
            console.log(categoryList);
            commit('RECEIVE_CATEGORY_LIST', categoryList)
        }
    },
    async getBannerList({ commit }) {
        const result = await reqBannerList()
        if (result.code === 200) {
            const bannerList = result.data
            console.log(bannerList);
            commit('RECEIVE_BANNER_LIST', bannerList)
        }
    },
    async getTodayRecommend({ commit }) {
        const result = await reqTodayRecommend()
        if (result.code === 200) {
            const todayRecommend = result.data
            console.log('todayRecommend',todayRecommend);
            commit('RECEIVE_TODAYRECOMMEND', todayRecommend)
        }
    },
    async getFloors({ commit }) {
        const result = await reqFloors()
        if (result.code === 200) {
            const floors = result.data
            console.log('floors',floors);
            commit('RECEIVE_FLOORS', floors)
        }
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