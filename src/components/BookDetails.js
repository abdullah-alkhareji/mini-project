import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import members from "../data/members";
import bookStore from "../stores/bookStore";
import { Button } from "react-bootstrap";
import AddBorrowerModal from "./AddBorrowerModal";
import { observer } from "mobx-react";
import memberStore from "../stores/memberStore";

const BookDetails = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClose = () => setIsOpen(false);
	const handleOpen = () => setIsOpen(true);
	const { slug } = useParams();
	const book = bookStore.books.find(book => book.slug === slug);
	if (!book) return <Navigate to='/' />;

	const bookId = book.id;
	// console.log(
	//   memberStore.members
	//     .find((member) => member.currentlyBorrowedBooks.includes(bookId))
	//     .currentlyBorrowedBooks.indexOf(bookId)
	// );
	const handleReturn = () => {
		memberStore.setReturn(bookId);
		bookStore.setReturn(bookId);
	};

	return (
		<div className='details'>
			<div className='d-flex justify-content-between align-items-center'>
				<h1 className='page-title'>{book.title}</h1>
				{book.available ? (
					<>
						<Button variant='outline-dark' onClick={handleOpen}>
							Borrow
						</Button>
						<AddBorrowerModal
							isOpen={isOpen}
							handleClose={handleClose}
							book={book}
						/>
					</>
				) : (
					<>
						<Button variant='outline-dark' onClick={handleReturn}>
							Return
						</Button>
					</>
				)}
			</div>
			<hr />
			<div className='row align-items-start'>
				<div className='col-lg-4 col-md-12'>
					<div className='card py-2 px-3 mb-3'>
						<h3 className='fw-normal fs-3'>
							Author: <br />
							<span className='fw-lighter fs-5 text-capitalize'>
								{book.author}
							</span>
						</h3>
					</div>
					<div className='card py-2 px-3 mb-3'>
						<h3 className='fw-normal fs-3'>
							Genre: <br />
							<span className='fw-lighter fs-5 text-capitalize'>
								{book.genre.join(", ")}
							</span>
						</h3>
					</div>
				</div>
				<div className='col-lg-8 col-md-12'>
					<div className='details-borrowedBy card py-2 px-3 m-0'>
						<h3 className='fw-normal fs-3'>Borrowed By:</h3>
						<ul>
							{book.borrowedBy.map(currMember =>
								members.map(
									member =>
										member.id === currMember && (
											<li
												key={member.id}
												className='fw-normal fs-5 py-1 px-2 bg-light mt-1 border rounded'>
												{member.firstName} {member.lastName}
											</li>
										)
								)
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default observer(BookDetails);
