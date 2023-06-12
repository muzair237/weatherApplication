import React from 'react'

export default function CallToAction() {
  return (
    <>
      <div className="container-fluid callToAction">
        <div className="container">
          <div className="row text-center heading pt-4">
            <h2>Stay ahead of the weather <br /> with our accurate and up-to-date forecasts.</h2>
          </div>
          <div className="row text-center text mt-5">
            <h4>Knowing the weather forecast can help you plan your day effectively and prepare for any weather-related challenges, ensuring that you're always one step ahead.</h4>
          </div>
          <div className="row text-center mt-2 pb-5">
            <div className="col">
              <a href="#">
                <button className='button'>Get Started</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
