<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <!-- User profile Card -->
      <UserProfileCard :initial-profile="profile" />
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
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "User",
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard,
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
    };
  },
  methods: {
    async fetchUser(userId) {
      try {
        // TODO id:1 , get 503 疑似後端在維修連不上
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
        this.comments = data.profile.Comments;
        // TODO if comment = ""
      } catch (error) {
        console.error(error);
        Toast.fire({
          icon: "error",
          title: "無法取得用戶者資料",
        });
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    this.fetchUser(id);
    console.log("beforeRouteUpdate", id);
    next();
  },
  created() {
    const { id } = this.$route.params;
    console.log("fetchUser", id);
    this.fetchUser(id);
  },
};
</script>
