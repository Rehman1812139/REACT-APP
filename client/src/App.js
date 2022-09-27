
import './App.css';
import Menu from "./partials/menu"
import Head from "./partials/head"
// import { Route, Switch } from 'react-router';
// import Car from './car';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { Component } from 'react';
import Car from './car';
import Home from './Home';
import CarPlans from './carplans';
import BikePlans from './bikeplans';
import Bike from './bike';
import Login from './Login';



class App extends Component {
  render(){
  return (
    <div className="App"> 
      <Router>
        
      <Switch>
        <Route exact path="/" component={ Home }></Route>
        <Route exact path="/Login" component={ Login }></Route>
        <Route exact path="/Bike" component={ Bike }></Route>
        <Route path="/car/:carinsurancetype" component={ Car } ></Route>
        <Route exact path="/carPlans/:carBrandData?/:carModelData?/:manufacturingYearData?/:pkrData?/:insuranceType?" component={ CarPlans } ></Route>
        <Route exact path="/bikePlans/:bikeBrandData?/:bikeEngineCcData?/:manufacturingYearData?/:pkrData?" component={ BikePlans } ></Route>
        
        {/* <Route exact path="/car/comprehensiveInsurance" component={ Car }></Route>
        <Route exact path="/car/comprehensiveInsurance" component={ Car }></Route> */}
        


      </Switch>
      </Router>
    </div>
  );
  }
}

export default App;
