import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddMemberModal from "./AddMemberModal";
import memberStore from "../stores/memberStore";
import { observer } from "mobx-react";
import { AiOutlineUser } from "react-icons/ai";

const MembersList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div className="list">
      <div className="page-title w-100 d-flex justify-content-between align-items-center mb-3 ">
        <h1>Members</h1>
        <Button variant="outline-dark" onClick={handleOpen}>
          New Member
        </Button>
      </div>
      <hr />
      <ul className="row">
        {memberStore.members.map((member) => (
          // <MemberItem key={member.id} member={member} />
          <Link
            key={member.id}
            to={`/members/${member.slug}`}
            className="col-lg-6 col-md-12"
          >
            <li className="card d-flex flex-row align-items-center">
              <AiOutlineUser size={30} className="me-3" />
              <p className="fs-4 m-0 text-nowrap overflow-hidden">
                {member.firstName} {member.lastName}
              </p>
            </li>
          </Link>
        ))}
      </ul>
      <AddMemberModal isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
};

export default observer(MembersList);
