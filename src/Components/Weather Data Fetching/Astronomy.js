import React, { useEffect, useState } from 'react';
import NavbarAPI from '../../Components/Weather Data Fetching/NavbarAPI';
import moonrise from '../../Images/moonrise.png'
import moonset from '../../Images/moonset.png'
import sunset from '../../Images/sunset.png'
import sunrise from '../../Images/sunrise.png'
import moonIllumination from '../../Images/moonIllumination.png'
import moonPhase from '../../Images/moonPhase.png'

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
                fetch(`http://api.weatherapi.com/v1/astronomy.json?key=${apiKey}&q=${country}&dt=2023-05-16`)
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
                <h1 style={{ fontWeight: "1000", fontSize: "3rem" }} className="mt-5">Astronomy</h1>
                <p style={{ fontSize: "larger" }}>Explore the night sky and learn about celestial events with our astronomy feature.</p>
                <div className='row'>
                    {weatherData ? (
                        weatherData.map((weather, index) => (
                            <div key={index} className="col-lg-6 col-xl-4 col-md-6 col-sm-12 mt-4 mb-3">
                                <div style={{ width: "20rem", height: "26rem", backgroundColor: "#FFF6BF", margin: "auto" }} className="card border-danger my-2">
                                    {/* <img style={styleImg} src={weather.current.condition.icon} className="card-img-top" /> */}
                                    <div style={{ fontSize: "7.1rem" }} className="card-body">
                                        <h5 className="card-title">{weather.location.name}, {weather.location.country}</h5>
                                        <hr />
                                        <div className="astronomyData mt-4">
                                            <div className="image-text-container">
                                                <img src={sunrise} width="33rem" alt="" />
                                                <p className="card-text"><span className='h5' style={{ fontWeight: "800" }}>Sunrise:</span> {weather.astronomy.astro.sunrise}</p>
                                            </div>
                                            <div className="image-text-container">
                                                <img src={moonrise} width="33rem" alt="" />
                                                <p className="card-text"><span className='h5' style={{ fontWeight: "800" }}>Moonrise:</span>{weather.astronomy.astro.moonrise}</p>
                                            </div>
                                            <div className="image-text-container">
                                                <img src={sunset} width="33rem" alt="" />
                                                <p className="card-text"><span className='h5' style={{ fontWeight: "800" }}>Sunset:</span>{weather.astronomy.astro.sunset}</p>
                                            </div>
                                            <div className="image-text-container">
                                                <img src={moonset} width="33rem" alt="" />
                                                <p className="card-text"><span className='h5' style={{ fontWeight: "800" }}>Moonset:</span>{weather.astronomy.astro.moonset}</p>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="image-text-container">
                                            <img src={moonPhase} width="33rem" alt="" />
                                            <p style={{ fontSize: "1.1rem" }} className="card-text">Moon Phase:{weather.astronomy.astro.moon_phase}</p>
                                        </div>
                                        <div className="image-text-container">
                                            <img src={moonIllumination} width="33rem" alt="" />
                                            <p style={{ fontSize: "1.1rem" }} className="card-text">Moon Illumination:{weather.astronomy.astro.moon_illumination}</p>
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
