import React, { useEffect, useState } from 'react';
import { FaAngleRight, FaAngleDoubleRight, FaAngleLeft, FaAngleDoubleLeft } from 'react-icons/fa';
import './Pagination.css';

function Pagination({ posts, currentPage, recordsPerPage, setCurrentPage, setRecordsPerPage }) {
  const [selectedRecordsPerPage, setSelectedRecordsPerPage] = useState(recordsPerPage);

  const pageNumbers = [];
  const totalPages = Math.ceil(posts.length / selectedRecordsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Coupon values
  const coupons = [10, 20, 25, 50];

  // Ensure the component re-renders when currentPage changes
  useEffect(() => {
    console.log('Current Page Changed:', currentPage);
  }, [currentPage]);

  const handlePageClick = (action) => {
    switch (action) {
      case 'start':
        setCurrentPage(1);
        break;
      case 'prev':
        if (currentPage > 1) {
          setCurrentPage(prev => prev - 1);
        }
        break;
      case 'next':
        if (currentPage < totalPages) {
          setCurrentPage(prev => prev + 1);
        }
        break;
      case 'end':
        setCurrentPage(totalPages);
        break;
      default:
        // Check if the action is a coupon value
        if (coupons.includes(action)) {
          setCurrentPage(action);
        }
        break;
    }
  };

  const handleRecordsPerPageChange = (e) => {
    const selectedValue = parseInt(e.target.value, 10); // Parse the value to an integer
    
    setSelectedRecordsPerPage(selectedValue); // Update the selected records per page
    setRecordsPerPage(selectedValue); // Update the records per page
    setCurrentPage(1); // Reset to the first page when changing records per page
};


  return (
    <div className="container d-flex justify-content-between"style={{gap:"5px"}}>
      <div className="records-per-page-dropdown" style={{ zIndex: 9999 }}>
        
        <select
          id="recordsPerPage"
          value={selectedRecordsPerPage}
          onChange={handleRecordsPerPageChange}
        >
          {coupons.map((coupon) => (
            <option key={coupon} value={coupon}>
              {coupon}
            </option>
          ))}
        </select>
        <label htmlFor="recordsPerPage">Coupons per page</label>
      </div>
      <ul className="pagination" style={{marginRight:"40px"}}>
        <li className="page-item" style={{ zIndex: 9999 }}>
          <button onClick={() => handlePageClick('start')} disabled={currentPage === 1}>
            <FaAngleDoubleLeft />
          </button>
        </li>
        <li className="page-item" style={{ zIndex: 9999 }}>
          <button onClick={() => handlePageClick('prev')} disabled={currentPage === 1}>
            <FaAngleLeft />
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item" style={{ zIndex: 9999 }}>
            <button
              onClick={() => {
                console.log(`Button clicked for page: ${number}`);
                setCurrentPage(number);
              }}
              className={`page-link ${currentPage === number ? 'active' : ''}`}
              style={{ backgroundColor: currentPage === number ? "#FE7720" : "white" }}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="page-item" style={{ zIndex: 9999 }}>
          <button onClick={() => handlePageClick('next')} disabled={currentPage === totalPages}>
            <FaAngleRight />
          </button>
        </li>
        <li className="page-item" style={{ zIndex: 9999 }}>
          <button onClick={() => handlePageClick('end')} disabled={currentPage === totalPages}>
            <FaAngleDoubleRight />
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
