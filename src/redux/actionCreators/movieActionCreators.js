import {SET_MOVIE, SET_MOVIE_ID, SET_VIDEO_ID, SEARCH} from "../actionTypes";

import {getMovie, getMovieId, getVideoId , searchMovie} from "../../services/app";
export const fetchMovie=(page) => async (dispatch) => {
    try {
        const {data}= await getMovie(page)
        console.log(data);
        dispatch(setMovie(data))
    }
    catch (e) {
        console.log(e)
    }
}

// export const fetchMovie = (pagination)=>async (dispatch) => {
//     try {
//         const resp = await fetch(
//             `https://api.themoviedb.org/3/discover/movie?api_key=288bb0de612c607f61e04659a2cd2f04&page=${pagination}`)
//         const data = await resp.json()
//         // console.log(data)
//         dispatch(setMovie(data))
//     }
//     catch (e) {
//         console.log(e)
//     }
// }
export const fetchMovieId=(id) => async (dispatch) => {
    try {
        const resp = await getMovieId(id).then()
        const data = await resp.data
        dispatch(setMovieId(data))
    }
    catch (e) {
        console.log(e)
    }
}

export const fetchVideoId=(id) => async (dispatch) => {
    try {
        const resp = await getVideoId(id).then()
        const data = await resp.data
        console.log(data)
        dispatch(setVideoId(data))
    }
    catch (e) {
        console.log(e)
    }
}
export const fetchSearchMovie=(text) => async (dispatch) => {
    try {
        const resp = await searchMovie(text).then()
        const data = await resp.data
        console.log(data)
        dispatch(setSearchMovie(data))
    }
    catch (e) {
        console.log(e)
    }
}

export const setMovie = (payload) => ({type: SET_MOVIE, payload})
export const setMovieId = (payload) => ({type: SET_MOVIE_ID, payload})
export const setVideoId = (payload) => ({type: SET_VIDEO_ID, payload})
export const setSearchMovie = (payload) => ({type: SEARCH, payload})
