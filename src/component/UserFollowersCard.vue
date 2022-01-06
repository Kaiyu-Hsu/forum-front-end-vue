<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ followers.length }}</strong> followers (追隨者)
    </div>
    <div class="card-body">
      <router-link
        to="/users/1"
        v-for="follower in followers"
        :key="follower.id"
      >
        <img
          :src="
            follower.image
              ? follower.image
              : 'https://pica.zhimg.com/80/v2-6afa72220d29f045c15217aa6b275808_720w.jpg?source=1940ef5c'
          "
          width="60"
          height="60"
          class="avatar m-2"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    followers: {
      type: Array,
      required: true,
    },
  },
};
</script>
