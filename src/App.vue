<template class="themes">
  <v-app>
    <NavBar />
    <Drawer />
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Drawer from "@/components/Drawer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Drawer
  }
};
</script>
