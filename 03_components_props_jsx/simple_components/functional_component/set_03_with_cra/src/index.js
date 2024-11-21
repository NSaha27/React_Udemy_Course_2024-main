import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const bookList = [
  {
    isbn: "9788190458900",
    name: "English Is Easy",
    author: "Chetananand Singh",
    drp: 2012
  },
  {
    isbn: "9788173711466",
    name: "Wings Of Fire, An Autobiography",
    author: "Dr. APJ Abdul Kalam",
    drp: 2017
  },
  {
    isbn: "9788742053109",
    name: "Vivekananda, His Call To The Nation",
    author: "Ramkrishna Mission Presss",
    drp: 2019
  }
];

function DispBooks(props){
  return <div id="book-list">
    <h1 className="title">Book List</h1>
    <div className="books">
      <table>
        <tr>
          <th>ID</th>
          <th>ISBN</th>
          <th>NAME</th>
          <th>AUTHOR</th>
          <th>DATE OF PURCHASE OR REPRINT</th>
        </tr>
        {
          props.books.map((book, indx, arr) => {
            return <tr key={indx}>
              <td>{indx + 1}</td>
              <td>{book.isbn}</td>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.drp}</td>
            </tr>
          })
        }
      </table>
    </div>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
  <DispBooks books={bookList} />
</React.StrictMode>
);

