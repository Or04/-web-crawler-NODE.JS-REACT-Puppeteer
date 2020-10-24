import React from 'react';
import TelAviv from './components/TelAviv.js'
import Jerusalem from './components/Jerusalem.js'
import Navbar from './components/Navbar.js';
import UserLocation from './components/UserLocation.js';
import './App.css';
import Axios from 'axios';

class App extends React.Component {

  //state
  state = {
  
    weather: {},

    telaviv: {},

    jerusalem: {}, 

    cityInput: ""
  }


  
  
  //Get data for Tel Aviv and Jerusalem and display 
  componentDidMount() {

    Axios.get(`http://localhost:3001/weatherByCity/tel_aviv`).then(res => {

      let telavivWeather = res.data 
       
      

      this.setState({ telaviv: telavivWeather });

    })
  


  

    Axios.get(`http://localhost:3001/weatherByCity/jerusalem`).then(res => {

      let jerusalemWeather = res.data 
       
      

      this.setState({ jerusalem: jerusalemWeather });

    })
  

  }


  //update the value of the input field with state
  changeCity = (value) => {
    this.setState({ cityInput: value })
  }

  //update the weather depending upon the value user entered
  changeLocation = (e) => {

    e.preventDefault()

    Axios.get(`http://localhost:3001/weatherByCity/${this.state.cityInput.toLowerCase()}`).then(res => {

      let userWeather = res.data 
       
      

      this.setState({ weather: userWeather });

    })
  }

  
  render() {
    return (
      <div className="App">
        <div className="container">
        <Navbar changeCity={this.changeCity} changeLocation={this.changeLocation} />
        <TelAviv telaviv={this.state.telaviv} />
        <Jerusalem jerusalem={this.state.jerusalem} />
        <UserLocation weather={this.state.weather} />
        </div>
      </div>
    );
  }
}

export default App;