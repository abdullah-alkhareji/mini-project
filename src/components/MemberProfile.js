import React from "react";
import { useParams, Navigate } from "react-router-dom";
import books from "../data/books";
import memberStore from "../stores/memberStore";
import { FaBookmark } from "react-icons/fa";

const MemberProfile = () => {
	const { slug } = useParams();
	const member = memberStore.members.find(member => member.slug === slug);
	if (!member) return <Navigate to='/' />;

	const classes = {
		silver: "text-secondary",
		gold: "text-warning",
		platinum: "text-primary",
	};

	return (
		<div className='details'>
			<h1 className='page-title'>
				{member.firstName} {member.lastName}
			</h1>
			<hr />
			<div className='d-flex align-items-start gap-3'>
				<div className='card py-2 px-3 w-25'>
					<h3 className='fw-normal fs-3'>
						Membership: <br />{" "}
						<span className='fw-light fs-5 text-capitalize'>
							<FaBookmark className={`me-2 ${classes[member.membership]}`} />
							{member.membership}
						</span>
					</h3>
				</div>
				<div className='details-borrowedBy w-75 card py-2 px-3 m-0'>
					<h3 className='fw-normal fs-3'>Current Borrowed Books:</h3>
					<ul>
						{member.currentlyBorrowedBooks.map(currBook =>
							books.map(
								book =>
									book.id === currBook && (
										<li
											key={member.id}
											className='fw-normal fs-5 py-1 px-2 bg-light mt-1 border rounded'>
											{book.title}
										</li>
									)
							)
						)}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MemberProfile;
