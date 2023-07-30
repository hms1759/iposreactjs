

export default function Validation(personalinfo) {
    const error = {}
    let isError = false
    const email_pattern = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

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

return {error,isError};
}
