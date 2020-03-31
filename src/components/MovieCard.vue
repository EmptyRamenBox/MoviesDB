<template>
  <v-card class="" max-width="400">
    <!-- Movie Image -->
    <!--  -->
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
    </v-img>
    <!-- Movie Name -->
    <!--  -->
    <v-card-title>Movie Name</v-card-title>
    <!-- Movie Genres -->
    <!--  -->
    <v-chip
      v-for="n in 3"
      :key="n"
      class="ma-2 amber--text text--accent-2"
      color="red darken-3"
      small
      >Genre</v-chip
    >
    <!-- Movie Description or Overview -->
    <!--  -->
    <v-card-text class="text--primary">
      Movie Description or Overview
    </v-card-text>

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
  name: "MovieCard"
};
</script>
