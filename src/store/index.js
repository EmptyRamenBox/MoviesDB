import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    drawer: false,
    user: "",
    lovedMovies: [],
    watchlist: []
  },
  getters: {
    // getDrawer just returns the state of drawer
    getDrawer: state => state.drawer,
    getUser: state => state.user,
    // Getters for Movie lists
    getLovedMovies: state => state.lovedMovies,
    getWatchlist: state => state.watchlist
  },
  mutations: {
    // changeDrawer,
    //  is like a function, because it directly changes
    // the BOOL state of drawer variable
    changeDrawer: (state, status) => (state.drawer = status),
    settingUser: (state, user) => (state.user = user),
    // Mutations for Movie lists
    // LovedMovies list
    //
    addingLovedMovie: (state, movie) => state.lovedMovies.push(movie),
    removingLovedMovie: (state, index) => state.lovedMovies.splice(index, 1),
    // Watchlist
    //
    addingWatchlist: (state, movie) => state.watchlist.push(movie),
    removingWatchlist: (state, index) => state.watchlist.splice(index, 1),
    clearingMovies: state => {
      state.lovedMovies = [];
      state.watchlist = [];
    }
  },
  actions: {
    // Drawer Actions touch the mutations
    // Contain parameters that will be given to the mutation
    hideDrawer: ({ commit }) => commit("changeDrawer", false),
    showDrawer: ({ commit }) => commit("changeDrawer", true),
    setUser: ({ commit }, user) => commit("settingUser", user),
    // Actions for Movie lists
    // LovedMovies list
    //
    addLovedMovie: ({ commit }, movie) => commit("addingLovedMovie", movie),
    removeLovedMovie: ({ commit }, index) =>
      commit("removingLovedMovie", index),
    // Watchlist
    //
    addWatchlist: ({ commit }, movie) => commit("addingWatchlist", movie),
    removeWatchlist: ({ commit }, index) => commit("removingWatchlist", index),
    clearMovies: ({ commit }) => commit("clearingMovies")
  },
  plugins: [createPersistedState()]
});
