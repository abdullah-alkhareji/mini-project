import React from "react";
import books from "../data/books";
import { useParams, Navigate } from "react-router-dom";
import members from "../data/members";

const BookDetails = () => {
	const { slug } = useParams();
	const book = books.find(book => book.slug === slug);
	if (!book) return <Navigate to='/' />;

	return (
		<div className='details'>
			<h1 className='page-title'>{book.title}</h1>
			<hr />
			<h3 className='fw-light'>
				By: <span className='fw-lighter'>{book.author}</span>
			</h3>
			<h3 className='fw-light'>
				Genre: <span className='fw-lighter'>{book.genre.join(" and ")}</span>
			</h3>
			<div className='details-borrowedBy'>
				<h3 className='fw-light'>Borrowed By:</h3>
				<ul>
					{book.borrowedBy.map(currMember =>
						members.map(
							member =>
								member.id === currMember && (
									<li className='fw-light'>
										{member.id} - {member.firstName} {member.lastName}
									</li>
								)
						)
					)}
				</ul>
			</div>
		</div>
	);
};

export default BookDetails;
