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
	const genFilter = ev => bookStore.setFilterQuery(ev.target.value);

	const booksList = bookStore.books
		.filter(
			book =>
				book.title
					.toLowerCase()
					.includes(bookStore.query.toLowerCase().trim()) &&
				book.genre.find(gen =>
					gen.toLowerCase().includes(bookStore.filterQuery.toLowerCase())
				)
		)
		.map(book => (
			<Link
				key={book.id}
				to={`/books/${book.slug}`}
				className='col-lg-6 col-md-12'>
				<li className='card position-relative'>
					<div className=''>
						<p className='fs-4 m-0 text-nowrap overflow-hidden'>{book.title}</p>
						<p className='fs-6 fw-lighter m-0'>{book.genre.join(", ")}</p>
					</div>
					<span
						className={`availabel-badge badge rounded ${
							book.available
								? "bg-warning text-dark"
								: "bg-secondary text-white"
						}`}>
						{book.available ? "Available" : "Not Available"}
					</span>
				</li>
			</Link>
		));

	console.log(bookStore.books);
	return (
		<div className='list'>
			<div className='page-title w-100 d-flex justify-content-between align-items-center mb-3'>
				<h1>Books</h1>
				<Button variant='outline-dark' onClick={handleOpen}>
					Add New Book
				</Button>
			</div>
			<hr />
			<div className='row mb-3'>
				<div className='col-lg-8 col-md-12'>
					<input
						type='search'
						className='form-control rounded'
						placeholder='Search...'
						aria-label='Search'
						aria-describedby='search-addon'
						onChange={search}
					/>
				</div>
				<div className='col-lg-4 col-md-12'>
					<select className='form-select rounded' onChange={genFilter}>
						<option value=''>All Genres</option>
						{bookStore.gen.map(genre => (
							<option key={genre} value={genre}>
								{genre}
							</option>
						))}
					</select>
				</div>
			</div>
			<ul className='row'>{booksList}</ul>
			<AddBookModal isOpen={isOpen} handleClose={handleClose} />
		</div>
	);
};

export default observer(BooksList);
