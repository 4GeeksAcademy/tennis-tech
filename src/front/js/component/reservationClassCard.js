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
                    <p className="card-text text-start">Date: {" "} <span className='fw-bold'>{props.date.slice(0,16)}</span> </p>
                    <p className="card-text text-start">Time: {" "} <span className='fw-bold'>{props.hour} </span> </p>
                    <p className="card-text text-start">Difficulty: {" "}<span className='fw-bold'>{props.difficulty}</span></p>
                    <p className="card-text text-start">Instructor: {" "}<span className='fw-bold'>{props.instructor_name}{" "}{props.instructor_last_name}</span></p>
                    <p className="card-text text-start">Comments: {" "}<span className='fw-bold'>{props.comments}</span></p>
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