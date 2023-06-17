import React, { useState, useEffect, useContext } from 'react'
import { Context } from "../store/appContext"
import DatePicker from 'react-datepicker'
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/clases.css";

export const LessonForm = () => {

    const { actions, store } = useContext(Context)
    const [classReservation, setClassReservation] = useState({});

    useEffect(() => {
		if(store.token && store.token != "" && store.token != undefined) {
			actions.addClassReservation()
		} 
	}, 
	[store.token])

    useEffect(() => {
		actions.getFields()
        actions.getInstructors()
	}, 
	[])

    function generateRandomFieldId(fields) {
      
        const length = fields.length;
        
        const randomNumber = Math.floor(Math.random() * length);
      
        return fields[randomNumber].id;
      }
      
      function handleClassReservation(){
        // console.log(generateRandomFieldId(store.fields))
        const randomFieldId = generateRandomFieldId(store.fields);
        actions.addClassReservation({...classReservation, field_id: randomFieldId})
      }
      

    return (
        <div className='body'>

        <h2 className='d-flex justify-content-center mt-3 text-white'>Agenda tu clase</h2>

        <div className='formulario'>
        <div className="mb-3 flex-column fecha">
            <label for="exampleFormControlInput1" className="form-label text-white"><strong>Fecha</strong></label>
            <input type="date" className="form-control mb-4" id="exampleFormControlInput1" placeholder="date" onChange={(event) => setClassReservation({...classReservation, date: event.target.value})} value={classReservation.date || ''}/>
        </div>
        <div className="mb-3 flex-column fecha">
            <label for="exampleFormControlInput1" className="form-label mt-3 text-white"><strong>Hora</strong></label>
            <input type="time" className="form-control" id="exampleFormControlInput1" placeholder="hour" onChange={(event) => setClassReservation({...classReservation, hour: event.target.value})} value={classReservation.hour || ''}/>
        </div>
        
        <div className="flex-column fecha mt-5">
            <label for="inputState" className="form-label text-white"><strong>Dificultad</strong></label>
            <select id="inputState" className="form-select" onChange={(event) => setClassReservation({...classReservation, difficulty: event.target.value})} value={classReservation.difficulty || ''}>
                <option selected>Elige el nivel de tu clase</option>
                <option>principiante</option>
                <option>intermedio</option>
                <option>avanzado</option>
            </select>
        </div>

        <div className="flex-column fecha mt-5 mb-5">
            <label for="inputState" className="form-label text-white"><strong>Instructor</strong></label>
            <select id="inputState" className="form-select" onChange={(event) => setClassReservation({...classReservation, instructor_id: Number(event.target.value)})}>
                <option>Elige el instructor de tu preferencia</option>
            {
                store.instructors.map((instructor) => (
                    <option value={instructor.id}>{instructor.name}{" "}{instructor.last_name}</option>
                ) )
            }
                {/* <option>Nombre</option>
                <option>Nombre</option>
                <option>Nombre</option> */}
            </select>
        </div>

        <div className="mb-3 flex-column fecha">
            <label for="exampleFormControlTextarea1" className="form-label mt-3 comentarios text-white"><strong>Comentarios</strong></label>
            <textarea className="form-control" placeholder='¿Quieres dejar un comentario a tu instructor?' id="exampleFormControlTextarea1" rows="3" onChange={(event) => setClassReservation({...classReservation, comments: event.target.value})} value={classReservation.comments || ''}></textarea>
        </div>
        

        <div className='boton'>
        <button type="button" className="btn btn-primary" onClick={handleClassReservation}>Reservar</button>
        </div>

        </div>
        </div>
    )
}