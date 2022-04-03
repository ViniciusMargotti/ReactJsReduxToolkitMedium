import * as moviesService from "../../api/sdk/movies";
import {useEffect, useState} from "react";
import ItemFilme from "./components/itemFilme";
import {styles} from "./styles";
import {Box} from "@mui/material";

const CatalogoList = () => {

    const [filmes, setFilmes] = useState([]);

    //eslint-disable-next-line
    useEffect(async () => {
       await recuperarFilmesPopulares();
    }, [])

    const recuperarFilmesPopulares = async () => {
        const filmes = await moviesService.recuperarFilmesPopulares();
        debugger;
        setFilmes(filmes);
    }
    return (
        <div>
            <Box sx={styles.boxFilme}>
                {
                    filmes.map(filme => (
                        <ItemFilme filme={filme}/>
                    ))
                }
            </Box>
        </div>
    )
}

export default CatalogoList;