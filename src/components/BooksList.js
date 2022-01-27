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

	const search = e => bookStore.setQuery(e.target.value);

	const booksList = bookStore.books
		.filter(
			book =>
				book.title.toLowerCase().includes(bookStore.query.toLowerCase()) ||
				book.genre.find(gen =>
					gen.toLowerCase().includes(bookStore.query.toLowerCase())
				)
		)
		.map(book => (
			<Link key={book.id} to={`/books/${book.slug}`}>
				<li>
					<h4 className='m-0'>{book.title}</h4>
					<p className='fs-xs fw-lighter m-0'>{book.genre.join(", ")}</p>
				</li>
			</Link>
		));
	return (
		<div className='list'>
			<div className='page-title w-100 d-flex justify-content-between align-items-center mb-3'>
				<h1>Books</h1>
				<Button variant='outline-dark' onClick={handleOpen}>
					Add New Book
				</Button>
			</div>
			<hr />
			<div className='d-flex gap-3'>
				<input
					type='search'
					className='form-control ms-auto mb-3 rounded'
					placeholder='Search...'
					aria-label='Search'
					aria-describedby='search-addon'
					onChange={search}
				/>
			</div>
			<ul>{booksList}</ul>
			<AddBookModal isOpen={isOpen} handleClose={handleClose} />
		</div>
	);
};

export default observer(BooksList);
