

export default function Validation(personalinfo) {
    const error = {}
    let isError = false
    const email_pattern = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const password_pattern = "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$";
 if(personalinfo.lastName === '')
 {isError = true
     error.lastName = "Last Name Required"
 }
 if(personalinfo.firstName === '')
 {isError = true
     error.firstName = "First Name Required"
 }
 if(personalinfo.phone === '')
 {isError = !isError
     error.phone = "Phone Required"
 }
 if(personalinfo.email === '')
 {isError = true
     error.email = "Email Required"
 } 
 else if(!email_pattern.test(personalinfo.email))
 {isError = true
     error.email = "Email didnt match"
 }

if(personalinfo.password === '' &&!password_pattern.test(personalinfo.password))
 {
     isError = true
     error.email = "Password didnt match"
 }

return {error,isError};
}
