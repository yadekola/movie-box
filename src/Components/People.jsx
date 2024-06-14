import "./People.css";
import { useEffect, useState } from "react";
import axios from "axios";


const People = () => {
    const [people, setPeople] = useState(null);

    const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OTM4ZTRlNzk3NmFkYTMxMDYzOTgwNDg5MDdmM2JlYiIsInN1YiI6IjY2NDg4NTJjOTUwMTUxOWM5ZDFkM2E0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xczx91fozKEuXCabGFfCp9c0Wr4CBwgNdm83K4vO1SA"

    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const fetchPeople = async () => {
        try {
            const response = await axios.get(
                "https://api.themoviedb.org/3/person/popular",
                { headers }
            );
            console.log(response.data.results);
            setPeople(response.data.results)
        } catch (errors) {
            console.log(errors)
        }
    }
    const imageBaseUrl = "https://image.tmdb.org/t/p/original";
    const genres ="https://api.themoviedb.org/3/genre/movie/list";
  
    useEffect (() => {((fetchPeople()))}, []);


    return (
        <div className='people'>
            <h2>Featured Casts</h2>

            <div className='peopleCont'>
                {people?.slice(0, 4).map((people, index) => (
                    <div key={index} className='Profilecard'>
                        <img className='profileimg' src={`${imageBaseUrl}/${people?.profile_path}`} alt=""/>
                        <h4>{people?.name}</h4>
        
                    </div>
                ))}
            </div>
        </div>
    )
}


export default People;