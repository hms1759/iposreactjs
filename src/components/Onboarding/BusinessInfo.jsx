
import { useState } from 'react';
import React from 'react'
import OnboardingNav from './OnboardingNav';

export default function BusinessInfo() {
    
	// States for registration
	const [businessName, setBusinessName] = useState('');
	const [businessphone, setBusinessPhone] = useState('');
	const [businessAddress, setBusinessAddress] = useState('');
	const [businessState, setBusinessState] = useState('');
	const [businessCountry, setBusinessCountry] = useState('');
	const [businessType, setBusinessType] = useState('');

	
	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

	// Handling the name change
	const handleBusinessName = (e) => {
		setBusinessName(e.target.value);
		setSubmitted(false);
	};

	// Handling the email change
	const handlesBusinessPhone = (e) => {
		setBusinessPhone(e.target.value);
		setSubmitted(false);
	};

	// Handling the email change
	const handlesBusinessAddress = (e) => {
		setBusinessAddress(e.target.value);
		setSubmitted(false);
	};

	// Handling the email change
	const handlesBusinessState = (e) => {
		setBusinessState(e.target.value);
		setSubmitted(false);
	};

	// Handling the password change
	const handleBusinessCountry = (e) => {
		setBusinessCountry(e.target.value);
		setSubmitted(false);
	};
	// Handling the password change
	const handleBusinessType = (e) => {
		setBusinessType(e.target.value);
		setSubmitted(false);
	};

	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (businessName === '' || businessphone === '' || businessAddress === ''||
		businessState === ''|| businessType === '')  {
			setError(true);
		} else {
			setSubmitted(true);
			setError(false);
		}
	};

	// Showing success message
	const successMessage = () => {
		return (
			<div
				className="success"
				style={{
					display: submitted ? '' : 'none',
				}}>
				<h1>User {businessName} successfully registered!!</h1>
			</div>
		);
	};

	// Showing error message if error is true
	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? '' : 'none',
				}}>
				<h1>Please enter all the fields</h1>
			</div>
		);
	};


  return (
    
    <>
    <div className=''>
		<div className="form">
        <div className='form_title'>
            <h1>User Registration</h1>
        </div>

        {/* Calling to the methods */}
        <div className="messages">
            {errorMessage()}
            {successMessage()}
        </div>
<div className='form_body'>
        <form>
            {/* Labels and inputs for form data */}
            
            <div className='row form_control'> 
            <input onChange={handleBusinessName} className="input"
                value={businessName} type="text" placeholder=' Business Name' />
   			 </div>
		<div className='row double_form'> 
            <div className='row form_control col-6 mr-10 '> 
                <input onChange={handlesBusinessPhone} className="input"
                    value={businessphone} type="text" placeholder='09088776655 ' />
   			 </div> 
			<div className='row form_control col-6'> 
					<input onChange={handleBusinessType} className="input"
						value={businessType} type="text" placeholder='Input you Business type' />
			</div>
		</div>
		<div className='row double_form'> 
            <div className='row form_control col-6'> 
            	<input onChange={handlesBusinessState} className="input"
                value={businessState} type="text" placeholder='OYO' />
   			 </div>
            <div className='row form_control col-6'> 
				<input onChange={handleBusinessCountry} className="input"
				value={businessCountry} type="text" placeholder='Chose your Country' />
    		</div>
        </div>
	
	<div className='row form_control'> 
            <input onChange={handlesBusinessAddress} className="input"
                value={businessAddress} type="text" placeholder='Enter business Address' />
    </div>
            <button onClick={handleSubmit} className=" form_control bttn"
                    type="submit">
                Submit
            </button>
        </form>
        </div>
    </div>
    </div></>
  )
}
