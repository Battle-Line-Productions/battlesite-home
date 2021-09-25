<template>
  <v-footer>
    <v-container>
      <div class="d-flex flex-wrap align-center justify-center font-weight-bold text-uppercase body-2">
        <!-- //TODO: Once things are enabled, uncomment them -->
        <!-- <router-link to="#" class="text-decoration-none mx-2 mb-1">Products</router-link>
        <router-link to="#" class="text-decoration-none mx-2 mb-1">Games</router-link>
        <router-link to="#" class="text-decoration-none mx-2 mb-1">Forum</router-link>
        <router-link to="/contact" class="text-decoration-none mx-2 mb-1">Blog</router-link> -->
        <router-link to="/contact" class="text-decoration-none mx-2 mb-1">Contact Us</router-link>
      </div>
      <!-- // TODO: Discuss Social Media -->
      <!-- <div class="d-flex align-center justify-center mt-4">
        <v-btn icon color="secondary lighten-2" class="mx-1"><v-icon>mdi-facebook</v-icon></v-btn>
        <v-btn icon color="secondary lighten-2" class="mx-1"><v-icon>mdi-twitter</v-icon></v-btn>
        <v-btn icon color="secondary lighten-2" class="mx-1"><v-icon>mdi-linkedin</v-icon></v-btn>
        <v-btn icon color="secondary lighten-2" class="mx-1"><v-icon>mdi-google-plus</v-icon></v-btn>
      </div> -->
      <div class="d-flex flex-column flex-sm-row align-center justify-center mt-4 overline">
        <div class="secondary--text">© Battleline Productions 2021</div>
        <router-link to="/privacypolicy" class="text-decoration-none ml-sm-2 secondary--text text--lighten-3">Privacy Policy</router-link>
        <router-link to="/termsofservice" class="text-decoration-none ml-sm-2 secondary--text text--lighten-3">Terms of Service</router-link>
      </div>
    </v-container>
  </v-footer>
</template>
