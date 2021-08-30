<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.Comments.length }} </li>
      <li>瀏覽次數： {{ restaurant.viewCounts }} </li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
const dummyData = {
    "restaurant": {
        "id": 4,
        "name": "Mckayla Hintz",
        "tel": "1-240-532-2429",
        "address": "167 Rogahn Mission",
        "opening_hours": "08:00",
        "description": "Impedit nesciunt ad id delectus magnam aspernatur fugit.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=42.58020446504014",
        "viewCounts": 44,
        "createdAt": "2021-07-05T09:58:39.000Z",
        "updatedAt": "2021-08-29T11:53:48.000Z",
        "CategoryId": 4,
        "Category": {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2021-07-05T09:58:39.000Z",
            "updatedAt": "2021-07-05T09:58:39.000Z"
        },
        "Comments": [
            {
                "id": 4,
                "text": "Ullam quis debitis.",
                "UserId": 1,
                "RestaurantId": 4,
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z",
                "User": {
                    "id": 1,
                    "name": "root123",
                    "email": "root@example.com",
                    "password": "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
                    "isAdmin": true,
                    "image": "https://i.imgur.com/WMsHuNP.jpeg",
                    "createdAt": "2021-07-05T09:58:39.000Z",
                    "updatedAt": "2021-08-27T08:16:04.000Z"
                }
            },
            {
                "id": 271,
                "text": "how are you",
                "UserId": 1,
                "RestaurantId": 4,
                "createdAt": "2021-08-10T06:06:00.000Z",
                "updatedAt": "2021-08-10T06:06:00.000Z",
                "User": {
                    "id": 1,
                    "name": "root123",
                    "email": "root@example.com",
                    "password": "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
                    "isAdmin": true,
                    "image": "https://i.imgur.com/WMsHuNP.jpeg",
                    "createdAt": "2021-07-05T09:58:39.000Z",
                    "updatedAt": "2021-08-27T08:16:04.000Z"
                }
            },
            {
                "id": 281,
                "text": "I am fine",
                "UserId": 1,
                "RestaurantId": 4,
                "createdAt": "2021-08-10T06:06:26.000Z",
                "updatedAt": "2021-08-10T06:06:26.000Z",
                "User": {
                    "id": 1,
                    "name": "root123",
                    "email": "root@example.com",
                    "password": "$2a$10$K2x6pQHkzPEKzw86x8Tc0.bfW7QVdA2Ls4AXBFkFu7xHG3UgA4Mli",
                    "isAdmin": true,
                    "image": "https://i.imgur.com/WMsHuNP.jpeg",
                    "createdAt": "2021-07-05T09:58:39.000Z",
                    "updatedAt": "2021-08-27T08:16:04.000Z"
                }
            },
            {
                "id": 104,
                "text": "Hic voluptatem dolorem.",
                "UserId": 2,
                "RestaurantId": 4,
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z",
                "User": {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$knlgkc6iz7TSC1RADrSjmukYkaQgIc8JSVp1ltz614/F9SK.h/pqa",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-07-05T09:58:39.000Z",
                    "updatedAt": "2021-08-21T14:30:09.000Z"
                }
            },
            {
                "id": 54,
                "text": "Qui eos odio similique.",
                "UserId": 3,
                "RestaurantId": 4,
                "createdAt": "2021-07-05T09:58:39.000Z",
                "updatedAt": "2021-07-05T09:58:39.000Z",
                "User": {
                    "id": 3,
                    "name": "user2",
                    "email": "user2@example.com",
                    "password": "$2a$10$1UaQ5KZLbMCJztUGRWP/uOtIaKel7TQFHIbozRf4LPysvFLu3UOO6",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-07-05T09:58:39.000Z",
                    "updatedAt": "2021-08-21T02:03:29.000Z"
                }
            },
            {
                "id": 441,
                "text": "good",
                "UserId": 81,
                "RestaurantId": 4,
                "createdAt": "2021-08-25T11:23:36.000Z",
                "updatedAt": "2021-08-25T11:23:36.000Z",
                "User": {
                    "id": 81,
                    "name": "test",
                    "email": "test@example.com",
                    "password": "$2a$10$w5bcczmxLzWr/lE9a6fgz.toso5IO1oetOBMHZJK/fM3mGAEtsrAK",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2021-08-25T11:13:24.000Z",
                    "updatedAt": "2021-08-25T11:13:24.000Z"
                }
            }
        ]
    }
}

export default {
  name: 'RestaurantDashboard',
  data() {
    return {
      restaurant: dummyData.restaurant
    }
  }
}
</script>