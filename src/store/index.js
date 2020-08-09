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

    //  SET User in Users
    SET_USERS(state, payload) {
      state.Users = [...state.Users, ...payload];
    },

    //  UPDATE User in Users
    UPDATE_USERS(state, payload) {
      state.Users[payload.index] = payload.newData;
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
    },

    //  UPDATE User Data
    upDateUserStore({ commit }, data) {
      commit("UPDATE_USERS", data);
    }
  }
});
