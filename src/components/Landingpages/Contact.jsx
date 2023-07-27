import React from 'react'
import Navbar from '../Navbars/Navbar'

export default function Contact() {
  return (
    <div>
    <Navbar/>
         <div class="contact-main">
        <div class="main-cont">
            <div class="top">
                <h1>Contact Us</h1>
                <p class="inner-text">
                    We would love to hear from you. Do you have any question concerning our product, kindly fill out the form and we will be in touch as soon as possible.
                </p>
            </div>

            <div class="bottom">
                <div class="form-cont">
                    <form method="post" id="contactUsForm" ng-submit="contactUs($event, '#contactUsForm')">
                        <div class="mb-4">
                            <label for="contactname" class="form-label" style={{color: '#025072'}}>Contact Name</label>
                            <input required ng-model="contact.contactName" type="text" name="contactname" class="form-control form-control-lg" id="contactname" placeholder="Full Name"/>
                        </div>
                        <div class="mb-4">
                            <label for="storename" class="form-label" style={{color: '#025072'}}>Store Name</label>
                            <input required ng-model="contact.storeName" type="text" name="storename" class="form-control form-control-lg" id="storename" placeholder="Store Name"/>
                        </div>
                        <div class="mb-4">
                            <label for="email" class="form-label" style={{color: '#025072'}}>Email Address</label>
                            <input required ng-model="contact.email" type="email" class="form-control form-control-lg" name="email" id="email" placeholder="Email"/>
                        </div>
                        <div class="mb-4">
                            <label for="phoneNumber" class="form-label" style={{color: '#025072'}}>Phone Number</label>
                            <input ng-model="contact.phoneNumber" required type="text"  class="form-control form-control-lg" name="phoneNumber" id="phoneNumber" placeholder="Phone Number"/>
                        </div>
                        <div class="mb-4">
                            <label for="message" class="form-label" style={{color: '#025072'}}>Message <span>(required)</span></label>
                            <textarea required ng-model="contact.message" class="form-control" id="message" rows="3" placeholder="Type here......"></textarea>
                        </div>

                        <button id="submitButton" ng-disabled="isLoading" type="submit"> Contact Us</button>
                        <div class="loader" ng-show="isLoading">
                            <div class="loading">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
 
    </div>
  )
}
