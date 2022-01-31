import React from "react";
import { useParams, Navigate } from "react-router-dom";
import memberStore from "../stores/memberStore";
import { FaBookmark } from "react-icons/fa";
import bookStore from "../stores/bookStore";

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
			<div className='row align-items-start'>
				<div className='col-lg-4 col-md-12'>
					<div className='card py-2 px-3 mb-3'>
						<h3 className='fw-normal fs-3'>
							Membership: <br />{" "}
							<span className='fw-light fs-5 text-capitalize'>
								<FaBookmark className={`me-2 ${classes[member.membership]}`} />
								{member.membership}
							</span>
						</h3>
					</div>
				</div>
				<div className='col-lg-8 col-md-12'>
					<div className='details-borrowedBy card py-2 px-3 m-0'>
						<h3 className='fw-normal fs-3'>Current Borrowed Books:</h3>
						<ul>
							{member.currentlyBorrowedBooks.map(currBook =>
								bookStore.books.map(
									book =>
										book.id === currBook && (
											<li
												key={book.id}
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
		</div>
	);
};

export default MemberProfile;
