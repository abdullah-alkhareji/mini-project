import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav class='navbar navbar-expand-lg navbar-light bg-light'>
			<div class='container-fluid'>
				<Link to='/' class='navbar-brand'>
					Library
				</Link>
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarNav'>
					<ul class='navbar-nav'>
						<li class='nav-item'>
							<NavLink to='/' class='nav-link' aria-current='page'>
								Home
							</NavLink>
						</li>
						<li class='nav-item'>
							<NavLink to='/members' class='nav-link'>
								Members
							</NavLink>
						</li>
						<li class='nav-item'>
							<NavLink to='/books' class='nav-link'>
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
