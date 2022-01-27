import React from "react";
import { Link } from "react-router-dom";
import members from "../data/members";

const MembersList = () => {
	return (
		<div className='list'>
			<div className='page-title'>
				<h1>Members</h1>
			</div>
			<ul>
				{members.map(member => (
					// <MemberItem key={member.id} member={member} />
					<Link key={member.id} to={`/members/${member.slug}`}>
						<li>
							{member.firstName} {member.lastName}
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
};

export default MembersList;
