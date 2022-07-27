/* 所有接口的接口请求函数 */
import ajax from './ajax'
import mockAjax from './mockAjax'
/* 首页三级分类 /api/basecategorylist   get */
export function reqBaseCategoryList() {
    return ajax({
        url: '/basecategorylist',
        /* methods: 'post' */
    })
}
export const reqBannerList = () => ajax('/bannerlist')
export const reqSearch = (searchParams) => ajax.post('/list', searchParams)
/* export const reqDetailInfo = (skuId) => ajax.get('/detail',skuId) */
export const reqDetailInfo = (skuId) => {
    return ajax({
        url: `/detail/${skuId}`,
        method: 'get'
    })
}
//添加购物车
export const reqAddOrUpdateCart = (skuId,skuNum) => {
    return ajax({
        url: `/addtocart/${skuId}/${skuNum}`,
        method: 'post'
    })
}
//购物车列表
export const reqShopList = () => {
    return ajax({
        url: '/cart/cartlist',
        method: 'get'
    })
}
//修改购物车
export const reqCheckCart = (skuId,isChecked) => {
    return ajax({
        url: `/cart/checkCart/${skuId}/${isChecked}`,
        method: 'get'
    })
}
//删除购物车
export const delOneCart = (skuId) => {
    return ajax({
        url: `/cart/deleteCart/${skuId}`,
        method: 'delete'
    })
}
//注册
export const reqRegister = (userInfo) => {
    return ajax({
        url: '/user/password/register',
        method: 'post',
        data:userInfo
    })
}
//登录
export const reqLogin = (userInfo) => {
    return ajax({
        url: '/user/passport/login',
        method: 'post',
        data:userInfo
    })
}
//根据token获取用户信息
export const reqUserInfo = () => {
    return ajax({
        url: '/user/passport/auth/getUserInfo',
        method: 'get',
    })
}
//退出
export const reqLogout = () => {
    return ajax({
        url: '/user/passport/logout',
        method: 'get',
    })
}
//订单页面
export const reqTrade = () => {
    return ajax({
        url: '/order/auth/trade',
        method: 'get',
    })
}
//提交订单
export const reqSubmitOrder = (tradeNo,tradeInfo) => {
    return ajax({
        url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
        method: 'post',
        data:tradeInfo
    })
}
//获取支付信息
export const reqPayInfo = (orderId) => {
    return ajax({
        url: `/payment/weixin/createNative/${orderId}`,
        method: 'get',
    })
}
//查询订单支付状态
export const reqPayStatus = (orderId) => {
    return ajax({
        url: `/payment/weixin/queryPayStatus/${orderId}`,
        method: 'get',
    })
}
//获取订单列表
export const reqOrderList = (page,limit) => {
    return ajax({
        url: `/order/auth/${page}/${limit}`,
        method: 'get',
    })
}
export const reqTodayRecommend = () => mockAjax('/todayrecommend')
export const reqFloors = () => mockAjax('/floors')


/* reqTodayRecommend().then(result => {
    console.log('result:',result);
})
reqFloors().then(result => {
    console.log('result:',result);
}) */