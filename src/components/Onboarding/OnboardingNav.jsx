import React from 'react'
import {Link} from "react-router-dom";
import iposlogo from '../../assets/logo-dark2x.png';
import './Onboarding.css'

export default function 
() {
  return (
    <div className='onbaord_nav'>
        
        <div>

        <img src={iposlogo} alt='' className='onbaord_nav_logo' width={200} />
        </div>

        <div>

        <Link to='/login' className=""> 
                    <a className="onbaord_nav_btn"> Login </a></Link>
        </div>
    </div>
  )
}
