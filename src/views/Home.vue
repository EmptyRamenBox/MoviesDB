<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="movie in movies" :key="movie.id" cols="3">
          <MovieCard :movie="movie" :imageURL="imageURL" />
        </v-col>
      </v-row>
      <!-- Pagination -->
      <div class="text-center">
        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="totalPages"
            @input="getMovies"
          />
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "Home",
  // External components used by local component
  components: {
    MovieCard
  },
  // Data to be used by the local component
  data() {
    return {
      movies: [],
      certifications: [],
      page: 1,
      totalPages: 0,
      configuration: {}
    };
  },
  computed: {
    // Constructed URL for image from TheMoviesDB
    imageURL() {
      return `${this.configuration.secure_base_url}/${
        this.configuration.poster_sizes[
          this.configuration.poster_sizes.length - 1
        ]
      }`;
    }
  },
  // As soon as the page is created,
  // Vue will call on the following functions...
  created() {
    this.getMovies();
  },
  methods: {
    async getMovies() {
      // Discover only movies certified in the US, with G, PG, or PG-13
      const movies = await this.$axios(
        `discover/movie?page=${this.page}&certification_country=US&certification=G|PG|PG-13`
      );
      // To get the Movie Poster, we use configuration, as noted in TheMoviesDB Docs
      const configuration = await this.$axios("configuration");
      // This lists the certifications available for movies in the USA
      const certifications = await this.$axios("certification/movie/list");

      this.movies = movies.data?.results;
      this.totalPages = movies.data?.total_pages;
      this.certifications = certifications.data?.certifications.US;
      this.configuration = configuration.data?.images;
    }
  }
};
</script>
