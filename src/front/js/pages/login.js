import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Context} from "../store/appContext";
import "../../styles/login.css";
/*import { useHistory } from "react-router-dom"*/


export const Login = () => {
    const { store, actions } = useContext(Context);
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    /*const history = useHistory();*/
    const navigate = useNavigate()

    const handleClick = async () => {
      let response = await actions.login(username, password);
        if(response){

           navigate("/")
       }
       else{
        console.log("Credenciales inválidas")
       }
    }
   

    return(
        <div className="fondo-login">
            <div className="container">
                <div className="card position-absolute top-50 start-50 translate-middle" style={{width: "500px", backgroundColor: "#74B72D"}}>
                    <h2 className="card-header text-light text-center">Welcome</h2>
                   <div className="card-body">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={username} onChange={e => setUsername(e.target.value)}/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        
                        <div className="mb-3 text-center">
                            <span style={{color: "white"}}>Forgot your password?</span>
                        </div>
                        
                        <button onClick={handleClick} className="btn btn-primary" style={{width: "100%"}}>Sign In</button>
                    </div>  
                </div>
            </div>
        </div>
    )
}