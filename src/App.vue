<template>
  <v-app class="app-container">
    <TheHeader />

    <v-main>
      <router-view></router-view>
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",

  components: {
    TheHeader,
    TheFooter,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  /**background-color: #111; **/
}
</style>
