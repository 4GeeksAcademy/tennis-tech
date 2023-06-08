import React from 'react';
import "../../styles/home.css";


export const CanchasHome = () => {
    return(

        <>
            <div className="container" id="canchas-home">

            <div className="row my-5">
                <div className="col-6">
                    <img src="https://civideportes.com.co/wp-content/uploads/2020/08/asphalt-tennis-court-5354328_640.jpg" alt="cancha de cemento azul" style={{maxWidth: "70%"}}/>
                </div>
                <div className="col-6">
                    <h4 style={{textDecoration: "underline"}}>Cancha de Concreto</h4>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-6">
                    <h4 style={{textDecoration: "underline"}}>Cancha de Arcilla</h4>
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
                    <h4 style={{textDecoration: "underline"}}>Cancha de Grama</h4>
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
            </div>
        </>
    )
}