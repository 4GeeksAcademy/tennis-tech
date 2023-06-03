import React from 'react'
import DatePicker from 'react-datepicker'
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/clases.css";

export const LessonForm = () => {

    return (
        <>

        <h2 className='d-flex justify-content-center mt-3'>Agenda tu clase</h2>

        
        <div className="mb-3 flex-column fecha">
            <label for="exampleFormControlInput1" className="form-label">Fecha</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3 flex-column fecha">
            <label for="exampleFormControlInput1" className="form-label mt-3">Hora</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
    

        <div className="input-group mb-3 flex-column fecha">
            <select className="form-select" id="inputGroupSelect02">
                <option selected>Nivel de dificultad</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
        </div>

        
        <div className="input-group mb-3 flex-column fecha">
            <select className="form-select mt-3" id="inputGroupSelect01">
                <option className='fecha ps-5' selected>Profesor</option>
                <option value="1">Principiante</option>
                <option value="2">Intermedio</option>
                <option value="3">Avanzado</option>
            </select>
        </div>
        <div className="mb-3 flex-column fecha">
            <label for="exampleFormControlTextarea1" className="form-label mt-3">Comentarios</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        

        <div className='boton'>
        <button type="button" className="btn btn-primary">Reservar</button>
        </div>
        </>
    )
}