import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  getCurrentUser() {
    return apiHelper.get(`/get_current_user`);
  },
  get({ userId }) {
    return apiHelper.get(`/users/${userId}`);
  },
  update({ userId, fromData }) {
    return apiHelper.put(`/users/${userId}`, fromData);
  },
  addFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null);
  },
  deleteFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`);
  },
  addLiked({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null);
  },
  deleteLiked({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`);
  },
  getTopUsers() {
    return apiHelper.get(`/users/top`);
  },
  addFollowed({ userId }) {
    return apiHelper.post(`/following/${userId}`, null);
  },
  deleteFollowed({ userId }) {
    return apiHelper.delete(`/following/${userId}`);
  },
};
