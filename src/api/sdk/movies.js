import api from "../api";

const path = "movie/";

export const recuperarFilmesPopulares = async () => {
    return api.get(`${path}popular`).then((response) => {
        return response.data.results
    });
}
