<template>
  <div class="card">
    <div class="card-header"><strong>{{ followers.length }}</strong> followers (追隨者)</div>
    <div class="card-body">
      <router-link 
      to="/users/1"
      v-for="follower in followers"
      :key="follower.id"
      >
        <img
          :src="follower.image ? follower.image : 'http://pic.616pic.com/ys_bnew_img/00/04/49/vO9e6yZC89.jpg'"
          width="60"
          height="60"
          class="avatar"
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
            required: true
        }
    }
}
</script>