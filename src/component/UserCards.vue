<template>
  <div class="row text-center">
    <div class="col-3" v-for="user in users" :key="user.id">
      <a href="#">
        <img :src="user.image | emptyImage" width="140px" height="140px" />
      </a>
      <h2>{{ user.name }}</h2>
      <span class="badge badge-secondary"
        >追蹤人數：{{ user.FollowerCount }}</span
      >
      <p class="mt-3">
        <button
          v-if="user.isFollowed"
          @click.stop.prevent="deleteFollowed"
          type="button"
          class="btn btn-danger"
        >
          取消追蹤
        </button>
        <button
          v-else
          @click.stop.prevent="addFollowed"
          type="button"
          class="btn btn-primary"
        >
          追蹤
        </button>
      </p>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
import userAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  mixins: [emptyImageFilter],
  props: {
    initialUsers: {
      type: Array,
      reuired: true,
    },
  },
  data() {
    return {
      users: this.initialUsers,
    };
  },
  methods: {
    async addFollowed(userId) {
      try {
        const { data } = await userAPI.addFollowed({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          } else {
            return {
              ...user,
              followerCount: user.followerCount + 1,
              isFollowed: true,
            };
          }
        });

      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "暫時無法追蹤，請稍後",
        });
      }
    },
    deleteFollowed() {
      this.user = {
        ...this.user,
        isFollowed: false,
      };
    },
  },
};
</script>