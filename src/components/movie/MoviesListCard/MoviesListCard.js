import PosterPreview from "../components/posterPreview/PosterPreview";
import "./MoviesListCard.css"
import {Link} from "react-router-dom";

export default function MoviesListCard({item}) {

    return (
        <div className={'movieCard_container'}>
            <Link className={'link'} to={"/movie/"+item.id}>

            <div  className={'movieCard_img'}>
                <PosterPreview img={item.poster_path} alt={item.id}/>
            </div>
            <div><p className={'movieCard_title'}>{item.title}</p></div>
            </Link>


        </div>
    )

}