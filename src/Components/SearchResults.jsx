import React from "react";
import "./SearchResults.css";
import MovieCard from "./MovieCard";

const SearchResults = ({ results, searchQuery }) => {
    console.log(results);


    
  
    return (
      <div className="search-cont"> 

      
        
      Showing  {results.length} result(s) for {searchQuery}
        
        <div  
        className="search-tn">
          {results &&
            results.map((movie,index) => (
             <MovieCard movie={movie}/>
            ))}
        </div>

       
      
      
        
      </div>
    );
  };

  export default SearchResults;
