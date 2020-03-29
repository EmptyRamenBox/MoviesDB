<template>
  <v-card
    color="amber darken-2"
    max-width="400"
    class="mx-auto"
    min-height="300"
  >
    <v-layout
      justify-center
      color="blue-grey lighten-1"
      max-width="400"
      max-height="300"
    >
      <div id="firebaseui-auth-container" class="mt-8 justify-center"></div
    ></v-layout>
  </v-card>
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
