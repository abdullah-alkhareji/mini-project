import React from "react";
import { Link } from "react-router-dom";
import members from "../data/members";
import MemberItem from "./MemberItem";

const MembersList = () => {
	return (
		<div className='member-list'>
			<h1 className='page-title'>Members</h1>
			<ul>
				{members.map(member => (
					// <MemberItem key={member.id} member={member} />
					<li>
						<Link to={`/members/${member.slug}`}>
							{member.firstName} {member.lastName}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MembersList;
