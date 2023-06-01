import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar" style={{backgroundColor: "#65CC33"}}>
			<div className="container">
				<Link to="/" style={{textDecoration: "none"}}>
					<span className="navbar-brand mb-0 h1"><i class="fa fa-tennis-ball"></i></span>
					<span className="navbar-brand mb-0 h1">TennisTech</span>
				</Link>
				<div className="ml-auto d-flex justify-content-between" style={{width: "150px"}}>
					<Link to="/login">
						<button className="btn btn-primary">Login</button>
					</Link>
					<Link to="/signup">
						<button className="btn btn-primary">SignUp</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
