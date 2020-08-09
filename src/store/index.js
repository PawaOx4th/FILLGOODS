import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Profile: {
      email: ""
    },
    Users: []
  },
  getters: {
    //   send email user
    getProfileEmail(state) {
      return state.Profile.email;
    },

    // SEND  Members
    getMembers(state) {
      return state.Users;
    }
  },
  mutations: {
    //   SET email user profile in state
    SET_PROFILE_EMAIL(state, payload) {
      state.Profile.email = payload;
    },

    //  SET Users in Users
    SET_USERS(state, payload) {
      state.Users = [...state.Users, ...payload];
    }
  },
  actions: {
    //   SET email user profile
    setProfileEmail({ commit }, data) {
      commit("SET_PROFILE_EMAIL", data);
    },

    //  SET User data
    setUsers({ commit }, data) {
      commit("SET_USERS", data);
    }
  }
});
