import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane, FaMedium } from 'react-icons/fa';
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <div style={{paddingBottom:"7rem"}} className="container-fluid backgroundImage">
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="/">
                                <img src={logo} alt="Weather Logo" className="img-fluid logo" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/currentweather">Current Weather</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/forecastweather">Forecast Weather</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/astronomy">Astronomy</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/airquality">Air Quality</Link>
                                    </li>
                                </ul>
                                <div className="d-flex" role="search">
                                    <div className="social-icons text-end mb-2">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <Link to="" className="nav-link hicons"><FaFacebookF /></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="" className="nav-link hicons"><FaLinkedinIn /></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="" className="nav-link hicons"><FaTelegramPlane /></Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link to="" className="nav-link hicons"><FaMedium /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="headerText">
                    <h1>
                        Welcome to My<br />
                        Weather Application
                    </h1>
                    <p className="supportingText">
                        Get up-to-date weather information for your location and beyond with our
                        easy-to-use weather app!
                    </p>
                </div>
            </div>
        </>
    )
}
