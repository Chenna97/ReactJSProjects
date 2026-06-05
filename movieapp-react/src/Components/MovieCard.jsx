import React from 'react'
import bahubaliImg from '../image/Bahubali.jpg'
import bombayImg from '../image/Bombay.jpeg'
import nuvvuImg from '../image/Nuvvu.jpeg'
import mrPerfectImg from '../image/MrPerfect.jpeg'
import annamayyaImg from '../image/Annamayya.jpeg'
import suryaImg from '../image/Surya.jpeg'

const posterMap = {
  'Bahubali.jpg': bahubaliImg,
  'Bombay.jpeg': bombayImg,
  'Nuvvu.jpeg': nuvvuImg,
  'MrPerfect.jpeg': mrPerfectImg,
  'Annamayya.jpeg': annamayyaImg,
  'Surya.jpeg': suryaImg,
}

const MovieCard = ({ movie, onMovieClick }) => {
  const posterSrc = posterMap[movie.poster_url] || ''

  return (
    <div className="card">
      <div key={movie.movie_id} className="movie-card">
        {posterSrc ? (
          <img src={posterSrc} alt={movie.movie_title} className="movie-poster" />
        ) : null}
        <h2>{movie.movie_title}</h2>
        <p>Release Year: {movie.release_year}</p>
        <button onClick={onMovieClick}>View Details</button>
      </div>
    </div>
  )
}

export default MovieCard
