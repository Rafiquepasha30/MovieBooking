import React from 'react';
import { useNavigate } from 'react-router-dom';

const movies = [
  { id: 1, title: 'Movie 1', genre: 'Action', showtimes: ['12:00 PM', '3:00 PM'] },
  { id: 2, title: 'Movie 2', genre: 'Comedy', showtimes: ['1:00 PM', '4:00 PM'] }
];

function MovieList() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-card" onClick={() => handleClick(movie.id)}>
          <h3>{movie.title}</h3>
          <p>{movie.genre}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
