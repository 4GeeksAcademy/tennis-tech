import React from "react";
import PropTypes from "prop-types"

export const TeacherCard = (props) => {
    console.log(props)
    return(
        <>
           

                <div className="card" style={{width: "20rem", height: "30rem"}}>
                    <img src={props.image} style={{height: "50%", objectFit: "cover"}}/>
                    <div className="card-body">
                        <div className="mb-3">
                            <label className="fw-bold">{props.name}{" "}{props.last_name}</label>
                        </div>
                        <div className="mb-3">
                            <label>{props.years_of_experience} {" "} años de experiencia</label>
                        </div>
                        <div className="mb-3">
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
        </>
    )
}

TeacherCard.protoTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    last_name: PropTypes.string,
    years_of_experience: PropTypes.number,
    description: PropTypes.string


}