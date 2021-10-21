<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea class="form-control" rows="3" name="text" v-model="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import commentsAPI from "./../apis/comments";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "CreateComment",
  props: {
    restaurantId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    async handleSubmit() {
      console.log("submit");
      try {
        const { data } = await commentsAPI.create({ text: this.text });
        console.log("data", data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.$emit("after-create-comment", {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text,
        });

        this.text = "";
      } catch (error) {
        console.error(error);
        Toast.fire({
          icon: "error",
          title: "無法新增餐廳評論",
        });
      }
    },
  },
};
</script>
