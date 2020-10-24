
import React from 'react'

export default function UserLocation(props) {

     const{ temp, city, wind, humidity, img } = props.weather;

    return (
        <div className="user-weather">
            <div className="row">
                <div className="col-md-3 weather-temp">
                    <h2>your search</h2>
                    <h1>{temp}<sup>o</sup>C , {city}</h1>
                </div>

                <div className="col-md-9">
                    <img className="mainImg" src={img} alt="weather-img" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 weather-info">
                    <p><b>Wind</b>(km/hr)</p>
                    <h2>{wind}</h2>
                </div>

               
              
                <div className="col-md-3 weather-info">
                    <p><b>Humidity</b>(%)</p>
                    <h2>{humidity}</h2>
                </div>

            </div>
        </div>

        

    )
}


