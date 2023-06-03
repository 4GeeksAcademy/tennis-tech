import React from "react";

export const Signup = () => {

    return (
        <>
            <div className="container d-flex justify-content-center">

                <div className="card my-2" style={{width: "500px", backgroundColor: "#74B72D"}}>
                    <h2 className="card-header text-light text-center">Sign Up</h2>
                    <div className="card-body">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="basic-addon1"/>
                        </div>
                        <button className="btn btn-primary" style={{width: "100%"}}>Join Us</button>
                    </div>
                </div>
            </div>
        
        </>
    )
}