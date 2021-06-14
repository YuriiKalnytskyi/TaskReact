
import "./PosterPreview.css"
export default function PosterPreview ({img}) {

    return(
        <div>
            <img className={'film_img'} src={`http://image.tmdb.org/t/p/w300${img}`}/>
        </div>
    )

}