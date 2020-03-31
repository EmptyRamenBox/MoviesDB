<template>
  <v-parallax
    src="../assets/login_back.jpg"
    height="850"
    width="1920"
    jumbotron
  >
    <v-card
      color="amber darken-2"
      max-width="600"
      min-width="300"
      class="mx-auto"
      min-height="400"
    >
      <v-card-title>
        <div class="mt-12 mx-auto">
          <h3>EmptyRamenBox's</h3>
          <h1>MoviesDB</h1>
        </div>
      </v-card-title>
      <v-card-text>
        <div class="mt-12">
          <div id="firebaseui-auth-container"></div>
        </div>
      </v-card-text>
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
