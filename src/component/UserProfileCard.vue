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
                v-if="isFollowed"
                @click.stop.prevent="deleteFollowing(profile.id)"
                type="submit"
                class="btn btn-danger"
              >
                取消追蹤
              </button>
              <button
                v-else
                @click.stop.prevent="addFollowing(profile.id)"
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
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  mixins: [emptyImageFilter],
  props: {
    initialProfile: {
      type: Object,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      profile: this.initialProfile,
      isFollowed: this.initialIsFollowed,
    };
  },
  methods: {
    async addFollowing(id) {
      try {
        const { data } = await usersAPI.addFollowed({ id });
        console.log("data", data);

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.isFollowed = true;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法追蹤此用戶",
        });
      }
    },
    async deleteFollowing(id) {
      try {
        const { data } = await usersAPI.deleteFollowed({ id });
        console.log("data", data);

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.isFollowed = false;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法取消追蹤此用戶",
        });
      }
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
    initialIsFollowed(isFollowed) {
      this.isFollowed = isFollowed;
    },
  },
};
</script>
