import {createReducer} from '@reduxjs/toolkit';
import {removeAll, addAll, setSelectedMovie} from './actions';

const movies = createReducer({movies: [], selectedMovie: null, lastSearch: null}, {
    [addAll]: (state, action) => {
        const {payload} = action;
        state.movies = payload;
        state.lastSearch = new Date();
    },
    [removeAll]: (state) => {
        state.movies = [];
    },
    [setSelectedMovie]: (state, action) => {
        const {payload} = action;
        state.selectedMovie = payload;
    }
});

export default movies
