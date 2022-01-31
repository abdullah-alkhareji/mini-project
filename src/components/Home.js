import React from "react";
import { FiUsers } from "react-icons/fi";
import { RiBookMarkLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import memberStore from "../stores/memberStore";
import bookStore from "../stores/bookStore";

const Home = () => {
	console.log(bookStore.gen);
	return (
		<>
			<div className='row'>
				<div className='col-lg-3 col-md-6 col-sm-12 p-3'>
					<div className='card p-3 d-flex justify-content-center align-items-center'>
						<span className='fs-1 fw-bold'>{memberStore.members.length}</span>
						<span className='fs-6'>Total Members</span>
					</div>
				</div>
				<div className='col-lg-3 col-md-6 col-sm-12 p-3'>
					<div className='card p-3 d-flex justify-content-center align-items-center'>
						<span className='fs-1 fw-bold'>{bookStore.books.length}</span>
						<span className='fs-6'>Total books</span>
					</div>
				</div>
				<div className='col-lg-3 col-md-6 col-sm-12 p-3'>
					<div className='card p-3 d-flex justify-content-center align-items-center'>
						<span className='fs-1 fw-bold'>
							{
								bookStore.books.filter(book => book.available === true && book)
									.length
							}
						</span>
						<span className='fs-6'>Available Books</span>
					</div>
				</div>
				<div className='col-lg-3 col-md-6 col-sm-12 p-3'>
					<div className='card p-3 d-flex justify-content-center align-items-center'>
						<span className='fs-1 fw-bold'>
							{
								bookStore.books.filter(book => book.available === false && book)
									.length
							}
						</span>
						<span className='fs-6'>Borrowed Books</span>
					</div>
				</div>
			</div>

			<div className='row my-auto justify-content-center align-items-center'>
				<div className='col-lg-6 com-md-12 p-2'>
					<Link
						to='/members'
						className='btn btn-outline-secondary p-5 home-card d-flex justify-content-center align-items-center flex-column'>
						<FiUsers className='m-5' size={150} />
						<h1 className='text-center'>Members</h1>
					</Link>
				</div>
				<div className='col-lg-6 com-md-12 p-2'>
					<Link
						to='/books'
						className='btn btn-outline-secondary p-5 home-card d-flex justify-content-center align-items-center flex-column'>
						<RiBookMarkLine className='m-5' size={150} />
						<h1 className='text-center'>Books</h1>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Home;
