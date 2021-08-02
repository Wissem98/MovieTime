<template>
  <div class="favorite" >
    <h2 class="font-weight-mediu mb-3 mt-4 pa-5" >  
 TFavorite Movies</h2>
  <h2 class="font-weight-medium mb-3 mt-4 pa-5" >   <v-icon large color="white"  >mdi-movie</v-icon>
 Favorite Movies</h2>
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
          v-for="(s,n) in favorites"
          :key="n"
          v-slot="{ active, toggle }"
        >
          <v-card
            :color="active ? 'primary' : 'grey lighten-1'"
            class="ma-4"
            height="250"
            width="150"
            @click="toggle"
          >
          <img width="200"  :src="JSON.parse(s)['image']"   @click="handleClick(JSON.parse(s)['image']); infoFunction(JSON.parse(s),n);" />
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
        <div class="titlee"><b>imdbID : </b> {{id}} ,   <b>Year:</b> {{year}}</div><br>
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
        @click="deleteFavorite"
          color="orange"
          text
        >
        <v-icon left>
          mdi-delete
        </v-icon>
          Delete from favorites
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
 
import movies from '../assets/movies.json'
  import { useMovieApi } from '../hooks/movie-api';

  export default {
    name: 'Favorite',
 
    data() {
    return {
      favorites:window.localStorage,
      uui:null,
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
    setup({ options, optionsKey ,favorites}) {
      const state = useMovieApi();
      favorites=window.localStorage;
console.log("dedede",state.search)
      return {
        favorites,
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
      
    },infoFunction(movie,n) {
      this.uui=n;
     this.year=movie['year'];
      this.titlee=movie['title'];
      this.id=movie['id'];
       console.log("movie title", this.year);
      console.log("movie idd", this.id);


      
    },deleteFavorite: function() {


       
       window.localStorage.removeItem(this.uui);
       this.$forceUpdate();
},
    doSave: function(_clear) {
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
background: rgb(161, 15, 15);
color: wheat;
}

.btnnx{margin-top: 120px;
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

