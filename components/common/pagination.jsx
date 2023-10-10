import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange, paginationSpace }) => {
    const renderPageNumbers = () => {
      const pageNumbers = [];
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
      return pageNumbers.map((pageNumber) => (
        <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
          <button className="page-link" onClick={() => onPageChange(pageNumber)}>
            {pageNumber}
          </button>
        </li>
      ));
    };
  
    return (
      <div className={`bd-basic__pagination ${paginationSpace ? paginationSpace : 'mt-30 mb-20'}`} data-wow-delay=".3s">
        <nav>
          <ul>
            {renderPageNumbers()}
            <li className="page-item">
              <button
                className={`page-link ${currentPage === totalPages ? 'disabled' : ''}`}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
              >
                <i className="fa-regular fa-angle-right"></i>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default Pagination;
  