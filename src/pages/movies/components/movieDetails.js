import {BottomSheet} from "react-spring-bottom-sheet";
import React from "react";
import {useSelector} from "react-redux";
import {BoxImageMovie, styles} from "../styles";
import {Box, Typography} from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const MovieDetails = (props) => {

    const {maxHeight, onDismiss, open} = props;
    const {selectedMovie} = useSelector((state) => state.movies)

    return (
        <BottomSheet
            maxHeight={maxHeight}
            open={open}
            onDismiss={onDismiss}
            snapPoints={({minHeight, maxHeight}) => [minHeight, maxHeight]}
            expandOnContentDrag={false}
            dragEnabled={false}
        >
            {
                selectedMovie &&
                <Box>
                    <Box sx={styles.boxInfoMovie}>
                        <Typography sx={styles.titleMovie} mt={4} variant="h4">
                            {selectedMovie.original_title}
                        </Typography>

                        <Typography mt={4}  sx={styles.overviewMovie} variant="body1">
                            {selectedMovie.overview}
                        </Typography>

                        <Typography sx={styles.titleMovie} mt={6}  variant="body1">
                            Vote average {selectedMovie.vote_average}
                        </Typography>

                        <Typography sx={styles.titleMovie} mt={2} variant="body1">
                            Total votes ({selectedMovie.vote_count})
                        </Typography>
                    </Box>

                    <BoxImageMovie selectedMovie={selectedMovie}>
                        <CloseOutlinedIcon onClick={onDismiss} fontSize="large" style={styles.iconClose}/>
                    </BoxImageMovie>
                </Box>
            }
        </BottomSheet>
    )
}

export default MovieDetails;
