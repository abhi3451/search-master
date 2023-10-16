import React, { useEffect, useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";

import BookContext from "./BookContext";
import {
  getAllBooks,
  handleAddItem,
  handleEdit,
} from "./reducers/booksReducers";

const BookProvider = (props) => {
  const dispatch = useDispatch();
  const addBook = async (values) => {
    try {
      const res = await axios.post(
        `http://68.178.162.203:8080/application-test-v1.1/books`,
        values
      );
      if (res.status) {
        dispatch(handleAddItem(values));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const editBook = async (ele) => {
    try {
      const res = await axios.put(
        `http://68.178.162.203:8080/application-test-v1.1/books/${ele.id}`,
        ele
      );
      if (res.status) {
        dispatch(handleEdit({ val: true, item: ele }));
        fetchBooks();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBooks = async () => {
    try {
      const res = await axios.get(
        "http://68.178.162.203:8080/application-test-v1.1/books"
      );
      if (res.status) {
        const bookData = res.data.data;
        dispatch(getAllBooks(bookData));
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const contextValue = {
    fetchBooks: fetchBooks,
    editBook: editBook,

    addBook: addBook,
  };
  useEffect(() => {
    fetchBooks();
  }, [dispatch]);

  return (
    <>
      <BookContext.Provider value={contextValue}>
        {props.children}
      </BookContext.Provider>
    </>
  );
};

export default BookProvider;
