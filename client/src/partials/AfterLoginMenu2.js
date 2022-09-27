import React, {Component} from "react"
import '../menu.css';
import {BrowserRouter as Switch, Link} from 'react-router-dom'


class Menu extends Component{

    render(){
        return(
            <div>
    <nav class="navbar navbar-light navbar-expand-md navigation-clean" style={{ backgroundColor: '#0051ba', height: '70px'}}>
        <div class="container">

            <Link class="navbar-brand" href="/" style={{ color: 'rgb(246,243,243)'}}>LOGO</Link>

            <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
                <span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"> </span>
            </button>
        <div
                class="collapse navbar-collapse" id="navcol-1" style={{ backgroundColor: '#0051ba'}}>
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation">
                        <Link class="nav-link" href="/contact" style={{ color: 'rgb(246,248,249)'}}>Contact Us</Link>
                    </li>
                    <li class="nav-item" role="presentation">
                        <Link class="nav-link" to="/Bike" style={{ color: 'rgb(246,248,249)'}}>Bike</Link>
                    </li>
                    
                    <li class="nav-item" role="presentation">
                        <Link class="nav-link" to="/Login" style={{ color: 'rgb(246,248,249)'}}>Logout</Link>
                    </li>
                </ul>
        
            </div>

   
        </div>


    </nav>


</div>
        )
    }
}


export default Menu