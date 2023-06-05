import React, {useState} from "react";

export const Signup = () => {

    const [userRegister, setUserRegister] = useState({})
    const [isEqual, setIsEqual] = useState(true)

    const confirmarPasswords = () =>{
        let pass1 = document.getElementById('pass1')
        let pass2 = document.getElementById('pass2')
        if(pass1.value != pass2.value) setIsEqual(false)
        else setIsEqual(true)
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
                            <input type="text" onChange={(event) => setUserRegister({...userRegister, username: event.target.value})} value={userRegister.username || ''} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="email" onChange={(event) => setUserRegister({...userRegister, email: event.target.value})} value={userRegister.email || ''} className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" onChange={(event) => setUserRegister({...userRegister, password: event.target.value})} value={userRegister.password || ''} className="form-control" id="pass1" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" id="pass2" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="basic-addon1"/>
                        </div>
                        <button className="btn btn-primary" onClick={confirmarPasswords} style={{width: "100%"}}>Join Us</button>
                    </div>
                </div>
            </div>
        
        </>
    )
}