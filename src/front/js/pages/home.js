import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { TeacherCard } from "../component/teacherCard";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>

		<div className="home"> 
			<form className="col g-3 cuadro text-center">
  			<div className="col">
    			<label for="inputState" className="form-label">Fecha</label>
    				<select id="inputState" className="form-select">
    				</select>
  			</div>
			  <div className="col">
    			<label for="inputState" className="form-label hora">Hora</label>
    				<select id="inputState" className="form-select hora">
    				</select>
  			</div>
			  <button type="button" class="btn btn-primary">Reservar</button>
			</form>
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
