import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
// import SignUp from '../views/SignUp.vue' 改成動態載入
import Restaurants from '../views/Restaurants.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/restaurants',
    },
    {
      path: '/signin',
      name: 'sign-in',
      component: SignIn,
    },
    {
      path: '/signup',
      name: 'sign-up',
      component: () => import('../views/SignUp.vue'),
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: Restaurants,
    },
    {
      path: '/restaurants/feeds',
      name: 'restaurants-feeds',
      component: () => import ('../views/RestaurantsFeeds.vue'),
    },
    {
      path: '/restaurants/top',
      name: 'restaurants-tops',
      component: () => import ('../views/RestaurantsTop.vue'),
    },
    {
      path: '/restaurant/:id',
      name: 'restaurant',
      component: () => import ('../views/Restaurant.vue'),
    },
    {
      path: '/restaurant/:id/dashboard',
      name: 'restaurant-dashboard',
      component: () => import ('../views/RestaurantDashboard.vue'),
    },
    {
      path: '/users/top',
      name: 'users-top',
      component: () => import ('../views/UsersTop.vue'),
    },
    {
      path: '/users/:id',
      name: 'user',
      component: () => import('../views/User.vue')
    },
    {
      path: '/admin',
      exact: true,
      redirect: '/admin/restaurants' //要完全一樣才會渲染此畫面
    },
    {
      path: '/admin/restaurants',
      name: 'admin-restaurants',
      component: () => import('../views/AdminRestaurants.vue')
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound,
    }
  ]
})

export default router
