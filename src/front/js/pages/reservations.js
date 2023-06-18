import React, {useEffect, useContext} from 'react';
import { ReservationFieldCard } from '../component/reservationFieldCard';
import { ReservationClassCard } from '../component/reservationClassCard';
import {Context} from "../store/appContext"

export const Reservations = () =>{

    const {store, actions} = useContext(Context)

    useEffect(() => {
        if(store.token && store.token != "" && store.token != undefined) {
			actions.getMessage();
			actions.getClassesReservations()
			actions.getFieldReservations()
			
		} 
    }, [store.token])

    return(
        <>
            <div className='container'>
                <h2 className='text-center my-3'>Field Reservation History</h2>
                <div className='d-flex flex-row justify-content-between'>
                    {
                        store.fieldReservation.map((fieldReservation) => (

                            <ReservationFieldCard
                                date={fieldReservation.date}
                                hour={fieldReservation.hour}
                                number_of_players={fieldReservation.number_of_players}
                                field={fieldReservation.field.type}
                            />
                        ))
                    }
                </div>
                <div className='border-top my-4' style={{border: "4px solid rgba(146, 235, 12, 0.731)"}}></div>
                <h2 className='text-center my-3'>Class Reservation History</h2>
                <div className='d-flex flex-row justify-content-between'>
                    {
                        store.classesReservation.map((classReservation) => (

                            <ReservationClassCard
                                date={classReservation.date}
                                hour={classReservation.hour}
                                difficulty={classReservation.difficulty}
                                instructor_name={classReservation.instructor.name}
                                instructor_last_name={classReservation.instructor.last_name}
                                comments={classReservation.comments}
                            />
                        ))
                    }
                </div>
            </div>
        
        
        </>


    )
}