<template>
  <div class="ma-0">
    <header class="banner" :style="headerStyle" width="200">
      <div class="banner__contents">
        <h1 class="banner__title">Wrath of Man </h1>

<li style="display:flex; justify-content:space-around;  " class="holder">
      <v-icon class="genres">mdi-movie</v-icon>
     <span class="genre">Action</span>
  <v-icon class="years">mdi-calendar</v-icon>
      <span class="year">2021</span>
        <v-icon class="runtimes">mdi-timer</v-icon>
       <span class="runtime">2h10min</span>
         <v-icon class="ratingstars" >mdi-star </v-icon>
       <span class="ratingstars">(6.9)</span>
     
</li>
    <v-divider background-color="transparent" width="42px"></v-divider>
    
    
        <div class="banner__buttons">
         
          <button class="banner__button rounded-0" >Play <v-icon
         right
          dark
          class="az"
              size="17"
          
        >
          mdi-play
        </v-icon></button>
          <button class="banner__button rounded-0" @click="Fav()">Favorite <v-icon
         right
          dark
          class="fav"
          size="15"
          
        >
          mdi-heart
        </v-icon></button>
        </div>
        <p class="banner__description">A cold and mysterious new security guard for a Los Angeles 
          cash truck company surprises his co-workers when he u
          nleashes precision skills during a heist. The crew is 
          left wondering who he is and where he came from.</p>
      </div>
      <div class="banner__fadeBottom" />
    </header>
  </div>
</template>

<script>


export default {
  data() {
    return {
      showLoading: true,
  seen:false,
      size: "cover",
      position: "center top",
      image: "",
    };
  },
  
  computed: {

  
    headerStyle: function() {
      return {
        backgroundSize: this.size,
        backgroundPosition: this.position,
        backgroundImage: `url("https://image.tmdb.org/t/p/original/M7SUK85sKjaStg4TKhlAVyGlz3.jpg")`,
      };
    },
  },
  methods: {
    Fav () {
      this.$router.push('/Favorite/')
    }
   

   }
};
</script>

<style scoped>
.banner {
  color: rgb(145, 55, 55);
  object-fit: contain;
  height: 448px;
  width: 100%;
 
}
.az{margin-top: -3px;
margin-left: 2px;}


.fav{margin-top: -3px;
margin-left: 2px;

}

.banner__contents {
  margin-left: 30px;
  padding-top: 100px;
  height: 190px;
}



.banner__title {
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
}

.banner__description {
  width: 265rem;
  margin-top: 1rem;
  line-height: 1.5;
  padding-top: 1rem;
  font-size: 1rem;
  margin-left: -2px;
  padding-left: 12px;
  max-width: 380px;
  height: 145px;
  color: #fff;
  
  background-color: rgba(83, 82, 82, 0.5);
}

.banner__button {
  cursor: pointer;
  color: white;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-right: 1rem;
  margin-top: 1.5rem;
  padding-top: 0.5rem;
  background-color: rgb(131, 57, 57);
  padding-bottom: 0.5rem;
}

.banner__button:hover {
  color: white;
  background-color:rgba(44, 43, 43, 0.5) ;
  transition: all 0.2s;
}
/** .banner__fadeBottom {
  height: 15rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
} **/


       
      .holder{ 
   column-gap: -742px;
   margin-left: -121px;
  
      }
        
         .year{
  font-size: 21px;
  color: white;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
  margin-left: -265px;
}
.years{
  font-size: 22px;
  color: white;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
  margin-left: -250px;
}

.genre{
  font-size: 21px;
  color: white;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
  margin-left: -265px;
}

.genres{
  font-size: 21px;
  color: white;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
  margin-left: -5px;
}



.runtime{
  font-size: 21px;
  color: white;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
  margin-left: -265px;
}
.runtimes{
  font-size: 22px;
  color: white;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
  margin-left: -260px;
}



.ratingstar{
  font-size: 23px;
  color: white;
  text-align: center;
  
 
  margin-left: -122px;
 
}
.ratingstars{
  font-size: 2px;
  color: white;
  text-align: center;
  
  margin-right:85px;
 

}















@keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #4da9ff, 0 0 40px #a1a1a1, 0 0 50px #504dff, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
}



</style>
