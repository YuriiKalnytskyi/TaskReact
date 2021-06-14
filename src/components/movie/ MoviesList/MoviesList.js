import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie} from "../../../redux";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import './MoviesList.css'


export default function MoviesList() {
    const dispatch = useDispatch()
    const {movies} = useSelector(({movies}) => (movies))

    let [page, setPage] = useState(1)


    const next = () => {
        if (page < movies.total_pages) {
            setPage(++page)
        }
    }
    const back = () => {
        if (page > 1) {
            setPage(--page)
        }
    }
    const first = () => {
        setPage(page = 1)
    }
    const last = () => {
        setPage(movies.total_pages)
    }


    useEffect(() => {
        dispatch(fetchMovie(page))
    }, [dispatch, page])

    console.log(movies)

    return (
        <div className={"container"}>
            <div className={"container-wrapper"}>
                {
                    movies.results &&
                    movies.results.map((value) => {
                        return <MoviesListCard key={value.id}
                                               item={value}
                        />
                    })
                }
            </div>

            <div>
                <button className={"btn"} onClick={first}>first</button>
                <button className={"btn"} onClick={back}>back</button>
                <samp>  {page}   </samp>
                <button className={"btn"} onClick={next}>next</button>
                <button className={"btn"} onClick={last}>last</button>
            </div>
        </div>
    );

}

