

export default function BusinessValidation(businessinfo) {
    const error = {}
    let isError = false
 if(businessinfo.businessName === '')
 {isError = true
     error.BusinessName = "Business Name Required"
 } 
 if(businessinfo.businesPhone === '')
 {isError = true
     error.BusinesPhone = "Busines Phone Required"
 }
  if(businessinfo.businessType === '')
 {isError = true
     error.businesstype = "Business type Required"
 }
  if(businessinfo.businessState === '')
 {isError = true
     error.businessState = "State is Required"
 } 
 if(businessinfo.businessAddress === '')
 {isError = true
     error.businessAddress = "Address is Required"
 } 

return {error,isError};
}
