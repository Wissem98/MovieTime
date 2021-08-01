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
          v-for="n in 15"
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
  
      <v-expand-transition>
        <v-sheet
          v-if="model != null"
          height="300"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <h3 class="text-h6">
              Selected {{ model }}
            </h3>
          </v-row>
        </v-sheet>
      </v-expand-transition>
    </v-sheet>
     <h2 class="font-weight-medium mb-3 mt-4 pa-5"></h2>
  </div>
</template>
<style scoped>

.favorite
{background-color: black;}

.font-weight-medium{color: ivory;

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
