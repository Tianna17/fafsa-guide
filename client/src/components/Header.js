import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/logo.png';
import NavItem from './NavItem';

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg  shadow-sm p-0'>
        <div className='container'>
          <Link
            to='/'
            className='navbar-brand d-flex justify-content-start align-items-center p-0'
          >
            <img src={Logo} alt='' width='22' />
            <span className='ms-1 d-block fw-bold fs-4 text-purple'>
              FAFSA Guide
            </span>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <NavItem label='Home' to='/' />
              <NavItem label='About' to='/about' />
              <NavItem label='Guide' to='/guide/step-one-student-information' />
              <NavItem label='Contact' to='/contact' />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
