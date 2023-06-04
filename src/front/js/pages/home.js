import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { TeacherCard } from "../component/teacherCard";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>

		<div className="home"> 
		<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  		<div className="carousel-indicators">
    		<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    		<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
  		</div>
  		<div className="carousel-inner">
    	<div className="carousel-item active">
      			<img src="https://images.unsplash.com/flagged/photo-1576972405668-2d020a01cbfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" className="d-block w-100" alt="..."/>
      	<div className="carousel-caption d-none d-md-block texto">
		<Link to="/canchas" className="text-light">
        	<h2 className="text-white">¡Haz clic aquí para reservar tu cancha!</h2>
		</Link>
        	<p className="text-white">Contamos con distintas canchas de arcilla y cemento solo para ti.</p>
      	</div>
    	</div>
    	<div className="carousel-item">
      		<img src="https://images.unsplash.com/photo-1592709823125-a191f07a2a5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2913&q=80" className="d-block w-100" alt="..."/>
      	<div className="carousel-caption d-none d-md-block texto">
		<Link to="/lessons" className="text-light">
        	<h2 className="text-white">¡Haz clic aquí para agendar una clase!</h2>
		</Link>
        	<p className="text-white">Contamos con instructores certificados para mejorar tus habilidades en el juego.</p>
      	</div>
    	</div>
  		</div>
  			<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    		<span className="carousel-control-prev-icon" aria-hidden="true"></span>
    		<span className="visually-hidden">Previous</span>
  			</button>
  			<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    		<span className="carousel-control-next-icon" aria-hidden="true"></span>
    		<span className="visually-hidden">Next</span>
  			</button>
		</div>
		</div>

			<div className="my-5 py-4 d-flex flex-row justify-content-around" style={{backgroundColor: "#EBCAA4"}}>
				<TeacherCard
					image="https://images.unsplash.com/photo-1605395630162-1c7cc7a34590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVubmlzJTIwcGxheWVyfGVufDB8fDB8fHwy&auto=format&fit=crop&w=500&q=60"
				/>
				<TeacherCard
					image="https://images.unsplash.com/photo-1619118384437-fd10fefc0ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
				/>
				<TeacherCard
					image="https://images.unsplash.com/photo-1638193855576-a9e2c7dd1b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
				/>
			</div>

			<div className="container" id="canchas-home">

				<div className="row my-5">
					<div className="col-6">
						<img src="https://civideportes.com.co/wp-content/uploads/2020/08/asphalt-tennis-court-5354328_640.jpg" alt="cancha de cemento azul" style={{maxWidth: "70%"}}/>
					</div>
					<div className="col-6">
						<h4>Cancha de Concreto</h4>
						<h5>Descripcion: </h5>
						<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>
				</div>
				<div className="row my-5">
					<div className="col-6">
						<h4>Cancha de Arcilla</h4>
						<h5>Descripcion: </h5>
						<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>
					<div className="col-6">
						<img src="https://i0.wp.com/laverdaddemonagas.com/wp-content/uploads/2022/04/unicas-en-el-oriente-inauguran-canchas-de-tenis-de-arcilla-en-maturin-laverdaddemonagas.com-whatsapp-image-2022-04-13-at-3.40.16-pm-1.jpeg?resize=1080%2C720&ssl=1" alt="cancha de arcilla" style={{maxWidth: "70%"}}/>
					</div>
				</div>
				<div className="row my-5">
					<div className="col-6">
						<img src="https://i0.wp.com/matchtenis.com/wp-content/uploads/2019/04/Cesped-3.jpg?w=408&h=306&ssl=1" alt="cancha de grama" style={{width: "70%"}} />
					</div>
					<div className="col-6">
						<h4>Cancha de Grama</h4>
						<h5>Descripcion: </h5>
						<p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>
				</div>
			</div>
		
		</>
	);
};
