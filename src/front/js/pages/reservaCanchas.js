import React, {useContext, useEffect, useState} from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/canchas.css";
import {Context} from "../store/appContext"


export const Canchas = () => {

    const [canchaReservation, setCanchaReservation] = useState({})
    const {store, actions} = useContext(Context)

    useEffect(() => {
        actions.getFields()
    }, [])


    return(
        <>
        <div className='court'>

            <h2 className='d-flex justify-content-center mt-3 text-white'>¡Reserva tu cancha!</h2>

        <div className='formulario'>
        <div className="mb-3 flex-column fecha">
            <label for="exampleFormControlInput1" className="form-label text-white"><strong>Fecha</strong></label>
            <input type="date" onChange={(event) => setCanchaReservation({...canchaReservation, date: event.target.value})} value={canchaReservation.date || ""} className="form-control mb-4" id="exampleFormControlInput1" placeholder="date"/>
        </div>
        <div className="mb-3 flex-column fecha">
            <label for="exampleFormControlInput1" className="form-label mt-3 text-white"><strong>Hora</strong></label>
            <input type="time" onChange={(event) => setCanchaReservation({...canchaReservation, hour: event.target.value})} value={canchaReservation.hour || ""} className="form-control" id="exampleFormControlInput1" placeholder="hour"/>
        </div>

        <div className="flex-column fecha mt-5">
            <label for="inputState" className="form-label text-white"><strong>Players</strong></label>
            <select id="inputState" className="form-select" onChange={(event) => setCanchaReservation({...canchaReservation, number_of_players: event.target.value})} value={canchaReservation.number_of_players || ""}>
                <option selected>Please select number of players</option>
                <option>dos</option>
                <option>cuatro</option>
                <option>seis</option>
            </select>
        </div>

<div className="flex-column fecha mt-5 mb-5">
    <label for="inputState" className="form-label text-white"><strong>Cancha</strong></label>
    <select id="inputState" className="form-select" onChange={(event) => setCanchaReservation({...canchaReservation, type: event.target.value})} value={canchaReservation.type || ""}>
        <option selected>Selecciona la cancha de tu preferencia</option>
        {
            store.fields.map((field) => (
                <option>{field.type}</option>
            ))
        }
    </select>
</div>


<div className='boton'>
<button type="button" className="btn btn-primary" onClick={() => actions.addNewFieldReservation(canchaReservation)}>Reservar</button>
</div>

</div>
</div>  
        </>
    )
}