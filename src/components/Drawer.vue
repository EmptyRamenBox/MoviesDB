<template>
  <v-navigation-drawer v-if="user" :value="drawer" app clipped color="amber darken-2">
    <div class="d-flex flex-column justify-center align-center mb-4">
      <div class="pt-4">
        <v-avatar size="128" color="red darken-4">
          <img :src="user.photoURL || defaultPicture" alt="Profile Pic" />
        </v-avatar>
      </div>
      <h1 class="font-weight-regular">{{ user.displayName }}</h1>
      <h5 class="font-weight-light mb-4">{{ user.email }}</h5>
      <v-btn color="red darken-3" @click="logOut">LogOut</v-btn>
    </div>
    <!-- List of Loved Movies -->
    <!-- -->
    <div v-if="lovedMovies.length > 0">
      <!-- Title of =List -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Loved Movies</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- Contents of List -->
      <v-list dense nav>
        <v-list-item
          v-for="(movie, index) in lovedMovies"
          :key="movie.id"
          link
          @click="removeLovedMovie(index)"
        >
          <v-avatar class="mr-2">
            <img
              :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
              :alt="movie.title"
              contain
            />
          </v-avatar>
          <v-list-item-content>
            <v-list-item-title>{{movie.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
    <!-- List of WATCH list -->
    <!-- -->
    <div v-if="watchlist.length > 0">
      <!-- Title of =List -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Watchlist</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- Contents of List -->
      <v-list dense nav>
        <v-list-item
          v-for="(movie, index) in watchlist"
          :key="movie.id"
          link
          @click="removeWatchlist(index)"
        >
          <v-avatar class="mr-2">
            <img
              :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
              :alt="movie.title"
              contain
            />
          </v-avatar>
          <v-list-item-content>
            <v-list-item-title>{{movie.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import defaultPicture from "../assets/user.png";

export default {
  name: "Drawer",
  data() {
    return {
      defaultPicture
    };
  },
  computed: {
    ...mapGetters({
      drawer: "getDrawer",
      user: "getUser",
      lovedMovies: "getLovedMovies",
      watchlist: "getWatchlist"
    }),
    user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    logOut() {
      this.$firebase.auth().signOut();
      this.setUser("");
      this.hideDrawer("");
      this.clearMovies();
      this.$router.push("/login");
    },
    ...mapActions([
      "setUser",
      "hideDrawer",
      "clearMovies",
      "removeLovedMovie",
      "removeWatchlist"
    ])
  }
};
</script>
