import PosterPreview from "../components/posterPreview/PosterPreview";
import "./MoviesListCard.css"

export default function MoviesListCard({item}) {

    return (
        <div className={'movieCard'}>
            <div >
                <PosterPreview img={item.poster_path}/>
            </div>
            <div>
                <p>{item.title}</p>

            </div>

        </div>
    )

}