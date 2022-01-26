import React from "react";
import books from "../data/books";

const MemberItem = ({ member }) => {
	return (
		<div className='col-lg-3 col-md-6 col-sm-12'>
			<div className='p-2 border'>
				<h1>
					{member.firstName} {member.lastName}
				</h1>
				<div className='d-flex g-3'>
					<h2>MemberShip:</h2>
					<h3>{member.membership}</h3>
				</div>
			</div>
		</div>
	);
};

export default MemberItem;
