/* import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import GroupOrder from '@/pages/Center/GroupOrder'
import MyOrder from '@/pages/Center/MyOrder' */
import store from '@/store'
//路由懒加载
const Home = () => import('@/pages/Home')
const Login = () => import('@/pages/Login')
const Register = () => import('@/pages/Register')
const Search = () => import('@/pages/Search')
const Detail = () => import('@/pages/Detail')
const AddCartSuccess = () => import('@/pages/AddCartSuccess')
const ShopCart = () => import('@/pages/ShopCart')
const Trade = () => import('@/pages/Trade')
const Pay = () => import('@/pages/Pay')
const PaySuccess = () => import('@/pages/PaySuccess')
const Center = () => import('@/pages/Center')
const GroupOrder = () => import('@/pages/Center/GroupOrder')
const MyOrder = () => import('@/pages/Center/MyOrder')
export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login,
        meta: {
            isHideFooter:true
        },
        //路由独享守卫
        /* beforeEnter: (to, from,next) => {
            let token = store.state.user.token
            if(token){
                next('/')
            }else{
                next()
            }
        }, */
    },
    {
        path: '/register',
        component: Register,
        meta: {
            isHideFooter:true
        }
    },
    {
        name: 'search',
        path: '/search/:keyWord?',
        component: Search
    },
    {
        name: 'detail',
        path: '/detail/:skuId',
        component: Detail
    },
    {
        name: 'addcartsuccess',
        path: '/addcartsuccess',
        component: AddCartSuccess,
        //路由独享守卫
        beforeEnter: (to, from,next) => {
            let skuNum = to.query.skuNum
            let skuInfo = sessionStorage.getItem('SKUINFO_KEY')
            if(skuNum && skuInfo){
                next()
            }else{
                alert('请输入合法参数')
                next('/')
            }
        },
    },
    {
        name: 'shopcart',
        path: '/shopcart',
        component: ShopCart
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    },
    {
        name: 'register',
        path: '/register',
        component: Register
    },
    {
        name: 'trade',
        path: '/trade',
        component: Trade,
        //路由独享守卫  只有从购物车界面才能去交易界面
        beforeEnter: (to, from,next) => {
            if(from.path === '/shopcart'){
                next()
            }else{
                next('/')
            }
        },
    },
    {
        name: 'pay',
        path: '/pay',
        component: Pay,
        //路由独享守卫  只有从交易界面才能去支付界面
        beforeEnter: (to, from,next) => {
            if(from.path === '/trade'){
                next()
            }else{
                next('/')
            }
        },
    },
    {
        name: 'paysuccess',
        path: '/paysuccess',
        component: PaySuccess,
        //路由独享守卫  只有从支付界面才能去支付成功界面
        beforeEnter: (to, from,next) => {
            if(from.path === '/pay'){
                next()
            }else{
                next('/')
            }
        },

    },
    {
        name: 'center',
        path: '/center',
        redirect: '/center/myorder',
        component: Center,
        children:[
            {
                path:'myorder',
                component: MyOrder
            },
            {
                path:'grouporder',
                component: GroupOrder
            },
            /* {
                path:'',
                redirect: 'myorder'
            } */
        ]
    },
]