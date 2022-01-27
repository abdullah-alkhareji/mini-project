import React from "react";
import { useParams, Navigate } from "react-router-dom";
import books from "../data/books";
import memberStore from "../stores/memberStore";

const MemberProfile = () => {
	const { slug } = useParams();
	const member = memberStore.members.find(member => member.slug === slug);
	if (!member) return <Navigate to='/' />;

	return (
		<div className='details'>
			<h1 className='page-title'>
				{member.firstName} {member.lastName}
			</h1>
			<hr />
			<h3 className='fw-light'>
				Membership: <span className='fw-lighter'>{member.membership}</span>
			</h3>
			<div className='details-borrowedBy'>
				<h3 className='fw-light'>Current Borrowed Books:</h3>
				<ul>
					{member.currentlyBorrowedBooks.map(currBook =>
						books.map(
							book =>
								book.id === currBook && (
									<li className='fw-light'>{book.title}</li>
								)
						)
					)}
				</ul>
			</div>
		</div>
	);
};

export default MemberProfile;
