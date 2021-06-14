import {SET_MOVIE} from "../actionTypes";
import {getMovie} from "../../services/app";

export const fetchMovie=(page) => async (dispatch) => {
    try {
        const resp = await getMovie(page).then()
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
