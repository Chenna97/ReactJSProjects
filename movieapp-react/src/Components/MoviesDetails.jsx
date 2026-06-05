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
  'Nuvvu.jpg': nuvvuImg,
  'MrPerfect.jpeg': mrPerfectImg,
  'Annamayya.jpeg': annamayyaImg,
  'Surya.jpeg': suryaImg,
}

const MoviesDetails = ({ movie }) => {
  if (movie == null) {
    return <p>Please select a movie to see details.</p>
  }

  const posterSrc = posterMap[movie.poster_url] || movie.poster_url

  return (
    <div>
      <h2>{movie.movie_title}</h2>
      <p>Release Year: {movie.release_year}</p>
      <p>Genre: {movie.genre}</p>
      <p>Director: {movie.movie_director}</p>
      {posterSrc ? (
        <img
          src={posterSrc}
          alt={`Poster for ${movie.movie_title}`}
          style={{ maxWidth: '50%', height: 'auto', marginTop: '16px' }}
        />
      ) : (
        <p>No poster available.</p>
      )}
    </div>
  )
}

export default MoviesDetails
