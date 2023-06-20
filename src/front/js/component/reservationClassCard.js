import React, {useContext} from 'react';
import PropTypes from "prop-types"
import {Context} from "../store/appContext"
// import moment from 'moment'

export const ReservationClassCard = (props) =>{
    const {actions} = useContext(Context)
    // const formatDate = moment(props.date).format("MMM Do YY"); 
    return(
        <>
            <div className="card text-center my-3" style={{width: "25%"}}>
                <div className="card-header">
                    Details
                </div>
                <div className="card-body">
                    <p className="card-text text-start">Date: {" "} {props.date.slice(0,16)} </p>
                    <p className="card-text text-start">Time: {" "} {props.hour} </p>
                    <p className="card-text text-start">Difficulty: {" "}{props.difficulty}</p>
                    <p className="card-text text-start">Instructor: {" "}{props.instructor_name}{" "}{props.instructor_last_name}</p>
                    <p className="card-text text-start">Comments: {" "}{props.comments}</p>
                    <button className="btn btn-danger" onClick={() => actions.deleteClassReservation(props.item, props.item.id)}>Delete</button>
                </div>
                <div className="card-footer text-muted">
                    Class Reservation
                </div>
            </div>  
        
        
        </>


    )
}

ReservationClassCard.propTypes = {
    date: PropTypes.string,
    hour: PropTypes.string,
    difficulty: PropTypes.string,
    instructor_name: PropTypes.string,
    instructor_last_name: PropTypes.string,
    comments: PropTypes.string,
    item: PropTypes.object

}