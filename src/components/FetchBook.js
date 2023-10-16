import React from "react";

const FetchBook = ({ ele }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr key={ele.id}>
            <td>{ele.id}</td>
            <td>{ele.title}</td>
            <td>{ele.author}</td>
            <td>{ele.language}</td>
            <td>{ele.link}</td>
            <td>{ele.year}</td>
            <td>{ele.country}</td>
            <td>{ele.pages}</td>
            <button onClick={() => Edit(ele)}>Edit</button>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FetchBook;
