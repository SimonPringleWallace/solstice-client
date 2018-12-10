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
          style={{ color: "white", margin:20}}
          activeStyle={{fontweight:"bold",
                        color:"orange"
          }}>
          Home
          </NavLink>

        <NavLink
          exact to='/profile'
          style={{ color: "white", margin:20}}
          activeStyle={{fontweight:"bold",
                        color:"orange",
                      }}>
          Profile
        </NavLink>
        </div>
      </header>
    );
  }
}

export default Header;
