import React, { useContext, useState, useEffect } from 'react';
import {Context} from "../store/appContext"
import PropTypes from "prop-types"


export const ReservationFieldCard = (props) =>{

    const {actions} = useContext(Context)

    return(
        <>
            <div className="card text-center my-3" style={{width: "25%"}}>
                <div className="card-header">
                    Details
                </div>
                <div className="card-body">
                    <p className="card-text text-start">Date: {" "} <span className='fw-bold'> {props.date.slice(0,16)} </span> </p>
                    <p className="card-text text-start">Time:{" "} <span className='fw-bold'>{props.hour}</span> </p>
                    <p className="card-text text-start">Number of Players:{" "} <span className='fw-bold'>{props.number_of_players}</span></p>
                    <p className="card-text text-start">Field:{" "} <span className='fw-bold'>{props.field}</span> </p>
                    <button className="btn btn-danger" onClick={() => actions.deleteFieldReservation(props.item, props.item.id)}>Delete</button>
                </div>
                <div className="card-footer text-muted">
                    Field Reservation
                </div>
            </div>  
        
        
        </>


    )
}

ReservationFieldCard.propTypes = {
    date: PropTypes.string,
    hour: PropTypes.string,
    number_of_players: PropTypes.string,
    field: PropTypes.string,
    item: PropTypes.object

}