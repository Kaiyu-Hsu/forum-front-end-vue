<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <AdminUsersTable
        v-for="user in users"
        :key="user.id"
        :initial-user="user"
      />
    </table>
  </div>
</template>

<script>
import AdminNav from "../component/AdminNav.vue";
import AdminUsersTable from "../component/AdminUsersTable.vue";
import { Toast } from "./../utils/helpers";
import adminAPI from "./../apis/admin";
import { mapState } from "vuex";

export default {
  name: "AdminUsers",
  components: {
    AdminNav,
    AdminUsersTable,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUser() {
      try {
        const { data } = await adminAPI.users.get();

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.users = data.users;
      } catch (error) {
        console.error(error);
        Toast.fire({
          icon: "error",
          title: "無法取得所有用戶者資料",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  created() {
    this.fetchUser();
  },
};
</script>
