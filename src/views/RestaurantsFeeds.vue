<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">最新動態</h1>
    <hr />
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from "../component/NavTabs.vue";
import NewestRestaurants from "../component/NewestRestaurants.vue";
import NewestComments from "../component/NewestComments.vue";
import restaurantsAPI from "../apis/restaurants.js";
import { Toast } from "./../utils/helpers";

export default {
  name: "RestaurantsFeeds",
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: [],
    };
  },
  created() {
    console.log("fetchFeeds");
    this.getFeeds();
  },
  methods: {
    async getFeeds() {
      try {
        const response = await restaurantsAPI.getFeeds();
        console.log(response);

        const { restaurants, comments } = response.data;
        this.restaurants = restaurants;
        //過濾掉 無此餐廳&無評論 的狀況
        this.comments = comments.filter(
          (comment) => comment.Restaurant && comment.text
        );
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得評論資料，請稍後再試",
        });
      }
    },
  },
};
</script>