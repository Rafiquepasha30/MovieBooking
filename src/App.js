import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import RecommendedMovies from './Components/RecommendedMovies';
import Register from './pages/Register';
import Login from './pages/Login';

import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';
import Payment from './Components/Payment';
import SeatSelection from './Components/SeatSelection';
import BookingPage from './Components/Booking';
import Confirmation from './Components/Confirmation';



const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <RecommendedMovies />
            </>
          } />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/details/:id" element={<MovieDetails />} />
          <Route path="/movies/:id/seats" element={<SeatSelection />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/payment" element={<Payment />}/>
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
