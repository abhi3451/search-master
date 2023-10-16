import React, { useState } from "react";
import "../Style/Table.css";
import { useSelector } from "react-redux";

import Navbarr from "./Navbar";
import Pagination from "./Pagination";

import Sorting from "./Sorting";

import BookTable from "./Booktable";

const Book = () => {
  const books = useSelector((state) => state.book.filteredBooks);

  const [page, setPage] = useState(1);

  return (
    <>
      <Navbarr setPage={setPage} />
      <div className="table-container">
        <Sorting />
        <BookTable books={books} page={page} />
        <Pagination page={page} books={books} setPage={setPage} />
      </div>
    </>
  );
};

export default Book;
