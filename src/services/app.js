import axios from "axios";

let options = {
    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        "api_key":'288bb0de612c607f61e04659a2cd2f04'
    }
}
let axiosInstance = axios.create(options);

const getMovie = (page=1)=>{
    return axiosInstance.get('discover/movie',{
        params:{
            page
        }
    })
}
const getMovieId = (id)=>{
    return axiosInstance.get('/movie/'+id)
}
const getVideoId = (id)=>{
    return axiosInstance.get('/movie/'+id +'/videos')
}
const searchMovie = (text)=>{
    return axiosInstance.get('search/movie?query='+text)
}
export {
    getMovie , getMovieId , getVideoId , searchMovie
}