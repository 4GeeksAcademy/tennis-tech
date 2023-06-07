import React from 'react';

export const ReservationFieldCard = () =>{
    return(
        <>
            <div className="card text-center my-3" style={{width: "25%"}}>
                <div className="card-header">
                    Details
                </div>
                <div className="card-body">
                    <p className="card-text text-start">Date: </p>
                    <p className="card-text text-start">Time: </p>
                    <p className="card-text text-start">Number of Players: </p>
                    <p className="card-text text-start">Field: </p>
                    <button className="btn btn-danger">Delete</button>
                </div>
                <div className="card-footer text-muted">
                    Field Reservation
                </div>
            </div>  
        
        
        </>


    )
}