import React from "react";
import { FiUsers } from "react-icons/fi";
import { RiBookMarkLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="d-flex gap-3 my-auto justify-content-center align-items-center p-3">
      <Link
        to="/members"
        className="btn btn-outline-secondary p-5 home-card d-flex justify-content-center align-items-center flex-column"
      >
        <FiUsers className="m-5" size={150} />
        <h1 className="text-center">Members</h1>
      </Link>
      <Link
        to="/books"
        className="btn btn-outline-secondary p-5 home-card d-flex justify-content-center align-items-center flex-column"
      >
        <RiBookMarkLine className="m-5" size={150} />
        <h1 className="text-center">Books</h1>
      </Link>
    </div>
  );
};

export default Home;
