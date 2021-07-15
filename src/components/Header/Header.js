import {Link} from "react-router-dom";
import "./Header.css"
import UserInfo from "../userInfo/UserInfo";
export default function Header(){

    return(
        <div className={"header"}>
            <ul>
                <li>
                    <Link className={'info' } to={"/movie"}><span >Movie</span></Link>
                </li>
            </ul>
            <div className={'user_info'}>
                <UserInfo/>
            </div>

        </div>

    )
}