import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    personal: {},
    social: {},
    certificates: {},
  },
  mutations: {
    setPersonalInfo(state, payload) {
      state.personal = payload;
    },
    setSocialInfo(state, payload) {
      state.social = payload;
    },
    setCertificationsInfo(state, payload) {
      state.certificates = payload;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getPersonalInfo: state => state.personal,
    getSocialInfo: state => state.social,
    getCertificationsInfo: state => state.certificates,
  },
});
