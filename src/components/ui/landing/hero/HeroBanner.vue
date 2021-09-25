<template>
  <v-container>
    <v-row>
      <v-col>
        <v-row align="center" justify="center">
          <v-col cols="12" md="6" lg="7">
            <v-img
              :src="require('@/assets/images/logos/battle_logo.png')"
              alt="Battleline Productions"
            ></v-img>
          </v-col>
        </v-row>
        <v-row class="mt-n8">
          <v-col>
            <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 primary--text text-center">
              The Front Line in Applications and Games
            </h1>
            <h2 class="text-h6 text-sm-h5 secondary--text mt-4 text-center">
              We produce awesome software to move the average person forward and
              amazing games to drive the mind of our community.
            </h2>
            <h2 class="text-h6 font-weight-bold secondary--text mt-8 text-center">
              We are almost ready! If you want to get notified when our games
              and software is live, subscribe to our mailing list!
            </h2>
            <Chimp />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Chimp from "@/components/ui/fields/mailChimpSignup.vue";

export default {
  components: {
    Chimp
  }
};
</script>