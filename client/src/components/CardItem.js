import React from 'react';
import { Link } from 'react-router-dom';
const CardItem = ({ item }) => {
  const { id, slug, name, description } = item;

  const bgColors = {
    1: 'red',
    2: '#059862',
    3: '#90e0ef',
    4: '#0070C8',
    5: '#9933ff',
    6: '#ff3399',
  };

  return (
    <div className='col-sm-12 col-md-6 col-lg-4'>
      <Link to={`/guide/${slug}`}>
        <div
          style={{ borderLeft: `10px solid ${bgColors[id]}` }}
          className='card shadow mb-5 p-2 text-center'
        >
          <div className='card-body '>
            <h2 className='card-title fs-5 fw-bold'>{name}</h2>
            <p className='card-text'>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardItem;
