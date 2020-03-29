<template>
  <v-navigation-drawer
    v-if="user"
    :value="drawer"
    app
    clipped
    color="amber darken-2"
  >
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
    <!-- <router-link to="login">Login</router-link> -->
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
    ...mapGetters({ drawer: "getDrawer" }),
    user() {
      return this.$store.getters.getUser;
    }
  },
  methods: {
    logOut() {
      this.$firebase.auth().signOut();
      this.setUser("");
      this.hideDrawer("");
      this.$router.push("/login");
    },
    ...mapActions(["setUser", "hideDrawer"])
  }
};
</script>
