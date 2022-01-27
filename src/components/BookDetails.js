import React from "react";
import books from "../data/books";
import { useParams, Navigate } from "react-router-dom";
import members from "../data/members";

const BookDetails = () => {
  const { slug } = useParams();
  const book = books.find((book) => book.slug === slug);
  if (!book) return <Navigate to="/" />;

  return (
    <div>
      <h1 className="page-title">{book.title}</h1>
      <h3 className="text-primary">{book.author}</h3>
      <h3>{book.genre.join(" and ")}</h3>
      <div>
        <h3>Borrowed By:</h3>
        <ul>
          {book.borrowedBy.map((currMember) =>
            members.map(
              (member) =>
                member.id === currMember && <li>{member.firstName}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default BookDetails;
