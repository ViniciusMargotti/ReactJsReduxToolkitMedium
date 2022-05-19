import {createAction} from '@reduxjs/toolkit';

export const addAll = createAction('movies/addAll');
export const removeAll = createAction('movies/removeAll');
export const setSelectedMovie = createAction('movies/setSelectedMovie');
