<template>
  <div class="card">
    <div class="card-header">最新餐廳</div>
    <div class="card-body">
      <div v-for="restaurant in restaurants" :key="restaurant.id">
        <h4>
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            {{ restaurant.name }}
          </router-link>
          <small>{{
            restaurant.Category ? restaurant.Category.name : "未分類"
          }}</small>
        </h4>
        <p>{{ restaurant.description }}</p>
        {{ restaurant.createdAt | fromNow }}
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
// import moment from 'moment'
import { fromNowFilter } from "../utils/mixins";

export default {
  // filters: {
  //     fromNow(datetime) {
  //         if(!datetime) {
  //             return '-'
  //         }
  //         // 使用 moment 提供的 fromNow 方法
  //         return  moment(datetime).fromNow()
  //     }
  // },
  mixins: [fromNowFilter],
  props: {
    restaurants: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
small {
  font-size: 10px;
}
</style>