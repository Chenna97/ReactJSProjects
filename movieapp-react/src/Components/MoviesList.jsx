import React from 'react'
import MovieCard from './MovieCard'
import "../Components/Movies.css"

const MoviesList = ({movies , onSelectedMovie}) => {
    const handleSelectedMovie=(movie)=>{
       onSelectedMovie(movie);
    }
  return (
    <div>
      {
       movies.map(movie=>
        <MovieCard 
        key={movie.movie_id}
         movie={movie}
         onMovieClick={()=>handleSelectedMovie(movie)}
         >

        </MovieCard>
        
        
      )}
    </div>
  )
}

export default MoviesList
