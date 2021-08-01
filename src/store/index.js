import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        movies: []
    },
    getters: {
        totalMovies(state) {
            return state.movies.length;
        }
    },
    mutations: {
        SAVE_MOVIE(state, title) {
            state.movies.push(title);
        }
    },
    actions: {
        saveMovie({ commit }, title) {
            commit('SAVE_MOVIE', title);
        }
    },
    modules: {}
});