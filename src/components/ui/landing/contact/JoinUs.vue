<template>
  <v-container class="py-8">
    <v-responsive max-width="900" class="mx-auto text-center">
      <h2 class="text-h3 text-lg-h2">Join our community</h2>
      <div class="text-h6 text-lg-h5 mt-5">
        From the occasional blog post to an active forum or voice chat over discord, our team and community want to know you. Pick an option below to Line Up and Battle On!
      </div>
    </v-responsive>

    <v-row class="mt-4">
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title class="font-weight-bold">
            <v-icon>mdi-post</v-icon>
            <span class="ml-1">Blog</span>
          </v-card-title>
          <v-card-text class="text-body-1">
            <p>
              THe occasional development blog post, product update and release notes.
            </p>
            <v-btn large color="secondary">Visit</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card color="secondary" dark>
          <v-card-title class="font-weight-bold">
            <v-icon>mdi-forum-outline</v-icon>
            <span class="ml-1">Forum</span>
          </v-card-title>
          <v-card-text class="text-body-1">
            <p>
              Join the Battleline community and team in our forum! Ask for features and or ask questions. We are listening
            </p>
            <v-btn large outlined>Join now</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card>
          <v-card-title class="font-weight-bold">
            <v-icon>mdi-discord</v-icon>
            <span class="ml-1">Discord</span>
          </v-card-title>
          <v-card-text class="text-body-1">
            <p>
              Interested in voice chat, live community chat or game teams. Discord is the way to go! Join us!
            </p>
            <v-btn large color="secondary">Join now</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
