<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="profile.image | emptyImage" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ profile.name }}</h5>
          <p class="card-text">{{ profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ profile.commentsLength }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ profile.favoritedRestaurantsLength }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ profile.followingsLength }}</strong> followings
              (追蹤者)
            </li>
            <li>
              <strong>{{ profile.followersLength }}</strong> followers (追隨者)
            </li>
          </ul>
          <p>
            <template v-if="profile.id === currentUser.id">
              <router-link
                :to="{ name: 'user-edit', params: { id: profile.id } }"
                class="btn btn-primary"
              >
                edit
              </router-link>
            </template>
            <template v-else>
              <button
                v-if="profile.isFollowed"
                @click.stop.prevent="deleteFollowing"
                type="submit"
                class="btn btn-danger"
              >
                取消追蹤
              </button>
              <button
                v-else
                @click.stop.prevent="addFollowing"
                type="submit"
                class="btn btn-primary"
              >
                追蹤
              </button>
            </template>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
import { mapState } from "vuex";

export default {
  mixins: [emptyImageFilter],
  props: {
    initialProfile: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      profile: this.initialProfile,
    };
  },
  methods: {
    addFollowing() {
      this.profile = {
        ...this.profile,
        isFollowed: true,
      };
    },
    deleteFollowing() {
      this.profile = {
        ...this.profile,
        isFollowed: false,
      };
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  watch: {
    initialProfile(newValue) {
      this.profile = {
        ...this.profile,
        ...newValue,
      };
    },
  },
};
</script>
