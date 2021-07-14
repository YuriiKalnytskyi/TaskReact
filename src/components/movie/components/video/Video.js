import ReactPlayer from "react-player";
import React from "react";

export default function Video ({value}){
    return(
        <div>
            {
                value && <ReactPlayer
                    width={'1200px'}
                    height={'600px'}
                    url={"https://www.youtube.com/watch?v=" + value.key}
                />
            }
        </div>
    )
}