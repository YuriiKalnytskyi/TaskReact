import {SET_MOVIE, SET_MOVIE_ID} from "../actionTypes";

//import {getMovie} from "../../services/app";
// export const fetchMovie=(page) => async (dispatch) => {
//     try {
//         const resp = await getMovie(page).then()
//         console.log(resp)
//         const data = await resp.data
//         console.log(data)
//         dispatch(setMovie(data))
//     }
//     catch (e) {
//         console.log(e)
//     }
// }

export const fetchMovie = (page)=>async (dispatch) => {
    try {
        const resp = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=288bb0de612c607f61e04659a2cd2f04&page=${page}`)
        const data = await resp.json()
        // console.log(data)
        dispatch(setMovie(data))
    }
    catch (e) {
        console.log(e)
    }
}
export const fetchMovieId=(id) => async (dispatch) => {
    try {
        const resp = await getMovieId(id).then()
        console.log(resp)
        const data = await resp.data
        console.log(data)
        dispatch(setMovie(data))
    }
    catch (e) {
        console.log(e)
    }
}

export const setMovie = (payload) => ({type: SET_MOVIE, payload})
export const getMovieId = (payload) => ({type: SET_MOVIE_ID, payload})
