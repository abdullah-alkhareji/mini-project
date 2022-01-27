import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import bookStore from "../stores/bookStore";
import memberStore from "../stores/memberStore";

const AddBookModal = ({ isOpen, handleClose }) => {
	const [newBook, setNewBook] = useState({
		author: "",
		title: "",
		genre: [],
	});

	// const [check, setCheck] = useState([]);
	// const handleCheck = ev => setCheck([...check, ev.target.value]);
	// console.log(check);

	let gen = [];
	const handleCheck = ev => {
		if (gen.includes(ev.target.value)) {
			console.log(gen);
			return gen;
		} else {
			console.log(gen);
			return gen.push(ev.target.value);
		}
	};
	const handleChange = e =>
		setNewBook({ ...newBook, [e.target.name]: e.target.value });

	const handleSubmit = e => {
		e.preventDefault();
		bookStore.addBook(newBook);
		handleClose();
	};

	// console.log(newBook);

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

						<Form.Check
							label='1'
							name='genre'
							type='checkbox'
							value='two'
							onChange={handleCheck}
						/>

						<Form.Check
							label='2'
							name='genre'
							type='checkbox'
							value='one'
							onChange={handleCheck}
						/>
					</Form.Group>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button type='submit' variant='primary' onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Form>
		</Modal>
	);
};

export default AddBookModal;
