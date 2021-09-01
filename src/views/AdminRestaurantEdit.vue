<template>
  <div class="container py-5">
    <AdminRestaurantForm @after-submit="handleAfterSubmit" :initial-restaurant="restaurant"/>
  </div>
</template>

<script>
import AdminRestaurantForm from "../component/AdminRestaurantForm.vue";

const dummyData = {
  restaurant: {
    id: 11,
    name: "Odessa Runte",
    tel: "477-189-3440 x540",
    address: "7642 Austen Camp",
    opening_hours: "08:00",
    description: "Adipisci accusantium aut officiis et.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=24.99779116098115",
    viewCounts: 0,
    createdAt: "2021-07-05T09:58:39.000Z",
    updatedAt: "2021-07-05T09:58:39.000Z",
    CategoryId: 3,
    Category: {
      id: 3,
      name: "義大利料理",
      createdAt: "2021-07-05T09:58:39.000Z",
      updatedAt: "2021-07-05T09:58:39.000Z",
    },
  },
};

export default {
  name: "AdminRestaurantEdit",
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        tel: "",
        address: "",
        openingHours: "",
        description: "",
        image: "",
        categoryId: "",
      },
    };
  },
  methods: {
    handleAfterSubmit(formData) {
      // 透過 API 將表單資料送到伺服器
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
    fetchRestaurant(restaurantId) {
      console.log("restaurantId: ", restaurantId);
      const { restaurant } = dummyData;
      const {
        id,
        name,
        tel,
        address,
        opening_hours: openingHours,
        description,
        image,
        CategoryId: categoryId,
      } = restaurant;
      this.restaurant = {
        ...this.restaurant,
        id,
        name,
        tel,
        address,
        openingHours,
        description,
        image,
        categoryId,
      };
    },
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
};
</script>