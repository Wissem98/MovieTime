
<template>
  <form class="search"   
  >
   



 <v-text-field  v-model="last"
            class="input"
      v-if="seen"
              solo-inverted
               :value="movieTitle"
       @keyup="handleChange">
          <template v-slot:label>
            Search for a <strong>movie</strong> here! <v-icon style="vertical-align: middle">
              mdi-magnify
            </v-icon>
          </template>
        </v-text-field>

   

<v-btn
        class="mx-2"
        fab
        dark
        color="teal"
        @click="handleSubmit" type="submit" value="SEARCH"
      >
        <v-icon dark>
          mdi-magnify
        </v-icon>
      </v-btn>

  </form>
</template>

<script>
  import { ref } from '@vue/composition-api';

  export default {
    name: 'Search',
    props: ['search'],
   data() {
    return {
     seen:false
    };
  },
    setup({ search }, { emit }) {
      const movieTitle = ref(search);

      return {
        movieTitle,
        handleSubmit(event) {
          event.preventDefault();
          emit('search', movieTitle.value);
        },
        handleChange(event) {
          movieTitle.value = event.target.value
        }
      }
    }
  };
</script>
<style scoped>
.mx-2{margin-top: -85px;
}
</style>