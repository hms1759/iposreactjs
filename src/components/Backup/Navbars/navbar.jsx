import React from 'react';
import {Link} from "react-router-dom";
import "./navbar.css";
import iposlogo from '../../assets/ipos.png';
export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='links links-right'>
          <Link to='/'> <img src={iposlogo} alt='' width={70} /></Link>
           <Link to='/'> Home</Link>
            <Link to='/feature'> Features</Link>
            <Link to='/contact'> Contact</Link>
            <Link to='/pricing'> Pricing</Link>
             </div>
        <div className='links links-left'>
            <Link to='/login'> Login</Link>
        </div>
        
        
    </div>
  )
};
