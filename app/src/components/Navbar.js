import React from 'react'

export default function Navbar(props) {

    return (
        <div className="row">
            <div className="col-md-6">
                <h1 className="title">Weather App</h1>
            </div>

            <div className="col-md-6">
                <form className="city" onSubmit={(e) => { props.changeLocation(e) }}>
                    <input type="text" className="cityinput" placeholder="Select your city" onChange={(e) => { props.changeCity(e.target.value) }} />
                </form>
            </div>

        </div>
    )
}
