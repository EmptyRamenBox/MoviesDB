<template>
  <v-card class max-width="400">
    <!-- Movie Image -->
    <!--  -->
    <v-img class="white--text align-end" contain :src="`${imageURL}${movie.poster_path}`"></v-img>
    <!-- Movie Name -->
    <!--  -->
    <v-card-title>{{ movie.title }}</v-card-title>
    <!-- Movie Genres -->
    <!--  -->
    <v-chip
      v-for="genre in movie.genre_ids"
      :key="genre"
      class="ma-2 amber--text text--accent-2"
      color="red darken-3"
      small
    >{{ genres.find(g => g.id === genre).name }}</v-chip>
    <!-- Movie Description or Overview -->
    <!--  -->
    <v-card-text class="text--primary">{{ movie.overview }}</v-card-text>
    <!-- Movie Card Buttons -->
    <!--  -->
    <v-card-actions>
      <v-btn
        color="red darken-3"
        :disabled="noLoved(movie.id)"
        text
        @click="addLovedMovie(movie)"
      >Love it</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        color="amber darken-2"
        :disabled="noWatchlist(movie.id)"
        text
        @click="addWatchlist(movie)"
      >Watchlist</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "MovieCard",
  // 1. Props
  //
  props: {
    movie: {
      type: Object,
      default: () => {}
    },
    imageURL: {
      type: String,
      default: ""
    }
  },
  // 2. Data Elements
  //
  data() {
    return {
      genres: []
    };
  },
  // 3. Computed Elements
  //
  computed: {
    ...mapGetters({
      lovedMovies: "getLovedMovies",
      watchlist: "getWatchlist"
    })
  },
  // 4. Created
  //
  created() {
    this.getGenres();
  },
  // 5. Methods
  //
  methods: {
    async getGenres() {
      // To get the genres of a movie
      const genres = await this.$axios("genre/movie/list");
      this.genres = genres.data?.genres;
    },
    noLoved(movieID) {
      return this.lovedMovies.find(movie => movie.id === movieID)
        ? true
        : false;
    },
    noWatchlist(movieID) {
      return this.watchlist.find(movie => movie.id === movieID) ? true : false;
    },
    ...mapActions(["addLovedMovie", "addWatchlist"])
  }
};
</script>
