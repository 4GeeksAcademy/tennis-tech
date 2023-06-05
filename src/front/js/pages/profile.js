import React, {useState} from "react";

export const Profile = () =>{

    const [userProfile, setUserProfile] = useState({})

    return(
        <>
            <h2 className="text-center">Actualiza tu perfil de usuario</h2>
            <div className="container">
                <div className="row">
                    <div className="mb-3">
                        <label for="formFile" className="form-label">Inserte su foto de perfil</label>
                        <input className="form-control" type="file" id="formFile"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="input-group mb-3 flex-column">
                            <label for="formFile" className="form-label">Name: </label>
                            <input type="text" onChange={(event) => setUserProfile({...userProfile, name: event.target.value})} value={userProfile.name || ''} className="form-control" placeholder="Please insert their name" aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="input-group mb-3 flex-column">
                            <label for="formFile" className="form-label">Lastname: </label>
                            <input type="text" onChange={(event) => setUserProfile({...userProfile, last_name: event.target.value})} value={userProfile.last_name || ''} className="form-control" placeholder="Please insert their lastname" aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="input-group mb-3 flex-column">
                            <label for="formFile" className="form-label">Username: </label>
                            <input type="text" onChange={(event) => setUserProfile({...userProfile, username: event.target.value})} value={userProfile.username || ''} className="form-control" placeholder="Please insert their username" aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="input-group mb-3 flex-column">
                            <label for="formFile" className="form-label">Email: </label>
                            <input type="email" onChange={(event) => setUserProfile({...userProfile, email: event.target.value})} value={userProfile.email || ''} className="form-control" placeholder="Please insert their email" aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>

                </div><div className="row">
                    <div className="col-4">
                        <div className="input-group mb-3 flex-column">
                            <label for="formFile" className="form-label">Date of Birth: </label>
                            <input type="date" onChange={(event) => setUserProfile({...userProfile, date_of_birth: event.target.value})} value={userProfile.date_of_birth || ''} className="form-control" placeholder="Please insert their birthday" aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-group mb-3 flex-column">
                            <label for="formFile" className="form-label">Category: </label>
                            <input type="text" onChange={(event) => setUserProfile({...userProfile, category: event.target.value})} value={userProfile.category || ''} className="form-control" placeholder="Please insert their category" aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-group mb-3 flex-column">
                            <label for="formFile" className="form-label">Gender: </label>
                            <input type="text" onChange={(event) => setUserProfile({...userProfile, gender: event.target.value})} value={userProfile.gender || ''} className="form-control" placeholder="Please insert their gender" aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="input-group mb-3 flex-column">
                            <label for="formFile" className="form-label">Password: </label>
                            <input type="password" onChange={(event) => setUserProfile({...userProfile, password: event.target.value})} value={userProfile.password || ''} className="form-control" placeholder="Please change their password" aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-12 mb-3 d-flex">
                        <button className="btn btn-primary mx-auto" style={{width: "50%"}}>Save your changes</button>
                    </div>

                </div>

            </div>

        
        </>
    )
}