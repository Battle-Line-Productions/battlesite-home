<template>
  <v-layout class="fill-height">
    <v-container class="pt-1">
      <Toolbar />
      <router-view class="py-2 fill-height"></router-view>
      <Footer />
      <Snackbar />
    </v-container>
  </v-layout>
</template>

<script>
import Toolbar from "@/components/ui/landing/toolbar/Toolbar.vue";
import Footer from "@/components/ui/landing/footer/Footer.vue";
import Snackbar from "@/components/ui/popups/snackbar.vue";

export default {
  components: {
    Toolbar,
    Footer,
    Snackbar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.app-bar-full {
  .v-toolbar__content,
  .v-toolbar__extension {
    padding: 0;
  }
}
</style>
