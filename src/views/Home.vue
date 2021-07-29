<template>
  <div class="home">
   
 <Banner /> 
  </div>
</template>

<script>
// @ is an alias to /src

import Banner from "@/components/Banner.vue";


export default {
  name: "Home",
  
  components: {
    
    Banner,
  },
};
</script>

<style scoped>
.home__container {
  background-color: #111;
}
</style>
