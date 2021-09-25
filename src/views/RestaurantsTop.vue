<template>
  <div class="container py-5">
    <!-- 使用 NavTabs 元件 -->
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>
    <hr />
    <!-- 人氣餐廳 -->
    <RestaurantsTopCards
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
    />
  </div>
</template>

<script>
import NavTabs from "../component/NavTabs.vue";
import RestaurantsTopCards from "../component/RestaurantsTopCards.vue";
import TopAPI from "./../apis/restaurants.js";
import { Toast } from "./../utils/helpers.js";

export default {
  name: "RestaurantsTop",
  components: {
    NavTabs,
    RestaurantsTopCards,
  },
  data() {
    return {
      restaurants: [],
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await TopAPI.getTop();
        // console.log(response);

        this.restaurants = response.data.restaurants;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "warning",
          title: "無法載入資料",
        });
      }
    },
  },
  created() {
    this.fetchData();
  },
};
</script>
