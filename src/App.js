import './CSS Files/App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import About from './Components/About';
import Features from './Components/Features';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import CallToAction from './Components/CallToAction'
import CurrentWeather from './Components/Weather Data Fetching/CurrentWeather';
import Astronomy from './Components/Weather Data Fetching/Astronomy';
import AirQuality from './Components/Weather Data Fetching/AirQuality';
import ForecastWeather from './Components/Weather Data Fetching/ForecastWeather'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={(
            <>
              <Navbar />
              <About />
              <Features />
              <CallToAction />
              <Footer />
            </>
          )} />
          <Route path='/currentweather' element={<CurrentWeather />} />
          <Route path='/astronomy' element={<Astronomy />} />
          <Route path='/airquality' element={<AirQuality />} />
          <Route path='/forecastweather' element={<ForecastWeather />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
