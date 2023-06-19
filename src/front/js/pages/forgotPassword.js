import React from 'react'

export const ForgotPassword = () => {


        <>
        <div className="mb-3 row">
            <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
            <input type="text" readonly className="form-control-plaintext" id="staticEmail" value="email@example.com"/>
        </div>
        </div>
        <div className="mb-3 row">
            <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-10">
            <input type="password" className="form-control" id="inputPassword"/>
        </div>
        </div>
        </>
    
}


