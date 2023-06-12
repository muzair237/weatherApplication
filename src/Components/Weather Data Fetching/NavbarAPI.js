import React from 'react'
import logo from '../../Images/logo.png'
import { Link } from 'react-router-dom';

export default function NavbarAPI() {
    return (
        <>
            <div className="container-fluid sticky-top backgroundImage">
                <div>
                    <nav style={{ paddingBottom: "0px" }} className="navbar navbar-expand-lg navbar-dark">
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
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}
