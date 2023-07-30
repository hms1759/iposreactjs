
import { useState } from 'react';
import React from 'react'
import Validation from './Validations/OtpCheckValidation';

export default function OtpValidationPage(props) {
    
	const [otp, setOtp] = useState("")

	const [errors, setErrors] = useState({})

	// States for registration
	function handleInput(event){
		const newObj = {otp,[event.target.name]: event.target.value }
		setOtp(newObj);
	} 

	// Handling the form submission
	function handleSubmit (e) {
		e.preventDefault();
		let validate= Validation(otp);
		console.log(validate)
		if(validate.isError)
		{
			setErrors(validate.error);
		}
		else {
			props.onSubmit(
				{
					obj : otp
				}
			);
			setErrors({});
		
		};
	};

	

  return (
    
   		 <>
  
  		<div className=''>
    
		<div className="form">
		<div className='form_title'>
			<h1>Input OTP</h1>
		</div>

		<div className="messages">
		</div>
		<div className='form_body'>
        <form onSubmit={handleSubmit}>
            {/* Labels and inputs for form data */}
            
            <div className='row form_control'> 
            <input onChange={handleInput}
			 className="input"
			 name = "otp"
			 type="otp" 
			  placeholder='Input Your OTP'
			  />{errors.otp && <p style={{color: "red", fontSize: "12px", display:"flex", justifyContent:"left", marginBottom:0}}>{errors.otp}</p>}
			
   			 </div>
				<div>
					one time Password has being sent to your email. kindly input your Otp
				</div>
            <button  className=" form_control bttn"
                    type="submit">
                Submit
            </button>
        </form>
        </div>

        </div>
   
	
        </div>
		</>
  )
}
