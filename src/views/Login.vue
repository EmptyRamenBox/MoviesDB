<template>
  <v-parallax
    src="../assets/login_back.jpg"
    height="1080"
    width="1920"
    jumbotron
  >
    <v-card
      color="amber darken-2"
      max-width="600"
      class="mx-auto"
      min-height="400"
    >
      <v-layout
        justify-center
        min-width="400"
        min-height="300"
        color="blue-grey darken-4"
      >
        <div class="mt-12 ml-8">
          <h3>EmptyRamenBox's</h3>
          <h1>MoviesDB</h1>
        </div>
        <div class="mt-12">
          <div id="firebaseui-auth-container"></div>
        </div>
      </v-layout>
    </v-card>
  </v-parallax>
</template>

<script>
export default {
  name: "Login",
  mounted() {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: authResult => {
          this.$store.dispatch("setUser", authResult.user);
          this.$store.dispatch("showDrawer");
          this.$router.push("/");
          return false;
        }
      },
      signInOptions: [
        this.$firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        this.$firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    };
    this.$firebaseui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>
