import React, { useEffect, useState } from 'react';
import { FaAngleRight, FaAngleDoubleRight, FaAngleLeft, FaAngleDoubleLeft } from 'react-icons/fa';
import './Pagination.css';

function Pagination({ posts, currentPage, setCurrentPage, setRecordsPerPage }) {
  const [selectedRecordsPerPage, setSelectedRecordsPerPage] = useState(10);
  const totalPages = Math.ceil(posts.length / selectedRecordsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const coupons = [10, 20, 25, 50];

  useEffect(() => {
    console.log('Current Page Changed:', currentPage);
  }, [currentPage]);

  const handlePageClick = (action) => {
    switch (action) {
      case 'start': setCurrentPage(1); break;
      case 'prev': if (currentPage > 1) setCurrentPage(prev => prev - 1); break;
      case 'next': if (currentPage < totalPages) setCurrentPage(prev => prev + 1); break;
      case 'end': setCurrentPage(totalPages); break;
      default: if (coupons.includes(action)) setCurrentPage(action); break;
    }
  };

  const handleRecordsPerPageChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setSelectedRecordsPerPage(value);
    setRecordsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <div className="container pagination d-flex justify-content-between" style={{ gap: "5px" }}>
      <div className="records-per-page-dropdown">
        <select value={selectedRecordsPerPage} onChange={handleRecordsPerPageChange}>
          {coupons.map(coupon => <option key={coupon} value={coupon}>{coupon}</option>)}
        </select>
        <label>Coupons per page</label>
      </div>
      <ul className="pagination" style={{ marginRight: "40px" }}>
        <Button onClick={() => handlePageClick('start')} disabled={currentPage === 1}><FaAngleDoubleLeft /></Button>
        <Button onClick={() => handlePageClick('prev')} disabled={currentPage === 1}><FaAngleLeft /></Button>
        {pageNumbers.map(number => (
          <Button key={number} active={currentPage === number} onClick={() => setCurrentPage(number)}>
            {number}
          </Button>
        ))}
        <Button onClick={() => handlePageClick('next')} disabled={currentPage === totalPages}><FaAngleRight /></Button>
        <Button onClick={() => handlePageClick('end')} disabled={currentPage === totalPages}><FaAngleDoubleRight /></Button>
      </ul>
    </div>
  );
}

const Button = ({ children, onClick, disabled, active }) => (
  <li className="page-item">
    <button onClick={onClick} disabled={disabled} className={active ? 'active' : ''}>
      {children}
    </button>
  </li>
);

export default Pagination;
