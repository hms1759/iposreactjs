import React from 'react';
import images from './Image'
import "./Landpages.css";
import {Link} from "react-router-dom";
import { Row, Col, Grid } from 'bootstrap';
import Navbar from '../Navbars/Navbar';
export default function HomePage() {
  return (
      <>
      
      <Navbar/>
    <div className='body_container'>
      <div className='banner_text '>
                <div className="banner_text_row"> 
                 <div className="left ">
                    <img src={images.calculator} className= "bannerImg" alt="leftIcon"/>
                </div>
    
                <div className="center ">
                    <div className=" ">
                        <img src={images.frame} className= "bannerImg_center" alt=""/>
                    </div>
                    <div>
                    <h1 className='banner_text_one'>Providing <span>solutions</span> to your retail management needs</h1>
                    <p className="banner_text_two">IPOS by Smartware offers an extensive and growing suite of powerful and flexible products to help automate our client's business processes.</p>
    
                    <Link to='/signup'> 
                    <a className="banner_text_btn"> SignUp </a></Link></div>
                </div>
    
                     <div className="right ">
                         
                     <img src={images.chart} className= "bannerImg" alt="righticon"/>
                    </div>  
                    </div>

                <div className="">
                    {/* <img src={images['orderimg.png']} alt="orderimg"/> */}
                <img src={images.orderimg} className="orderimg" alt="orderimg"/>
                </div>
      </div>

   
    <div className='context_use'>

    <h1 className='context_use_title'>Why you should use IPOS</h1>
    
    <div className="context_use_row">
            <div className="use_row_content">
                <div className="icon">
                    <img src={images.Group_2209} alt="flexible-icon"/>
                </div>
                <h4 className="cont_items_sub" style={{color :"#212529" }}>Flexible</h4>
                <p className="use-cont_items">A workable solution catered for any business enterprise. </p>
            </div>
            <div className="use_row_content">
                <div className="">
                    <img src={images.Group_2210} alt="access"/>
                </div>
                <h4 className="cont_items_sub">Easy to access</h4>
                <p className="use-cont_items">Have access to your inventory anytime anywhere</p>
            </div>
            <div className="use_row_content">
                <div className="">
                    <img src={images.Group_2211} alt="management"/>
                </div>
                <h4 className="cont_items_sub">Sales Management</h4>
                <p className="use-cont_items">Accurate data on sales made.</p>
            </div>
            <div className="use_row_content">
                <div className="icon">
                    <img src={images.Group_2212} alt="cloud"/>
                </div>
                <h4 className="cont_items_sub">Cloud Management</h4>
                <p className="use-cont_items"> All information are stored, managed and processed digitally, thereby giving you access from anywhere.</p>
            </div>
        </div>
    </div>
    <div className="product-det">
    <div className="">
        <div className="row">
            <div className="">
                <h3 >explore our product</h3>
                <h2 >Our product details</h2>
                <p className="">Ipos is a retail management system designed to cater for both large and small businesses. It's amazing  features help manage sales, inventory and purchase orders. </p>
                <div className="">
                    <img src={images.arrow} alt="arrow"/>
                </div>

            </div>
            <div className=" ">
                <video width="100%" height="100%" autoplay muted>
                    {/* <source src={images.ipos-mac} type="video/mp4"/> */}
                    Your br/owser does not support the video tag.
                </video>

            </div>
        </div>
    </div>
    </div>
<div className="interests-cont">
    <div className="   ">
        <div className="">
            <div className="">
                <img src={images.mobile} className="   " alt="mobile"/>
            </div>
            <div className=" ">
                <h1 className="">Features that <br/> interests our visitors</h1>
                <h3  className="">Features that interests <br/> our visitors</h3>
                <ul>
                    <li>Purchase order</li>
                    <p>Ability to confirm orders that have been carried out with dates for easy tracking and reports.</p>
                    <li>Unified wallet account</li>
                    <p>Shop anywhere with a unified account</p>
                    <li>Seamless checkout</li>
                    <p>Create a smooth exit process of orders from the terminal with no delay.</p>
                </ul>
            </div>
        </div>
    </div>
</div>

<div className="testimonial-cont">
    <div className="">
        <div className="">
            {/* <!-- <h4>testimonials</h4> --> */}
            <h1 >Why market leaders choose <br/> <span>Smartware</span></h1>
        </div>
        <div className="">
            <div className="">
                <div className="">
                    <div id="testimonial-slider" className="">

                        <div className="">
                            <div className="">
                                <img style={{height:"100px", width:"100px", position:"relative"}} src={images.testimonial1} alt="testimonial"/>
                            </div>
                            <div className="">
                                <p>IPOS by Smartware is an excellent point of sale solution. I am able to transactions on the go with the mobile platform and this has helped me to retain customers.</p>
                            </div>
                            <div className="">
                                <p className="name">Temi Elizabeth</p>
                                <p className="role">CEO of  <span>Truebeauty</span></p>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <img style={{height:"100px", width:"100px", position:"relative"}} src={images.testimonial3} alt="testimonial"/>
                            </div>
                            <div className="">
                                <p>I can now track my inventories easily and make smart business decisions using IPOS by Smartware</p>
                            </div>
                            <div className="">
                                <p className="name">Eucharia Morgan</p>
                                <p className="role">CEO at  <span> Jewelry MarketPlace</span></p>
                            </div>
                        </div>
                        {/* <!-- </div> --> */}
                        {/* <!-- <div className="col-md-4"> --> */}
                        <div className="">
                            <div className="">
                                <img style={{height:"100px", width:"100px", position:"relative"}} src={images.testimonial2} alt="testimonial"/>
                            </div>
                            <div className="" style={{marginBottom: "30px"}}>
                                <p>Tracking my inventories has been made easy with Ipos by Smartware.  It can now identify my fast-moving products which have led to increasing sales.</p>
                            </div>
                            <div className="">
                                <p className="name">Sarah Chizoba</p>
                                <p className="role">Founder of <span> Bennagiftery</span></p>
                            </div>
                        </div>

                        {/* <!-- </div> --> */}
                        {/* <!-- <div className="col-md-4"> --> */}
                        <div className="">
                            <div className="">
                                <img style={{height:"100px", width:"100px", position:"relative"}} src={images.testimonial4} alt="testimonial"/>
                            </div>
                            <div className="">
                                <p>With Ipos by Smartware, I can now attend to my customers quickly. No more long queues during customer check out</p>
                            </div>
                            <div className="">
                                <p className="name">Mary Ajiboye</p>
                                <p className="role">Owner of  <span> Feminine and more</span></p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    </div>
</div>
<br ></br>
    </div></>
  )
}
