<template>
  <v-sheet>
    <v-container class="py-4 py-lg-8">
      <div class="text-center">
        <h2 class="text-h3 text-lg-h2">Meet the team</h2>
        <v-responsive max-width="1200" class="mx-auto">
          <div class="text-h6 text-lg-h5 mt-4">
            The team at Battle line works hard to develop software and games to meet your life and entertainment needs. Lets take a look at the crew below
            and become more fimilar with the team working to bring simplicity and fun back into your lives!
          </div>
        </v-responsive>
      </div>
      <v-row class="mt-6">
        <v-col
          v-for="(item, i) in team"
          :key="i"
          cols="12"
          sm="6"
          lg="3"
          class="text-center"
        >
          <v-avatar size="220">
            <v-img :src="require(`@/assets/images/team/${item.image}.jpg`)"></v-img>
          </v-avatar>

          <div class="text-h5 mt-3">{{ item.name }}</div>
          <div v-if="item.tag" class="text-h6 secondary--text">Gamer Tag: {{ item.tag }}</div>
          <div class="text-h6 secondary--text">{{ item.title }}</div>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: 'Mike',
          tag: 'Funkel',
          title: 'Co-Founder & Senior Software Engineer',
          image: 'mike',
          twitter: '#',
          github: '#',
          linkedin: '#'
        },
        {
          name: 'Luke',
          tag: 'LawlessFighter',
          title: 'Co-Founder & Senior Game Designer',
          image: 'luke',
          twitter: '#',
          github: '#',
          linkedin: '#'
        },
        {
          name: 'Elliot',
          tag: 'Golem',
          title: 'Co-Founder & Senior Software Engineer',
          image: 'elliot',
          twitter: '#',
          github: '#',
          linkedin: '#'
        },
        {
          name: 'Danny',
          tag: 'DannyFlowers',
          title: '2D Art Director',
          image: 'danny',
          twitter: '#',
          github: '#',
          linkedin: '#'
        }
      ]
    }
  }
}
</script>
