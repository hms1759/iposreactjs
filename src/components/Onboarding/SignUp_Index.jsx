import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BusinessInfo from './BusinessInfo';
import Password from './Password';

export default function SignUp_Index() {
    const [page, setPages] = useState(1)
	// States for checking the errors
	const [onboards, setOnboards] = useState ({
		lastName: '',
		firstName : '',
		email:'',
		phone:''

	});
    const showToastMessage = (event) => {
        if( event === "Success" )
        {
             toast.success('Success Notification !', {
                position: toast.POSITION.TOP_RIGHT
            })
        }
        else
        {
            toast.error('Error occur !', {
                position: toast.POSITION.TOP_RIGHT
            }) 
        }
        ;}
        function numberOff(event)
        { 
            const newpage = [event]
            console.log(newpage);
            setPages(newpage)

        }
        function addOnboard (onboard) {
            console.log(onboard, "landpage");
           showToastMessage("Success");
           numberOff(2)
        }
	return (
    <>
     <div>
          
            <ToastContainer />
        </div>
    {/* <OnboardingNav/> */}
    
    <div className='onboarding_body'>
        <div className='onboarding_content'>
    <div  className='top_smg'>  
    <div className='progress_number'>{page} of 4</div> 
    <div className='progress_bar'>
        <div className={page >=1?  "progress_bar_item" : "progress_bar_empty"}>
        </div> 
        <div className={page >=2?  "progress_bar_item" : "progress_bar_empty"}>
        </div> 
        <div className={page >=3?  "progress_bar_item" : "progress_bar_empty"}>
        </div> 
        <div className={page >=4?  "progress_bar_item" : "progress_bar_empty"}>
        </div> 
   </div> 
    </div>
    <div className={page !=1?"isPagehide": ""}>
    <PersonalInfo onSubmit={addOnboard}/>
    </div>
    <div className={page !=2?"isPagehide": ""}>
    <BusinessInfo/>
    </div>
    
    <div className={page !=3?"isPagehide": ""}>
    <Password/>
    </div>
        </div> 
    </div>
    </>
	);
}

