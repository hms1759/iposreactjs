
import { useState } from 'react';
import React from 'react'
import BusinessValidation from './Validations/BusinessValidation';

export default function BusinessInfo(props) {
	const [businessInfo, setBusinessInfo] = useState({
		businessName: '',
		businesPhone : '',
		businessAddress:'',
		businessType:'',
		businessState:'',
		businessCountry:''

	});
	 function handleInput (event){
		 const newBusiness = {...businessInfo,[event.target.name] : event.target.value}
		 setBusinessInfo(newBusiness);
		}

		// validation error
	const [errors, setErrors] = useState({})
	// Handling the form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		let validate= BusinessValidation(businessInfo);
		if(validate.isError)
		{
			setErrors(validate.error);
		}
		else {
			props.onSubmit(
				businessInfo
			);
			setErrors({});
		
		};
	};



  return (
    
    <>
    <div className=''>
		<div className="form">
        <div className='form_title'>
            <h1>Business Registration</h1>
        </div>
<div className='form_body'>
        <form onSubmit={handleSubmit}>
            {/* Labels and inputs for form data */}
            
            <div className='row form_control'> 
            <input onChange={handleInput} className="input"
                name ="businessName" type="text" placeholder=' Business Name' />
   			
				 {errors.businessName && <p style={{color: "red", fontSize: "12px", display:"flex", justifyContent:"left", marginBottom:0}}>{errors.businessName}</p>}
    </div>
		<div className='row double_form'> 
            <div className='row form_control col-6 mr-10 '> 
                <input onChange={handleInput} className="input"
                name ="businesPhone"  type="text" placeholder='09088776655 ' />
   			
				 {errors.businesPhone && <p style={{color: "red", fontSize: "12px", display:"flex", justifyContent:"left", marginBottom:0}}>{errors.businesPhone}</p>}
    </div> 
			<div className='row form_control col-6'> 
					<input onChange={handleInput} className="input"
						name ="businessType" type="text" placeholder='Input you Business type' />
			
			{errors.businessType && <p style={{color: "red", fontSize: "12px", display:"flex", justifyContent:"left", marginBottom:0}}>{errors.businesstype}</p>}
   </div>
		</div>
		<div className='row double_form'> 
            <div className='row form_control col-6'> 
            	<input onChange={handleInput} className="input"
                name ="businessState" type="text" placeholder='OYO' />
   			 
				 {errors.businessState && <p style={{color: "red", fontSize: "12px", display:"flex", justifyContent:"left", marginBottom:0}}>{errors.businessState}</p>}
   </div>
            <div className='row form_control col-6'> 
				<input onChange={handleInput} className="input"
				name ="businessCountry" type="text" placeholder='Chose your Country' />
    		
				 {errors.businessCountry && <p style={{color: "red", fontSize: "12px", display:"flex", justifyContent:"left", marginBottom:0}}>{errors.businessCountry}</p>}
   </div>
        </div>
	
	<div className='row form_control'> 
            <input onChange={handleInput} className="input"
                name ="businessAddress"  type="text" placeholder='Enter business Address' />
  
  {errors.businessAddress && <p style={{color: "red", fontSize: "12px", display:"flex", justifyContent:"left", marginBottom:0}}>{errors.businessAddress}</p>}
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
