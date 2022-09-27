import React, { Component } from 'react'
import Menu from "./partials/menu"
import Head from "./partials/head"
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from 'react-helmet';




class Home extends Component{




    render(){

        const FaysalBank=()=>{
            // <Family/>
          }


        return(
        <div >
            <head>
                <Head/>
            </head>
            
            
            <body>

                <Menu/>
            <div>
          <div className="simple-slider">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide" style={{backgroundImage: 'url("assets/img/Bike.jpg")'}} />
              <div className="swiper-slide" style={{backgroundImage: 'url("assets/img/Car.jpg")'}} />
              <div className="swiper-slide" style={{backgroundImage: 'url("assets/img/Health.jpg")'}} />
            </div>
          </div>
          <div className="swiper-pagination" />
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </div>
        <div className="carousel slide" data-ride="carousel" id="carousel-1">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="w-100 d-block" src="https://deeleyexhibition.ca/wp-content/uploads/2020/05/close-up-photo-of-bmw-motorcycle-2396044-1920x500.jpg" alt="Bike" />
              <div className="carousel-caption">
                <h1 style={{textAlign: 'center' , color: '#82b4cf'}}>Bike Insurance Karao, Tension Bhagao</h1>
                <form>
                  <button onClick={this.Bike} className="btn" style={{display: 'inline-block', width:'200px', 
                    border: '2px solid #fff', textAlign: 'center', outline: 'none', textDecoration:'none', 
                    transition:'border-color 0.3s ease-out, color 0.3s ease-out', color: '#82b4cf', backgroundColor: 'transparent',
                    borderColor: '#82b4cf'}}><b>Bike Insurance</b></button>
                </form>
                </div>
            </div>
            <div className="carousel-item">
              <img className="w-100 d-block" src="https://www.gbcardeals.com/gfx/slideshows/home-slide-show/bgi2a.jpg" alt="Car" />
              <div className="carousel-caption">
                <h1 style={{textAlign: 'center', color: '#82b4cf'}}>Car Insurance Karao, Tension Urao</h1>
                <form action="/Car">
                  <button className="btn" style={{display: 'inline-block', width: '200px', padding: '8px', color: '#82b4cf', 
                  border: '2px solid #fff', textAlign: 'center', outline: 'none', textDecoration: 'none', transition: 'border-color 0.3s ease-out,color 0.3s ease-out', 
                  backgroundColor: 'transparent', borderColor: '#82b4cf'}}><b>Car Insurance</b></button>
                </form>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100 d-block" src="https://www.pbplaw.com/sitio/wp-content/uploads/2018/08/plantilla-full-area-salud.png" alt="Health" />
              <div className="carousel-caption">
                <h1 style={{textAlign: 'center', color: '#82b4cf'}}>Health Insurance Karao, Family Mehfooz Karo</h1>
                <form action="/Health">
                  <button className="btn" style={{display: 'inline-block', width: '200px', padding: '8px', color: '#82b4cf', 
                  border: '2px solid #fff', textAlign: 'center', outline: 'none', textDecoration: 'none', transition: 'border-color 0.3s ease-out, color 0.3s ease-out', 
                  backgroundColor: 'transparent', borderColor: '#82b4cf'}}><b>Health Insurance</b></button>
                </form>
              </div>
            </div>
          </div>
          <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-slide="prev"><span className="carousel-control-prev-icon" /><span className="sr-only">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-slide="next"><span className="carousel-control-next-icon" /><span className="sr-only">Next</span></a></div>
          <ol className="carousel-indicators">
            <li data-target="#carousel-1" data-slide-to={0} className="active" />
            <li data-target="#carousel-1" data-slide-to={1} />
            <li data-target="#carousel-1" data-slide-to={2} />
          </ol>
        </div>
        <section>
          <h1 style={{textAlign: 'center'}}><b>Seasonal Promotions</b></h1>
          <p style={{textAlign: 'center'}}>Get your insurance with max discount of Rs. 2000 this Ramazan now!</p>
        </section>
        <section>
          <div className="container" style={{border: '5px solid #0051ba'}}>
            <table style={{borderSpacing: '10px', display: 'inline-block', borderCollapse: 'separate'}}>
              <tbody><tr>
                  <td style={{textAlign: 'center'}}>
                    <img src={"https://d1e6cjojnyo6nm.cloudfront.net/webp_images/product_new/faisalbank_con.png"} alt="Faisal Bank" className="image" />
                    <div className="overlay">
                      <i className="fa fa-user" /> 
                    </div>
                  </td>
                  <td style={{textAlign: 'center'}}>
                  </td>
                  <td style={{textAlign: 'center'}}>
                    <img src={"https://d1e6cjojnyo6nm.cloudfront.net/webp_images/product_new/standardc_logo.png"} alt="Standard Chartered" className="image" />
                    <div className="overlay">
                      <i className="fa fa-user" />
                    </div>
                  </td>
                  <td style={{textAlign: 'center'}}>
                  </td>
                  <td style={{textAlign: 'center'}}>
                    <img src={"https://d1e6cjojnyo6nm.cloudfront.net/webp_images/product_new/silk_logo_.png"} alt="Silk Bank" className="image" />
                    <div className="overlay">
                      <i className="fa fa-user" />
                    </div>
                  </td>
                  <td style={{textAlign: 'center'}}>
                  </td>
                  <td style={{textAlign: 'center'}}>
                    <img style={{width: '60px'}} src={"https://d1e6cjojnyo6nm.cloudfront.net/webp_images/product_new/Bank_alfalah_logo.png"} alt="Bank Alfalah" className="image" />
                    <div className="overlay">
                      <i className="fa fa-user" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{textAlign: 'center'}}>
                    <p style={{textAlign: 'left'}}>Get upto <b>15% discounts</b> with Faysal Bank this Ramazan</p>
                  </td>
                  <td style={{textAlign: 'center'}}>
                  </td>
                  <td style={{textAlign: 'center'}}>
                    <p style={{textAlign: 'left'}}>Get upto <b>20% discounts</b> with Standard Chartered this Ramazan</p>
                  </td>
                  <td style={{textAlign: 'center'}}>
                  </td>
                  <td style={{textAlign: 'center'}}>
                    <p style={{textAlign: 'left'}}>Get upto <b>15% discounts</b> with Silk Bank this Ramazan</p>
                  </td> 
                  <td style={{textAlign: 'center'}}>
                  </td>
                  <td style={{textAlign: 'center'}}>
                    <p style={{textAlign: 'left'}}>Get upto <b>10% discounts</b> with Bank Alfalah this Ramazan</p>
                  </td>
                </tr> 
                <tr>
                  <td style={{textAlign: 'center'}}>
                    <form onclick={FaysalBank}>
                    <button  style={{backgroundColor: '#0051ba', borderRadius: '4px', border: '2px solid #0051ba', color: '#c4d8e2'}}>
                      Health Insurance
                    </button>
                    </form>
                  </td>
                  <td style={{textAlign: 'center'}}>
                  </td>
                  <td style={{textAlign: 'center'}}>
                    <button onclick="window.location.href='/SCHealth'" style={{backgroundColor: '#0051ba', borderRadius: '4px', border: '2px solid #0051ba', color: '#c4d8e2'}}>
                      Health Insurance
                    </button>
                  </td>
                  <td style={{textAlign: 'center'}}>
                  </td>
                  <td style={{textAlign: 'center'}}>
                    <button onclick="window.location.href='/SilkHealth'" style={{backgroundColor: '#0051ba', borderRadius: '4px', border: '2px solid #0051ba', color: '#c4d8e2'}}>
                      Health Insurance
                    </button>
                  </td> 
                  <td style={{textAlign: 'center'}}>
                  </td>
                  <td style={{textAlign: 'center'}}>
                    <button onclick="window.location.href='/AlfalahHealth'" style={{backgroundColor: '#0051ba', borderRadius: '4px', border: '2px solid #0051ba', color: '#c4d8e2'}}>
                      Health Insurance
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style={{textAlign: 'center'}}>
                      Offer valid till <b>10th May 2020</b>
                    </p>
                  </td>
                  <td style={{textAlign: 'center'}}>
                  </td>
                  <td>
                    <p style={{textAlign: 'center'}}>
                      Offer valid till <b>15th May 2020</b>
                    </p>
                  </td>
                  <td style={{textAlign: 'center'}}>
                  </td>
                  <td>
                    <p style={{textAlign: 'center'}}>
                      Offer valid till <b>9th May 2020</b>
                    </p>
                  </td>
                  <td style={{textAlign: 'center'}}>
                  </td>
                  <td>
                    <p style={{textAlign: 'center'}}>
                      Offer valid till <b>20th May 2020</b>
                    </p>
                  </td>
                </tr>
              </tbody></table>
          </div>
        </section>  
        <section>
          <div className="jumbotron">
            <h1 className="text-center" style={{textAlign: 'center'}}><b>About Securus</b></h1>
            <p className="text-center" style={{textAlign: 'center', color: '#0051ba'}}><b>Securus is an insurance website in Pakistan where you can find multiple insurance options to compare, consult and buy insurance for your assets, all online.</b></p>
          </div>
        </section> 
        <Helmet>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.0/js/bootstrap.bundle.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/js/swiper.jquery.min.js"></script>
                <script src="assets/js/Simple-Slider.js"></script>
        </Helmet>
        
        </body>
        </div>
        
    )
}

}


export default Home;