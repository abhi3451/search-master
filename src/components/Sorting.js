import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { sortingItem } from "../store/reducers/booksReducers";
import "../Style/Sorting.css";

const Sorting = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    dispatch(sortingItem({ val: selectedValue }));
  };

  return (
    <div className="sorting-container">
      <select className="sorting-select" onChange={handleChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default Sorting;
