import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import bookStore from "../stores/bookStore";
import memberStore from "../stores/memberStore";

const AddBorrowerModal = ({ isOpen, handleClose, book }) => {
  const [borrower, setBorrower] = useState("");
  const [member, setMember] = useState();

  const handleChange = (e) => {
    setBorrower(e.target.value);
    const copyBorrower = e.target.value;
    setMember(
      memberStore.members.find((member) => member.id === +copyBorrower)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      member.membership === "silver" &&
      member.currentlyBorrowedBooks.length < 2 &&
      member.currentlyBorrowedBooks.includes(book.id) === false
    ) {
      bookStore.setBorrow({ bookId: book.id, memberId: borrower });
      memberStore.setBorrow({ bookId: book.id, memberId: borrower });
      handleClose();
    } else if (
      member.membership === "gold" &&
      member.currentlyBorrowedBooks.length < 3 &&
      member.currentlyBorrowedBooks.includes(book.id) === false
    ) {
      bookStore.setBorrow({ bookId: book.id, memberId: borrower });
      memberStore.setBorrow({ bookId: book.id, memberId: borrower });
      handleClose();
    } else if (
      member.membership === "platinum" &&
      member.currentlyBorrowedBooks.length < 5 &&
      member.currentlyBorrowedBooks.includes(book.id) === false
    ) {
      bookStore.setBorrow({ bookId: book.id, memberId: borrower });
      memberStore.setBorrow({ bookId: book.id, memberId: borrower });
      handleClose();
    } else {
      handleClose();
      alert("he cannot boorow this book");
    }
  };

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Borrow</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Borrower Name</Form.Label>
            <Form.Select onChange={handleChange}>
              <option selected disabled>
                Choose a member
              </option>
              {memberStore.members
                .filter(
                  (member) => !member.currentlyBorrowedBooks.includes(book.id)
                )
                .map((member) => (
                  <option key={member.id} value={member.id}>
                    {member.firstName} {member.lastName}
                  </option>
                ))}
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="warning" onClick={handleClose}>
            Borrow
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddBorrowerModal;
