import { reactive, watch } from '@vue/composition-api';
const API_KEY = 'fa248759';


export const useMovieApi = () => {
    const state = reactive({
        search: ['avengers', 'joker'],
        loading: true,
        movies: []
    });

    for (const element of state.search) {
        console.log("sd", element);
        watch(() => {


            console.log("sd", element);
            const MOVIE_API_URL = `https://www.omdbapi.com/?s=${element}&apikey=${API_KEY}`;
            console.log("URLLL", MOVIE_API_URL);
            fetch(MOVIE_API_URL)
                .then(response => response.json())
                .then(jsonResponse => {
                    state.movies = jsonResponse.Search;
                    state.loading = true;
                });

        });


    }
    return state;
};