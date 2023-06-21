import React, {useState, useContext, useEffect} from "react";
import {Context} from "../store/appContext"
import { useParams } from "react-router-dom";

export const Profile = () =>{

    const { user_id } = useParams()
    const [profile, setProfile] = useState({})
    const { store , actions} = useContext(Context)

    useEffect(()=>{

        actions.getProfileByUserId(user_id)

    },[])

    return(
        <>
            <h2 className="text-center">Actualiza tu perfil de usuario</h2>
            <div className="container">
                <div className="row">
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Inserte su foto de perfil</label>
                        <input className="form-control" type="file" accept="image/*" id="formFile"
                        onChange={(evt) => {

                            console.log(evt.target.files)

                            setProfile({ ...profile, photo: evt.target.files[0] })
                        }}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <div className="input-group mb-3 flex-column">
                            <label htmlFor="formFile" className="form-label">Name: </label>
                            <input type="text" onChange={(event) => setProfile({...profile, name: event.target.value})} value={profile.name || ''} className="form-control" placeholder={store.userProfile?.name || ''} aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="input-group mb-3 flex-column">
                            <label htmlFor="formFile" className="form-label">Lastname: </label>
                            <input type="text" onChange={(event) => setProfile({...profile, last_name: event.target.value})} value={profile.last_name || ''} className="form-control" placeholder={store.userProfile?.last_name || ''} aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>

                </div>

                {/* <div className="row">
                    <div className="col-6">
                        <div className="input-group mb-3 flex-column">
                            <label htmlFor="formFile" className="form-label">Username: </label>
                            <input type="text" onChange={(event) => setProfile({...profile, username: event.target.value})} value={profile.username || ''} className="form-control" placeholder="Please insert their username" aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="input-group mb-3 flex-column">
                            <label htmlFor="formFile" className="form-label">Email: </label>
                            <input type="email" onChange={(event) => setProfile({...profile, email: event.target.value})} value={profile.email || ''} className="form-control" placeholder="Please insert their email" aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>

                </div> */}

                <div className="row">
                    <div className="col-4">
                        <div className="input-group mb-3 flex-column">
                            <label htmlFor="formFile" className="form-label">Date of Birth: </label>
                            <input type="date" onChange={(event) => setProfile({...profile, date_of_birth: event.target.value})} value={profile.date_of_birth || ''} className="form-control" placeholder={store.userProfile?.date_of_birth || ''} aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-group mb-3 flex-column">
                            <label htmlFor="formFile" className="form-label">Category: </label>
                            <select id="inputState" className="form-select" onChange={(event) => setProfile({...profile, category: event.target.value})} value={ store.userProfile?.category || profile.category || ''} style={{width: "100%"}}>
                                <option>Please select your category</option>
                                <option>primera</option>
                                <option>segunda</option>
                                <option>tercera</option>
                                <option>cuarta</option>
                                <option>quinta</option>
                                <option>sexta</option>
                            </select>
                            {/* <input type="text" onChange={(event) => setProfile({...profile, category: event.target.value})} value={profile.category || ''} className="form-control" placeholder="Please insert their category" aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/> */}
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="input-group mb-3 flex-column">
                            <label htmlFor="formFile" className="form-label">Gender: </label>
                            <select id="gender" className="form-select" onChange={(event) => setProfile({...profile, gender: event.target.value})} value={ store.userProfile?.gender || profile.gender || ''} style={{width: "100%"}}>
                                <option>Please select your gender</option>
                                <option>male</option>
                                <option>female</option>
                                <option>neutral</option>
                            </select>
                            {/* <input type="text" onChange={(event) => setProfile({...profile, gender: event.target.value})} value={profile.gender || ''} className="form-control" placeholder="Please insert their gender" aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/> */}
                        </div>
                    </div>

                </div>

                {/* <div className="row">
                    <div className="col-12">
                        <div className="input-group mb-3 flex-column">
                            <label htmlFor="formFile" className="form-label">Password: </label>
                            <input type="password" onChange={(event) => setProfile({...profile, password: event.target.value})} value={profile.password || ''} className="form-control" placeholder="Please change their password" aria-label="Username" aria-describedby="basic-addon1" style={{width: "100%"}}/>
                        </div>
                    </div>

                </div> */}

                <div className="row">
                    <div className="col-12 mb-3 d-flex">
                        <button className="btn btn-primary mx-auto" onClick={() => actions.createProfile(profile) } style={{width: "50%"}}>Save your changes</button>
                    </div>

                </div>

            </div>

        
        </>
    )
}