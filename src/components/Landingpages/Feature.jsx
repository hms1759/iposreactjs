import React from 'react'
import Navbar from '../Navbars/Navbar'

export default function Feature() {
  return (
      <>
      <Navbar/>
 <div class="product-banner-cont" id="iposterminal">
    <div class="container product-cont">
        <div class="row " style={{width:"100%"}}>
            <div class="col b-left" style={{marginTop:'-30px',  width:'50%'}}>
                <h1>Get our app now!</h1>

            <p class="inner-text mt-4">Do you have a store or run a business that requires a retail solution to enable you manage your business effectively anywhere and anytime? Do you have an IPAD? Do you have a physical store with a desktop? IPOS by Smartware is for you!</p>
            <p class="inner-text-mobile mt-4">Do you have a store or run a business that requires a retail solution to enable you manage your business effectively anywhere and anytime? Do you have an IPAD? Do you have a physical store with a desktop? IPOS by Smartware is for you!</p>
          
            <div class="download-img">
                <div class="img d-flex align-items-center">
                    <a href="https://play.google.com/store/apps/details?id=com.smartware.ipos.v"><img src="~/IposWebsite/assets/googleplay.png" alt="googleplayimage" width="160"/>  </a>
                    <a href="https://apps.apple.com/ng/app/ipos-by-smartware/id1614647631"> <img src="~/IposWebsite/assets/appstore.png" alt="applestoreimage" width="160"  class="ms-3"/> </a>
                </div>
                <p class="powered">Powered by smartware solutions</p>
            </div>

            <div class="col b-right" >
                <img src="~/IposWebsite/assets/devices.png" alt="iposcreen"/>
            </div>
        </div>

    </div>
</div>
<div class="works-cont">
    <div class="main-cont container row works">
        <div class="left  col" style={{marginTop: '-5px'}}>
            <img src="~/IposWebsite/assets/terminal 1.png" alt="order1"/>
        </div>

        <div class="right col">
            <h4>how it works</h4>
            <h1>ipos</h1>

            <p class="inner-text">
                IPOS is a seamless integrated point of sale solution that is built to power your business, help to post orders at the counter or online and register customers with wallet creation. Regardless of the nature of your business, we have got you covered.
            </p>

            <div class="list-works row">
                <div class="left-li col">
                    <ul>
                        <li>Manage stock</li>
                        <li>Easy and fast access</li>
                        <li>Create purchase order</li>
                        <li>Limit waste and damage</li>
                    </ul>
                </div>
                <div class="right-li col">
                    <ul>
                        <li>Save payment</li>
                        <li>Create automatic wallet</li>
                        <li>Access multiple store</li>
                        <li>Flexible payment option</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</div>
<div class="works-cont works-2" id="iposbi">
    <div class="main-cont container row works-2-main">

        <div class="left col">
            <h4>how it works</h4>
            <h1>REPORTING</h1>
            <p class="inner-text">
                Track sales and orders.
            </p>
            <p class="inner-text">
                Stay on top of loss due to damages, returned items and spoilage.
            </p>

            <p class="inner-text">
                Download and share reports.
            </p>
            <div class="list-works row" style={{  marginTop: '30px', marginLeft: '-25px'}}>
                <div class="left-li col">
                    <ul>
                        <li> Inventory Report.</li>
                        <li>Sales Report.</li>
                        <li>Products returned.</li>
                        <li>Profit and Loss.</li>
                    </ul>
                </div>

            </div>
        </div>
        <div id="desktop" class="right col ps-3">
            <img src="~/IposWebsite/assets/Phone.png" alt="desktop1"/>
        </div>
    </div>
</div>
<div class="works-cont works-3" id="cloud">
    <div class="main-cont container row works-3-main">
        <div class="left col">
            <img src="~/IposWebsite/assets/Frame 210.png" alt="order1"/>
        </div>

        <div class="right col" style={{marginLeft: '40px'}}>
            <h4>how it works</h4>
            <h1>Insights and Analytics</h1>
            <p class="inner-text">
                Access your key sales metrics anytime, anywhere.
            </p>
            <p class="inner-text">
                Track sales trends. Compare products performance in the previous days, weeks, months and promptly react to changes.
            </p>

            <p class="inner-text">
                Make informed decisions about your best performing products and categories.
            </p>

            <div class="list-works row"  style={{  marginTop: '30px', marginLeft: '-25px'}}>
                <div class="left-li col">
                    <ul>
                        <li> Track Inventory</li>
                        <li>Low stock notification</li>

                    </ul>
                </div>
                <div class="right-li col">
                    <ul>
                        <li> Sales Summary</li>
                        <li> Inventory History</li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</div>
<div class="works-cont features works-4" id="iposmobile">
    <div class="main-cont container row works-4-main">

        <div class="left col">
            <h1>Advanced Features</h1>
            <p class="inner-text">Ipos provides services that caters for our clients. </p>
            <ul>
                <li>Purchase Order</li>
                <p>Purchase order allows you to create and save orders for the supply of products, to send orders to suppliers, to receive products, and to save information of suppliers in the system.</p>
                <li>Suspend order</li>
                <p>It allows you to suspend in-progress transactions and then resume later without losing the session.</p>

                <li>Lock screen</li>
                <p>It provides you with the additional security of locking your POS screen without terminating the current session. It basically avoids unauthorized access to your POS.</p>
            </ul>
        </div>
        <div class="right col ps-3">
            <img src="~/IposWebsite/assets/mobile.png" class="animate__animated animate__pulse animate__slow animate__infinite" alt="mobile"/>
        </div>
    </div>
</div>
</div></>
  )
}
