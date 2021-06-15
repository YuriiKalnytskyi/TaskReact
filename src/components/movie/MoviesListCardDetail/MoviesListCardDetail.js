import {useEffect} from "react";
import {fetchMovie} from "../../../redux";
import {useDispatch, useSelector} from "react-redux";

export default function MoviesListCardDetail ({item}){
    const dispatch = useDispatch()
    
    const {movie} = useSelector(({movie}) => (movie))
    let {match: {params: {id}}}=item
    console.log(movie)


    useEffect(() => {
        dispatch(fetchMovie(id))
    },[dispatch , id])


    return(
        <div>

        </div>
    )

}