import React, {useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { ReservationFieldCard } from '../component/reservationFieldCard';
import { ReservationClassCard } from '../component/reservationClassCard';
import {Context} from "../store/appContext"
import Swal from 'sweetalert2'

export const Reservations = () =>{

    const {store, actions} = useContext(Context)
    const {id} = useParams()

    useEffect(() => {
        async function reservationHistory(){

            if(store.token && store.token != "" && store.token != undefined) {
                actions.getMessage();
                let response2 = await actions.getClassesReservations(id)
                let response3 = await  actions.getFieldReservations(id)
                if(response2 == true && response3 == true){
                    if(store.classesReservation.length == 0 && store.fieldReservation.length == 0){
                        Swal.fire(
                            "No tienes reservaciones aún", "Dirígete al carrusel en home para programar tus reservas", "error"
                        )
                    }
                }
    
                
            } 
        }
        reservationHistory()
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
                                item={fieldReservation}
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
                                item={classReservation}
                            />
                        ))
                    }
                </div>
            </div>
        
        
        </>


    )
}