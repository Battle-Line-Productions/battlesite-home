<template>
  <v-layout class="fill-height">
    <v-container fluid class="pt-3">
      <router-view class="py-2 fill-height"></router-view>
    </v-container>

    <v-footer app inset>
      <div class="overline">
        Copyright © 2021
        <a href="https://BattlelineProductions.com" target="_blank"
          >Battleline Productions</a
        >, All rights Reserved
      </div>
    </v-footer>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
