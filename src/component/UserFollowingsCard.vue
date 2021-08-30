<template>
  <div class="card">
    <div class="card-header"><strong>{{ followings.length }}</strong> followings (追蹤者)</div>
    <div class="card-body">
      <router-link 
      v-for="following in followings"
      :key="following.id"
      :to="{ name:'user', params: { id: following.id }}"
      >
        <img
          :src="following.image ? following.image : 'http://pic.616pic.com/ys_bnew_img/00/04/49/vO9e6yZC89.jpg'"
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
        followings: {
            type: Array,
            required: true
        }
    }
}
</script>