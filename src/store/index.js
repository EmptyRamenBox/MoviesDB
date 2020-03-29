import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    user: ""
  },
  getters: {
    // getDrawer just returns the state of drawer
    getDrawer: state => state.drawer,
    getUser: state => state.user
  },
  mutations: {
    // changeDrawer,
    //  is like a function, because it directly changes
    // the BOOL state of drawer variable
    changeDrawer: (state, status) => (state.drawer = status),
    settingUser: (state, user) => (state.user = user)
  },
  actions: {
    // Drawer Actions touch the mutations
    // Contain parameters that will be given to the mutation
    hideDrawer: ({ commit }) => commit("changeDrawer", false),
    showDrawer: ({ commit }) => commit("changeDrawer", true),
    setUser: ({ commit }, user) => commit("settingUser", user)
  }
});
