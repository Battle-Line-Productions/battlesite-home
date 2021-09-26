<template>
  <div>
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-list dense nav>
        <v-subheader class="text-uppercase font-weight-bold"
          >Battleline</v-subheader
        >
        <v-list-item
          v-for="(item, index) in menu"
          :key="index"
          :disabled="item.disabled"
          :to="item.link"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn
            v-if="!$auth.isAuthenticated"
            block
            class="mb-2"
            @click="login()"
          >
            Sign In
          </v-btn>
          <v-btn v-else block class="mb-2"> Profile </v-btn>

          <v-btn
            v-if="!$auth.isAuthenticated"
            disabled
            block
            class="primary"
            @click="login"
          >
            Sign Up
          </v-btn>
          <v-btn v-else disabled block class="primary" @click="logout">
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-btn class="d-md-none drawer-button" rounded @click="drawer = !drawer">
      <v-icon right>mdi-menu</v-icon>
    </v-btn>

    <v-app-bar app height="80">
      <v-container class="py-0 px-0 px-sm-2 fill-height" :fluid="isFluid">
        <router-link
          to="/"
          class="d-flex align-center text-decoration-none mr-2"
        >
          <img
            :src="require('@/assets/images/logos/battle_logo_small.png')"
            alt=""
            height="48"
            class="mr-1"
          />
          <span class="font-weight-black text-uppercase"> Battleline </span>
        </router-link>

        <div class="d-none d-md-block">
          <v-btn
            v-for="(item, index) in menu"
            :key="index"
            text
            :disabled="item.disabled"
            :to="item.link"
            class="mx-1"
          >
            {{ item.title }}
          </v-btn>
        </div>

        <v-spacer></v-spacer>

        <v-btn
          v-if="!$auth.isAuthenticated"
          large
          text
          class="mx-1 d-none d-sm-inline-block"
          @click="login()"
        >
          Sign In
        </v-btn>
        <v-btn v-else large text class="mx-1 d-none d-sm-inline-block">
          Profile
        </v-btn>
        <v-btn
          v-if="!$auth.isAuthenticated"
          large
          color="primary"
          @click="login()"
        >
          Sign Up
        </v-btn>
        <v-btn v-else large color="primary" @click="logout()"> Logout </v-btn>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { menu } from "./menus.js";

export default {
  props: {
    isFluid: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      drawer: null,
      menu,
    };
  },
  methods: {
    login() {
      this.$auth.loginWith('auth0');
    },
    logout() {
      this.$auth.logout();
    },
  },
};
</script>
