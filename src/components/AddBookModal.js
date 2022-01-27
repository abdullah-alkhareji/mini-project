import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import bookStore from "../stores/bookStore";
import memberStore from "../stores/memberStore";

const AddBookModal = ({ isOpen, handleClose }) => {
	
	const [newBook, setNewBook] = useState({
		author: "",
		title: "",
		genre: "",
	});

	const handleChange = e =>
		setNewBook({
			...newBook,
			[e.target.name]: e.target.value,
		});

	console.log(newBook);

	const handleSubmit = e => {
		e.preventDefault();
		bookStore.addBook(newBook);
		handleClose();
	};

	return (
		<Modal show={isOpen} onHide={handleClose}>
			<Form onSubmit={handleSubmit}>
				<Modal.Header closeButton>
					<Modal.Title>Add Book</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form.Group className='mt-2'>
						<Form.Label>Author Name</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter author name'
							name='author'
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group className='mt-2'>
						<Form.Label>Title</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter book title'
							name='title'
							onChange={handleChange}
						/>
					</Form.Group>

					<Form.Group className='mt-2'>
						<Form.Label>Genre: </Form.Label>

						<Form.Control
							type='text'
							placeholder='use (,) for multiple genres (example: Crime, Mystery)'
							name='genre'
							onChange={handleChange}
						/>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button
						type='submit'
						name='genre'
						variant='primary'
						onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};

export default AddBookModal;
