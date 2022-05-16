import {Box} from "@mui/material";
import {styles} from "../styles";

const ItemFilme = (props) => {

    const {filme} = props

    return (
        <Box sx={styles.container}>
            <img src={process.env.REACT_APP_URL_BASE_IMAGE + filme.poster_path} alt="posterFilme"/>
        </Box>
    )
}

export default ItemFilme;
