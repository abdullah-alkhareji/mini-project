import React from "react";
import { useParams, Navigate } from "react-router-dom";
import books from "../data/books";
import members from "../data/members";

const MemberProfile = () => {
	const { slug } = useParams();
	const member = members.find(member => member.slug === slug);
	if (!member) return <Navigate to='/' />;

	return (
		<div>
			<h1 className='page-title'>
				{member.firstName} {member.lastName}
			</h1>
			<h5 className='text-primary'>{member.membership}</h5>

			<div>
				<h3>Current Borrowed Books:</h3>
				<ul>
					{member.currentlyBorrowedBooks.map(currBook =>
						books.map(book => book.id === currBook && <li>{book.title}</li>)
					)}
				</ul>
			</div>
		</div>
	);
};

export default MemberProfile;
