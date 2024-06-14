import "./Featured.css";
import { useEffect, useState } from "react";
import axios from "axios";


const Featured = () => {

    const [movies, setMovies] = useState(null);
    const [FeatuedMovie, setFeatuedMovie] = useState(null);
    

   
    
    const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTM4ZTRlNzk3NmFkYTMxMDYzOTgwNDg5MDdmM2JlYiIsInN1YiI6IjY2NDg4NTJjOTUwMTUxOWM5ZDFkM2E0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xczx91fozKEuXCabGFfCp9c0Wr4CBwgNdm83K4vO1SA"

    const headers = {
        Authorization: ` Bearer ${token}`,
    };
    const imageBaseUrl = "https://image.tmdb.org/t/p/original"
    const genres = "https://api.themoviedb.org/3/movie/upcoming"

    const fetchMovie = async () => {
        try {
            const response = await axios.get(
                "https://api.themoviedb.org/3/movie/upcoming", 
                {headers}
            );
            console.log(response.data.results);
            setMovies(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { fetchMovie() }, []);

  
    return (
        <div className='FeaturedflyContainer'>
            <h2>Exclusive Videos</h2>
            <div className='FeatureMovieCont'>
                {movies?.slice(0, 3).map((movie, index) => (
                    <div key={index} className='FeatureMovieCard'>
                        <img className='FeatuMoveimg' src={`${imageBaseUrl}/${movie?.backdrop_path}`} alt='' />
                        <small className="date">{movie?.release_date}</small>
                        <h3>{movie?.title}</h3>
                    </div>
                ))}
            </div>
            
        </div>
    )
}
    





export default Featured;