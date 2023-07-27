import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import iposlogo from '../../assets/ipos.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faBars } from '@fortawesome/free-solid-svg-icons'

export default class Navbar extends Component {
    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }


    render() {
        return <div>
            <nav className='NavbarItems'>
                <div className='nav-log-toggle'>
                <img src={iposlogo} alt='' className='navbar-logo' width={100} />
                {/* <h1 className='navbar-logo'>React<i className='fab fa-react'></i> </h1> */}
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ?  <FontAwesomeIcon icon={faTimes} />: <FontAwesomeIcon icon={faBars} />}></i>
                 click
                </div>
                </div>
               
                <div className={this.state.clicked ? 'nav-menu active' :
                    'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            
                                <a className={item.cName} href={item.url}  key={index}>
                                
                                {item.title}
                            
                            </a>
                         
                           
                        )
                    })}


                </div>
            </nav>
        </div>;
    }
}
