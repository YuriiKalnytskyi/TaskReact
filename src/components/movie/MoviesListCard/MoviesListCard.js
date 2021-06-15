import PosterPreview from "../components/posterPreview/PosterPreview";
import "./MoviesListCard.css"
import {Link} from "react-router-dom";

export default function MoviesListCard({item}) {

    return (
        <div className={'movieCard_container'}>
            <Link to={"/movie/"+item.id}>

            <div  className={'movieCard_img'}>
                <PosterPreview img={item.poster_path}/>
            </div>
            <div className={"movieCard_title"}><p>{item.title}</p></div>
            </Link>

        </div>
    )

}