import React from "react";
import { Link } from "react-router-dom";
import bookStore from "../stores/bookStore";
import { observer } from "mobx-react";

const BooksList = () => {
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
			<h1 className='page-title'>Books</h1>
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
		</div>
	);
};

export default observer(BooksList);
