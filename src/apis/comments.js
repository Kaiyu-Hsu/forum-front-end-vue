import { apiHelper } from "./../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  create({ text }) {
    return apiHelper.post(`/comments`, { text });
  },
  delete(id) {
    return apiHelper.delete(`/comments/${id}`);
  },
};
