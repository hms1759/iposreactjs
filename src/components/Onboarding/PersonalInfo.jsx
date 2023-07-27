
import React, { useState } from 'react';
import Validation from './Validation';

export default function PersonalInfo(props) {
	const [personalinfo, setPersonalInfo] = useState({
		lastName: '',
		firstName : '',
		email:'',
		phone:''

	}) 
    
	const [errors, setErrors] = useState({})
	// States for registration
	function handleInput(event){
		const newObj = {...personalinfo,[event.target.name]: event.target.value }
		setPersonalInfo(newObj);
	} 

	// Handling the form submission
	function handleSubmit (e) {
		e.preventDefault();
		let validate= Validation(personalinfo);
		if(validate.isError)
		{
			setErrors(validate.error);
		}
		else {
			props.onSubmit(
				{
					obj : personalinfo
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
            <h1>Personal Information</h1>
        </div>

        <div className="messages">
        </div>
<div className='form_body'>
        <form onSubmit={handleSubmit}>
            {/* Labels and inputs for form data */}
            
            <div className='row form_control'> 
            <input onChange={handleInput} 
			className="input"
                type="text"
				 placeholder='Last Name'
				 name='lastName' />
				 {errors.lastName && <p style={{color: "red", fontSize: "12px", display:"flex", justifyContent:"left", marginBottom:0}}>{errors.lastName}</p>}
    </div>
            <div className='row form_control'> 
                <input onChange={handleInput} className="input"
                    type="text"
					 placeholder='First Name '
					 name='firstName' 
					 />
					 {errors.firstName && <p style={{color: "red", fontSize: "12px", display:"flex", justifyContent:"left",marginBottom:0}}>{errors.firstName}</p>}
	  
    </div>
            <div className='row form_control'> 
            <input onChange={handleInput}
			 className="input"
                type="email"
				 placeholder='youremail@user.com'
				 name='email' />
				 {errors.email && <p style={{color: "red", fontSize: "12px", display:"flex", justifyContent:"left",marginBottom:0}}>{errors.email}</p>}
  
    </div>
            <div className='row form_control'> 
            <input onChange={handleInput} className="input"
                 type="phone"
				  placeholder='09087654353'
				  name='phone'/>
				  {errors.phone && <p style={{color: "red", fontSize: "12px", display:"flex", justifyContent:"left",marginBottom:0}}>{errors.phone}</p>}
   
    </div>
            <button  className=" form_control bttn"
                    type="submit">
                Submit
            </button>
        </form>
        </div>
    </div>
    
    </div></>
  )
}
