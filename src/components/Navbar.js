import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchFilter } from "../store/reducers/booksReducers";
import "../Style/Navbar.css";

function Navbarr({ setPage }) {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const [ismenuopen, setIsMenuOpen] = useState(false); // State to control the menu

  const handleMenuToggle = () => {
    setIsMenuOpen(!ismenuopen);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const query = inputRef.current.value;
    dispatch(searchFilter({ searchTerm: query }));
    setPage(1);
  };

  return (
    <>
      <nav className={`nav ${ismenuopen ? "open" : ""}`}>
        <div className="menu-icon" onClick={handleMenuToggle}>
          ☰
        </div>
        <div className="search-container">
          <form>
            <input type="text" ref={inputRef} placeholder="Search..." />
            <button onClick={handleClick}>search</button>
          </form>
        </div>
        {ismenuopen ? (
          <div className="menu">
            <NavLink to="/" className="nav-link">
              <span>STORE</span>
            </NavLink>
            <NavLink to="/AddBook" className="nav-link">
              <span>Add Book</span>
            </NavLink>
          </div>
        ) : null}
      </nav>
    </>
  );
}

export default Navbarr;
