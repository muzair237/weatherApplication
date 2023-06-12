import React from 'react'
import realtimeweather from '../Images/realtimeweather.png'
import forecast from '../Images/forecast.png'
import history from '../Images/history.png'
import astronomy from '../Images/astronomy.png'
import airquality from '../Images/airquality.png'
import FeatureCard from './FeatureCard'

export default function Features() {
    const style = {
        backgroundColor: "rgb(232, 232, 211)", maxWidth: "15rem", margin: "auto"
    }
    const styleImg = {
        width: "5.5rem", margin: "auto"
    }
    return (
        <>
            <div className="container-fluid featureSection">
                <div className="container">
                    <div className="row text-center">
                        <hr style={{marginTop:"1.1rem"}} />  
                        <h1>Features</h1>
                        <hr />
                    </div>
                    <div className="row text-center">
                        <div className="col-md-6 col-sm-12 mt-4">
                            <FeatureCard styleImg={styleImg} style={style} title="Real Time Weather" desc="Up to date weather information for your location. Stay informed." image={realtimeweather} />
                        </div>
                        <div className="col-md-6 col-sm-12 mt-4">
                            <FeatureCard styleImg={styleImg} style={style} title="Forecast" desc="Daily forecasts for your location to plan activities. Stay updated." image={forecast} />
                        </div>
                        
                        <div className="col-md-6 col-sm-12 mt-4">
                            <FeatureCard styleImg={styleImg} style={style} title="Astronomy" desc="Explore the night sky and learn about celestial events with our astronomy feature." image={astronomy} />
                        </div>
                        <div className="col-md-6 col-sm-12 mt-4">
                            <FeatureCard styleImg={styleImg} style={style} title="Air Quality Data" desc="Stay informed with real-time air quality data and conditions with this feature." image={airquality} />
                        </div>
                    </div>
                </div>
                <hr style={{marginBottom:"0px"}} />
            </div>
            
        </>
    )
}
