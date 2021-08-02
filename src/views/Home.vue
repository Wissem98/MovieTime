<template>
 
   <v-container   fluid class="home__container" color='primary'>
 <Banner /> 
 <Movies/>
   </v-container>
 
</template>

<script>
// @ is an alias to /src

import Banner from "@/components/Banner.vue";
import Movies from '../components/Movies.vue';


export default {
  name: "Home",
  
  components: {
    
    Banner,
    Movies,
  },
};
</script>

<style scoped>
.home__container {


  overflow-y:auto;
}
</style>
