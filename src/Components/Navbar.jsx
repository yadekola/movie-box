import { CiSearch } from "react-icons/ci";
import logo from "../assets/logo.svg";
import { TbMenu } from "react-icons/tb";
import "./Hero.css";
import "./Navbar.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Hero from './Hero'
import SearchResults from './SearchResults'
import './Footer.css'
import './Featured.css'
import Featured from './Featured';
import Arrival from './TvList';
import People from './People';
import Footer from './Footer';




const Navbar = () => {
    const [movies, setMovies] = useState(null);
    const [heroMovie, setHeroMovie] = useState(null);
    const [ispending, SetIspending] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [showResults, setShowResults] = useState (false);
    const [results, setResults] = useState(null);
         
    const token = 
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTM4ZTRlNzk3NmFkYTMxMDYzOTgwNDg5MDdmM2JlYiIsInN1YiI6IjY2NDg4NTJjOTUwMTUxOWM5ZDFkM2E0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xczx91fozKEuXCabGFfCp9c0Wr4CBwgNdm83K4vO1SA"; 
    const headers = {
        Authorization: ` Bearer ${token}`,
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

            <nav>

                {/* Logo */}

                <div className="logo">
                    <img src={logo} alt="logo" />
                    <span>MovieBox</span>
                </div>

                {/* Search box */}

                <form onSubmit={handleSearchMovie} className="searchbox">
                    <input
                        type="search" onChange={handleSearchChange}   
                        className="search"
                        placeholder="What do you want to watch"
                    />
                    <CiSearch className="searchicon" />
                </form>

                {/* Sign in */}

                <div className="signin">
                    <button>Sign in</button>
                    <div className="menu-icon">
                        <TbMenu className="hambugger" />
                    </div>
                </div>

            </nav>
  
        {showResults ? (<SearchResults results={results} searchQuery={searchQuery} />): (
     <> <Hero />
          <Arrival
                url={"https://api.themoviedb.org/3/movie/popular"}
                heading={"Featured Movies"}
            />
            <Arrival
                url={"https://api.themoviedb.org/3/movie/top_rated"}
                heading={"New Arrival"}
            />
            <Featured />
            <People />
            <Footer />
        </>
      
      ) }
             
        </div>
    )
}





export default Navbar