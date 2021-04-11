<template>
  <v-app>
    <v-main>
      <SSOLayout>
        <nuxt />
      </SSOLayout>
    </v-main>
  </v-app>
</template>

<script>
import SSOLayout from '@/components/ui/application/layout/SsoLayout.vue'

export default {
  components: {
    SSOLayout
  }
}
</script>
