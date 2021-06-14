import axios from "axios";

let options = {
    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        "api_key":'288bb0de612c607f61e04659a2cd2f04'
    }
}
let axiosInstance = axios.create(options);

const getMovie = (page)=>{
    return axiosInstance.get('discover/movie&page='+page)

}

export {
    getMovie
}