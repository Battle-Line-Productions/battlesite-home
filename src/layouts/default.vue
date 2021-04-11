<template>
  <v-app>
    <v-main>
      <DefaultLayout>
        <nuxt />
      </DefaultLayout>
    </v-main>
  </v-app>
</template>

<script>
import DefaultLayout from '@/components/ui/application/layout/Default.vue'

export default {
  components: {
    DefaultLayout
  }
}
</script>
