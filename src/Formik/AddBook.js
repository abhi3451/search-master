import React, { useContext, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import validationSchema from "./Schema";
import "../Style/Form.css";

import Navbarr from "../components/Navbar";
import BookContext from "../store/BookContext";

const initialValues = {
  author: "",
  country: "",
  language: "",
  link: "",
  pages: "",
  title: "",
  year: "",
  id: "",
};

const AddBook = () => {
  const { addBook } = useContext(BookContext);

  const handleSubmit = async (values, actions) => {
    addBook(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <>
      <Navbarr />
      <div className="form-container">
        <h1>Add Book</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <div className="input-field">
                <label htmlFor="author">Author</label>
                <Field type="text" name="author" />
                <ErrorMessage name="author" component="div" className="error" />
              </div>

              <div className="input-field">
                <label htmlFor="country">Country</label>
                <Field type="text" name="country" />
                <ErrorMessage
                  name="country"
                  component="div"
                  className="error"
                />
              </div>

              <div className="input-field">
                <label htmlFor="language">Language</label>
                <Field type="text" name="language" />
                <ErrorMessage
                  name="language"
                  component="div"
                  className="error"
                />
              </div>

              <div className="input-field">
                <label htmlFor="link">Link</label>
                <Field type="text" name="link" />
                <ErrorMessage name="link" component="div" className="error" />
              </div>

              <div className="input-field">
                <label htmlFor="pages">Pages</label>
                <Field type="number" name="pages" />
                <ErrorMessage name="pages" component="div" className="error" />
              </div>

              <div className="input-field">
                <label htmlFor="title">Title</label>
                <Field type="text" name="title" />
                <ErrorMessage name="title" component="div" className="error" />
              </div>

              <div className="input-field">
                <label htmlFor="year">Year</label>
                <Field type="number" name="year" />
                <ErrorMessage name="year" component="div" className="error" />
              </div>

              <div className="input-field">
                <label htmlFor="id">ID</label>
                <Field type="text" name="id" />
                <ErrorMessage name="id" component="div" className="error" />
              </div>

              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddBook;
