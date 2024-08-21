 import Logo from '../../../assets/images/logo.png';
 import React from 'react';
 import CartWidget from '../CartWidget';

function Navbar() {
  return (<>
  <header>
    <nav className='navbar container'>
        <div className='navbar-logo'>
            <img src={Logo} alt="" /><span id='title'>Haiver's Shop</span>
        </div>
        <ul className='navbar-menu'>
            <li className='nav-li'><a href='' className='navbar-link'>Tienda</a></li>
            <li className='nav-li'><a href='' className='navbar-link'>Hombres</a></li>
            <li className='nav-li'><a href='' className='navbar-link'>Mujeres</a></li>
            <li className='nav-li'><a href='' className='navbar-link'><CartWidget/></a></li>
        </ul>
    </nav>
  </header>  
    </>

  );
}

export default Navbar;