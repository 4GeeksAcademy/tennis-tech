import React, {useState, useContext} from "react";
import {Context} from "../store/appContext.js"

export const Signup = () => {

    const [user, setuser] = useState({})
    const [isEqual, setIsEqual] = useState(true)
    const {actions} = useContext(Context)

    const handleAddUser = () =>{
        let pass1 = document.getElementById('pass1')
        let pass2 = document.getElementById('pass2')
        if(pass1.value != pass2.value) setIsEqual(false) // validacion para comprobar que los campos contraseña y confirmar contraseña son iguales
        else {
            setIsEqual(true)
            actions.addNewUser(user)
        }
    }



    return (
        <>
            <div className="container position relative">
                {
                    !isEqual && <div className="alert alert-danger" role="alert">Las contraseñas no coinciden! Por favor vuelva a intentar</div>
                }

                <div className="card position-absolute top-50 start-50 translate-middle" style={{width: "500px", backgroundColor: "#74B72D"}}>
                    <h2 className="card-header text-light text-center">Sign Up</h2>
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <input type="text" onChange={(event) => setuser({...user, username: event.target.value})} value={user.username || ''} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="email" onChange={(event) => setuser({...user, email: event.target.value})} value={user.email || ''} className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" onChange={(event) => setuser({...user, password: event.target.value})} value={user.password || ''} className="form-control" id="pass1" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" id="pass2" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="basic-addon1"/>
                        </div>
                        <button className="btn btn-primary" onClick={handleAddUser} style={{width: "100%"}}>Join Us</button>
                    </div>
                </div>
            </div>
        
        </>
    )
}