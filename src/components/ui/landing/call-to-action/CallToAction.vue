<template>
  <v-sheet color="#222628" dark>
    <v-container class="py-8 text-center">
      <div class="text-overline mb-3">{{ subtitle }}</div>
      <div class="text-h3">{{ title }}</div>

      <v-btn large color="#dc591a" class="mt-4 w-full w-sm-auto" :to="btn1Link">
        {{ btn1Label }}
        <v-icon right>mdi-menu-right</v-icon>
      </v-btn>

      <slot />
    </v-container>
  </v-sheet>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    btn1Label: {
      type: String,
      default: ''
    },
    btn1Link: {
      type: String,
      default: ''
    }
  }
}
</script>
