
import React, {useState, Component} from "react"
import Script from "./partials/script"
import background_Image from "./Capture.JPG"
import Plans from "./plans"
import Menu from "./partials/menu"
import Head from "./partials/head"
import { useParams } from "react-router"
import { Redirect } from 'react-router';
import Axios from 'axios';

import './carplans.css';


function CarPlans(props){

        const {params} = props.match
        
        const [carplans, setCarPlans] = useState([])



        const getData = () => {
            Axios.post('http://localhost:3001/car/comprehensiveInsurance',
            {
                insuranceType: params.insuranceType, 
                carBrand: params.carBrandData, 
                model: params.carModelData, 
                Year: params.manufacturingYearData, 
                carValue: params.pkrData 
                
            })
            .then( (res)=> {
              setCarPlans(res.data)
            })
          }
        
          getData();




        return(

            <div>

                {alert("carBrand = "+params.carBrandData + "\nmodel = "+params.carModelData  + "\npkr = " + params.pkrData+ "\nyear = "+params.manufacturingYearData+ "\ncarinsurancetype = "+params.insuranceType)}

                <h1>HEllo world</h1>

                <table>
        <thead>
          <th>Company</th><th>insuranceType</th><th>Installment Available</th><th>Total Amount</th><th>Car Brand</th><th>Model</th><th>Year</th><th>Car Value</th>
        </thead>
        <tbody>
          {carplans.map((val, key) => {
            return (
              <tr>
                <td>{val.company}</td>
                <td>{val.insuranceType}</td>
                <td>{val.installmentAvailable}</td>
                <td>{val.totalAmount}</td>
                <td>{val.carBrand}</td>
                <td>{val.model}</td>
                <td>{val.Year}</td>
                <td>{val.carValue}</td>
              </tr>)
          })}
        </tbody>

      </table>
            </div>
        )
    }



export default CarPlans