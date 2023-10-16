import React, { useContext, useState } from "react";
import "../Style/Modal.css";

import BookContext from "../store/BookContext";

const EditModal = ({ book, setIsModalOpen }) => {
  const [editedBook, setEditedBook] = useState(book);
  const { editBook } = useContext(BookContext);

  const inputFields = [
    { type: "number", name: "id", label: "ID" },
    { type: "text", name: "title", label: "Title" },
    { type: "text", name: "author", label: "Author" },
    { type: "text", name: "language", label: "Language" },
    { type: "text", name: "link", label: "Link" },
    { type: "text", name: "year", label: "Year" },
    { type: "text", name: "country", label: "Country" },
    { type: "number", name: "pages", label: "Page" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook({ ...editedBook, [name]: value });
  };

  const handleSave = () => {
    editBook(editedBook);
    setIsModalOpen(false);
  };
  const handleCancle = () => {
    editBook(editedBook);
    setIsModalOpen(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Book</h2>
        {inputFields.map((field) => (
          <input
            type={field.type}
            name={field.name}
            value={editedBook[field.name]}
            onChange={handleInputChange}
            key={field.name}
            placeholder={field.label}
          />
        ))}
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancle}>Cancel</button>
      </div>
    </div>
  );
};

export default EditModal;
