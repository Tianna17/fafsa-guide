import React from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ page, perPage, setPage, total }) => {
  const lastPage = Math.ceil(total / perPage);

  const handlePrev = () => {
    setPage((page) => page - 1);
  };

  const handleNext = () => {
    setPage((page) => page + 1);
  };

  return (
    <div className='d-flex justify-content-between pagination my-3 '>
      <button
        onClick={handlePrev}
        className='d-flex align-items-center btn'
        disabled={page <= 1}
      >
        <FaChevronLeft /> Prev
      </button>

      <button
        onClick={handleNext}
        className='d-flex align-items-center btn'
        disabled={page >= lastPage}
      >
        Next <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
