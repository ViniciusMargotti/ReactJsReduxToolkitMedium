import {createReducer} from '@reduxjs/toolkit';
import {addMany, addOne} from './actions';

const catalogo = createReducer({filmes: [],}, {
    [addOne]: (state, action) => {
        const {payload} = action;
        state.horarioSelecionado = payload;
    },
    [addMany]: (state, action) => {
        const {payload} = action;
        state.filmes = [...state.filmes, ...payload];
    }
});

export default catalogo
