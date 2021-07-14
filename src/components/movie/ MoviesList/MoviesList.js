import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie, fetchSearchMovie} from "../../../redux";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import './MoviesList.css'
import Page from "../components/pagination/Page";


export default function MoviesList() {
    const dispatch = useDispatch()
    const {movies} = useSelector(({movies}) => (movies))

    let [page, setPage] = useState(1)
    let [search, setSearch] = useState("")


    const next =() => {
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
        if (search===''){
            dispatch(fetchMovie(page))
        }else {
            dispatch(fetchSearchMovie(search))
        }
    }, [dispatch, page,search])

    return (
        <div className={"container"}>
            <div className={'search'}>
                <form>
                    <input placeholder={"Search"} onChange={(event => setSearch(event.target.value) )}/>
                </form>
            </div>
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

            <div className={'pages'} >
                <Page first={first} back={back} next={next} last={last} page={page}  />
            </div>
        </div>
    );

}

