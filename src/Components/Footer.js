import React from 'react'
import logo from '../Images/logo.png'
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane, FaMedium, FaSearchLocation, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
    return (
        <>
            <div className="container-fluid footer text-light">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-md-4 col-sm-12">
                            <img src={logo} width={"80rem"} alt="" className="img-fluid" />

                            <p>Our weather application provides up-to-date weather information for any location in the world. With our user-friendly interface and accurate data sources, you can stay informed about the current weather conditions and forecast for your area.</p>
                            <div class="socialIcons">
                                <a href=""><FaFacebookF /></a>
                                <a href=""><FaLinkedinIn /></a>
                                <a href=""><FaTelegramPlane /></a>
                                <a href=""><FaMedium /></a>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 mt-3">
                            <h4>FEATURES</h4>
                            <div className="footerFeatures">
                                <p>Real Time Weather</p>
                                <p>Forecast</p>
                                <p>Historical Weather</p>
                                <p>Astronomy</p>
                                <p>Air Quality Data</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 mt-3">
                            <h4>CONTACT</h4>
                            <div className="footerIcons">
                                <FaSearchLocation /><a href="">15 Civic Center, D2 Block, Johar Town Lahore Pakistan</a><br /><br /> 
                                <FaPhoneAlt /><a href="">+92 323 4143023 </a>
                            </div>
                        </div>

                    </div>
                    <div className="row mt-5 pb-4 text-center">
                    <p><strong>Copyright © 2023 Weather Application</strong></p>
                    </div>
                </div>
            </div>
        </>
    )
}
