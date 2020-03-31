<template>
  <v-card class="" max-width="400">
    <!-- Movie Image -->
    <!--  -->
    <v-img
      class="white--text align-end"
      contain
      :src="`${imageURL}${movie.poster_path}`"
    >
    </v-img>
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
      >{{ genres.find(g => g.id === genre).name }}</v-chip
    >
    <!-- Movie Description or Overview -->
    <!--  -->
    <v-card-text class="text--primary">
      {{ movie.overview }}
    </v-card-text>
    <!-- Movie Actions -->
    <!--  -->
    <v-card-actions>
      <v-btn color="red darken-3" text>
        Love it
      </v-btn>
      <v-spacer> </v-spacer>
      <v-btn color="amber darken-2" text>
        Watchlist
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "MovieCard",
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
  created() {
    this.getGenres();
  },
  methods: {
    async getGenres() {
      // To get the genres of a movie
      const genres = await this.$axios("genre/movie/list");
      this.genres = genres.data?.genres;
    }
  },
  data() {
    return {
      genres: []
    };
  }
};
</script>
