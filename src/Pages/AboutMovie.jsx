import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './AboutMovie.css'
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { BiCameraMovie } from "react-icons/bi";
import { PiMonitorPlayBold } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { FaStar } from "react-icons/fa";


const AboutMovie = () => {
    const { id } = useParams();
    const [detail, setDetail]= useState(null);
    const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTM4ZTRlNzk3NmFkYTMxMDYzOTgwNDg5MDdmM2JlYiIsInN1YiI6IjY2NDg4NTJjOTUwMTUxOWM5ZDFkM2E0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xczx91fozKEuXCabGFfCp9c0Wr4CBwgNdm83K4vO1SA"


    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const imageBaseUrl = "https://image.tmdb.org/t/p/original"

    const getAboutMovie = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}`,
                { headers }
            );
            setDetail(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAboutMovie();
    })

    return (
        <div className="aboutflyerContainer">

            <headers>
                <div className="aboutlogo">
                    <img src={logo} alt="" />
                    <span>MOVIE BOX</span>
                </div>

                <div className="aboutnavlink">
                    <ul>
                    
                        <h4><GoHome id="icons" /><Link className="Link" href="/">Home</Link></h4>
                    
                        <h4 className="moviecolor"><BiCameraMovie id="icons" /><Link className="Link1" href="/about">Movies</Link></h4>
                        <h4><PiMonitorPlayBold id="icons" /><Link className="Link" href="/account">Tv Series</Link></h4>
                
                        <h4><IoCalendarOutline id="icons" /><Link className="Link" href="/contact">Tv Upcoming</Link></h4>
                    </ul>
                </div>

                <div className="aboutstart">
                    <h3>Play movie quizes and earn free tickets</h3>
                    <p>50k people are playing now</p>
                    <button id="startBtn">Start Playing</button>
                </div>

                <div className="Btnabout">
                    <h4 className="iconsBtn"><span><TbLogout id="logicon" /></span> Log Out</h4>

                </div>
            </headers>

            <div className="aboutimgContainer">
                <div className="aboutcont">
                    
                    <img className="imgdatail" src={`${imageBaseUrl}/${detail?.backdrop_path}`} />
                    <div className="textdatail">
                        <div className="abouttext">
                            <h3>{detail && detail.original_title}. {detail && detail.release_date} 00:00:00 GMT . PG-13 . {detail && detail.vote_count} mine</h3>
                        </div>
                        <div className="crimebox">
                            <span>Crime</span>
                            <span>Drama</span>
                        </div>
                        <div className="iconsdatail">
                            
                            <small className="textstar"><span id="iconstar"><FaStar  /></span> 8.51 350k</small>
                            <button className="Btntext">See showtimes</button>
                            <button className="Btntext1">More watch options</button>
                        </div>
                        
                    </div>
                </div>

                <div className="aboutcard">
                <p>{detail && detail.overview}</p>
                    <p>{detail && detail.tagline}</p>
                    <p>{detail && detail.release_gmt}</p>
                    <div className="direccard">
                        <h5>Director : <span>Joseph Kosinski</span></h5>
                        <h5>Writers : <span>Jim Cash, Jack Epps Jr, Peter Kosinski</span></h5>
                        <h5>Stars : <span>Tom Cruise, Jennifer Connelly</span></h5>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default AboutMovie;
