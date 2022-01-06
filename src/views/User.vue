<template>
  <div class="album py-5 bg-light">
    <Spinner2 v-if="isLoading" />
    <div class="container" v-else>
      <!-- User profile Card -->
      <UserProfileCard
        :initial-profile="profile"
        :initial-is-followed="isFollowed"
        :current-user="currentUser"
        @after-add-following="afterAddFollowing"
        @after-delete-following="afterDeleteFollowing"
      />
      <div class="row">
        <div class="col-md-4">
          <!-- User Following Card -->
          <UserFollowingsCard :followings="followings" />
          <br />
          <!-- User Followers Card -->
          <UserFollowersCard :followers="followers" />
        </div>
        <div class="col-md-8">
          <!-- User Comments Card -->
          <UserCommentsCard :comments="comments" />
          <br />
          <!-- User Favorite Restaurant Card -->
          <UserFavoritedRestaurantsCard
            :favoritedRestaurants="favoritedRestaurants"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from "../component/UserProfileCard.vue";
import UserFollowingsCard from "../component/UserFollowingsCard.vue";
import UserFollowersCard from "../component/UserFollowersCard.vue";
import UserCommentsCard from "../component/UserCommentsCard.vue";
import UserFavoritedRestaurantsCard from "../component/UserFavoritedRestaurantsCard.vue";
import Spinner2 from "./../component/Spinner2.vue";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "User",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
    Spinner2,
  },
  data() {
    return {
      profile: {
        id: -1,
        name: "",
        email: "",
        image: "",
        followingsLength: 0,
        followersLength: 0,
        commentsLength: 0,
        favoritedRestaurantsLength: 0,
      },
      comments: [],
      favoritedRestaurants: [],
      followers: [],
      followings: [],
      isFollowed: true,
      isLoading: true,
    };
  },
  methods: {
    async fetchUser(userId) {
      try {
        // TODO id:1 , image: null, get 503
        const { data } = await usersAPI.get({ userId });
        console.log(data);

        if (data.status === "error") {
          throw new Error(data.message);
        }

        this.profile = {
          id: data.profile.id,
          name: data.profile.name,
          email: data.profile.email,
          image: data.profile.image,
          commentsLength: data.profile.Comments.length,
          favoritedRestaurantsLength: data.profile.FavoritedRestaurants.length,
          followersLength: data.profile.Followers.length,
          followingsLength: data.profile.Followings.length,
        };
        this.isFollowed = data.isFollowed;
        this.followings = data.profile.Followings;
        this.followers = data.profile.Followers;
        this.favoritedRestaurants = data.profile.FavoritedRestaurants;
        // 處理 comment.Restaurant 可能有空值的情況
        this.comments = data.profile.Comments.filter(
          (comment) => comment.Restaurant
        );
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.error(error);
        Toast.fire({
          icon: "error",
          title: "無法取得用戶者資料",
        });
      }
    },
    afterAddFollowing() {
      this.isFollowed = true;
      this.followersLength += 1;
      this.followers.push({
        id: this.currentUser.id,
        image: this.currentUser.image,
      });
    },
    afterDeleteFollowing() {
      this.isFollowed = false;
      this.followersLength -= 1;
      this.followers = this.followers.filter(
        (follower) => follower.id != this.currentUser.id
      );
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    next();
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
};
</script>
