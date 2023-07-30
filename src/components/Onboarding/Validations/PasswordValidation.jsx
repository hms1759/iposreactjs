

export default function PasswordValidation(passwordInfo) {
    const password_pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const error = {}
    let isError = false 

    if(passwordInfo.password === '')
    {isError = true
        error.password = "Password Required"
    } 
    else if(!password_pattern.test(passwordInfo.password))
    {
        isError = true
        error.password = "Password is very weak"
    }
    if(passwordInfo.confirmPassword === '')
    {isError = true
        error.confirmPassword = "ConfirmPassword Required"
    } 
    else if(passwordInfo.password !== passwordInfo.confirmPassword)
    {isError = true
        error.confirmPassword = "Password didnt match"
    } 
   
return {error,isError};
}
