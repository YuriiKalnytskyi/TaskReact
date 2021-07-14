import {useEffect} from "react";
import {fetchMovieId, fetchVideoId} from "../../../redux";
import {useDispatch, useSelector} from "react-redux";
import './MoviesListCardDetail.css';
import PosterPreview from "../components/posterPreview/PosterPreview";
import Video from "../components/video/Video";


export default function MoviesListCardDetail ({item}){
    const dispatch = useDispatch()
    const {movie,video} = useSelector(({movies}) => (movies))

    let {match: {params: {id}}}=item

    useEffect(() => {
        dispatch(fetchMovieId(id))
        dispatch(fetchVideoId(id))
    },[dispatch , id])

    console.log(movie);

    return(
        <div className={'movieDetail_container'}>
            <div>
                {
                    movie && (
                        <div className={'movieDetail'} style={{
                            backgroundImage:`linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.9)), 
                            url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                            backgroundSize:"cover"
                        }}>
                            <div className={'movieDetail_info'}>
                                <div className={'movie_info_photo'}>
                                    <div className={'movie_photo'}>
                                        <PosterPreview  img={movie.poster_path} alt={movie.id}/>
                                    </div>
                                    <div className={'vote_average'}>
                                        {movie.vote_average}
                                    </div>
                                </div>

                                <div className={'movie_info'}>
                                    <div>
                                        <samp className={'movie_info_title'}>
                                            {movie.original_title}
                                        </samp>
                                        <h3 className={'movie_info_data'}>
                                            Release date:{movie.release_date}
                                        </h3>
                                    </div>

                                    <div className={"movie_info_genres"}>
                                        Genres:
                                        {movie.genres && movie.genres.map((value) => {
                                            return <span key={value.id}> {value.name}, </span>
                                        })
                                        }
                                    </div>

                                    <div className={'movie_info_language'}>
                                        Language: <samp>{movie.original_language}</samp>
                                    </div>
                                    <div className={'movie_info_popularity'}>
                                        Popularity: <samp>{movie.popularity}</samp>
                                    </div>
                                    <br/>
                                    <div className={'movie_info_overview'}>
                                        Popularity: <samp>{movie.overview}</samp>
                                    </div>



                                </div>

                            </div>
                        </div>
                    )
                }
            </div>
            <div className={'video_container'}>
                <div className={'video'}>
                    {
                        video.results && video.results.map((value,index)=>{
                            if (index === 0){
                                return <Video key={value.id} value={value}/>
                            }
                            if (index === 1){
                                return <Video key={value.id} value={value}/>
                            }
                            if (index === 2){
                                return <Video key={value.id} value={value}/>
                            }
                            if (index === 3){
                                return <Video key={value.id} value={value}/>
                            }
                        })
                    }
                </div>
            </div>

        </div>
    )
}