import React from "react";
import "../Style/Pagination.css";
const Pagination = ({ page, books, setPage }) => {
  const totalPage = Math.ceil(books.length / 5);

  return (
    <div className="pagin">
      <span>
        {page} of {totalPage}
      </span>
      <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
        prev
      </button>
      <span className="pageArray">
        {[...Array(totalPage)].map((_, i) => (
          <div
            key={i}
            onClick={() => {
              {
                if (i + 1 !== page) {
                  setPage(i + 1);
                }
              }
            }}
          >
            {i + 1}
          </div>
        ))}
      </span>

      <button onClick={() => setPage(page + 1)} disabled={page == totalPage}>
        next
      </button>
    </div>
  );
};

export default Pagination;
