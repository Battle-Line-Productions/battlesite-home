<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="7">
        <v-img :src="require('@/assets/images/logos/battle_logo.png')"></v-img>
      </v-col>
    </v-row>
    <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 primary--text">
      The Front Line in Applications and Games
    </h1>
    <h2 class="text-h6 text-sm-h5 secondary--text mt-4">
      We produce awesome software to move the average person forward and amazing
      games to drive the mind of our community.
    </h2>
    <h2 class="text-h6 font-weight-bold secondary--text mt-8">
      We are almost ready! If you want to get notified when our games and
      software goes live, subscribe to our mailing list!
    </h2>
    <!-- <validation-observer
      v-slot="{ invalid }"
      ref="subscribe"
      tag="form"
      class="w-full max-w-lg"
      @submit.prevent="!invalid && subscribe()"
    >
      <div class="mt-4">
        <div class="d-flex flex-column flex-sm-row w-full w-lg-half">
          <validation-provider
            rules="required|email"
            :bails="false"
            tag="div"
            name="Email"
            v-slot="{ errors }"
            style="width: 100%;"
          >
            <v-text-field
              outlined
              solo
              label="Email"
              height="64"
              class="mr-sm-2"
            ></v-text-field>
            <ul
              class="list-disc list-inside text-red-500 m-2"
              v-if="errors.length"
            >
              <li class="leading-none" v-for="error in errors" :key="error">
                <small>{{ error }}</small>
              </li>
            </ul>
          </validation-provider>

          <v-btn
            :disabled="invalid"
            class="d-inline-flex"
            x-large
            color="secondary"
            >Subscribe</v-btn
          >
        </div>
      </div>
    </validation-observer> -->
    <Chimp />

  </v-container>
</template>

<script>
import Chimp from '@/components/ui/fields/mailChimpSignup.vue';

export default {
  components: {
    Chimp
  }

};
</script>