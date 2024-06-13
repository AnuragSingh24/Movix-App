import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzRmYTgyNzE3YjA2MmVjZWIwNTcwZmU1MDcwZTRjMSIsInN1YiI6IjY2NWEyNjk1MTk0MmNmODBlOGUyOWE2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7FG_Vg7aYrmTJZLiPdx5w71zrF7c_7kWivnrnyeKpcE';

const headers = {
    Authorization: "bearer " +
    TMDB_TOKEN,
};

export const fetchDataFromApi = async(url , params) =>{ //url end points like /movie/popular 
    try {
        const {data} = await axios.get(BASE_URL + url,{
            headers,
            params
        })
        return data;
        
    } catch (error) {
        console.log(error);
        return error;
        
    }
}