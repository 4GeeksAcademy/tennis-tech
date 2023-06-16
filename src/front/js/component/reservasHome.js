import React from 'react'
import "../../styles/home.css";
import "../../styles/reservasHome.css"
import { Link } from "react-router-dom";

export const ReservasHome = () => {
    return(

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
      	<div className="carousel-caption d-none d-md-block bg-success fondo">
		<Link to="/canchas" className="text-light">
        	<h2 className="text-white">¡Haz clic aquí para reservar tu cancha!</h2>
		</Link>
        	<p className="text-white">Contamos con distintas canchas de arcilla y cemento solo para ti.</p>
      	</div>
    	</div>
    	<div className="carousel-item">
      		<img src="https://images.unsplash.com/photo-1587683437362-da7775ffc532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" className="d-block w-100" alt="..."/>
      	<div className="carousel-caption d-none d-md-block bg-success fondo">
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
        
        </>
    )
}