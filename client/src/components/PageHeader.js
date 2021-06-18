import React from 'react';

const PageHeader = ({ title }) => {
  return (
    <div className='page-header bg-light py-5 mb-5 border-bottom position-relative'>
      <div className='container'>
        <h2 className='fs-1 fw-bold'>{title}</h2>
      </div>
    </div>
  );
};

export default PageHeader;
