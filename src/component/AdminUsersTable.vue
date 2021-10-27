<template>
  <tbody>
    <tr>
      <th scope="row">{{ user.id }}</th>
      <td>{{ user.email }}</td>
      <td v-if="user.isAdmin">admin</td>
      <td v-else>user</td>
      <td>
        <button
          v-if="user.isAdmin"
          @click.stop.prevent="toggleUserRole(user.id)"
          type="button"
          class="btn btn-link"
        >
          set as user
        </button>
        <button
          v-else
          type="button"
          @click.stop.prevent="toggleUserRole(user.id)"
          class="btn btn-link"
        >
          set as admin
        </button>
      </td>
    </tr>
  </tbody>
</template>

<script>
import { Toast } from "./../utils/helpers";
import adminAPI from "./../apis/admin";
import { mapState } from "vuex";

export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  methods: {
    async toggleUserRole(id) {
      try {
        const { data } = await adminAPI.users.change(id);

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.user = {
          ...this.user,
          isAdmin: !this.user.isAdmin,
        };
      } catch (error) {
        console.error(error);
        Toast.fire({
          icon: "error",
          title: "無法變更用戶權限",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
};
</script>
