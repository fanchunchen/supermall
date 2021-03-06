// const originalPush = VueRouter.prototype.push
//   VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

import Vue from 'vue'
import VueRouter from 'vue-router'
import Detail from 'views/detail/Detail'



const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')




// const VueRouterPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push (to) {
//   return VueRouterPush.call(this, to).catch(err => err)
// }

Vue.use(VueRouter)


const routes = [
    { path: '', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/category', component: Category },
    { path: '/cart', component: Cart },
    { path: '/profile', component: Profile },
    {path:'/detail/:iid',component:Detail}


]




export default new VueRouter({
    routes,
    mode: "history"
})


