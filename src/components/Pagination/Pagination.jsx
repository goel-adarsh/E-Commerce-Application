import React from 'react';
import './Pagination.css';

export default function Pagination({
  totalProducts,
  productsPerPage,
  setCurrentPage,
  currentPage,
}) {
  let pages = [];
  for (let i = 0; i < Math.ceil(totalProducts / productsPerPage); i++) {
    pages.push(i + 1);
  }
  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? 'active' : ''}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
