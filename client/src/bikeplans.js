
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


function BikePlans(props){

        const {params} = props.match
        
        const [bikeplans, setBikePlans] = useState([])



        const getData = () => {
            Axios.post('http://localhost:3001/Bike',
            {
                // company: params.insuranceType, 
                // insuranceType: params.carBrandData, 
                // total: params.carModelData, 
                bikeName: params.bikeBrandData, 
                engineCC: params.bikeEngineCcData, 
                manufacturingYear: params.manufacturingYearData,
                valueOfBike: params.pkrData 
                
            })
            .then( (res)=> {
              setBikePlans(res.data)
            })
          }
        
          getData();




        return(

            <div >

                {alert("bikeBrandData = "+params.bikeBrandData + "\nbikeEngineCcData = "+params.bikeEngineCcData  + "\npkr = " + params.pkrData+ "\nyear = "+params.manufacturingYearData)}



                <table>
        <thead>
          <th>Company</th><th>Installment Available</th><th>Total</th><th>Bike Name</th><th>engine Cc</th><th>Manufacturing Year</th><th>Bike Value</th>
        </thead>
        <tbody>
          {bikeplans.map((val, key) => {
            return (
              <tr>


                <td>{val.company}</td>
                <td>{val.insuranceType}</td>
                <td>{val.total}</td>
                <td>{val.bikeName}</td>
                <td>{val.engineCC}</td>
                <td>{val.manufacturingYear}</td>
                <td>{val.valueOfBike}</td>
              </tr>)
          })}
        </tbody>

      </table>
            </div>
        )
    }



export default BikePlans