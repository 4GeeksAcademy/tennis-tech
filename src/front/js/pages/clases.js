import React from 'react'
import "../../styles/clases.css";

export const LessonForm = () => {

    return (
        <>

        <h2 className='d-flex justify-content-center mt-3'>Agenda tu clase</h2>
        <div className='formulario'>
        <div className="input-group mb-3">
            <span className="input-group-text">Name</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">Lastname</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text">Email</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        </div>


        <div className='inputs d-flex flex-column flex-start'>
        <div className="input-group mb-3">
            <input type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
            <button type="button" className="btn btn-outline-secondary">Date</button>
            <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
            </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    Aqui va un calendario
                </ul>
        </div>


        <div className="input-group mb-3">
            <input type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
            <button type="button" className="btn btn-outline-secondary">Hour</button>
            <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
            </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    Aqui va un calendario
                </ul>
        </div>

        <div className="input-group">
            <input type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
            <button type="button" className="btn btn-outline-secondary">Dificulty</button>
            <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
            </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="#">Principiante</a></li>
                    <li><a className="dropdown-item" href="#">Intermedio</a></li>
                    <li><a className="dropdown-item" href="#">Avanzado</a></li>
                </ul>
        </div>
        </div>

        
        <div className="mb-3 comentarios">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3">¿Quieres dejar un comentario a tu profesor aquí?</textarea>
        </div>

        <div className='boton'>
        <button type="button" className="btn btn-primary">Reservar</button>
        </div>
        </>
    )
}