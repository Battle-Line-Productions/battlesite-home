<template>
  <div>
    <JoinUs />
    <ContactUs />
  </div>
</template>

<script>
import JoinUs from '@/components/ui/landing/contact/JoinUs.vue'
import ContactUs from '@/components/ui/landing/contact/ContactUs.vue'

export default {
  layout: 'default',
  components: {
    JoinUs,
    ContactUs
  }
}
</script>
