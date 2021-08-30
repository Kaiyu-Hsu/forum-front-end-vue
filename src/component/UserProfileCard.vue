<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="profile.image" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ profile.name }}</h5>
          <p class="card-text">{{ profile.email }}</p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong>{{ profile.comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ profile.favoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ profile.followings.length }}</strong> followings
              (追蹤者)
            </li>
            <li>
              <strong>{{ profile.followers.length }}</strong> followers (追隨者)
            </li>
          </ul>
          <p>
            <template v-if="currentUser.isAdmin">
              <button class="btn btn-primary">edit</button>
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
const dummyUser = {
  currentUser: {
    id: 1,
    name: "root123",
    email: "root@example.com",
    image: "https://i.imgur.com/WMsHuNP.jpeg",
    isAdmin: true,
    // isAdmin: false,
  },
  isAuthenticated: true,
}

export default {
  props: {
    initialProfile: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      profile: this.initialProfile,
      currentUser: dummyUser.currentUser
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
};
</script>