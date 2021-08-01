import { reactive, watch } from '@vue/composition-api';
const API_KEY = 'fa248759';


export const useMovieApi = () => {
    const state = reactive({
        search: 'avengers',
        loading: true,
        movies: []
    });

    watch(() => {
        const MOVIE_API_URL = `https://www.omdbapi.com/?s=${state.search}&apikey=${API_KEY}`;
        console.log("URLLL", MOVIE_API_URL);
        fetch(MOVIE_API_URL)
            .then(response => response.json())
            .then(jsonResponse => {
                state.movies = jsonResponse.Search;
                state.loading = true;
            });
    });

    return state;
};