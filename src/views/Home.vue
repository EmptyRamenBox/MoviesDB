<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="n in 10" :key="n" cols="4"> <MovieCard /> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
export default {
  name: "Home",
  components: {
    MovieCard
  }
};
</script>
