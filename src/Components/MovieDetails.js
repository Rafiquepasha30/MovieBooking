import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetails.css';
import Image1 from '../assets/image1.jpg';
import Image3 from '../assets/image3.jpg';
import Image4 from '../assets/image4.jpeg';

const movies = [
  { id: 1, title: 'Chandu Champion', genre: 'Action', showtimes: ['12:00 PM', '3:00 PM'], image: Image1, rating: '9.1/10', votes: '5.8K', duration: '2h 23m', releaseDate: '14 Jun, 2024', language: 'Hindi', description: 'This is an unbelievable tale of a man who faced one adversary after another with an undying spirit. His unwavering zeal and never-give-up attitude led to the creation of history. This is the story of Chandu Champion!' },
  { id: 2, title: 'Sangharsh yoddha', genre: 'Drama', showtimes: ['1:00 PM', '4:00 PM'], image: Image3, rating: '8.5/10', votes: '4.3K', duration: '2h 10m', releaseDate: '10 Jun, 2024', language: 'Marathi', description: 'A gripping drama of struggle and perseverance. Sangharsh Yoddha tells the tale of a warrior who fought against all odds to achieve greatness.' },
  { id: 3, title: 'Kalki', genre: 'Thriller', showtimes: ['2:00 PM', '5:00 PM'], image: Image4, rating: '8.8/10', votes: '6.2K', duration: '2h 15m', releaseDate: '18 Jun, 2024', language: 'Tamil', description: 'Kalki is a thrilling story of intrigue and suspense. Follow the journey of a detective unraveling the mysteries that lie beneath the surface.' },
];

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <div className="movie-header">
        <img src={movie.image} alt={movie.title} />
        <div className="movie-info">
          <h2>{movie.title}</h2>
          <div className="rating">
            <span>⭐ {movie.rating} ({movie.votes} Votes)</span>
            <button>Rate now</button>
          </div>
          <div className="details">
            <span>{movie.language}</span>
            <span>{movie.duration}</span>
            <span>{movie.genre}</span>
            <span>{movie.releaseDate}</span>
          </div>
          
          <Link to={`/movies/${movie.id}/seats`} className="book-now-button">Book Now</Link>
        </div>
      </div>
      <div className="movie-description">
        <h3>About the movie</h3>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
