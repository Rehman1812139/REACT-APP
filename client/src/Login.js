import React, {useState} from 'react';
import './App.css';
import Axios from 'axios';
import './login.css';
// import {BrowserRouter as Link, Router, Route, Switch, Redirect } from 'react-router-dom'
// import AfterLogin from './afterlogin';
import { Redirect } from 'react-router';


function Login(){


    
  const [username, setusername] = useState('')
  
  const [password, setpassword] = useState('')


  
  const [valid, setvalid] = useState('')



  const authentication = () => {
      
    alert(username+"\n"+password)



    Axios.post('http://localhost:3001/Login/authenticate',
    {
        username: username,
        password: password
    })
    .then( (res)=> {

      setvalid(res.data)

      alert("found")
    })
  }


    // const authentication = (e)=>{


    //     alert(userName+"\n"+password)

    //     Axios.post('http://localhost:3001/Login/authenticate')
    //     .then( (res)=>{
    //         setvalid(res.data)

    //         if(valid != null){
    //             alert("found");
    //         //   return  <Redirect  to="/AfterLogin"></Redirect>
    //         }
    //         else{
    //                 setusername('');
    //                 setpassword('');
    //         }
    //     })
        
    // }


        return(
           
            <div class="login-dark">

            <form  onSubmit={authentication}  >
                
            <div class="illustration">
                <i class="icon ion-ios-locked-outline"></i>
            </div>
            
            <div class="form-group">
                <input class="form-control" type="text" name='username' value= {username} onChange={(event) => { setusername(event.target.value) }} placeholder="Username" required/>
            </div>
            
            <div class="form-group">
                <input class="form-control" type="password" name='password' value= {password} onChange={(event) => { setpassword(event.target.value) }} placeholder="Password"  required/>
            </div>
            
            <div class="form-group">
                <button class="btn btn-primary btn-block" type="submit">Log In</button>
            </div>
            </form>
            
        </div>
    
           
           
        )
    }

export default Login