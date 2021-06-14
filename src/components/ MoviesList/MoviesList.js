import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie} from "../../redux";


export default function MoviesList() {
    const dispatch = useDispatch()
    const {movies} = useSelector(({movies}) => (movies))

   /* let [page, setPage] = useState(1)*/


    useEffect(() => {
        dispatch(fetchMovie(2))
    }, [])

    console.log(movies)

    return (
        <div>

        </div>
    );
}

