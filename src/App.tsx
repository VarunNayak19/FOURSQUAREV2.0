import './App.css';
import Header from './components/header/header';
import HotelList from './components/hotelList/hotelList';
import Maps from './components/maps/maps';
import { Routes, Route } from "react-router-dom"
import Reviews from './components/reviews/reviews';
import LandingPage from './views/landingPage/landingPage';

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/reviews' element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default App;
