<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ restaurant.name }}</h1>
        <span class="badge badge-secondary mt-1 mb-3">
          {{ restaurant.categoryName }}
        </span>
      </div>
      <div class="col-md-4">
        <img
          class="img-responsive center-block"
          :src="restaurant.image | emptyImage"
          style="width: 250px; margin-bottom: 25px"
        />
        <div class="well">
          <ul class="list-unstyled">
            <li>
              <strong>Opening Hour:</strong>
              {{ restaurant.openingHours }}
            </li>
            <li>
              <strong>Tel:</strong>
              {{ restaurant.tel }}
            </li>
            <li>
              <strong>Address:</strong>
              {{ restaurant.address }}
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-8">
        <p>{{ restaurant.description }}</p>
      </div>
    </div>
    <hr />
    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
  restaurant: {
    id: 4,
    name: "Mckayla Hintz",
    tel: "1-240-532-2429",
    address: "167 Rogahn Mission",
    opening_hours: "08:00",
    description: "Impedit nesciunt ad id delectus magnam aspernatur fugit.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=42.58020446504014",
    viewCounts: 46,
    createdAt: "2021-07-05T09:58:39.000Z",
    updatedAt: "2021-08-30T09:34:27.000Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2021-07-05T09:58:39.000Z",
      updatedAt: "2021-07-05T09:58:39.000Z",
    },
  },
};

export default {
  name: 'AdminRestaurant',
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
        categoryName: "",
      },
    };
  },
  methods: {
      fetchRestaurant(restaurantId) {
          const { restaurant } = dummyData
          const { id, name, tel, address, opening_hours: openingHours, description, image, Category } = restaurant
          this.restaurant = {
              ...restaurant,
              id,
              name,
              tel,
              address,
              openingHours,
              description,
              image,
              categoryName: Category ? Category.name : "未分類" // 避免有未分類的情況
          }
      }
  },
  created() {
      const { id: restaurantId } = this.$route.params
      return this.fetchRestaurant(restaurantId)
  }
};
</script>