import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import SignIn from "../views/SignIn.vue";
import Restaurants from "../views/Restaurants.vue";
import store from "./../store";

Vue.use(VueRouter);

const router = new VueRouter({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "root",
      redirect: "/signin",
    },
    {
      path: "/signin",
      name: "sign-in",
      component: SignIn,
    },
    {
      path: "/signup",
      name: "sign-up",
      component: () => import("../views/SignUp.vue"),
    },
    {
      path: "/restaurants",
      name: "restaurants",
      component: Restaurants,
    },
    {
      path: "/restaurants/feeds",
      name: "restaurants-feeds",
      component: () => import("../views/RestaurantsFeeds.vue"),
    },
    {
      path: "/restaurants/top",
      name: "restaurants-tops",
      component: () => import("../views/RestaurantsTop.vue"),
    },
    {
      path: "/restaurant/:id",
      name: "restaurant",
      component: () => import("../views/Restaurant.vue"),
    },
    {
      path: "/restaurant/:id/dashboard",
      name: "restaurant-dashboard",
      component: () => import("../views/RestaurantDashboard.vue"),
    },
    {
      path: "/users/top",
      name: "users-top",
      component: () => import("../views/UsersTop.vue"),
    },
    {
      path: "/users/:id/edit",
      name: "user-edit",
      component: () => import("../views/UserProfileEdit.vue"),
    },
    {
      path: "/users/:id",
      name: "user",
      component: () => import("../views/User.vue"),
    },
    {
      path: "/admin",
      exact: true,
      redirect: "/admin/restaurants", //要完全一樣才會渲染此畫面
    },
    {
      path: "/admin/restaurants",
      name: "admin-restaurants",
      component: () => import("../views/AdminRestaurants.vue"),
    },
    {
      path: "/admin/restaurants/new",
      name: "admin-restaurants-new",
      component: () => import("../views/AdminRestaurantNew.vue"),
    },
    {
      path: "/admin/restaurants/:id/edit",
      name: "admin-restaurant-edit",
      component: () => import("../views/AdminRestaurantEdit.vue"),
    },
    {
      path: "/admin/restaurants/:id",
      name: "admin-restaurant",
      component: () => import("../views/AdminRestaurant.vue"),
    },
    {
      path: "/admin/categories",
      name: "admin-categories",
      component: () => import("../views/AdminCategories.vue"),
    },
    {
      path: "/admin/users",
      name: "admin-users",
      component: () => import("../views/AdminUsers.vue"),
    },
    {
      path: "*",
      name: "not-found",
      component: NotFound,
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  // 從 localStorage 取出 token
  const token = localStorage.getItem("token");
  // 預設是尚未驗證
  let isAuthenticated = false;

  // 如果有 token 的話才驗證
  if (token) {
    // 取得驗證成功與否以 fetchCurrentUser 回傳的 true / false 作為判斷依據
    isAuthenticated = await store.dispatch("fetchCurrentUser");
  }

  // 對於不需要驗證 token 的頁面
  const pathsWithoutAuthentication = ["sign-in", "sign-up"];

  // 如果 token 無效且進入需要驗證的頁面則轉址到登入頁
  if (!isAuthenticated && !pathsWithoutAuthentication.includes(to.name)) {
    next("/signin");
    return;
  }
  // 如果 token 有效且進入不需要驗證到頁面則轉址到餐廳首頁
  if (!isAuthenticated && pathsWithoutAuthentication.includes(to.name)) {
    next("/restaurants");
    return;
  }

  next();
});

export default router;
