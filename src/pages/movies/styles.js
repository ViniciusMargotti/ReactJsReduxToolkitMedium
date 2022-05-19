import {Box, styled} from "@mui/material";

export const styles = {
    container: {
        width: {xs: '100%', md: '100%'},
        backgroundColor: '#0c0000',
        color: '#fff',
    },
    boxInfoMovie: {
        float: 'left',
        height: 550,
        width: '40%',
        padding: 4
    },
    titleMovie: {
        color: 'white',
        fontFamily: 'Ubuntu',
    },
    overviewMovie: {
        color: 'gray',
    },
    iconClose: {
        position: 'absolute',
        color: 'white',
        top: 15,
        right: 15,
        cursor: 'pointer',
    }
}
export const BoxImageMovie = styled(Box)(({selectedMovie}) => ({
    float: 'right',
    height: 550,
    width: '60%',
    background: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)),url(${process.env.REACT_APP_URL_BASE_IMAGE_ORIGINAL + selectedMovie.backdrop_path})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(0,0,0,0.4)',
}));

