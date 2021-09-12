<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <UserCards :initial-users="users" />
  </div>
</template>

<script>
import NavTabs from "../component/NavTabs.vue";
import UserCards from "../component/UserCards.vue";
import userAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "UsersTop",
  components: {
    NavTabs,
    UserCards,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await userAPI.getTopUsers();

        this.users = data.users.map((user) => ({
          id: user.id,
          name: user.id,
          image: user.image,
          followerCount: user.followerCount,
          isFollowed: user.isFollowed,
        }));
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法取得美食達人，請稍後再試",
        });
      }
    },
  },
  created() {
    console.log("fetchFeeds");
    return this.fetchUsers();
  },
};
</script>