import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavItem = ({ label, to }) => {
  // const navRef = useRef(null);
  // const ref = createRef();
  const [active, setActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === to) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location.pathname, to]);

  return (
    <li className='nav-item  d-flex justify-content-center flex-column '>
      <Link to={to} className='nav-link p-3 '>
        {label}
      </Link>
      {active && <span className='active'></span>}
    </li>
  );
};

export default NavItem;
