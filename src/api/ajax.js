//axios二次封装
import axios from 'axios'
import NProgress from 'nprogress' //进度条
import 'nprogress/nprogress.css'
import store from '@/store'

//基础路径 超时
const service = axios.create({
    baseURL:'/api',
    timeout:20000
})

//请求拦截器
service.interceptors.request.use((config)=>{
    NProgress.start()//进度条开始
    let userTempId = store.state.user.userTempId
    if(userTempId){
        config.headers.userTempId = userTempId
    }
    //携带token
    let token = store.state.user.token
    if(token){
        config.headers.token = token
    }
    return config //必须返回 给后面用
},()=>{})
//响应拦截器
service.interceptors.response.use(
    response => {
        NProgress.done()//进度条结束

        return response.data
    },
    error => {
        NProgress.done()//进度条结束
        alert(error.message||'未知的错误')

        return Promise.reject(error)
    }
)
export default service