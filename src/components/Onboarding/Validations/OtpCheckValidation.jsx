

export default function OtpCheckValidation(otp) {
    const error = {}
    let isError = false 

    if(otp === '')
    {isError = true
        error.otp = "Please input  your Otp"
    } 
   
return {error,isError};
}
