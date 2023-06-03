import React from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/canchas.css";


export const Canchas = () => {

    return(
        <>
        <h2 className='d-flex justify-content-center mt-3'>Reserva tu cancha</h2>
        <div className='formulario'>
        <div className="column g-3">
        <div className="col">
            <input type="text" className="form-control mb-4" placeholder="First name" aria-label="First name"/>
        </div>
        <div className="col">
            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
        </div>
        </div>
            <input type="text" className="form-control mb-4 mt-4" placeholder="Email" aria-label="Email"/>
        </div>

        <div className='inputs d-flex flex-column flex-start'>
        <div className="input-group mb-3">
        <label for="formGroupExampleInput" className="form-label">Fecha</label>
            <DatePicker/>
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
            <button type="button" className="btn btn-outline-secondary">Players</button>
            <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
            </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="#">2</a></li>
                    <li><a className="dropdown-item" href="#">4</a></li>
                    <li><a className="dropdown-item" href="#">6</a></li>
                </ul>
        </div>
        </div>

        
        </>
    )
}