import {Paper} from "@mui/material";

const ItemFilme = (props) => {

    const {filme} = props

    return (
        <Paper elevation={3}>
            <img src={process.env.REACT_APP_URL_BASE_IMAGE + filme.poster_path} alt="posterFilme"/>
        </Paper>
    )
}

export default ItemFilme;