
import { useState } from 'react';
import React from 'react'
import Validation from './Validations/PasswordValidation';

export default function SignUpPage(props) {
    
	const [passwordinfo, setPasswordInfo] = useState({
		password: '',
		confirmPassword : ''

	})

	const [errors, setErrors] = useState({})

	// States for registration
	function handleInput(event){
		const newObj = {...passwordinfo,[event.target.name]: event.target.value }
		setPasswordInfo(newObj);
	} 

	// Handling the form submission
	function handleSubmit (e) {
		e.preventDefault();
		let validate= Validation(passwordinfo);
		console.log(validate)
		if(validate.isError)
		{
			setErrors(validate.error);
		}
		else {
			props.onSubmit(
				 passwordinfo
			);
			setErrors({});
		
		};
	};

	

  return (
    
   		 <>
  
  		<div className=''>
    
		<div className="form">
		<div className='form_title'>
			<h1>Password</h1>
		</div>

		<div className="messages">
		</div>
		<div className='form_body'>
        <form onSubmit={handleSubmit}>
            {/* Labels and inputs for form data */}
            
            <div className='row form_control'> 
            <input onChange={handleInput}
			 className="input"
			 name = "password"
			 type="password" 
			  placeholder='Password'
			  />{errors.password && <p style={{color: "red", fontSize: "12px", display:"flex", justifyContent:"left", marginBottom:0}}>{errors.password}</p>}
			
   			 </div>
	
	<div className='row form_control'> 
            <input onChange={handleInput} className="input"
                type="password" 
				 name= 'confirmPassword' 
				 placeholder='Confirm Password' 
				 />
				 {errors.confirmPassword && <p style={{color: "red", fontSize: "12px", display:"flex", justifyContent:"left", marginBottom:0}}>{errors.confirmPassword}</p>}
   				
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
