import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import memberStore from "../stores/memberStore";

const AddMemberModal = ({ isOpen, handleClose }) => {
  const [newMember, setNewMember] = useState({
    firstName: "",
    lastName: "",
    membership: "",
  });

  const handleChange = (e) =>
    setNewMember({ ...newMember, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    memberStore.addMember(newMember);
    handleClose();
  };

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Add Member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              name="firstName"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              name="lastName"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Membership</Form.Label>
            <Form.Select name="membership" onChange={handleChange}>
              <option selected disabled>
                Choose a membership
              </option>
              <option value="silver">silver</option>
              <option value="gold">gold</option>
              <option value="platinum">platinum</option>
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddMemberModal;
