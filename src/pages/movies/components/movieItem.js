import React from 'react';
import {Box} from "@mui/material";

const MovieItem = (props) => {

    const {movie, onClick} = props

    return (
        <Box className="itemMovie">
            <img style={{cursor: 'pointer'}} onClick={() => onClick(movie)}
                 src={process.env.REACT_APP_URL_BASE_IMAGE + movie.poster_path} alt="posterMovie"/>
        </Box>
    )
}

export default MovieItem;
