<template>
  <v-app>
    <bar />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import bar from "@/components/Appbar.vue"

export default {
  components: {
    bar,
  }
}
</script>

<style>
@media (min-width: 1200px) {
  #main {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>