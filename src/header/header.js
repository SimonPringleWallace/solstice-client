import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './header.css'

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <img alt='logo' src={require('../images/Logo-White-Retina-1-1.png')}/>
        <div className='nav-links'>
        <NavLink
          exact to='/'
          activeStyle={{fontweight:"bold",
                        color:"red",
                        margin:30
                      }}>
          Home
        </NavLink>

        <NavLink
          exact to='/profile'
          activeStyle={{fontweight:"bold",
                        color:"red",
                        margin:30
                      }}>
          Profile
        </NavLink>
        </div>
      </header>
    );
  }
}

export default Header;
