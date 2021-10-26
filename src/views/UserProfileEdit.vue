<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="userProfile.name"
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
        <!-- v-if="userProfile.image" -->
        <img
          :src="userProfile.image | emptyImage"
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

      <button type="submit" class="btn btn-primary" :disabled="isProcessing">
        {{ isProcessing ? "處理中..." : "送出" }}
      </button>
    </form>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
import { mapState } from "vuex";
import usersAPI from "./../apis/users";
import { Toast } from "./../utils/helpers";

export default {
  name: "UserProfileEdit",
  mixins: [emptyImageFilter],
  data() {
    return {
      userProfile: {
        id: -1,
        name: "",
        image: "",
        email: "",
      },
      isProcessing: false,
    };
  },
  methods: {
    setUser() {
      this.userProfile.id = this.currentUser.id;
      this.userProfile.name = this.currentUser.name;
      this.userProfile.image = this.currentUser.image;
      this.userProfile.email = this.currentUser.email;
    },
    // 預覽照片
    handleFileChange(e) {
      const files = e.target.files;
      if (files.length === 0) {
        this.userProfile.image = this.currentUser.image;
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.userProfile.image = imageURL;
      }
    },
    async handleSubmit(e) {
      // 預防漏填名稱
      if (this.userProfile.name.trim().length === 0) {
        Toast.fire({
          icon: "error",
          title: "請填寫名稱",
        });

        return;
      }

      const from = e.target;
      const fromData = new FormData(from);

      try {
        this.isProcessing = true;
        const { data } = await usersAPI.get({
          userId: this.userProfile.id,
          fromData,
        });
        console.log(data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        // 成功更新後跳轉到用戶詳細頁
        this.$router.push({ name: "user", id: this.userProfile.id });
      } catch (error) {
        this.isProcessing = false;
        console.error(error);
        Toast.fire({
          icon: "error",
          title: "無法更新用戶者資料",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser", "isAuthenticated"]),
  },
  // 先確認 id 是否和使用者的相符
  created() {
    const { id } = this.$route.params;
    if (id !== Number(this.currentUser.id)) {
      this.$router.push({ name: "not-found" });
      return;
    }
    this.setUser();
  },
  // 使用網址跳轉
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params;
    if (id !== this.currentUser.id.toString()) {
      this.$router.push({ name: "not-found" });
      return;
    }
    this.setUser();
    next();
  },
  watch: {
    currentUser() {
      this.setUser();
    },
  },
};
</script>
