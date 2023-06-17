import React from 'react';

export const ReservationClassCard = () =>{


    return(
        <>
            <div className="card text-center my-3" style={{width: "25%"}}>
                <div className="card-header">
                    Details
                </div>
                <div className="card-body">
                    <p className="card-text text-start">Date: </p>
                    <p className="card-text text-start">Time: </p>
                    <p className="card-text text-start">Difficulty: </p>
                    <p className="card-text text-start">Instructor: </p>
                    <p className="card-text text-start">Comments: </p>
                    <button className="btn btn-danger">Delete</button>
                </div>
                <div className="card-footer text-muted">
                    Class Reservation
                </div>
            </div>  
        
        
        </>


    )
}