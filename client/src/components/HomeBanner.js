import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../images/banner.svg';

const HomeBanner = () => {
  return (
    <section className='banner py-5 bg-light'>
      <div className='container'>
        <div className='row py-5'>
          <div className='col-md-7'>
            <div className='page-title '>
              <h3 className='text-uppercase fs-6 fw-bold'>
                Welcome to fafsa guide
              </h3>
              <h1 className='fs-1 lh-base fw-bold'>
                The most convenient guide to help with the FAFSA Application
              </h1>
              <h4 className='mb-5 fw-lighter fs-5'>
                Get started with your FAFSA form
              </h4>
              <Link
                to='/guide/step-one-student-information'
                className='btn btn-primary text-uppercase btn-home shadow'
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className='col-md-5'>
            <img
              src={Banner}
              alt=''
              width='100%'
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
