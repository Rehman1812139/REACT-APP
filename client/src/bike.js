

import React, {useState} from "react"
import Script from "./partials/script"
import background_Image from "./BikePic.jpg"
import Plans from "./plans"
import Menu from "./partials/menu"
import Head from "./partials/head"
import { useParams } from "react-router"
import { Redirect, useHistory } from 'react-router';
import CarPlans from "./carplans"




function Bike(){

    // const {carinsurancetype} = useParams()
    const history = useHistory();


    const [engineCC, setengineCC] = useState('')
    const [year, setyear] = useState('')
    const [pkr, setpkr] = useState('')
    const [bikeBrand, setBikeBrand] = useState('') 
    // const [route1, setroute] = useState('') 

    const [insuranceType, setInsuranceType] = useState('')
    




    // const setEngineCcvalues = ()=>{
        
    //     if(engineCC==''){
            
    //     }
    // }
    



   const brandSelect = ()=>{
        var e = document.getElementById("SelectBox1");

        
        setBikeBrand(e.options[e.selectedIndex].value)  
               

        
        if(e.options[e.selectedIndex].value=='Suzuki'){
            setengineCC('110cc')
            // setInsuranceType('Comprehensive Insurance')
    
        }
        else if(e.options[e.selectedIndex].value=='Unique'){
            setengineCC('125cc') 
            // setInsuranceType('Toyota Insurance') 
        }
        else if(e.options[e.selectedIndex].value=='Honda'){
            setengineCC('110cc')
            // setInsuranceType('Honda Insurance')
        }
        
    
    }
    

    const engineCCSelect = ()=>{
        var e = document.getElementById("SelectBox2");

        setengineCC(e.options[e.selectedIndex].value)   
    }


    const yearSelect = ()=>{
        var e = document.getElementById("SelectBox3");

        setyear(e.options[e.selectedIndex].value)      
    }



    const search_bike_plans = ()=>{


        alert(bikeBrand + "\n" + engineCC + "\n" + year + "\n" + pkr +"\n"+insuranceType  )

        history.push(`/bikePlans/${bikeBrand}/${engineCC}/${year}/${pkr}`)
        // history.push(`/carPlans/${carBrand}/${model}/${year}/${pkr}/${insuranceType}`)
        // return <CarPlans carBrandData={carBrand} carModelData={model} manufacturingYearData={year} pkrData={pkr}/>   
    }







        return(

            
            <div className="car" >
                {/* {setBrandValues()}
                {setmodelvalues()}
                {setroutevalues()} */}
                
                                    
   {alert("bikeBrand = "+bikeBrand + "\nengineCC = "+engineCC  + "\npkr = " + pkr+ "\nyear = "+year)}
   
    
            <head>
                <Head />
            </head>
            
            <body >
            
                
                <Menu />
            
                <div id="promo" style={{height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', objectFit: 'contain', backgroundImage:`url(${background_Image})`, backgroundSize:'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding: '30px', backgroundColor:'rgba(188,201,245,0)' }}>
                  
                    <div class="jumbotron text-center" style={{ backgroundColor: 'rgba(183,215,248,0.36)', borderRadius: '20px'}}>
                        <h1 style={{ color: 'rgb(11,11,11)' }}>Bike Insurance</h1>
                        <p style={{ fontSize: '26px'}}>Information</p>
                    </div>

                   
                    <div class="container" style={{ backgroundColor:'rgba(183,215,248,0.66)', padding: '25px',  width: '720px', borderRadius: '20px'}}>
                        
                        
                        <form onSubmit={search_bike_plans}  >
                        <label>
                        
                        <div class="row">
                            <div class="col-md-5" style={{ backgroundColor: 'rgba(183,215,248,0)'}}>
                                <h5 class="text-center" style={{ padding: '10px', margin: '0px 0px 0px 15px'}}>Bike Brand</h5>
                            </div>


                    


                            <div class="col-md-7 text-center" style={{ backgroundColor: 'rgba(183,215,248,0)', padding: '10px'}}>
                                
                                <div class="select_car" >
                                    
                            
                                
                                <select id="SelectBox1" value={bikeBrand} onChange={brandSelect} style={{ height: '30px', maxWidth: '90%', width: '370px'}} required>
                                    
                                        
                             
                                <option value = "" >Select a brand</option>
                                        <option  value = "Honda" >Honda</option>
                                        <option  value = "Suzuki" >Suzuki</option>
                                        <option  value = "Unique" >Unique</option>
                                    </select>

                                
                                </div>
                            </div>
                        </div>

                        
                        <div class="row">
                            <div class="col-md-5" style={{backgroundColor: 'rgba(183,215,248,0)'}}>
                                <h5 class="text-center" style={{ padding: '10px', margin: '0px 0px 0px 15px'}}>Car Model</h5>
                            </div>
                            
                            <div class="col-md-7 text-center" style={{ backgroundColor: 'rgba(183,215,248,0)', padding: '10px'}}>
                                {/* <input type="text" value= {this.state.model} onChange={this.handleChange} style={{ minWidth: 'auto', maxWidth: '90%', backgroundColor: 'rgba(255,255,255,0.76)', width: '370px'}} required/> */}

                                <div class="select_model" >
                                <select id="SelectBox2" value={engineCC} onChange={engineCCSelect}  style={{ height: '30px', maxWidth: '90%', width: '370px'}} required>


                                    {
                                        bikeBrand==''
                                        ?<option value="" >Select an EngineCC</option>
                                        :null
                                    }



                                    {    
                                         bikeBrand=='Suzuki'
                                         ? <optgroup optgroup label="Select an Engine Cc">             
                                         <option value = "110cc" >110cc</option>
                                         <option  value = "125cc" >125cc</option>
                                         </optgroup>
                                         :bikeBrand=='Unique'
                                         ? <optgroup optgroup label="Select an Engine Cc">             
                                         <option  value = "125cc" >125cc</option>
                                         <option  value = "70cc" >70cc</option>
                                         </optgroup>
                                         :bikeBrand=='Honda'
                                         ? <optgroup optgroup label="Select an Engine Cc">             
                                         <option  value = "110cc" >110cc</option>
                                         <option  value = "70cc" >70cc</option>
                                         </optgroup>
                                         :null
                                    }
                                    
                                </select>
                             
                                </div>
                            </div>
                        </div>



                        <div class="row">
                            <div class="col-md-5" style={{backgroundColor: 'rgba(183,215,248,0)'}}>
                                <h5 class="text-center" style={{ padding: '10px', margin: '0px 0px 0px 15px'}}>Manufacturing Year</h5>
                            </div>

                            <div class="col-md-7 text-center" style={{ backgroundColor: 'rgba(183,215,248,0)', padding: '10px'}}>
                                {/* <input type="text" value= {year} onChange={(event) => { setyear(event.target.value) }} style={{ minWidth: 'auto', maxWidth: '90%', backgroundColor: 'rgba(255,255,255,0.76)', width: '370px'}} required/> */}
                                <select id="SelectBox3" value={year} onChange={yearSelect}  style={{ height: '30px', maxWidth: '90%', width: '370px'}} required>
                                             
                                        <option value = "" >Select a year</option>
                                        <option  value = "2021" >2021</option>
                                        <option  value = "2020" >2020</option>
                                        <option  value = "2019" >2019</option>
                                        <option  value = "2018" >2018</option>
                                        <option  value = "2017" >2017</option>
                                        <option  value = "2016" >2016</option>
                                        <option  value = "2015" >2015</option>

                                        </select>
                            </div>
                        </div>



                        <div class="row">
                            <div class="col-md-5" style={{backgroundColor: 'rgba(183,215,248,0)'}}>
                                <h5 class="text-center" style={{ padding: '10px', margin: '0px 0px 0px 15px'}}>Current Value (PKR)</h5>
                            </div>

                            <div class="col-md-7 text-center" style={{ backgroundColor: 'rgba(183,215,248,0)', padding: '10px'}}>
                                <input type="text" value= {pkr} onChange={(event) => { setpkr(event.target.value) }} style={{ minWidth: 'auto', maxWidth: '90%', backgroundColor: 'rgba(255,255,255,0.76)', width: '370px'}} required/>
                            </div>
                        </div>


                        </label>



                        <div class="row text-center"  >
                            <div class="col" style={{backgroundColor: 'rgba(183,215,248,0)'}}>
                                {/* <a class="btn btn-info" role="button" href="/cars/create" style="background-color:rgb(87,120,215);color:rgb(8,8,8); max-width:90%; width: 820px; margin-top: 20px;" >Next</a>  */}
                                <button class="btn btn-primary btn-block" type="submit">Get Plans</button>
                                {/* <input type='submit' value="Next" style={{ backgroundColor: 'rgb(87,120,215)', color: 'rgb(8,8,8)', maxWidth: '90%' , width: '820px', marginTop: '20px' }}/> */}
                            </div>
                        </div>

                        </form>
                    </div>

                </div>
               
               <Script />
            </body>
            </div>
        )
    }


export default Bike








