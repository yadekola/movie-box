import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo.svg";
import { TbMenu } from "react-icons/tb";
import "./Hero.css";
import axios from "axios";
import { useEffect, useState } from "react";
import imdb from "../assets/imdb.svg";
import tomato from "../assets/tomato.svg";
import play from "../assets/play.svg";
import { Link } from "react-router-dom";


const Hero = () => {
    const [movies, setMovies] = useState(null);
    const [heroMovie, setHeroMovie] = useState(null);
   
                                                        
    const token = 
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTM4ZTRlNzk3NmFkYTMxMDYzOTgwNDg5MDdmM2JlYiIsInN1YiI6IjY2NDg4NTJjOTUwMTUxOWM5ZDFkM2E0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xczx91fozKEuXCabGFfCp9c0Wr4CBwgNdm83K4vO1SA"; 
    const headers = {
        Authorization: ` Bearer ${token}`,
    };

    const HeroMovie = async () => {
        SetIsPending(true);
        try {
            const response = await axios.get(
                "https://api.themoviedb.org/3/movie/848538",
                { headers }
            );
            SetIsPending(false);
            console.log(response.data);
            setHeroMovie(response.data);
        } catch (errors) {
            console.log(errors);
        }
    };

    // const imageBaseUrl = "https://image.tmdb.org/t/p/original";

    // const fetchMovie = async () => {
    //     try {
    //         const response = await axios.get(
    //             "https://api.themoviedb.org/3/discover/movie",
    //             { headers }
    //         );
    //         console.log(response);
    //         setMovies(response.data.results);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }; 

    const imageBaseUrl = "https://image.tmdb.org/t/p/original";
    const getHeroMovie = async () => {
        try {
            const data = await axios.get(`https://api.themoviedb.org/3/movie/176241`,
                { headers }
        );
            console.log(data);
            setHeroMovie(data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {


        getHeroMovie();
    }, []);


   const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchQuery(e.target.value);
   };

   const handleSearchMovie = async (e) => {
    e.preventDefault();
    console.log(searchQuery);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${searchQuery}`,
        { headers }
      );
      setShowResults(true);
      console.log(response);
      setResults(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };


    return (
        <div className="heroCont">
            {/* <Link to="/">About Us</Link> */}

            

             {/* Hero Movie */}
            <main className="movies">
                <img
                src={`${imageBaseUrl}/${heroMovie?.backdrop_path}`}
                className="hero-img"
                />
                <div className="hero-content">
                <h2>{heroMovie?.original_title}</h2>
                <div className="ratings">
                    <div className="rating">
                    <img src={imdb} />
                    <small>80/100</small>
                    </div>
                    <div className="rating">
                    <img src={tomato} />
                    <small>97%</small>
                    </div>
                </div>
                <p className="overview">{heroMovie?.overview}</p>
                <button>
                    <span>Watch Trailer</span>
                    <img src={play} />
                </button>
                </div>
            </main>
        </div>
    )
}





export default Hero