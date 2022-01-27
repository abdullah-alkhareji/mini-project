import React, { useState } from "react";
import books from "../data/books";
import { Link } from "react-router-dom";

const BooksList = () => {
  // const [query, setQuery] = useState("");
  //const [genre, setGenre] = useState("");

  //const booksList = books
  //.filter(
  //(book) =>
  //book.title.toLowerCase().includes(query.toLowerCase()) &&
  //book.genre.includes(genre)
  //)
  //.map((book) => book.title);
  return (
    <div className="member-list">
      {/* <input type="search" onChange={(e) => setQuery(e.target.value)} /> */}
      {/* <input type="search" onChange={(e) => setGenre(e.target.value)} /> */}
      <h1 className="page-title">Books</h1>
      <ul>
        {books.map((book) => (
          <li>
            <Link to={`/books/${book.slug}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
