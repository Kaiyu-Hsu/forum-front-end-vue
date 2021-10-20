import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // data
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
  // 修改 state 的方法，類似 methods，但只限修改 state
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 從 api 取得的 currentUser
        ...currentUser,
      };

      state.isAuthenticated = true;
    },
  },
  // 透過 api 請求資料
  actions: {},
  modules: {},
});
