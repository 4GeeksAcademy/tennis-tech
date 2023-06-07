import React from 'react';
import { ReservationFieldCard } from '../component/reservationFieldCard';
import { ReservationClassCard } from '../component/reservationClassCard';

export const Reservations = () =>{
    return(
        <>
            <div className='container'>
                <h2 className='text-center my-3'>Field Reservation History</h2>
                <ReservationFieldCard/>
                <div className='border-top my-4' style={{border: "4px solid rgba(146, 235, 12, 0.731)"}}></div>
                <h2 className='text-center my-3'>Class Reservation History</h2>
                <ReservationClassCard/>
            </div>
        
        
        </>


    )
}