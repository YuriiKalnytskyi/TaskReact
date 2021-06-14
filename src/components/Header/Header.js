import {Link} from "react-router-dom";

export default function Header(){

    return(
        <div>
            <ul>
                <li>
                    <Link to={"/movie"}>Movie</Link>
                </li>
            </ul>

        </div>

    )
}