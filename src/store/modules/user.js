import { getUserTempId,getToken,setToken,removeToken } from '@/utils/userAbout'
import {reqLogin, reqRegister, reqUserInfo,reqLogout} from '@/api'

const state = {
    userTempId: getUserTempId(),
    token:getToken(),
    userInfo:[]
}

const mutations = {
    RECEIVE_TOKEN(state,token){
        state.token = token
    },
    RECEIVE_USERINFO(state,userInfo){
        state.userInfo = userInfo
    },
    RESET_USERINFO(state){
        state.userInfo = []
        state.token = removeToken()
    },
}

const actions = {
    async register({ commit },{phone,code,password} ) {
        const result = await reqRegister({phone,code,password})
        if (result.code === 200) {
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }

    },
    async login({commit},{phone,password}){
        console.log('userInfo',phone,password);
        const result = await reqLogin({phone,password})
        if(result.code === 200){
            setToken(result.data.token)
            commit('RECEIVE_TOKEN',result.data.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    async getUserInfo({commit}){
        const result =  await reqUserInfo()
        if(result.code === 200){
            commit('RECEIVE_USERINFO',result.data[0])
            console.log(result.data[0]);
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    async resetUserInfo({commit}){
        removeToken()
        commit('RESET_USERINFO') 
    },
    async logout({commit}){
        const result =  await reqLogout()
        if(result.code === 200){
            commit('RESET_USERINFO')
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
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