import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../config';
import Loading from './Loading';

const SideMenu = () => {
  const [sideMenu, setSideMenu] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/categories?_sort=created_at`);
        setSideMenu(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default SideMenu;
