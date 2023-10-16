// BookTable.js
import React, { useState } from "react";

import EditModal from "./EditModal";

const BookTable = ({ books, page }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleEditClick = (ele) => {
    setIsModalOpen(true);
    setSelectedBook(ele);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Language</th>
            <th>Link</th>
            <th>Year</th>
            <th>Country</th>
            <th>Pages</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          {books.slice((page - 1) * 5, page * 5).map((ele) => (
            <tr key={ele.id}>
              <td>{ele.id}</td>
              <td>{ele.title}</td>
              <td>{ele.author}</td>
              <td>{ele.language}</td>
              <td>{ele.link}</td>
              <td>{ele.year}</td>
              <td>{ele.country}</td>
              <td>{ele.pages}</td>
              <button onClick={() => handleEditClick(ele)}>Edit</button>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <EditModal book={selectedBook} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
};

export default BookTable;
