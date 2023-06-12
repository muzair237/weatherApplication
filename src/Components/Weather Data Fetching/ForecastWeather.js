import React, { useEffect, useState } from 'react';
import NavbarAPI from './NavbarAPI';

const WeatherComponent = () => {
    const [weatherData, setWeatherData] = useState(null);
    const styleImg = {
        width: "3.5rem",
        display: "inline-block",
        width: "3.5rem"
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const apiKey = '1270ac2f67d146a8be5162109230605';
        const countries = ['USA', 'UK', 'UAE', 'Canada', 'Paris', 'Pakistan']; // Replace with the countries you want to fetch weather data for
        try {
            const requests = countries.map(country =>
                fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${country}&days=3&aqi=no&alerts=no`)
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
                <h1 style={{ fontWeight: "1000", fontSize: "3rem" }} className="mt-5">Weather Forecast</h1>
                <p style={{ fontSize: "larger" }}>Daily forecasts for your location to plan activities. Stay updated.</p>
                <div className='row'>
                    {weatherData ? (
                        weatherData.map((weather, index) => (

                            <div key={index} className="col-lg-6 col-xl-4 col-md-12 col-sm-12 mt-4">
                                <div style={{ width: "25rem", height: "47rem", backgroundColor: "#F0EDD4", margin: "auto" }} className="card border-primary my-2">
                                    <div style={{ fontSize: "7.1rem" }} className="card-body">
                                        <h5 className="card-title">{weather.location.name}, {weather.location.country}</h5>
                                        <hr />
                                        {weather.forecast.forecastday.map((forecast, index) => (
                                            <div key={index}>
                                                <div className="airQuality-text-container">
                                                    <h5>{forecast.date.split('-').reverse().join('-')} ({new Date(forecast.date).toLocaleDateString('en-US', { weekday: 'long' })})</h5>
                                                </div>
                                                <div className="airQuality-text-container">
                                                    <h5>Max Temp:</h5>
                                                    <p>{forecast.day.maxtemp_c}°C | {forecast.day.maxtemp_f}°F</p>
                                                </div>
                                                <div className="airQuality-text-container">
                                                    <h5>Chance of Rain:</h5>
                                                    <p>{forecast.day.daily_chance_of_rain}% ({forecast.day.condition.text})</p>
                                                    <img width={"45rem"} src={forecast.day.condition.icon} alt="" />
                                                </div>
                                                <div className="airQuality-text-container">
                                                    <h5>Min Temp:</h5>
                                                    <p>{forecast.day.mintemp_c}°C | {forecast.day.mintemp_f}°F</p>
                                                </div>
                                                <hr />
                                            </div>
                                        ))}
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
