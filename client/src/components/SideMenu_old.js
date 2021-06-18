import React from 'react';

import { Link } from 'react-router-dom';

const SideMenu = ({ sideMenu }) => {
  return (
    <>
      <div className='side-bar border p-4 rounded bg-light w-100 '>
        <h3 className=' h4 font-weight-bold mb-4'>Quick Links</h3>
        <nav className='nav flex-column m-0 p-0'>
          {sideMenu?.map((item) => (
            <Link
              to={`/guide/${item?.slug}`}
              key={item.id}
              className='nav-link h6'
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default SideMenu;
