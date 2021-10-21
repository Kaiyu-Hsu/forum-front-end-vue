<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          type="button"
          class="btn btn-danger float-right"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
        >
          Delete
        </button>
        <h3>
          <router-link :to="{ name: 'user', params: { id: comment.User.id } }">
            {{ comment.User.name }}
          </router-link>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";
import { mapState } from "vuex";
import commentsAPI from "./../apis/comments";
import { Toast } from "./../utils/helpers";

export default {
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      comments: this.restaurantComments,
    };
  },
  mixins: [fromNowFilter],
  methods: {
    async handleDeleteButtonClick(commentId) {
      console.log("delete commentId", commentId);
      try {
        const { data } = await commentsAPI.delete(commentId);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )
        this.$emit("after-delete-comment", commentId);
      } catch (error) {
        console.error(error);
        Toast.fire({
          icon: "error",
          title: "無法刪除餐廳評論",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  // watch: {
  //   restaurantComments(newValue) {
  //     this.comments = {
  //       ...this.comments,
  //       ...newValue,
  //     };
  //   },
  // },
};
</script>
