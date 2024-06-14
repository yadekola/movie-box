import "./TvList.css";
import { useEffect, useState } from "react";
import axios from "axios";
import imdb from "../assets/imdb.svg";
import tomato from "../assets/tomato.svg";
import { useNavigate } from "react-router-dom";
// import { TbMenu } from "react-icons/tb"

const Arrival = ({ url, heading }) => {
    const [movies, setMovies] = useState(null);
    const [listMovie, setListMovie] = useState(null);
    

    const navigateTo = useNavigate();
    
    const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTM4ZTRlNzk3NmFkYTMxMDYzOTgwNDg5MDdmM2JlYiIsInN1YiI6IjY2NDg4NTJjOTUwMTUxOWM5ZDFkM2E0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xczx91fozKEuXCabGFfCp9c0Wr4CBwgNdm83K4vO1SA"

    const headers = {
        Authorization: ` Bearer ${token}`,
    };

    const imageBaseUrl = "https://image.tmdb.org/t/p/original";
    const genres ="https://api.themoviedb.org/3/genre/movie/list";

    const getListMovie = async () => {
        try {
            const response = await axios.get(`${url}`, { headers });
            console.log(response);
            setListMovie(response.data.results)
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        getListMovie();
    }, []);

    const handleMovieClick = (id) => {
        navigateTo(`/AboutMovie/${id}`);
    };
    return (
        <div className="featured-cont">
            <h2>{heading}</h2>
            <div className="movie-cont">
                {listMovie?.slice(0, 4).map((movie, index)=> (
                    <div onClick={()=>handleMovieClick(movie.id)} key={index} className='moviecard'>
                        <img className="movieimg" src={`${imageBaseUrl}/${movie?.poster_path}`} alt="" />
                       
                        <h4>{movie?.title}</h4>
                        <small className="date">{movie?.release_date}</small>
                        <div className='ratings-card'>
                            
                            <div className='rating-card'>
                                
                                <img src={imdb} alt='imdb' />
                                <small>90/100</small>
                            </div>
                            <div className='rating-card'>
                                <img src={tomato} alt='tomato' />
                                <small>75%</small>
                            </div>
                        </div>
                    </div>
                    

                ))}


                
                
            </div>
        </div>
    )
}
    






export default Arrival;
