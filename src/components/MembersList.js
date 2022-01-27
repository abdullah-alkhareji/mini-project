import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddMemberModal from "./AddMemberModal";
import memberStore from "../stores/memberStore";
import { observer } from "mobx-react";

const MembersList = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClose = () => setIsOpen(false);
	const handleOpen = () => setIsOpen(true);

	return (
		<div className='list'>
			<div className='page-title w-100 d-flex justify-content-between align-items-center mb-3 '>
				<h1>Members</h1>
				<Button variant='outline-dark' onClick={handleOpen}>
					New Member
				</Button>
			</div>
			<ul>
				{memberStore.members.map(member => (
					// <MemberItem key={member.id} member={member} />
					<Link key={member.id} to={`/members/${member.slug}`}>
						<li>
							{member.firstName} {member.lastName}
						</li>
					</Link>
				))}
			</ul>
			<AddMemberModal isOpen={isOpen} handleClose={handleClose} />
		</div>
	);
};

export default observer(MembersList);
