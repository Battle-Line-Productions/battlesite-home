<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <v-row>
        <v-col
          v-for="(item, i) in features"
          :key="i"
          cols="12"
          sm="6"
          lg="3"
        >
          <v-responsive max-width="300" class="mx-auto text-center">
            <div class="mb-2">
              <v-icon class="text-h1" color="primary">{{ item.icon }}</v-icon>
            </div>
            <div class="text-h5 mt-3">{{ item.title }}</div>
            <div class="font-weight-regular mt-2">{{ item.description }}</div>
          </v-responsive>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      features: [{
        icon: 'mdi-account-check-outline',
        title: 'Amazing Software',
        description: 'We focus on writing software to make the average consumers life easier and help you keep your stuff together.'
      }, {
        icon: 'mdi-lifebuoy',
        title: 'Fun Games',
        description: 'We produce video games that are super fun but still challenging. Play by yourself or with your friends.'
      }, {
        icon: 'mdi-email-open-multiple-outline',
        title: 'Awesome Community',
        description: 'We strive for our users to come together and work and play together. Join your Discord or forums and say Hi!!'
      }, {
        icon: 'mdi-clock-outline',
        title: 'SaaS Options',
        description: 'We offer services to help make your development experiences better. Come see what we offer and how we can help you!'
      }]
    }
  }
}
</script>
