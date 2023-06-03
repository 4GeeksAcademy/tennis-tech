import React from "react";
import PropTypes from "prop-types"

export const TeacherCard = (props) => {
    return(
        <>
           

                <div className="card" style={{width: "20rem", height: "30rem"}}>
                    <img src={props.image} style={{height: "50%", objectFit: "cover"}}/>
                    <div className="card-body">
                        <div className="mb-3">
                            <label className="fw-bold">Descripcion:</label>
                        </div>
                        <div className="mb-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>
                </div>
        </>
    )
}

TeacherCard.protoTypes = {
    image: PropTypes.string
}