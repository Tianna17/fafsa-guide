import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <p className='footer'>
          &copy; Copyright {new Date().getFullYear()} FAFSA Guide
        </p>
      </div>
    </footer>
  );
};

export default Footer;
