import React, {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {Context} from "../store/appContext.js"

export const Signup = () => {

    const [user, setUser] = useState({})
    const [inputVerified, setinputVerified] = useState(true)
    // const [success, setSuccess] = useState(false)
    const {actions} = useContext(Context)
    const navigate = useNavigate()

    const handleAddUser = async () =>{
        let emailInput = document.getElementById('user-email')
        let validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        // if( validEmail.test(emailInput.value) ){
        //     // alert('Email is valid, continue with form submission');
        //     setEmailVerified(true)
        // }else{
        //     // alert('Email is invalid, skip form submission');
        //     setEmailVerified(false)
        // }
        let pass1 = document.getElementById('pass1')
        let pass2 = document.getElementById('pass2')
        if(pass1.value != pass2.value || validEmail.test(emailInput.value) == false) {
            setinputVerified(false) // validacion para comprobar que los campos contraseña y confirmar contraseña son iguales
        } 
        else {
            setinputVerified(true)
            let response = await actions.addNewUser(user)
            if(response){
                navigate("/login")
            }
        }
    }



    return (
        <>
            <div className="container position relative">
                {
                    !inputVerified && <div className="alert alert-danger" role="alert">Las contraseñas no coinciden! o el email ingresado es invalido. Por favor vuelva a intentar</div>
                }

                <div className="card position-absolute top-50 start-50 translate-middle" style={{width: "500px", backgroundColor: "#74B72D"}}>
                    <h2 className="card-header text-light text-center">Sign Up</h2>
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <input type="text" onChange={(event) => setUser({...user, username: event.target.value})} value={user.username || ''} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="email" onChange={(event) => setUser({...user, email: event.target.value})} value={user.email || ''} id="user-email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" onChange={(event) => setUser({...user, password: event.target.value})} value={user.password || ''} className="form-control" id="pass1" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
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