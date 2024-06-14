import React from 'react'
import "./MovieCard.css";
import imdb from "../assets/imdb.svg";
import tomato from "../assets/tomato.svg";
import { useNavigate } from "react-router-dom";


const MovieCard = ({ movie }) => {

    const imageBaseUrl = "https://image.tmdb.org/t/p/original";
    const navigateTo = useNavigate();


    console.log(movie)

    const handleMovieClick = (id) => {
        navigateTo(`/AboutMovie/${id}`);
    };

    return (
        <div>
            <div className="moviecard" onClick={()=>handleMovieClick(movie.id)}>
                <img
                    className="movieimg"
                    src={`${imageBaseUrl}/${movie?.poster_path}`}
                    alt=""
                />
                <h4>{movie?.title}</h4>
                <small className="date">{movie?.release_date}</small>
                <div className="ratings-card">
                    <div className="rating-card">
                        <img src={imdb} alt="imdb" />
                        <small>90/100</small>
                    </div>
                    <div className="rating-card">
                        <img src={tomato} alt="tomato" />
                        <small>75%</small>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MovieCard