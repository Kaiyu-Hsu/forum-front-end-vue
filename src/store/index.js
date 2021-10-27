import Vue from "vue";
import Vuex from "vuex";
import userAPI from "./../apis/users";

Vue.use(Vuex);

export default new Vuex.Store({
  // 預設資料
  state: {
    currentUser: {
      id: -1,
      name: "",
      email: "",
      image: "",
      isAdmin: false,
    },
    isAuthenticated: false, // 是否驗證過
  },
  // 只限修改 state 的函式，commit
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 從 api 取得的 currentUser
        ...currentUser,
      };

      state.isAuthenticated = true;
    },
    // 登出時把資料和 token 清空
    revokeAuthentication(state) {
      state.currentUser = {};
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  // 透過 api 請求資料，dispatch
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await userAPI.getCurrentUser();

        if (data.status === "error") {
          throw new Error(data.message);
        }

        const { id, name, email, image, isAdmin } = data;

        commit("setCurrentUser", { id, name, email, image, isAdmin });

        return true;
      } catch (error) {
        console.error(error.message);
        return false;
      }
    },
  },
  modules: {},
});
