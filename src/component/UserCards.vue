<template>
  <div class="col-3">
    <a href="#">
      <img :src="user.image | emptyImage" width="140px" height="140px" />
    </a>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary"
      >追蹤人數：{{ user.followerCount }}</span
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
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
// import userAPI from "./../apis/users";
// import { Toast } from "./../utils/helpers";

export default {
  mixins: [emptyImageFilter],
  props: {
    initialUser: {
      type: Array,
      reuired: true,
      default: () => ({
        followerCount: 0,
      })
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  methods: {
    // async addFollowed(userId) {
    //   try {
    //     const { data } = await userAPI.addFollowed({ userId });

    //     if (data.status !== "success") {
    //       throw new Error(data.message);
    //     }

    //     this.users = this.users.map((user) => {
    //       if (user.id !== userId) {
    //         return user;
    //       } else {
    //         return {
    //           ...user,
    //           followerCount: user.followerCount + 1,
    //           isFollowed: true,
    //         };
    //       }
    //     });

    //   } catch (error) {
    //     console.log(error);
    //     Toast.fire({
    //       icon: "error",
    //       title: "暫時無法追蹤，請稍後",
    //     });
    //   }
    // },
    addFollowed() {
      this.user = {
        ...this.user,
        followerCount: this.user.followerCount + 1,
        isFollowed: true,
      };
    },
    deleteFollowed() {
      this.user = {
        ...this.user,
        followerCount: this.user.followerCount - 1,
        isFollowed: false,
      };
    },
  },
};
</script>