<template>
  <div class="card mb-3" style="max-width: 540px; margin: auto">
    <div class="row no-gutters">
      <div class="col-md-4">
        <a href="#">
          <img class="card-img" :src="restaurant.image | emptyImage" />
        </a>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ restaurant.name }}</h5>
          <span class="badge badge-secondary"
            >收藏數：{{ restaurant.FavoriteCount }}</span
          >
          <p class="card-text">
            {{ restaurant.description }}
          </p>
          <router-link
            :to="{
              name: 'restaurant-dashboard',
              params: { id: restaurant.id },
            }"
            class="btn btn-primary mr-2"
            >Show
          </router-link>

          <button
            v-if="restaurant.isFavorited"
            @click.stop.prevent="deleteFavorite(restaurant.id)"
            type="button"
            class="btn btn-danger mr-2"
          >
            移除最愛
          </button>
          <button
            v-else
            @click.stop.prevent="addFavorite(restaurant.id)"
            type="button"
            class="btn btn-primary"
          >
            加到最愛
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
import { Toast } from "./../utils/helpers.js";
import usersAPI from "./../apis/users";

export default {
  mixins: [emptyImageFilter],
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
    };
  },
  methods: {
    async addFavorite(restaurantId) {
      try {
        const response = await usersAPI.addFavorite({ restaurantId });
        // console.log(response);

        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isFavorited: true,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "warning",
          title: "無法將餐廳加入最愛",
        });
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const response = await usersAPI.deleteFavorite({ restaurantId });

        this.restaurant = {
          ...this.restaurant,
          isFavorited: false,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "warning",
          title: "無法將餐廳移出最愛",
        });
      }
    },
  },
};
</script>
