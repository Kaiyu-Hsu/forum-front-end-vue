<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />

    <Spinner2 v-if="isLoading" />

    <div class="row">
      <!-- 餐廳卡片 RestaurantCard-->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :category-id="categoryId"
      :current-page="currentPage"
      :total-page="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"
    />

    <div v-if="!isLoading">
      <!-- 此類別目前無餐廳類別資料 -->
      <div v-if="restaurants.length < 1" class="card mb-4 col-md-6 col-lg-4">
        <img
          class="card-img-top"
          src="https://i0.zi.org.tw/kocpc/2018/12/1543750676-fbf8657e3f8c73f3ee693c9bcc02399f.jpg"
          alt="Card image cap"
          width="286px"
          height="180px"
        />
        <div class="card-body">
          <p class="card-text title-wrap text-center">
            此類別目前無餐廳類別資料
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../component/NavTabs.vue";
import RestaurantCard from "../component/RestaurantCard.vue";
import RestaurantsNavPills from "../component/RestaurantsNavPills.vue";
import RestaurantsPagination from "../component/RestaurantsPagination.vue";
import Spinner2 from "./../component/Spinner2.vue";
import restaurantsAPI from "../apis/restaurants.js";
import { Toast } from "./../utils/helpers";

export default {
  name: "Restaurants",
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
    Spinner2,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
      isLoading: true,
    };
  },
  methods: {
    // 帶入參數 page 與 categoryId，呼叫 API 後取得 response
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });

        // 透過解構賦值，將所需要的資料從 response.data 取出
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next,
        } = response.data;

        // 將從伺服器取得的 data 帶入 Vue 內
        this.restaurants = restaurants;
        this.categories = categories;
        this.categoryId = categoryId;
        this.currentPage = page;
        this.totalPage = totalPage;
        this.previousPage = prev;
        this.nextPage = next;

        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得餐廳資料，請稍後再試",
        });
      }
    },
  },
  created() {
    // 以複製進來的網址來搜尋參數並渲染畫面
    const { page = "", categoryId = "" } = this.$route.query;
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
    // 向伺服器請求第一頁且不分餐廳類別的資料
    this.fetchRestaurants({
      queryPage: "",
      queryCategoryId: "",
    });
  },
  beforeRouteUpdate(to, from, next) {
    // 避免撈到 undefined 字串
    const { page = "", categoryId = "" } = to.query;
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId });
    next();
  },
};
</script>

<style scoped>
.card-body {
  border-top: 1px solid rgb(232, 232, 232);
}
</style>
