<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="currentUser.name"
          id="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <img
          v-if="currentUser.image"
          :src="currentUser.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
        />
        <input
        @change="handleFileChange"
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control-file"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
const dummyData = {
  currentUser: {
    id: 1,
    name: "root123",
    email: "root@example.com",
    image: "https://i.imgur.com/WMsHuNP.jpeg",
    isAdmin: true,
    // isAdmin: false,
  },
  isAuthenticated: true,
};

export default {
  name: "UserProfileEdit",
  data() {
    return {
      currentUser: {
        name: "",
        image: "",
      },
    };
  },
  methods: {
    fetchUser(userId) {
      console.log("userId: ", userId);
      const { currentUser } = dummyData;
      const { name, image } = currentUser;
      this.currentUser = {
        ...this.currentUser,
        name,
        image,
      };
    },
    handleFileChange(e) {
      const files = e.target.files
      if (files.length === 0) {
        this.currentUser.image = dummyData.currentUser.image
      } else {
        const imageURL = window.URL.createObjectURL(files[0])
        this.currentUser.image = imageURL
      }
    },
    handleSubmit(e) {
      const from = e.target
      const fromData = new FormData(from)
      this.$emit('after-sumit', fromData)
    }
  },
  created() {
    const { id } = this.$route.params;
    this.fetchUser(id);
  },
};
</script>