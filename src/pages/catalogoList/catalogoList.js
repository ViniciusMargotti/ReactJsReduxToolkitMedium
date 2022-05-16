import * as moviesService from "../../api/sdk/movies";
import {useEffect} from "react";
import ItemFilme from "./components/itemFilme";
import {styles} from "./styles";
import {Box} from "@mui/material";
import * as catalogoActions from "../../store/modules/catalogo/actions";
import {useDispatch, useSelector} from "react-redux";

const CatalogoList = () => {

    const dispatch = useDispatch();
    const {filmes} = useSelector((state) => state.catalogo)

    useEffect(() => {
        recuperarFilmesPopulares();
        //eslint-disable-next-line
    }, [])

    const recuperarFilmesPopulares = async () => {
        const filmes = await moviesService.recuperarFilmesPopulares();
        dispatch(catalogoActions.addMany(filmes));
    }

    const renderFilmes = () => {

        if (!filmes.length) return <Box>Carregando...</Box>

        return (
            <>
                {
                    filmes.map((filme, index) => (
                        <ItemFilme key={index} filme={filme}/>
                    ))
                }
            </>
        )
    }

    return (
        <div>
            <Box sx={styles.container}>
                {
                    renderFilmes()
                }
            </Box>
        </div>
    )
}

export default CatalogoList;
