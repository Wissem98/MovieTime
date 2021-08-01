<template>
<div>
    <v-app-bar class="bar"  dark elevate-on-scroll fixed 
   
        fade-img-on-scroll
        scroll-target="#scrolling-techniques-3">
       <v-btn
        target="_blank"
        text
      >
       
         <v-icon large   >mdi-movie</v-icon>
     
          
         <span class="mr-2" > Movies</span>
        
      </v-btn>
         <v-spacer></v-spacer>
      <div class="d-flex align-center" >
        <v-img
       
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          min-width="180"
          src="../images/logo-mvtime.png"
          transition="scale-transition"
          width="120"
        />
      </div>

    
  <v-spacer></v-spacer>
  
  
      <v-btn icon v-if="!$vuetify.theme.dark" @click="toggleTheme()">
        <v-icon color="red">mdi-lightbulb-outline</v-icon>
      </v-btn> 
      <v-btn icon v-if="$vuetify.theme.dark" @click="toggleTheme()">
        <v-icon class="mr-1" color="grey">mdi-lightbulb</v-icon>
      </v-btn>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon @click="Fav()"  >
          <v-icon>mdi-heart</v-icon>
        </v-btn>
  
        <v-btn icon  @click="Abt()">
          <v-icon>mdi-information-outline</v-icon>
        </v-btn>
     
    </v-app-bar>
  </div>
     
</template>

<script>
export default {
  data: () => ({
    showBlack: false,
  }),
   methods: {
    Fav () {
      this.$router.push('/Favorite/')
    },toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },Abt () {
      this.$router.push('/About/')
    }
   

   }





};
</script>

<style scoped>
a:-webkit-any-link {
  text-decoration: none;
}
.bar{background-color: black;}
</style>
