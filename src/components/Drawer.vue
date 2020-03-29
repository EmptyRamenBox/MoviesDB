<template>
  <v-navigation-drawer :value="drawer" app clipped color="amber darken-2"></v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Drawer",
  computed: {
    ...mapGetters({ drawer: "getDrawer" })
  }
};
</script>
