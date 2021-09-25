<template>
  <div>
    <Hero />
    <Feature />
    <Team />
    <CallToAction />
  </div>
</template>

<script>
import Hero from '@/components/ui/landing/hero/HeroBanner.vue'
import Feature from '@/components/ui/landing/feature/Feature.vue'
import Team from '@/components/ui/landing/team/Team.vue'
import CallToAction from '@/components/ui/landing/call-to-action/CallToActionContainer.vue'

export default {
  layout: 'default',
  components: {
    Hero,
    CallToAction,
    Feature,
    Team
  },
  mounted() {
        this.$cookies.modal = true;
  }
}
</script>

<style scoped>
.center-me {
  align-items: center;
  justify-content: center;
}
</style>
