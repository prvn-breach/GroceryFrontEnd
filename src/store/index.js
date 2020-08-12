import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: 0
  },
  mutations: {
    addCart(state) {
      state.items = state.items + 1;
    }
  },
  getters: {
    items: state => state.items
  },
  actions: {},
  modules: {}
});
