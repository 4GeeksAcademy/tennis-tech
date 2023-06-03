import React from 'react'
import DatePicker from 'react-datepicker'
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/clases.css";

export const LessonForm = () => {

    return (
        <div className='body'>

        <h2 className='d-flex justify-content-center mt-3 text-white'>Agenda tu clase</h2>

        <div className='formulario'>
        <div className="mb-3 flex-column fecha">
            <label for="exampleFormControlInput1" className="form-label text-white"><strong>Fecha</strong></label>
            <input type="email" className="form-control mb-4" id="exampleFormControlInput1" placeholder="date"/>
        </div>
        <div className="mb-3 flex-column fecha">
            <label for="exampleFormControlInput1" className="form-label mt-3 text-white"><strong>Hora</strong></label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="hour"/>
        </div>
        
        <div className="flex-column fecha mt-5">
            <label for="inputState" className="form-label text-white"><strong>Dificultad</strong></label>
            <select id="inputState" className="form-select">
                <option selected>Elige el nivel de tu clase</option>
                <option>Principiante</option>
                <option>Intermedio</option>
                <option>Avanzado</option>
            </select>
        </div>

        <div className="flex-column fecha mt-5 mb-5">
            <label for="inputState" className="form-label text-white"><strong>Instructor</strong></label>
            <select id="inputState" className="form-select">
                <option selected>Elige el instructor de tu preferencia</option>
                <option>Nombre</option>
                <option>Nombre</option>
                <option>Nombre</option>
            </select>
        </div>

        <div className="mb-3 flex-column fecha">
            <label for="exampleFormControlTextarea1" className="form-label mt-3 comentarios text-white"><strong>Comentarios</strong></label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">¿Quieres dejar un comentario a tu instructor?</textarea>
        </div>
        

        <div className='boton'>
        <button type="button" className="btn btn-primary">Reservar</button>
        </div>

        </div>
        </div>
    )
}