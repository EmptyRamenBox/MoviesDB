import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false
  },
  getters: {
    // getDrawer just returns the state of drawer
    getDrawer: state => state.drawer
  },
  mutations: {
    // changeDrawer,
    //  is like a function, because it directly changes
    // the BOOL state of drawer variable
    changeDrawer: (state, status) => (state.drawer = status)
  },
  actions: {
    // Drawer Actions touch the mutations
    // Contain parameters that will be given to the mutation
    hideDrawer: ({ commit }) => commit("changeDrawer", false),
    showDrawer: ({ commit }) => commit("changeDrawer", true)
  }
});
