import React from 'react';
import MovieCard from '../Components/MovieCrad'
import './RecommendedMovies.css';
import Image1 from '../assets/image1.jpg'
import Image3 from '../assets/image3.jpg'
import Image4 from '../assets/image4.jpeg'


const movies = [
  { id: 1, title: 'Chandu Champion', image: Image1 },
  { id: 2, title: 'Sangharsh yoddha', image: Image3 },
  { id: 3, title: 'Kalki', image: Image4 },
  { id: 4, title: 'Chandu Champion', image: Image1 },
  { id: 5, title: 'Sangharsh yoddha', image: Image3 },
];

const RecommendedMovies = () => {
  return (
    <div className="recommended-movies">
      <h2>Recommended Movies</h2>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedMovies;
