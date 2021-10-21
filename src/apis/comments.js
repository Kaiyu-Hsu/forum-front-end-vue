import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  create({ text }) {
    return apiHelper.post(
      `/comments`,
      { text },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
  },
  delete(id) {
    return apiHelper.delete(`/comments/${id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
  },
};
