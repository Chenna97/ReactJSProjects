import React from 'react'
import { useState } from 'react'
import { movies } from './data/movies.json'
import MoviesList from './Components/MoviesList'
import MoviesDetails from './Components/MoviesDetails'
import "./App.css"

const App = () => {

  const [selectedMovie, setSelectedMovie] = useState(null)
  let handleSelectedMovie = (movie) => {
    setSelectedMovie(movie)
  }
  
  return (
    <>
    
    <div className="container">
      <div className="leftpanel">
      <h1>Movie List</h1>
    
    <MoviesList  movies={movies} onSelectedMovie={handleSelectedMovie} ></MoviesList>
</div>
      <div className="rightpanel">
      <h1>Selected Movie Details</h1>
    <MoviesDetails movie={selectedMovie}></MoviesDetails>
        </div>
    </div>
    </>
  )
}

export default App
