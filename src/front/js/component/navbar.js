import React, { useContext } from "react";
import "../../styles/navbar.css";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	const navigate = useNavigate()

	const handleLogOut = async () => {
		 actions.logout()
		
		 navigate("/login")
				
	}

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
							<button className="btn btn-light me-2" style={{width: "100px", height: "100%"}}>Log in</button>

						</Link>
						<Link to="/signup">
							<button className="btn btn-light" style={{width: "100px", height: "100%"}}>Sign Up</button>
						</Link>
					</>
					:
					<>
						<div className="btn-group">
							<button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{marginRight: "10px", width: "100px", height: "100%"}}>
								Action
							</button>
							<ul className="dropdown-menu" style={{left: "-25px"}}>
								<Link to={"/profile/"+store.userLoggedIn?.id} style={{textDecoration: "none"}}>
									<li className="dropdown-item">My profile</li>
								</Link>
								
								<Link to={`/reservations/${store.userLoggedIn?.id}`} style={{textDecoration: "none"}}>
									<li className="dropdown-item">My reservations</li>
								</Link>
								
								<Link to="/" style={{textDecoration: "none"}}>
									<li className="dropdown-item">Home</li>
								</Link>
							</ul>
						</div>
						<button onClick={handleLogOut} className="btn btn-light" style={{minWidth: "70%"}}>Log out</button>
					</>
					}
					
					
				</div>
			</div>
		</nav>
	);
};
