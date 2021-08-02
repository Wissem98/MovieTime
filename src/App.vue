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
  }),errorCaptured(){

//this.$ref.err.innerHTML='We haveeee'
//console.log(err,vm,info)
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  
  /**background-color: #111; **/
}
.err{
position:fixed;
z-index:9999;
padding:28px;
background-color: red;


}
</style>
