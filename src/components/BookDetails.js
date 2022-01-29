import React, { useState } from "react";
import books from "../data/books";
import { useParams, Navigate } from "react-router-dom";
import members from "../data/members";
import bookStore from "../stores/bookStore";
import { Button } from "react-bootstrap";
import AddBorrowerModal from "./AddBorrowerModal";
import { observer } from "mobx-react";

const BookDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  const { slug } = useParams();
  const book = bookStore.books.find((book) => book.slug === slug);
  if (!book) return <Navigate to="/" />;

  return (
    <div className="details">
      <h1 className="page-title">{book.title}</h1>
      <hr />
      <h3 className="fw-light">
        By: <span className="fw-lighter">{book.author}</span>
      </h3>
      <h3 className="fw-light">
        Genre: <span className="fw-lighter">{book.genre.join(", ")}</span>
      </h3>
      <div className="details-borrowedBy">
        <h3 className="fw-light">Borrowed By:</h3>
        <ul>
          {book.borrowedBy.map((currMember) =>
            members.map(
              (member) =>
                member.id === currMember && (
                  <li className="fw-light">
                    {member.id} - {member.firstName} {member.lastName}
                  </li>
                )
            )
          )}
        </ul>
        {book.available && (
          <>
            <Button variant="outline-dark" onClick={setIsOpen}>
              Add New Book
            </Button>
            <AddBorrowerModal
              isOpen={isOpen}
              handleClose={handleClose}
              book={book}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default observer(BookDetails);
