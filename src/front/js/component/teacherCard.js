import React from "react";
import PropTypes from "prop-types"
import "../../styles/teacherCard.css"
export const TeacherCard = (props) => {
    console.log(props)
    return(
        <>
           

                <div className="card" style={{width: "20rem", height: "30rem", marginBottom: "20px", marginTop: "20px"}}>
                    <img src={props.image} style={{height: "50%", objectFit: "cover"}}/>
                    <div className="card-body" style={{fontSize: "18px"}}>
                        <div className="mb-3">
                            <label className="fw-bold">{props.name}{" "}{props.last_name}</label>
                        </div>
                        <div className="mb-3">
                            <label className="font-change">{props.years_of_experience} {" "} años de experiencia</label>
                        </div>
                        <div className="mb-3">
                            <p className="font-change">{props.description}</p>
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