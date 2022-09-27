

import React, {useState} from "react"
import Script from "./partials/script"
import background_Image from "./Capture.JPG"
import Plans from "./plans"
import Menu from "./partials/menu"
import Head from "./partials/head"
import { useParams } from "react-router"
import { Redirect, useHistory } from 'react-router';
import CarPlans from "./carplans"




function Car(){

    const {carinsurancetype} = useParams()
    const history = useHistory();


    const [model, setmodel] = useState('')
    const [year, setyear] = useState('')
    const [pkr, setpkr] = useState('')
    const [carBrand, setcarbrand] = useState('') 
    const [route1, setroute] = useState('') 

    const [insuranceType, setInsuranceType] = useState('')
    

    const setmodelvalues = ()=>{
        // alert("ll")
        if(model==''){
            if(carBrand=='Suzuki'){
                setmodel('Alto ECO-S')
        
            }
            else if(carBrand=='Toyota'){
                setmodel('Aqua')  
            }
            else if(carBrand=='Honda'){
                setmodel('City i-DSI') 
            }
        }
    }
    

    const setBrandValues = ()=>{
        // alert("jk")
        if(carBrand==''){
        if(carinsurancetype=='comprehensiveInsurance'){
            setcarbrand('Suzuki');   
            setroute('comprehensiveInsurance')
            setInsuranceType('Comprehensive Insurance')
            
            
        }
        else if(carinsurancetype=='toyota'){
            setcarbrand('Toyota'); 
            setroute('toyota')
            setInsuranceType('Toyota Insurance')

        }
        else if(carinsurancetype=='honda'){
            setcarbrand('Honda');
            setroute('honda')
            setInsuranceType('Honda Insurance')

        }
    }
    }


    const setroutevalues = ()=>{
        // alert("jk")
        if(carBrand!=''){
            if(route1=='comprehensiveInsurance'){
                

                if(carinsurancetype=='toyota'){
                    window.location.reload(false);
                }
                
                if(carinsurancetype=='honda'){
                    window.location.reload(false);
                }
            }
            else if(route1=='toyota'){
                if(carinsurancetype=='comprehensiveInsurance'){
                    window.location.reload(false);
                } 

                
                if(carinsurancetype=='honda'){
                    window.location.reload(false);
                }
            }
            else if(route1=='honda'){
                if(carinsurancetype=='comprehensiveInsurance'){
                    window.location.reload(false);
                } 
                
                if(carinsurancetype=='toyota'){
                    window.location.reload(false);
                }

                
            }
    }
    }



   const brandSelect = ()=>{
        var e = document.getElementById("SelectBox1");

        
        setcarbrand(e.options[e.selectedIndex].value)  
               
        
        if(e.options[e.selectedIndex].value=='Suzuki'){
            setmodel('Alto ECO-S')
            setInsuranceType('Comprehensive Insurance')
    
        }
        else if(e.options[e.selectedIndex].value=='Toyota'){
            setmodel('Aqua') 
            setInsuranceType('Toyota Insurance') 
        }
        else if(e.options[e.selectedIndex].value=='Honda'){
            setmodel('City i-DSI') 
            setInsuranceType('Honda Insurance')
        }
        
    
    }
    

    const modelSelect = ()=>{
        var e = document.getElementById("SelectBox2");

        setmodel(e.options[e.selectedIndex].value)   
    }


    const yearSelect = ()=>{
        var e = document.getElementById("SelectBox3");

        setyear(e.options[e.selectedIndex].value)      
    }



    const search_car_plans = ()=>{


        alert(carBrand + "\n" + model + "\n" + year + "\n" + pkr +"\n"+insuranceType  )

        history.push(`/carPlans/${carBrand}/${model}/${year}/${pkr}/${insuranceType}`)
        // return <CarPlans carBrandData={carBrand} carModelData={model} manufacturingYearData={year} pkrData={pkr}/>   
    }







        return(

            
            <div className="car" >
                {setBrandValues()}
                {setmodelvalues()}
                {setroutevalues()}
                
                                    
   {alert("carBrand = "+carBrand + "\nmodel = "+model + "\nroute = "+route1 +"\ncarinsurancetype = "+carinsurancetype + "\npkr = " + pkr+ "\nyear = "+year)}
   
    
            <head>
                <Head />
            </head>
            
            <body >
            
                
                <Menu />
            
                <div id="promo" style={{height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', objectFit: 'contain', backgroundImage:`url(${background_Image})`, backgroundSize:'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', padding: '30px', backgroundColor:'rgba(188,201,245,0)' }}>
                  
                    <div class="jumbotron text-center" style={{ backgroundColor: 'rgba(183,215,248,0.36)', borderRadius: '20px'}}>
                        <h1 style={{ color: 'rgb(11,11,11)' }}>Car Insurance</h1>
                        <p style={{ fontSize: '26px'}}>Information</p>
                    </div>

                   
                    <div class="container" style={{ backgroundColor:'rgba(183,215,248,0.66)', padding: '25px',  width: '720px', borderRadius: '20px'}}>
                        
                        
                        <form onSubmit={search_car_plans}  >
                        <label>
                        
                        <div class="row">
                            <div class="col-md-5" style={{ backgroundColor: 'rgba(183,215,248,0)'}}>
                                <h5 class="text-center" style={{ padding: '10px', margin: '0px 0px 0px 15px'}}>Car Brand</h5>
                            </div>


                    


                            <div class="col-md-7 text-center" style={{ backgroundColor: 'rgba(183,215,248,0)', padding: '10px'}}>
                                
                                <div class="select_car" >
                                    
                            
                                
                                <select id="SelectBox1" value={carBrand} onChange={brandSelect} style={{ height: '30px', maxWidth: '90%', width: '370px'}} required>
                                    
                                    
                                    {
                                        carinsurancetype=='comprehensiveInsurance'
                                        ? <optgroup optgroup label="Select a brand">             
                                        <option value = "Suzuki" >Suzuki</option>
                                        <option  value = "Honda" >Honda</option>
                                        <option  value = "Toyota" >Toyota</option>
                                        </optgroup>
                                        :carinsurancetype=='toyota'
                                        ? <optgroup optgroup label="Select a brand">             
                                        <option  value = "Toyota" >Toyota</option>
                                        <option  value = "Honda" >Honda</option>
                                        <option value = "Suzuki" >Suzuki</option>
                                        </optgroup>
                                        :carinsurancetype=='honda'
                                        ? <optgroup optgroup label="Select a brand">             
                                        <option  value = "Honda" >Honda</option>
                                        <option  value = "Toyota" >Toyota</option>
                                        <option value = "Suzuki" >Suzuki</option>
                                        </optgroup>
                                        :null

                                       
                                    }
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
                                <select id="SelectBox2" value={model} onChange={modelSelect}  style={{ height: '30px', maxWidth: '90%', width: '370px'}} required>

                                    {    
                                         carBrand=='Suzuki'
                                         ? <optgroup optgroup label="Select a model">             
                                         <option value = "Alto ECO-S" >Alto ECO-S</option>
                                         <option  value = "Swift Sport 1.6" >Swift Sport 1.6</option>
                                         <option  value = "Cultus EURO II" >Cultus EURO II</option>
                                         </optgroup>
                                         :carBrand=='Toyota'
                                         ? <optgroup optgroup label="Select a model">             
                                         <option  value = "Aqua" >Aqua</option>
                                         <option  value = "Corolla GLi 1.3" >Corolla GLi 1.3</option>
                                         <option value = "Fortuner" >Fortuner</option>
                                         </optgroup>
                                         :carBrand=='Honda'
                                         ? <optgroup optgroup label="Select a model">             
                                         <option  value = "City i-DSI" >City i-DSI</option>
                                         <option  value = "Civic Exi" >Civic Exi</option>
                                         <option value = "Freed" >Freed</option>
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


export default Car








