<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from "../component/AdminRestaurantForm.vue";

export default {
  name: "AdminRestaurantNew",
  components: {
    AdminRestaurantForm,
  },
  methods: {
    handleAfterSubmit(fromData) {
      for (let [name, value] of fromData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>