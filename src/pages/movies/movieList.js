import React, {useState} from 'react';
import * as moviesService from "../../api/sdk/movies";
import {useEffect} from "react";
import MovieItem from "./components/movieItem";
import {styles} from "./styles";
import {Box} from "@mui/material";
import * as moviesActions from "../../store/modules/movies/actions";
import {useDispatch, useSelector} from "react-redux";
import MovieDetails from "./components/movieDetails";

const MovieList = () => {

    const dispatch = useDispatch();
    const {movies, lastSearch} = useSelector((state) => state.movies)
    const [openDetails, setOpenDetails] = useState(false);

    useEffect(() => {

        const diffDays = getDiffDays(new Date(lastSearch), new Date());

        if (diffDays > 2) {
            getPopularMovies();
        }

    }, [])

    const getDiffDays = (date1, date2) => {
        const diffTime = Math.abs(date2 - date1);
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }

    const getPopularMovies = async () => {
        const movies = await moviesService.getPopularMovies();
        dispatch(moviesActions.addAll(movies));
    }

    const onClickMovie = (movie) => {
        setOpenDetails(true);
        dispatch(moviesActions.setSelectedMovie(movie));
    }

    return (
        <div>
            <Box sx={styles.container}>
                {
                    !movies.length && <Box>Loading...</Box>
                }

                {
                    movies.length && movies.map((movie, index) => (
                        <MovieItem onClick={onClickMovie} key={index} movie={movie}/>
                    ))
                }
            </Box>

            <MovieDetails
                maxHeight={600}
                open={openDetails}
                onDismiss={() => setOpenDetails(false)}
            />
        </div>
    )
}

export default MovieList;
