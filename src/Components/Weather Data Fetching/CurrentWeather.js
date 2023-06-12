import React, { useEffect, useState } from 'react';
import NavbarAPI from '../../Components/Weather Data Fetching/NavbarAPI';

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
            <h1 style={{ fontWeight: "1000", fontSize: "3rem" }} className="mt-5">Current Weather</h1>
                <p style={{ fontSize: "larger" }}>See up to date weather information for your location. Stay informed.</p>
                <div className='row'>
                    {weatherData ? (
                        weatherData.map((weather, index) => (
                            <div key={index} className="col-lg-6 col-xl-4 col-md-6 col-sm-12 mt-4">
                                <div style={{ width: "20rem", height: "22rem", backgroundColor: "#D2F6C5", margin: "auto" }} className="card border-primary my-2">
                                    <img style={styleImg} src={weather.current.condition.icon} className="card-img-top" />
                                    <div style={{ fontSize: "7.1rem" }} className="card-body">
                                        <h5 className="card-title">{weather.location.name}, {weather.location.country}</h5>
                                        <h6 className='mt-3'>Temperature: </h6><p className="card-text">{weather.current.temp_c}°C | {weather.current.temp_f}°F ({weather.current.condition.text})</p>
                                        <p className="card-text">
                                            {new Date(weather.location.localtime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </p>

                                        <hr />
                                        <h5 className="card-title">Feels like</h5>
                                        <p className="card-text">{weather.current.feelslike_c}°C | {weather.current.feelslike_c}°F</p>
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
