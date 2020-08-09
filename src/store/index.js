import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Profile: {
      email: ""
    }
  },
  getters: {
    //   send email user
    getProfileEmail(state) {
      return state.Profile.email;
    }
  },
  mutations: {
    //   SET email user profile in state
    SET_PROFILE_EMAIL(state, payload) {
      state.Profile.email = payload;
    }
  },
  actions: {
    //   SET email user profile
    setProfileEmail({ commit }, data) {
      commit("SET_PROFILE_EMAIL", data);
    }
  }
});
