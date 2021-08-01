<template>
    


    
<div class="movies">
    
<h2 class="font-weight-medium mb-3 mt-4 pa-5" >   <v-icon large color="white" class="icc"  >mdi-movie</v-icon>
 Trending Movies</h2>

    <li style="display:flex; justify-content:space-around;  " class="holder">
      <page class="ion-page">
      <content>
        <div v-if="options.length">
          <item class="result-section">
            <pre style="font-size:xx-small">{{selected}}</pre>
          </item>
          <AutoComplete :options="options" :optionsKey="optionsKey" @save-option="saveResult" :search="state.search" @search="handleSearch" class="auc"/>
        </div>
      </content>
    </page>
    


 

    </li>



     <v-sheet
      class="mx-auto"
      elevation="8"
      max-width="1200"
    >
      <v-slide-group
        v-model="model"
        class="pa-4"
        show-arrows
      >
        <v-slide-item
           :movie="movie"
          v-for="movie in state.movies" :key="movie.imdbID"
          v-slot="{ active, toggle }"
        >
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4"
            height="270"
            width="190"
             
            @click="toggle"
          >
           <img width="200"  :src="movie.Poster"  @click="handleClick(movie.Poster); infoFunction(movie);"/>
        
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <v-scale-transition>
                <v-icon
                  v-if="active"
                  color="white"
                  size="48"
                  v-text="'mdi-close-circle-outline'"
                ></v-icon>
              </v-scale-transition>
            </v-row>
          </v-card>
        </v-slide-item>
      </v-slide-group>
  
      <v-expand-transition >
        <v-sheet 
          v-if="model != null"
          height="420"
          tile
                    :movie="movie"

          
        >
          <v-row 
            class="fill-height"
            align="left"
            justify="center"
          >
            <v-card 
      class="mx-autoo"
      
 
    >
      <v-img
        class="white--text align-end"
        height="410px"
        width="280px"
        :src=title
      >
       
      </v-img>
  
      
  
       <v-card-text class="text--primary">
         <h1 class="banner__title">{{titlee}}</h1>
        <div class="titlee"><b>Genre : </b> {{titlee}} ,   <b>Year:</b> {{year}}</div><br>
        <div class="plot">{{plot}}</div><br>
        
        
      </v-card-text>
  
      <v-card-actions>
        <v-btn class="btnn"
         
          text
          
      
        >
          <v-icon left>
          mdi-play
        </v-icon>
        Play
        </v-btn>
  
  
        <v-btn class="btnnx"
        
          text
        >
        <v-icon left>
          mdi-heart
        </v-icon>
          Add To Favorite
        </v-btn>
      </v-card-actions>
    </v-card>
          </v-row>
        </v-sheet>
      </v-expand-transition>
    </v-sheet>
     <h2 class="font-weight-medium mb-3 mt-4 pa-5"></h2>
</div>
</template>

<script>
import useAutoComplete from "../useAutoComplete";
 
  //import Search from './Search.vue';

import movies from '../assets/movies.json'
  import { useMovieApi } from '../hooks/movie-api';
import AutoComplete from './AutoComplete.vue';

  export default {
    name: 'app',
    components: {  AutoComplete},
   
    data() {
    return {
      plot:null,
      year:null,
     titlee:null,
     title:null,
      model: null,
      selected: {},
      id:null,
      options: [  { title: 'Feeee'}],
      optionsKey: "title"
    };
  },
    setup({ options, optionsKey }) {
      const state = useMovieApi();
console.log("dedede",state.search)
      return {
        state,
        handleSearch(searchTerm) {
          state.loading = true;
          state.search = searchTerm;
        },...useAutoComplete(options, optionsKey)
   
      
    
  
      };
    },
    methods:{handleClick(movie) {
   
     
      this.title=movie;
       console.log("movie title", this.title);
      
    },infoFunction(movie) {
   
     this.year=movie?.Year;
      this.titlee=movie?.Title;
      this.id=movie?.Title;
       console.log("movie title", this.year);
      console.log("movie idd", this.id);


      
    },doSave: function(_clear) {
      if (_clear) {
        this.$emit("save-option", {});
        this.userInput = "";
      } else {
        this.$emit("save-option", this.selectedItem);
      }
    },getData: async function() {
       this.options = movies;

    },
    saveResult: function(_value) {
      this.selected = _value;
     
    }
  },
  async created() {
    await this.getData();
  }}


  ;
</script>


<style scoped>

.auc{
  width:400px;
  margin-top: -72px;
  margin-left: 700px;
}


.result-section {
  position: absolute;
  top: 110px;
  left: 16px;
}
.iit{background: #4da9ff;}
.de{background: #4da9ff;}
.btnn{margin-top: 120px;
background: rgb(122, 11, 11);
color: white;
}

.btnnx{margin-top: 120px;
background: rgb(122, 11, 11);
color: white;
}

.titlee{

margin-top: 23px;
margin-left: 144px;

font-size: 1rem;

}
.plot{margin-left: -434px;
margin-top: -13px;
}


.banner__title {
  font-size: 2.8rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
  margin-top: -62px;
  margin-left: 82px;
color: rgb(75, 34, 34);
 -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
  }
  to {
    text-shadow: 0 0 20px #fff, 0 0 30px #4da9ff, 0 0 40px #a1a1a1, 0 0 50px #504dff, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
  }
}


.text--primary{
margin-top: -250px;

}
.mx-autoo{margin-left: 12px;
margin-top: 10px;
width: 1000px;

}

.white--text {margin-left: 700px;
margin-top: 0px;}

  .app {
    text-align: center;
  }

  .header {
    background-color: #282c34;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 20px;
    cursor: pointer;
  }

  .spinner {
    height: 80px;
    margin: auto;
  }

  .intro {
    font-size: large;
  }

  /* new css for movie component */

  * {
    box-sizing: border-box;
  }

  

  .header h2 {
    margin: 0;
  }

  .add-movies {
    text-align: center;
  }

  .add-movies button {
    font-size: 16px;
    padding: 8px;
    margin: 0 10px 30px 10px;
  }

  .movie {
    padding: 5px 25px 10px 25px;
    max-width: 25%;
  }

  .errorMessage {
    margin: auto;
    font-weight: bold;
    color: rgb(161, 15, 15);
  }


  .search {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
  }


  input[type="submit"] {
    padding: 5px;
    background-color: transparent;
    color: black;
    border: 1px solid black;
    width: 80px;
    margin-left: 5px;
    cursor: pointer;
  }


  input[type="submit"]:hover {
    background-color: #282c34;
    color: antiquewhite;
  }


  .search > input[type="text"]{
    width: 40%;
    min-width: 170px;
  }

  @media screen and (min-width: 694px) and (max-width: 915px) {
    .movie {
      max-width: 33%;
    }
  }

  @media screen and (min-width: 652px) and (max-width: 693px) {
    .movie {
      max-width: 50%;
    }
  }


  @media screen and (max-width: 651px) {
    .movie {
      max-width: 100%;
      margin: auto;
    }
  }

.v-img {
  object-fit: contain;
}
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.8;
}














.movies {

  scroll-behavior: inherit;
}




.icc{margin-top: 1px;}

.font-weight-medium{
  margin-left: -712px;
  color: rgb(255, 247, 240);
 -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;
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
