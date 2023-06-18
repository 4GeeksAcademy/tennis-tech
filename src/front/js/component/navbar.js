import React, { useContext } from "react";
import "../../styles/navbar.css";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar bg-success">
			<div className="container">
				<Link to="/" style={{textDecoration: "none"}}>
					<span className="navbar-brand mb-0 h1"><i className="fa-solid fa-table-tennis-paddle-ball titulo"></i></span>
					<span className="navbar-brand mb-0 h1 titulo">TennisTech</span>
				</Link>
				<div className="ml-auto d-flex justify-content-between" style={{width: "150px"}}>
					{ !store.token ?
					<>
						<Link to="/login">
							<button className="btn btn-light me-2">Log in</button>

						</Link>
						<Link to="/signup">
							<button className="btn btn-light">Sign Up</button>
						</Link>
					</>
					:
					<>
						<div className="btn-group">
							<button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								Action
							</button>
							<ul className="dropdown-menu">
								<Link to="/profile" style={{textDecoration: "none"}}>
									<li className="dropdown-item">My profile</li>
								</Link>
								{
									// store.users.map((user) => ( 
									// 	 	<Link to={`/reservations/${user.username}`} style={{textDecoration: "none"}}>
									// 	 		<li className="dropdown-item">My reservations</li>
									//  		</Link>
									// ))
								}
								<Link to="/reservations" style={{textDecoration: "none"}}>
									<li className="dropdown-item">My reservations</li>
								</Link>
								
								<Link to="/" style={{textDecoration: "none"}}>
									<li className="dropdown-item">Home</li>
								</Link>
							</ul>
						</div>
						<button onClick={() => actions.logout()} className="btn btn-light">Log out</button>
					</>
					}
					
					
				</div>
			</div>
		</nav>
	);
};
