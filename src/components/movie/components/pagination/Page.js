import React from "react";
import './Page.css'
export default function Page ({first, back, next, last, page}){
    return(
        <div>
            <button className={"btn"} onClick={first}>first</button>
            <button className={"btn"} onClick={back}>back</button>
            <samp>  {page}   </samp>
            <button className={"btn"} onClick={next}>next</button>
            <button className={"btn"} onClick={last}>last</button>
        </div>
    )
}