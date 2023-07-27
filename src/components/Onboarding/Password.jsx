
import { useState } from 'react';
import React from 'react'

export default function Password() {
    
	// States for registration
	const [password, setpassword] = useState('');
	const [confirmPassword, setconfirmPassword] = useState('');

	// States for checking the errors
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);
	const [passworderror, setPasswordError] = useState(false);

	// Handling the name change
	const handlePassword = (e) => {
		setpassword(e.target.value);
		setSubmitted(false);
	};
	// Handling the name change
	const handleComfirmPassword = (e) => {
		setconfirmPassword(e.target.value);
		setSubmitted(false);
	};


	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === '' ||confirmPassword === '' )  {
			setError(true);
		}
		console.log(password, "password")
		console.log(confirmPassword, "confirmPassword")
		if (password !== confirmPassword )  {
			setPasswordError(true);
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
				<h1>User successfully registered!!</h1>
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

	// Showing error message if error is true
	const NotMatchMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: passworderror ? '' : 'none',
				}}>
				<h1>Password doest not Match</h1>
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
			{NotMatchMessage()}
        </div>
<div className='form_body'>
        <form>
            {/* Labels and inputs for form data */}
            
            <div className='row form_control'> 
            <input onChange={handlePassword}
			 className="input"
            value={password}
			 type="password" 
			 placeholder='Password'
			  />
   			 </div>
	
	<div className='row form_control'> 
            <input onChange={handleComfirmPassword} className="input"
                value={confirmPassword}
				 type="password" 
				 placeholder='Confirm Password' 
				 />
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
