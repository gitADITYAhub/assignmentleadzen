import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      <ul>
        {currentPage !== 1 && (
          <li>
            <button className=" direction" onClick={() => paginate(currentPage - 1)}>
              &lt;
            </button>
          </li>
        )}

        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              onClick={() => paginate(number)}
              className={`page-link ${currentPage === number ? 'page-link-active' : ''}`}
            >
              {number}
            </button>
          </li>
        ))}
        {currentPage !== pageNumbers.length && (
          <li>
            <button className=" direction" onClick={() => paginate(currentPage + 1)}>
              &gt;
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;