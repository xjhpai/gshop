import Vue from "vue";
import VueRouter from "vue-router";
import routes from './routes.js'
import store from '@/store'

Vue.use(VueRouter)

const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, onComplete, onAbort) {
    if (onComplete===undefined && onAbort===undefined) {
      return originPush.call(this, location, onComplete, onAbort).catch(() => {})
    } else {
      originPush.call(this, location, onComplete, onAbort)
    }
 }
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
   if (onComplete===undefined && onAbort===undefined) {
     return originReplace.call(this, location, onComplete, onAbort).catch(() => {})
   } else {
     originReplace.call(this, location, onComplete, onAbort)
   }
}
const router = new VueRouter({
    mode:'history',
    routes,
    scrollBehavior() {
      // 始终滚动到顶部
      return { x: 0,y:0 }
    }
})
//token校验
router.beforeEach(async(to,from,next)=>{
  let token = store.state.user.token

  if(token){
    //登陆过想去登录页
    if(to.path === '/login'){
      //跳转到首页
      next('/')
      console.log(store.state.user.userInfo);
    }else{
      //登录了，用户信息存在，且不去登录页 直接放行
      if(store.state.user.userInfo.length !== 0){
        next()
      }else{
        //登录了，用户信息不存在，且不去登录页 根据token获得用户信息
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          alert('token已过期')
          store.dispatch('resetUserInfo')
          next('/login?redirect='+to.path)
        }
      }
    }
  }else{
    //全局导航守卫
    //用户未登录           交易                                支付                            用户中心相关
    if( to.path.indexOf('/trade') === 0 || to.path.startsWith('/pay') || to.path.startsWith('/center')){
      next('/login?redirect='+to.path)
    }else{
      next()
    }
  }
})

export default router