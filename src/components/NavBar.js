import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container-fluid'>
				<Link to='/' className='navbar-brand'>
					Library
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<NavLink to='/' className='nav-link' aria-current='page'>
								Home
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/members' className='nav-link'>
								Members
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/books' className='nav-link'>
								Books
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
