import React, { useState } from "react";
import { Link } from "react-router-dom";
import bookStore from "../stores/bookStore";
import { observer } from "mobx-react";
import { Button } from "react-bootstrap";
import AddBookModal from "./AddBookModal";

const BooksList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const search = (e) => bookStore.setQuery(e.target.value);

  const booksList = bookStore.books
    .filter(
      (book) =>
        book.title.toLowerCase().includes(bookStore.query.toLowerCase()) ||
        book.genre.find((gen) =>
          gen.toLowerCase().includes(bookStore.query.toLowerCase())
        )
    )
    .map((book) => (
      <Link
        key={book.id}
        to={`/books/${book.slug}`}
        className="col-lg-6 col-md-12"
      >
        <li
          className={`${
            book.available ? "bg-success" : "bg-danger"
          } bg-opacity-50 card `}
        >
          <div>
            <p className="fs-4 m-0 text-nowrap overflow-hidden">{book.title}</p>
            <p className="fs-6 fw-lighter m-0">{book.genre.join(", ")}</p>
          </div>
        </li>
      </Link>
    ));
  return (
    <div className="list">
      <div className="page-title w-100 d-flex justify-content-between align-items-center mb-3">
        <h1>Books</h1>
        <Button variant="outline-dark" onClick={handleOpen}>
          Add New Book
        </Button>
      </div>
      <hr />
      <div className="d-flex gap-3">
        <input
          type="search"
          className="form-control ms-auto mb-3 rounded"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="search-addon"
          onChange={search}
        />
      </div>
      <ul className="row">{booksList}</ul>
      <AddBookModal isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
};

export default observer(BooksList);
