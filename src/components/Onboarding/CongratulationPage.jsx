import congrat from '../../assets/Success.png'

export default function CongratulationPage(props) 
   { 
	
	// Handling the form submission
	function handleSubmit (e) {
		e.preventDefault();
		
			props.onSubmit(
				{
					obj : "congrat"
				}
			);
	
	};

	
  return (
    <>
    <div className=''>
    
		<div className="form">

        <div className="messages">
        </div>
<div className='form_body'>
        <form onSubmit={handleSubmit}>
            {/* Labels and inputs for form data */}
            <img src={congrat} alt="" />
            <button  className=" form_control bttn"
                    type="submit">
                Continue to log in
            </button>
        </form>
        </div>
    </div>
    
    </div></>
  )
}
