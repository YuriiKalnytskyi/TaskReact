import "./PosterPreview.css"
export default function PosterPreview ({img, alt}) {

    return(
        <div>
            <img className={'film_img'}
                 src={`http://image.tmdb.org/t/p/w300${img}`}
                 alt={alt}
            />
        </div>
    )

}