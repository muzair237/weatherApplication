import React, { useEffect, useState } from 'react';
import NavbarAPI from '../../Components/Weather Data Fetching/NavbarAPI';

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const apiKey = '1270ac2f67d146a8be5162109230605';
        const countries = ['USA', 'UK', 'UAE', 'Canada', 'Paris', 'Pakistan']; // Replace with the countries you want to fetch weather data for
        try {
            const requests = countries.map(country =>
                fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${country}`)
            );
            const responses = await Promise.all(requests);
            const data = await Promise.all(responses.map(response => response.json()));
            setWeatherData(data);
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    return (
        <>
            <NavbarAPI />
            <div className='container'>
                <h1 style={{ fontWeight: "1000", fontSize: "3rem" }} className="mt-5">Air Quality</h1>
                <p style={{ fontSize: "larger" }}>Stay informed with real-time air quality data and conditions with this feature.</p>
                <div className='row'>
                    {weatherData ? (
                        weatherData.map((weather, index) => (
                            <div key={index} className="col-lg-6 col-xl-4 col-md-6 col-sm-12 mt-4">
                                <div style={{ width: "20rem", height: "17rem", backgroundColor: "#D2F6C5", margin: "auto" }} className="card border-primary my-2">
                                    <div style={{ fontSize: "7.1rem" }} className="card-body">
                                        <h5 className="card-title">{weather.location.name}, {weather.location.country}</h5>
                                        <hr />
                                        <div className="airQuality-text-container">
                                            <h5>Wind:</h5>
                                            <p className='h1'>{weather.current.wind_mph} mph | {weather.current.wind_kph} mph</p>
                                        </div>
                                        <div className="airQuality-text-container">
                                            <h5>Humidity:</h5>
                                            <p className='h1'>{weather.current.humidity}%</p>
                                        </div>
                                        <div className="airQuality-text-container">
                                            <h5>Feels like:</h5>
                                            <p className="h1">{weather.current.feelslike_c}°C | {weather.current.feelslike_c}°F</p>
                                        </div>
                                        <div className="airQuality-text-container">
                                            <h5>Pressure:</h5>
                                            <p className="h1">{weather.current.pressure_in} inHg</p>
                                        </div>
                                        <div className="airQuality-text-container">
                                            <h5>Wind Direction:</h5>
                                            <p className="h1">{weather.current.wind_dir}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h5>Loading...</h5>
                    )}
                </div>
            </div>
        </>
    );
};

export default WeatherComponent;
