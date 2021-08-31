<template>
  <div class="col-3">
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
</template>

<script>
import { emptyImageFilter } from '../utils/mixins'

export default {
  mixins: [emptyImageFilter],
  props: {
    initialUser: {
      type: Array,
      reuired: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  methods: {
    addFollowed() {
      this.user = {
        ...this.user,
        isFollowed: true,
      };
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