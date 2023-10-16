// import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AddBook from "./Formik/AddBook";
import Book from "./components/BookStore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Book />}></Route>s
        <Route path="/AddBook" element={<AddBook />}></Route>
        <Route path="/edit/:id" element={<Book />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
