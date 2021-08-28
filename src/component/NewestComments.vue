<template>
    <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div class="card-body">
      <div
        v-for="comment in comments"
        :key="comment.id"
      >
        <h4>
          <a href="#">{{ comment.Restaurant.name }}</a>
          <!-- <small>{{ restaurant.Category ? restaurant.Category.name : "未分類" }}</small> -->
        </h4>
        <p>{{ comment.text }}</p>
        by <a href="#">user{{ comment.User.name }}</a> at {{ comment.User.createdAt | fromNow}}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
// import moment from 'moment'
import { fromNowFilter } from '../utils/mixins'

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
        comments: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>
small {
  font-size: 10px;
}
</style>