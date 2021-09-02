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
          @click.stop.prevent="changeToUser"
          type="button"
          class="btn btn-link"
        >
          set as user
        </button>
        <button
          v-else
          type="button"
          @click.stop.prevent="changeToAdmin"
          class="btn btn-link"
        >
          set as admin
        </button>
      </td>
    </tr>
  </tbody>
</template>

<script>
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
    changeToUser() {
      this.user = {
        ...this.user,
        isAdmin: false,
      };
    },
    changeToAdmin() {
      this.user = {
        ...this.user,
        isAdmin: true,
      };
    },
  },
};
</script>